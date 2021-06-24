import { Typography, Form, Input, Switch, Button, Layout, Tooltip, Upload } from 'antd';
import Editor from '../lib/antd-tinymce';
import { CloseOutlined, CheckOutlined, ArrowUpOutlined, ArrowDownOutlined, FileImageOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function AddArticle() {
    const [title, setTitle] = useState(''),
        [sum, setSum] = useState(''),
        [body, setBody] = useState(''),
        [hideVote, setHideVote] = useState(false),
        [mockVotes, setMockVotes] = useState(0);

    return <>
        <Typography.Title>Add Articles</Typography.Title>
        <Form
            onFinish={console.log}
            onFinishFailed={console.log}
            name='article'
            initialValues={{ remember: true }}>
            <Form.Item label='Title'
                       name='title'
                       rules={[{required: true, message: 'Imagine an article without a title...'}]}>
                <Input onChange={e => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item label='Description/summary' onChange={e => setSum(e.target.value)} name='sum'
                       rules={[{required: true, message: 'An article without a summary is boring...'}]}
                       extra='A short summary of this article, displayed below the title in the article card'><Input /></Form.Item>

            <Form.Item label='Body' name='body'
                       rules={[{ required: true, message: 'Article without body = no article' }]}>
                <Editor options={{
                    branding: false,
                    skin: 'custom_dark',
                    skin_url: 'https://cryptoalgorithm.github.io/tinyMCE-theme/custom_dark'
                }} onEditorChange={setBody} />
            </Form.Item>

            <Form.Item label='Hide votes' extra='Number of votes will not appear and can only be viewed by admins' name='hideVote'>
                <Switch
                    onChange={setHideVote}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}/>
            </Form.Item>
            <Form.Item label='Upload cover image' name='fileUpload' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Upload.Dragger name='files'>
                    <p className='ant-upload-drag-icon'>
                        <FileImageOutlined />
                    </p>
                    <p className='ant-upload-text'>Click or drag an image to this area to upload</p>
                    <p className='ant-upload-hint'>This image will be displayed in the article card</p>
                </Upload.Dragger>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>Add article</Button>
            </Form.Item>
        </Form>

        <Typography.Title level={4}>Article Card Preview</Typography.Title>
        <Typography.Text>A preview of the article card as it would be displayed</Typography.Text>

        <div style={{border: '1px solid #444', borderRadius: 7, marginTop: '1rem', overflow: 'hidden', maxWidth: 640}}>
            <Layout style={{flexDirection: 'row'}}>
                <Layout style={{flex: 'none', width: 48, alignItems: 'center'}}>
                    <Tooltip title='Upvote'>
                        <Button shape='circle' type='text' icon={<ArrowUpOutlined style={{fontSize: '1.2em'}} />}
                                onClick={() => {
                                    let o = true;
                                    setMockVotes(v => {
                                        if (!o) return v;
                                        o = false;
                                        return ++v;
                                    });
                                }}
                                style={{margin: '6px 6px 0 6px'}} />
                    </Tooltip>
                    <Typography.Text style={{fontWeight: 500, fontSize: '0.875rem', lineHeight: 1.57, textAlign: 'center',
                        color: 'rgba(255, 255, 255, .7)'}}>{hideVote ? 'Vote' : mockVotes}</Typography.Text>
                    <Tooltip title='Downvote' placement='bottom'>
                        <Button shape='circle' type='text'
                                onClick={() => {
                                    let o = true;
                                    setMockVotes(v => {
                                        if (!o) return v;
                                        o = false;
                                        return --v;
                                    });
                                }}
                                icon={<ArrowDownOutlined style={{fontSize: '1.2em'}} />} />
                    </Tooltip>
                    <div style={{flexGrow: 1}} />
                    <Tooltip title='Info'>
                        <Button shape='circle' type='text' style={{marginBottom: 12}}
                                icon={<QuestionCircleOutlined style={{fontSize: '1.5em'}} />} />
                    </Tooltip>
                </Layout>
                <Layout>
                    <Layout style={{padding: '6px 10px 10px'}}>
                        <Typography.Title style={{fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.6, marginBottom: 0}}>
                            {title.trim().length === 0 ? 'Article Title' : title}
                        </Typography.Title>
                        <Typography.Text style={{fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.43, color: 'rgba(255, 255, 255, .7)'}}>
                            {sum.trim().length === 0 ? 'Article Description/summary' : sum}
                        </Typography.Text>
                    </Layout>
                    <div style={{
                        backgroundImage: 'url("https://picsum.photos/seed/873/720/405.webp?s=229")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        aspectRatio: '16/9',
                        width: '100%'
                    }} />
                </Layout>

            </Layout>
        </div>
    </>
}
