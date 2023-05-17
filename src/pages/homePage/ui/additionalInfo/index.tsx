import { MoneyCollectOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { FC } from 'react'

export const AdditionalInfo:FC = () => {

  let bttnStyle = {
    width: '150px',
    border: 'none',
    borderRadius: '18px',
  }

  return (
    <Space 
      direction='horizontal'
      style={{
        width: '100%',
        background: '#e6f4ff',
        padding: '10px',
        borderRadius: '7px',
        border: '1px solid #d0e4f470',
      }}
    >
      <Button 
        icon={<SmileOutlined />}
        style={bttnStyle}
      >
        Friends: 55
      </Button>
      <Button 
        icon={<TeamOutlined />}
        style={bttnStyle}
      >
        Subscribers: 180
      </Button>
      <Button 
        icon={<MoneyCollectOutlined />}
        style={bttnStyle}
      >
        Tokens: 2 000 000 
      </Button>
    </Space>
  )
}
