import { Typography } from 'antd';
import { memo } from 'react';

import { QuestionCircleOutlined } from '@ant-design/icons';

export default memo(function NotFound() {
    return <>
        <QuestionCircleOutlined style={{fontSize: '12em', marginBottom: '1rem', marginRight: 'auto'}} />
        <Typography.Title>Oops, the page you're looking for could not be found</Typography.Title>
        <Typography.Text>Error 404 - Not found</Typography.Text>
    </>
});