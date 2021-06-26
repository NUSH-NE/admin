import { Result, Button } from 'antd';
import { memo } from 'react';

export default memo(function NotFound() {
    return <>
        <Result
            status='404'
            title='Error 404 - Not found'
            subTitle="Oops, the page you're looking for could not be found"
            extra={<Button type='primary' href='/'>Go to home</Button>}
        />
    </>
});