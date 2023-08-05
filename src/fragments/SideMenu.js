import { memo, useState } from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined, SafetyOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
        style={{ width: 256 }}
        selectedKeys={page}
        mode='inline'>
        <SubMenu key='add' icon={<PlusOutlined />} title='Add'>
            <Menu.Item key='addArticle'><Link to={'/addArticle'}>Add Articles</Link></Menu.Item>
        </SubMenu>
        <SubMenu key='man' icon={<UnorderedListOutlined />} title='Manage'>
            <Menu.Item key='articleMgmt'><Link to={'/articleMgmt'}>Article Management</Link></Menu.Item>
            <Menu.Item key='linkMgmt'><Link to={'/linkMgmt'}>Link Management</Link></Menu.Item>
        </SubMenu>
        <SubMenu key='mod' icon={<SafetyOutlined />} title='Moderate'>
            <Menu.Item key='imgMod'><Link to={'/imgMod'}>Image Post Moderation</Link></Menu.Item>
        </SubMenu>
    </Menu>
})