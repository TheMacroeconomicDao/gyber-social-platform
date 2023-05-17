import { MessageOutlined, EllipsisOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import HomeGlobalLayout from "shared/ui/layouts/homeGlobalLayout";
import { Message } from "shared/ui/message";
import styles from './messenger.module.scss'

export default function Messenger() {

    return (
        <HomeGlobalLayout>
            <div 
                className={styles.messengerWrap}
            >
                <div className={styles.messengerHeader}>
                    <Space 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}

                        align='center'
                    >
                        <Input 
                            size="large" 
                            placeholder="large size" 
                            prefix={<SearchOutlined />} 
                            type=''
                            bordered={false}
                        />
                        <Space>
                            <Button 
                                type='text' 
                                icon={<MessageOutlined />} 
                                size={'large'} 
                            />
                            <Button 
                                type='text' 
                                icon={<EllipsisOutlined />} 
                                size={'large'} 
                            />
                        </Space>
                    </Space>
                </div>
                <div className={styles.messengerMessagesWrap}>
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={5}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                    <Message 
                        title={'Название чата'}
                        lastMessage={'Последнее сообщение'}
                        numberOfMessages={2}
                        time={'12:00'}
                    />
                </div>
            </div>
        </HomeGlobalLayout>
    )
}
