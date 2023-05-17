import React, {FC} from 'react'
import { Layout } from 'antd'

export const AuthFooter:FC = () => {
    const { Footer } = Layout;

    return (
        <Footer style={{
            marginTop: 'auto',
            background: '#e6f4ff',
        }}>
            <div>Footer</div>
        </Footer>
    )
}
