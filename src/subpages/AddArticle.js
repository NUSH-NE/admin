import { Typography, Form, Input, Switch, Button, Layout } from 'antd';
import Editor from '../lib/antd-tinymce';
import { CloseOutlined, CheckOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default function AddArticle() {
    return <>
        <Typography.Title>Add Articles</Typography.Title>
        <Form
            name='article'
            initialValues={{ remember: true }}>
            <Form.Item label='Title'><Input /></Form.Item>
            <Form.Item label='Description/summary'
                       extra='A short summary of this article, displayed below the title in the article card'><Input /></Form.Item>
            <Form.Item label='Body'>
                <Editor options={{
                    branding: false,
                    skin: 'custom_dark',
                    skin_url: 'https://cryptoalgorithm.github.io/tinyMCE-theme/custom_dark'
                }} />
            </Form.Item>
            <Form.Item label='Hide votes' extra='Number of votes will not appear and can only be viewed by admins'>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}/>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>Add article</Button>
            </Form.Item>
        </Form>

        <Typography.Title level={4}>Article Card Preview</Typography.Title>
        <Typography.Text>A preview of the article card as it would be displayed</Typography.Text>

        <div style={{background: '#2d2d2d', borderRadius: 7, marginTop: '1rem'}}>
            <Layout style={{flexDirection: 'row', background: 'none'}}>
                <Layout style={{flex: 'none', width: 48, alignItems: 'center', background: 'none'}}>
                    <Button shape='circle' type='text' icon={<ArrowUpOutlined />} style={{margin: '6px 6px 0 6px'}} />
                    <Typography.Text style={{fontWeight: 500, fontSize: '0.875rem',
                        lineHeight: 1.57, textAlign: 'center', color: 'rgba(255, 255, 255, .7)'}}>10</Typography.Text>
                    <Button shape='circle' type='text' icon={<ArrowDownOutlined />} />
                </Layout>
                <Layout style={{padding: '6px 10px 10px', background: 'none'}}>
                    <Typography.Title style={{fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.6, marginBottom: 0}}>Title</Typography.Title>
                    <Typography.Text style={{fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.43, color: 'rgba(255, 255, 255, .7)'}}>
                        Summary
                    </Typography.Text>
                </Layout>

            </Layout>
        </div>
    </>
}
