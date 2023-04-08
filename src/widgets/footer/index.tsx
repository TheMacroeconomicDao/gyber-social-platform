import React, {FC} from 'react'
import { Layout } from 'antd'

export const Footer:FC = () => {
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
