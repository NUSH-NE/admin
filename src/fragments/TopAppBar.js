import { memo } from 'react';
import { PageHeader, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

export default memo(function TopAppBar({page}) {
    return <PageHeader
        onBack={() => window.history.back()}
        title='NE Things Admin'
        subTitle={page}
        extra={[<Button type='primary' icon={<LoginOutlined />}>Login</Button>]}
    />
})