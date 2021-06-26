import { Typography, Collapse, Popover, Button, Layout, Spin, Image, Space, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import '../article.css';

import placeholder from '../assets/placeholder.svg';

import DomPurify from 'dompurify';

import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import ArticleCardPreview from '../fragments/ArticleCardPreview';
import cardPlaceholder from '../assets/cardDefBg.webp';

let db;

DomPurify.addHook('uponSanitizeElement', (node, data) => {
    if (data.tagName === 'iframe') {
        const src = node.getAttribute('src') || '';
        if (!src.startsWith('https://www.youtube.com/embed/')) {
            return node.parentNode.removeChild(node);
        }
    }
});

export default function ArticleMgmt() {
    const [articles, setArticles] = useState([]),
        [loading, setLoading] = useState(true),
        [openDel, setOpenDel] = useState(null);

    useEffect(() => {
        db = firebase.firestore();

        db.collection('articles')
            .onSnapshot(snap => {
                const t = [];
                snap.forEach(doc => t.push({ ...doc.data(), _key: doc.id }));
                setArticles(t);
                setLoading(false);
            });
    }, []);

    return <>
        <Typography.Title>Article Management</Typography.Title>
        {
            loading && <>
                <Spin size='large' tip='Loading articles from database...' />
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
                    articles.map(article =>
                        <Collapse.Panel header={article.title} key={article._key}
                                        extra={<Popover destroyTooltipOnHide visible={openDel === article._key}
                                                        onVisibleChange={v => v ? setOpenDel(article._key) : setOpenDel(null)}
                                                        content={<Layout onClick={e => e.stopPropagation()}>
                                                            <Typography.Text style={{fontWeight: 700, fontSize: '1.2em'}}>
                                                                Confirm Delete
                                                            </Typography.Text>
                                                            <Typography.Text>This action cannot be undone</Typography.Text>
                                                            <Button danger type='primary' onClick={() => {
                                                                db.collection('articles').doc(article._key).delete().then(() =>
                                                                    message.success(`Deleted article '${article.title}'`).then())
                                                                    .catch(e => {
                                                                        console.error(e);
                                                                        message.error("Couldn't delete article. Please try again later")
                                                                            .then();
                                                                });
                                                                setOpenDel(null); // Close popover
                                                            }} style={{marginTop: '.25rem'}}>Delete Permanently</Button>
                                                        </Layout>} trigger='click' onClick={e => {
                                            // Prevent click from propagating to collapse
                                            e.stopPropagation();
                                        }}><Button icon={<DeleteOutlined style={{fontSize: 20}} />} danger size='small' type='text' />
                                        </Popover>}>
                            <Layout>
                                <Typography.Title level={5}>Information for article '{article.title}'</Typography.Title>
                                <Typography.Text>Description: <span style={{fontWeight: 600}}>{article.sum}</span></Typography.Text>
                                <Typography.Text>Votes are&nbsp;
                                    <span style={{fontWeight: 600, color: article.hideVote ? 'red' : 'green'}}>
                                    {article.hideVote ? 'hidden' : 'visible'}
                                </span>
                                </Typography.Text>
                                <Typography.Text>
                                    Time Added: <span style={{fontWeight: 600}}>{new Date(parseInt(article._key.toString())).toString()}</span>
                                </Typography.Text>

                                <Typography.Title level={5}>Cover Image</Typography.Title>
                                <Space style={{marginBottom: '.5rem'}}>
                                    <Image width='auto' height={150} src={article.coverURL ?? ''} style={{width: 'auto', borderRadius: 5}}
                                           fallback={placeholder}
                                    />
                                </Space>

                                <Collapse style={{borderRadius: 6}} destroyInactivePanel>
                                    <Collapse.Panel header='Article Body'>
                                        <div dangerouslySetInnerHTML={{__html: DomPurify.sanitize(article.body, {
                                                ADD_TAGS: ['iframe'], // or ALLOWED_TAGS
                                                ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],//or //or ALLOWED_ATR
                                            })}} className='artCont'
                                             style={{padding: '1rem', borderRadius: 5, border: '1px solid #444'}} />
                                        <Typography.Text type='secondary' italic={1} style={{marginTop: '.1rem'}}>
                                            This is a preview - There might be subtle differences when viewed on the website
                                        </Typography.Text>
                                    </Collapse.Panel>
                                    <Collapse.Panel header='Card Preview'>
                                        <ArticleCardPreview setVote={() => {}} vote={0} style={{margin: 'auto'}} hideVote={article.hideVote}
                                                            imgURL={article.coverURL ?? cardPlaceholder} title={article.title} sum={article.sum}
                                        />
                                    </Collapse.Panel>
                                </Collapse>
                            </Layout>
                        </Collapse.Panel>
                    )
                }
            </Collapse>
        }
    </>
}