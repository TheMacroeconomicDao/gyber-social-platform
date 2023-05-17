import { FC } from 'react'
import { Avatar, Col, Row, Space, Typography } from 'antd'
import styles from './headerComponent.module.scss'
import { UserOutlined } from '@ant-design/icons'

export const HeaderComponent:FC = () => {
  const {Title, Text} = Typography

  return (
    <div className={styles.headerComponentWrap}>
      <Avatar 
        size={120}
        style={{
          // background: '#fff',
          border: '1px solid #d0e4f470',
        }}
        icon={<UserOutlined />}
      />

      <div className={styles.userInfo}>
        <Title level={4}>
          Name Name🔥
        </Title>

        <Text 
          color='#747070e0'
          style={{
            fontWeight: 400,
          }}
        >
          My cat got drunk on whiskey again🤦🤦🤦
        </Text>
      </div>
    </div>  
  )
}
