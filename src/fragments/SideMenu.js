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
            <Menu.Item key='2'>Option 2</Menu.Item>
            <Menu.Item key='3'>Option 3</Menu.Item>
            <Menu.Item key='4'>Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key='man' icon={<UnorderedListOutlined />} title='Manage'>
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
            <SubMenu key='sub3' title='Submenu'>
                <Menu.Item key='7'>Option 7</Menu.Item>
                <Menu.Item key='8'>Option 8</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu key='mod' icon={<SafetyOutlined />} title='Moderate'>
            <Menu.Item key='9'>Option 9</Menu.Item>
            <Menu.Item key='10'>Option 10</Menu.Item>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
    </Menu>
})