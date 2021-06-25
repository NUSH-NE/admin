import { memo, useState } from 'react';
import { PageHeader, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SignIn from './SignIn';

export default memo(function TopAppBar({page}) {
    const [loginOpen, setLoginOpen] = useState(false);

    return <>
            <PageHeader
            onBack={() => window.history.back()}
            title='NE Things Admin'
            subTitle={page}
            extra={[<Button type='primary' icon={<UserOutlined />} onClick={() => setLoginOpen(true)} key='login'>Account</Button>]}
        />
        <SignIn visible={loginOpen} setVisible={setLoginOpen} />
    </>
})