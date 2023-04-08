'use client'
import React, { FC } from 'react'
import { Col, Layout, Row, Input, Avatar, Popover, Divider, Button, Space } from 'antd';
import { HeaderMenu } from 'shared/ui/menu/headerMenu';
import { RollbackOutlined, SettingOutlined } from '@ant-design/icons';

export const HeaderHome:FC = () => {
    const { Header } = Layout;
    const { Search } = Input;

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
            >
                Exit
            </Button>

        </Space>
        // <Row
        //     justify={'center'}
        // >
        //     <Col>
        //     </Col>
        //     <Col>
        //     <Button 
        //         icon={<RollbackOutlined />}
        //         block
        //     >
        //         Exit
        //     </Button>
        //     </Col>
        // </Row>
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
                        <Avatar/>
                    </Popover>
                </Col>
            </Row>
        </Header>
    )
}