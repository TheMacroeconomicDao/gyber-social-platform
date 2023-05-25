import { DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Space } from 'antd'

export const LangButton = () => {

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
    ]

    return (
        <Dropdown 
            menu={{ items }}
        >
            <a style={{
                color: '#fff',
            }} 
            onClick={(e) => e.preventDefault()}>
            <Space>
                EN
                <DownOutlined />
            </Space>
            </a>
        </Dropdown>
    )
}
