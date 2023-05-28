import React, {FC} from 'react'
import { Layout } from 'antd'

export const LFooter:FC = () => {
    const { Footer } = Layout;

    return (
        <footer>
            Footer
        </footer>

        // <Footer style={{
        //     marginTop: 'auto',
        // }}>
        //     <div>Footer</div>
        // </Footer>
    )
}
