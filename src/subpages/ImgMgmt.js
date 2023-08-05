import { Typography, Collapse, Popover, Button, Layout, Spin, Image, Space, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import placeholder from '../assets/placeholder.svg';

import DomPurify from 'dompurify';

import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import cardPlaceholder from '../assets/cardDefBg.webp';

let storage;

DomPurify.addHook('uponSanitizeElement', (node, data) => {
    if (data.tagName === 'iframe') {
        const src = node.getAttribute('src') || '';
        if (!src.startsWith('https://www.youtube.com/embed/')) {
            return node.parentNode.removeChild(node);
        }
    }
});

export default function ImgMgmt() {
    const [imagePosts, setImagePosts] = useState([]),
        [loading, setLoading] = useState(true),
        [openDel, setOpenDel] = useState(null);

    useEffect(() => {
        storage = firebase.storage();
        storage.ref('userPostImages').listAll().then(async (res) => {
            const t = []
            for (const itemRef of res.items) {
                t.push({"URL": await itemRef.getDownloadURL(), ...await itemRef.getMetadata()})
            }
            console.log(t)
            setImagePosts(t);
            setLoading(false);
        });
    }, []) ;

    return <>
        <Typography.Title>Image Post Moderation</Typography.Title>
        {
            loading && <>
                <Spin size='large' tip='Loading imagePosts from database...' />
            </>
        }
        {
            (imagePosts.length === 0 && !loading) && <Typography.Text >
                No Photos to moderate. Yay! :D
            </Typography.Text>
        }
        {
            (imagePosts.length !== 0 && !loading) && <Collapse defaultActiveKey={['1']} style={{borderRadius: 7}} destroyInactivePanel>
                {
                    imagePosts.map(imagePost =>
                        <Collapse.Panel header={imagePost.customMetadata.title} key={imagePost.name}
                                        extra={<Popover destroyTooltipOnHide visible={openDel === imagePost.name}
                                                        onVisibleChange={v => v ? setOpenDel(imagePost.name) : setOpenDel(null)}
                                                        content={<Layout onClick={e => e.stopPropagation()}>
                                                            <Typography.Text style={{fontWeight: 700, fontSize: '1.2em'}}>
                                                                Confirm Delete
                                                            </Typography.Text>
                                                            <Typography.Text>This action cannot be undone</Typography.Text>
                                                            <Button danger type='primary' onClick={() => {
                                                                storage.ref('userPostImages/'+imagePost.name).delete().then(() => {
                                                                    message.success(`Deleted imagePost '${imagePost.customMetadata.title}'`).then();
                                                                    setOpenDel(null);
                                                                }).catch(e => {
                                                                    console.error(e);
                                                                    message.error("Couldn't delete imagePost. Please try again later")
                                                                        .then();
                                                                })
                                                            }} style={{marginTop: '.25rem'}}>Delete Permanently</Button>
                                                        </Layout>} trigger='click' onClick={e => {
                                            e.stopPropagation();
                                        }}><Button icon={<DeleteOutlined style={{fontSize: 20}} />} danger size='small' type='text' />
                                        </Popover>}>
                            <Layout>
                                <Typography.Title level={5}>Information for imagePost '{imagePost.customMetadata.title}'</Typography.Title>
                                <Typography.Text>Description: <span style={{fontWeight: 600}}>{imagePost.customMetadata.caption}</span></Typography.Text>
                                <Typography.Text>
                                    Time Added: <span style={{fontWeight: 600}}>{imagePost.timeCreated}</span>
                                </Typography.Text>
                                <Typography.Title level={5}>Cover Image</Typography.Title>
                                <Space style={{marginBottom: '.5rem'}}>
                                    <Image width='auto' height={150} src={imagePost.URL ?? ''} style={{width: 'auto', borderRadius: 5}}
                                           fallback={placeholder}
                                    />
                                </Space>
                            </Layout>
                        </Collapse.Panel>
                    )
                }
            </Collapse>
        }
    </>
}