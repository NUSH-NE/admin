import { memo, useState } from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined, SafetyOutlined, PlusOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menuKeys = ['add', 'man', 'mod'];

const menuMap = {
    add: ['addArticle'],
    man: ['articleMgmt', 'linkMgmt'],
    mod: ['imgMod'],
}

export default memo(function SideMenu({page}) {
    const [openKeys, setOpenKeys] = useState((() => {
        for (let key in menuMap) if (menuMap[key].includes(page)) return [key];
        return [];
    })());

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (menuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return <Menu
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        onClick={e => document.location = '/' + e.key}
        style={{ width: 256 }}
        selectedKeys={page}
        mode='inline'>
        <SubMenu key='add' icon={<PlusOutlined />} title='Add'>
            <Menu.Item key='addArticle'>Add Articles</Menu.Item>
        </SubMenu>
        <SubMenu key='man' icon={<UnorderedListOutlined />} title='Manage'>
            <Menu.Item key='articleMgmt'>Article Management</Menu.Item>
            <Menu.Item key='linkMgmt'>Link Management</Menu.Item>
        </SubMenu>
        <SubMenu key='mod' icon={<SafetyOutlined />} title='Moderate'>
            <Menu.Item key='imgMod'>Image Post Moderation</Menu.Item>
        </SubMenu>
    </Menu>
})