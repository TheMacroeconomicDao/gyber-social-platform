import { UserOutlined, TeamOutlined, FileOutlined, CaretRightOutlined, CaretLeftFilled } from "@ant-design/icons";
import { Layout, theme, MenuProps, Menu, Row, Col, Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { Logo } from "shared/ui/logo";
import { HeaderHome } from "widgets/headers/headerHome";

export default function HomeGlobalLayout({children}) {
    const { Content, Footer, Sider } = Layout;
    const router = useRouter()

    const onClick: MenuProps['onClick'] = (e) => {
        router.push(e.keyPath[0])
    }

    const [collapsed, setCollapsed] = useState(false);
    
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    type MenuItem = Required<MenuProps>['items'][number];
  
    function getItem(
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[],
    ): MenuItem {
      return {
        key,
        icon,
        children,
        label,
      } as MenuItem;
    }
  
    const items: MenuItem[] = [
        getItem('Friends', 'friends', <UserOutlined/>),
        getItem('Messenger', 'messenger', <UserOutlined/>),
        getItem('Team', 'sub2', <TeamOutlined />, [
            getItem('Team 1', '6'), getItem('Team 2', '8')
        ]),
        getItem('Files', '9', <FileOutlined />),
    ];

    return (
        <Layout style={{ minHeight: '100vh', margin: 0 }}>
            <Sider 
                collapsible 
                collapsed={collapsed} 
                trigger={null}
                onCollapse={(value) => setCollapsed(value)}
                style = {{
                    background: '#e6f4ff',
                }}
            >
                <div style={{
                    margin: 12,
                }}>
                    <Logo 
                        width={40}
                        height={40}
                        background={'#13c2c2'}
                        logoColour={'#e6f4ff'}
                        textColor={'#000000'}
                        hidenText={collapsed}
                    />
                </div>
                <Menu 
                // theme="dark" 
                    style={{
                        background: '#e6f4ff',
                        borderTop: '1px solid rgba(5, 5, 5, 0.06)',
                    }}
                    defaultSelectedKeys={['1']} 
                    mode="inline" 
                    items={items} 
                    onClick={onClick}
                />
                <Row 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '2%',
                        left: collapsed ? '25%' : '40%',
                        zIndex: 1,
                    }}
                >
                    <Col>
                        <Button 
                            type="primary" 
                            shape="circle" 
                            icon={collapsed ? <CaretRightOutlined /> : <CaretLeftFilled />} 
                            size='large' 
                            style={{
                                background: '#bae0ff'
                            }}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    </Col>
                </Row>
            </Sider>
            <Layout>
                <HeaderHome/>
                <Content style={{ margin: '15px 15px' }}>

                {children}

                </Content>
                <Footer 
                    style={{ textAlign: 'center' }}
                >
                    Cyber-social platform of "Gyber" experiment
                </Footer>
            </Layout>
        </Layout>
    )
}
