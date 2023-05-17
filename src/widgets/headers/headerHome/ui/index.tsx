'use client'
import React, { FC } from 'react'
import { Col, Layout, Row, Input, Avatar, Popover, Divider, Button, Space } from 'antd';
import { HeaderMenu } from 'shared/ui/menu/headerMenu';
import { RollbackOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export const HeaderHome:FC = () => {
    const { Header } = Layout;
    const { Search } = Input;
    const router = useRouter()

    const onSearch = (value: any) => {
        console.log(value);
    }
    
    const content = (
        <Space 
            direction="vertical" 
            style={{ width: '100%' }}
        >
            <Button 
                icon={<SettingOutlined />}
                block
                type='text'
                style={{
                    background: '#bae0ff',
                }}
            >
                My page
            </Button>

            <Button 
                icon={<SettingOutlined />}
                block
                type='text'
                style={{
                    background: '#bae0ff',
                }}
            >
                Settings
            </Button>

            <Button 
                icon={<RollbackOutlined color='#bae0ff'/>}
                block
                style={{
                  border: '2px solid #bae0ff',
                  color: '#bae0ff'
                }}
                onClick={() => router.push('/')}
            >
                Exit
            </Button>
        </Space>
    );

    return (
        <Header style={{
            background: '#e6f4ff',
            borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
        }}>
            <Row 
                gutter={4}
                align={'middle'}
                justify={'space-between'}
            >
                <Col
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Col
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Search 
                            placeholder="Search" 
                            onSearch={onSearch} 
                            style={{ width: 200 }} 
                        />
                    </Col>
                    <Col>
                        <HeaderMenu/>
                    </Col>
                </Col>
                
                <Col>
                    <Popover 
                        content={content} 
                        title="Name Name"
                        trigger="click"
                        placement="bottomRight"
                    >
                        <Avatar icon={<UserOutlined />}/>
                    </Popover>
                </Col>
            </Row>
        </Header>
    )
}