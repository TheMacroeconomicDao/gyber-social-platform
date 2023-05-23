import React, {FC} from 'react'
import { Layout } from 'antd'

export const AuthFooter:FC = () => {
    const { Footer } = Layout;

    return (
        <Footer style={{
            marginTop: 'auto',
        }}>
            <div>Footer</div>
        </Footer>
    )
}
