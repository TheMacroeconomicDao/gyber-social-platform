'use client'
import React, { FC } from 'react'
import { Col, Layout, Row } from 'antd';
import { Logo } from 'shared/ui/logo';
import { HeaderMenu } from 'shared/ui/menu/headerMenu';

export const Header:FC = () => {
    const { Header } = Layout;
    
    return (
        <Header style={{
            background: '#e6f4ff',
        }}>
            <Row 
                gutter={4}
                align={'middle'}
                justify={'center'}
            >
                <Col style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Logo
                        width={50}
                        height={50}
                        background={'#13c2c2'}
                        logoColour={'#ffffff'}
                    />
                </Col>
                <Col>
                    <HeaderMenu/>
                </Col>
            </Row>
        </Header>
    )
}
