import { Menu} from 'antd';

function Home() {
    const menuItems = [
        {
            key: 'center',
            label:(
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item
                </a>
              ),
        },
        {
            key: 'settings',
            label: '个人设置',
        },
        {
            key: 'logout',
            label: '退出登录',
        },
    ];
    return ( <Menu items={menuItems} /> );
}

export default Home;