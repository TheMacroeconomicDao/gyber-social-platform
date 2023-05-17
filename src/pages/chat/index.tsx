'use client'

import { AppstoreOutlined, AudioOutlined, CalendarOutlined, ClearOutlined, DeleteOutlined, FileOutlined, LinkOutlined, MailOutlined, MoreOutlined, PaperClipOutlined, PhoneOutlined, SearchOutlined, SendOutlined, SettingOutlined, SmileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Input, Menu, MenuProps, Popover, Row, Space, Typography } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { ChangeEventHandler, FC, useState } from "react";
import HomeGlobalLayout from "shared/ui/layouts/homeGlobalLayout";
import emoji from './lib/emoji'
import styles from "./chat.module.scss"

type MessageProps = {
  position: 'left' | 'right'
}

export const Message:FC<MessageProps> = ({position}) => {
  return (
    <div 
      className={styles.messageContainer}
      style={position === 'left' 
              ? {justifyContent: 'flex-start'}
              : {justifyContent: 'flex-end'} 
            }
    >
      <div className={styles.messageWrap}>
        <div className={styles.text}>
          Hello!
        </div>
        <div className={styles.time}>
          12:00
        </div>
      </div>
    </div>
  )
}


export default function Chat() {
  const [toggle, setToggel] = useState<boolean>(false)
  const [symbol, setSymbol] = useState<any>()

  const { Search } = Input
  const { Text } = Typography
  
  // const onChange = (value) => {
  //   setSymbol(value)
  // }

  const onSearch = (value: string) => {
    setSymbol(value)
  }

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
    getItem('User profile', '1', <UserOutlined />),
    getItem('Clear history', '2', <ClearOutlined />),
    getItem('Delete chat', '3', <DeleteOutlined style={{color: 'tomato'}}/>),
  ];

  const content = (
    <Menu
      style={{ 
        width: 150,
        border: 'none', 
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      items={items}
    />
  );

  function createEmojiArray() {
    let emoji2:any = [];
  
    for (let i = 0; i < emoji.length; i++) {
      let items = emoji[i].items;
      let items2: any = [];
  
      for (let j = 0; j < items.length; j += 9) {
        items2.push(items.slice(j, j + 9));
      }
  
      emoji2.push({
        title: emoji[i].title,
        items: items2
      });
    }
  
    return emoji2;
  }

  let emoji2 = createEmojiArray();

  const contentEmoji = (
    <div style={{
      maxWidth: 300,
      maxHeight: 200,
      overflow: 'auto',
    }}>
      {
        emoji2.map((el, idx) => (
          <Row 
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Col>
              {el.title}
            </Col>
            <Col>
              <Row>
                {
                  el.items.map((emoji, idx) => (
                    <Col key={idx}>
                        {
                          emoji.map((el) => (
                            <div 
                              key={el}
                              className={styles.emoji}
                              // @ts-ignore
                              onClick={(e) => console.log(e.target.innerText)}
                            >
                              {el}
                            </div>          
                          ))
                        }  
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        ))
      }
    </div>
  )  

  return (
    <HomeGlobalLayout>
        <div className={styles.chatWrap}>
          <div className={styles.chatHeader}>
            <Space 
              size={'large'}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Space
                className={styles.userName} 
                direction='vertical'
                onClick={() => console.log('User info')}
                size={1}
              >
                <Text>
                  User Name
                </Text>
                <Text color="#00000073">
                  12:00
                </Text>
              </Space>

              <Space 
                size={1}
              >
                <Button type="text" icon={ <SearchOutlined style={{fontSize: 15}}/> }/>
                <Button type="text" icon={ <PhoneOutlined style={{fontSize: 15}}/> }/>
                <Popover 
                  content={content}  
                  trigger="click"
                >
                  <Button type="text" icon={ <MoreOutlined style={{fontSize: 15}}/> }/>
                </Popover>
              </Space>
            </Space>
          </div>
          <div className={styles.chatBodyWrap}>
            <div className={styles.chatBody}>
              <Message position={'left'}/>
              <Message position={'right'}/>
            </div>
          </div>
          <div className={styles.chatFooter}>
              <Search
                onSearch={onSearch}
                addonBefore={
                  <Button 
                    type='text' 
                    icon={<PaperClipOutlined />} 
                    size={'small'} 
                  />
                }
                placeholder="..."
                enterButton={
                  toggle  
                    ? <Button 
                        type='text' 
                        icon={<SendOutlined />} 
                        size={'small'} 
                        onClick={() => console.log()}
                        onDoubleClick={() => setToggel(!toggle)}
                      />
                    : <Button 
                        type='text' 
                        icon={<AudioOutlined />} 
                        size={'small'} 
                        onClick={() => console.log()}
                        onDoubleClick={() => setToggel(!toggle)}
                      />
                }
                size="large"
                suffix={
                  <Popover 
                    style={{
                      width: '50px'
                    }}
                    content={contentEmoji}  
                    trigger="click"
                  >
                    <Button 
                      type='text' 
                      icon={<SmileOutlined />} 
                      size={'small'} 
                    />
                  </Popover>
                }
              />
          </div>
        </div>
    </HomeGlobalLayout>
  )
}
