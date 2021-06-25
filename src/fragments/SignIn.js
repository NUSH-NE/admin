import { Button, Modal, Typography, Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import {useEffect, useState} from 'react';

import firebase from "firebase/app";

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    callbacks: {
        signInSuccess: () => false, // Do not redirect
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        'microsoft.com',
    ],
};

export default function SignIn({visible, setVisible}) {
    const [usrInfo, setUsrInfo] = useState({}),
    isLoggedIn = Boolean(usrInfo);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => setUsrInfo(!!user ? {name: user.displayName, uid: user.uid, email: user.email} : null))
    }, []);

    return <Modal title='Account'
           footer={[<Button onClick={() => setVisible(false)} key='close'>Close</Button>]}
           visible={visible}
           onOk={() => setVisible(false)}
           onCancel={() => setVisible(false)}>
        {
            isLoggedIn && <Layout>
                <Typography.Title level={4}>User Info</Typography.Title>
                <Typography.Text>Display Name: {usrInfo.name}</Typography.Text>
                <Typography.Text>Email: {usrInfo.email}</Typography.Text>
                <Typography.Text>UID:<Typography.Text code>{usrInfo.uid}</Typography.Text></Typography.Text>
                <Typography.Text type='secondary' style={{marginTop: '.25rem'}}>This info is private and only visible to you</Typography.Text>

                <Button style={{marginTop: '.5rem'}} icon={<LogoutOutlined />} danger onClick={() => firebase.auth().signOut()}>Sign out</Button>
            </Layout>
        }
        {!isLoggedIn && <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />}
    </Modal>
}