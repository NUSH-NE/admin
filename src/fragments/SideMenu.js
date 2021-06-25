import { memo } from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined, SafetyOutlined, PlusOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default memo(function SideMenu({page}) {
    return <Menu
        theme='dark'
        onClick={e => document.location = '/' + e.key}
        style={{ width: 256 }}
        defaultOpenKeys={['add']}
        selectedKeys={page}
        mode='inline'>
        <SubMenu key='add' icon={<PlusOutlined />} title='Add'>
            <Menu.Item key='addArticle'>Add Articles</Menu.Item>
        </SubMenu>
        <SubMenu key='man' icon={<UnorderedListOutlined />} title='Manage'>
            <Menu.Item key='linkMgmt'>Link Management</Menu.Item>
        </SubMenu>
        <SubMenu key='mod' icon={<SafetyOutlined />} title='Moderate'>
            <Menu.Item key='linkMgmt'>Image Post Moderation</Menu.Item>
        </SubMenu>
    </Menu>
})