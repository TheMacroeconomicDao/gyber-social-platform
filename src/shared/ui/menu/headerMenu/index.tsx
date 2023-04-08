import { FC, useState } from 'react'
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export const HeaderMenu:FC = () => {
    const [current, setCurrent] = useState('mail');

    const items: MenuProps['items'] = [
        {
          label: 'Navigation One',
          key: 'mail',
          icon: <MailOutlined />,
        },
        {
          label: 'Navigation Two',
          key: 'app',
          icon: <AppstoreOutlined />,
        },
        {
          label: 'Navigation Three',
          key: 'SubMenu',
          icon: <SettingOutlined />,
          children: [
            {
              type: 'group',
              label: 'Item 1',
              children: [
                {
                  label: 'Option 1',
                  key: 'setting:1',
                },
                {
                  label: 'Option 2',
                  key: 'setting:2',
                },
              ],
            },
          ],
        },
    ];

    const onClick: MenuProps['onClick'] = (e) => {
      setCurrent(e.key);
    };

    return (
        <Menu 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={items} 
            style={{
              background: '#e6f4ff',
            }}
        />
    )
}
