import { Typography, Form, Input, Switch, Button, Upload, Popconfirm, message } from 'antd';
import Editor from '../lib/antd-tinymce';
import { CloseOutlined,
    CheckOutlined,
    FileImageOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import {compress, decompress} from 'lz-string';
import ArticleCardPreview from '../fragments/ArticleCardPreview';

import cardPlaceholder from '../assets/cardDefBg.webp';

let db, storageRef;

export default function AddArticle() {
    const [form] = Form.useForm();

    const [title, setTitle] = useState(''),
        [sum, setSum] = useState(''),
        [hideVote, setHideVote] = useState(false),
        [mockVotes, setMockVotes] = useState(0),
        [user, setUser] = useState({}),
        [coverURL, setCoverURL] = useState(null),
        [uploading, setUploading] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
        db = firebase.firestore();
        storageRef = firebase.storage().ref();
    }, []);

    const uploadImg = async opt => {
        const { onSuccess, onError, file, onProgress } = opt;
        const task = storageRef.child('articleAttachments/' + uuidv4() + '-' + file.name).put(file);

        task.on('state_changed', (snapshot) =>
            {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress({ percent: progress });
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                // Handle unsuccessful uploads
                onError('Upload failed: ' + error.message);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setCoverURL(downloadURL);
                    onSuccess({
                        downloadURL,
                        ref: task.snapshot.ref
                    });
                });
            }
        );
    }

    const verifyUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
        if (!isJpgOrPng) message.error('Unsupported file format').then();
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) message.error('Image must smaller than 5MB').then();
        return (isJpgOrPng && isLt2M) ? true : Upload.LIST_IGNORE;
    }

    const previewImg = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(`<head><title>NE Admin - Preview of ${file.name}</title></head><body style="margin:0;min-height:100vh;
        background-image:url('${src}');background-size:contain;background-position:center;background-repeat:no-repeat;background-color:#000">
        </body>`);
    };

    return <>
        <Typography.Title>Add Articles</Typography.Title>
        <Form
            form={form}
            onFinish={v => {
                setUploading(true);
                console.log(v)
                db.collection('articles').doc((+new Date()).toString()).set({
                    title: v.title, sum: v.sum, body: v.body, hideVote: !!v.hideVote, coverURL: v.fileUpload.file.response.downloadURL,
                    uid: user.uid,
                }).then(() => {
                    v.fileUpload.file.response.ref.updateMetadata({
                        customMetadata: {
                            'permanent': 'yes',
                        }
                    }).then(() => {
                        // metadata.contentType should be null
                        setUploading(false);
                        form.resetFields();
                        message.success('Added article').then();
                    }).catch(e => {
                        // Uh-oh, an error occurred!
                        setUploading(false);
                        form.resetFields();
                        message.warn('Added article but failed to modify file metadata');
                    });
                }).catch(e => {
                    setUploading(false);
                    message.error('We ran into an error adding this article. Please try again later').then();
                    console.error(e);
                });
            }}
            onValuesChange={(c, v) => localStorage.tempArticle = compress(JSON.stringify(v))}
            initialValues={localStorage.tempArticle ? JSON.parse(decompress(localStorage.tempArticle)) : {}}
            name='article'>
            <Form.Item label='Title'
                       name='title'
                       rules={[{required: true, message: 'Imagine an article without a title...'}]}>
                <Input onChange={e => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item label='Description/summary' onChange={e => setSum(e.target.value)} name='sum'
                       rules={[{required: true, message: 'An article without a summary is boring...'}]}
                       extra='A short summary of this article, displayed below the title in the article card'><Input /></Form.Item>

            <Form.Item label='Body' name='body' extra='Drag the lower right corner of editor to resize'
                       rules={[{ required: true, message: 'Article without body = no article' }]}>
                <Editor options={{
                    branding: false,
                    skin: 'custom_dark',
                    skin_url: 'https://cryptoalgorithm.github.io/tinyMCE-theme/custom_dark'
                }} />
            </Form.Item>

            <Form.Item label='Hide votes' extra='Number of votes will not appear and can only be viewed by admins' name='hideVote'>
                <Switch
                    checked={hideVote}
                    onChange={setHideVote}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}/>
            </Form.Item>
            <Form.Item label='Upload cover image' name='fileUpload'
                       extra='Recommended dimensions: at least 600px wide, 16:9 aspect ratio, smaller than 10MB'
                       rules={[{ required: true, message: 'Please input your username!' }]}>
                <Upload.Dragger name='files' customRequest={uploadImg} maxCount={1} listType='picture-card' onPreview={previewImg}
                                beforeUpload={verifyUpload} onRemove={d => d.response.ref.delete().then(() => {
                    message.success('Deleted file ' + d.name).then();
                    setCoverURL(null);
                }).catch(e => {
                    console.error(e);
                    message.error('Failed to delete file ' + d.name).then();
                })}>
                    <p className='ant-upload-drag-icon'>
                        <FileImageOutlined />
                    </p>
                    <p className='ant-upload-text'>Click or drag an image to this area to upload</p>
                    <p className='ant-upload-hint'>This image will be displayed in the article card</p>
                </Upload.Dragger>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' loading={uploading}>Add article</Button>
                <Popconfirm
                    icon={<DeleteOutlined style={{color: 'red'}} />}
                    title='Clear form? Removes all entered data and cannot be undone'
                    onConfirm={() => form.resetFields()}
                    okButtonProps={{danger: true}}
                    okText='Clear'
                    cancelText='Cancel'>
                    <Button danger htmlType='button' style={{marginLeft: '.5rem'}}>Clear form</Button>
                </Popconfirm>
            </Form.Item>
        </Form>

        <Typography.Title level={4}>Article Card Preview</Typography.Title>
        <Typography.Text>A preview of the article card as it would be displayed</Typography.Text>

        <ArticleCardPreview setVote={setMockVotes} vote={mockVotes} imgURL={coverURL ?? cardPlaceholder}
                            style={{marginTop: '1rem'}} {...{sum, title, hideVote}} />
    </>
}
