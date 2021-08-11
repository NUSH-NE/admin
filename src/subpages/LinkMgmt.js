import { Typography, Collapse, Form, Button, Layout, Spin, Input } from 'antd';

import DomPurify from 'dompurify';

import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

let db;

DomPurify.addHook('uponSanitizeElement', (node, data) => {
    if (data.tagName === 'iframe') {
        const src = node.getAttribute('src') || '';
        if (!src.startsWith('https://www.youtube.com/embed/')) {
            return node.parentNode.removeChild(node);
        }
    }
});

export default function LinkMgmt() {
    const [articles, setArticles] = useState({}),
        [loading, setLoading] = useState(true),
        [openDel, setOpenDel] = useState(null);

    useEffect(() => {
        db = firebase.firestore();

        db.collection('configurableElements')
            .doc('links')
            .onSnapshot(snap => {
                setArticles(snap.data());
                // const t = [];
                // snap.forEach(doc => t.push({ ...doc.data(), _key: doc.id }));
                // setArticles(t);
                setLoading(false);
            });
    }, []);

    return <>
        <Typography.Title>Link Management</Typography.Title>
        {
            loading && <>
                <Spin size='large' tip='Loading links from database...' />
            </>
        }
        {
            (articles.length === 0 && !loading) && <Typography.Text >
                No Articles. Go to "Add Articles" to add the first article!
            </Typography.Text>
        }
        {
            (articles.length !== 0 && !loading) && <Collapse defaultActiveKey={['1']} style={{borderRadius: 7}} destroyInactivePanel>
                {
                    Object.keys(articles).map(name =>
                        <Collapse.Panel header={name} key={name}>
                            <Layout>
                                <Typography.Title level={5}>Link Title: {name}</Typography.Title>
                                <Typography.Text> Link: <a href={'//'+articles[name]}>{articles[name]}</a></Typography.Text>

                            </Layout>
                        </Collapse.Panel>
                    )
                }
                <Collapse.Panel header='Add another link' style={{backgroundColor: '#177ddc'}}>
                    <Form onFinish={v => db.collection('configurableElements').doc('links').set({
                        [v.title]: v.link
                    }, {merge: true})}>
                        <Form.Item label='Title'
                                   name='title'
                                   rules={[{required: true, message: ''}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='Link'
                                   name='link'
                                   rules={[{required: true, message: ''}]}>
                            <Input/>
                        </Form.Item>
                        <Button type='primary' htmlType='submit'>Add article</Button>
                    </Form>
                </Collapse.Panel>
            </Collapse>
        }
    </>
}
