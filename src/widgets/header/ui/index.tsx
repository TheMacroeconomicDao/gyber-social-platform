'use client'
import React, { FC } from 'react'
import { Button, Col, Layout, Row } from 'antd';
import { Logo } from 'shared/ui/logo';

export const Header:FC = () => {
    const { Header } = Layout;
    
    return (
        <Header>
            <Row>
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            RU
                        </Col>
                        <Col>
                            <Button>
                                Регистрация
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}
