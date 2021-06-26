import { memo } from 'react';
import { Typography, Button, Layout, Tooltip } from 'antd';
import { ArrowUpOutlined,
    ArrowDownOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';

export default memo(function ArticleCardPreview({setVote, vote, imgURL, sum, title, hideVote, style}) {
    return <div style={{border: '1px solid #444', borderRadius: 7, overflow: 'hidden', maxWidth: 640, ...style}}>
        <Layout style={{flexDirection: 'row'}}>
            <Layout style={{flex: 'none', width: 48, alignItems: 'center'}}>
                <Tooltip title='Upvote'>
                    <Button shape='circle' type='text' icon={<ArrowUpOutlined style={{fontSize: '1.2em'}} />}
                            onClick={() => {
                                let o = true;
                                setVote(v => {
                                    if (!o) return v;
                                    o = false;
                                    return ++v;
                                });
                            }}
                            style={{margin: '6px 6px 0 6px'}} />
                </Tooltip>
                <Typography.Text style={{fontWeight: 500, fontSize: '0.875rem', lineHeight: 1.57, textAlign: 'center',
                    color: 'rgba(255, 255, 255, .7)'}}>{hideVote ? 'Vote' : vote}</Typography.Text>
                <Tooltip title='Downvote' placement='bottom'>
                    <Button shape='circle' type='text'
                            onClick={() => {
                                let o = true;
                                setVote(v => {
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
                    backgroundImage: `url("${imgURL}")`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    aspectRatio: '16/9',
                    width: '100%'
                }} />
            </Layout>
        </Layout>
    </div>
})