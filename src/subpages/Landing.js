import { Typography } from 'antd';
import { memo } from 'react';

import { HomeOutlined, MenuOutlined } from '@ant-design/icons';

export default memo(function Landing() {
    return <>
        <HomeOutlined style={{fontSize: '12em', marginBottom: '1rem', marginRight: 'auto'}} />
        <Typography.Title>Hi there!</Typography.Title>
        <Typography.Text>Click on one of the items in the menu <MenuOutlined /> to get started!</Typography.Text>
    </>
});