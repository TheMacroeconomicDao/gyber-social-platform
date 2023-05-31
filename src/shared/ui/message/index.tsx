import { DeleteOutlined, EllipsisOutlined, PushpinOutlined, SmileOutlined, SoundOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Col, Avatar, Space, Badge, Button, Popover } from 'antd'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import styles from './message.module.scss'

interface MessageProps {
    title: string,
    lastMessage?: string,
    isRead?: boolean,
    numberOfMessages?: number,
    time?: string, 
}
export const Message:FC<MessageProps> = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const router = useRouter()

    const {
        title, 
        lastMessage, 
        numberOfMessages,
        time
    } = props

    const content = (
        <Space 
            direction='vertical'
            align='start'
        >
            <Button 
                type='text'
                // @ts-ignore
                icon={<DeleteOutlined/>}
                style={{
                    width: '100%'
                }}
            >
                Delete
            </Button>
            <Button 
                type='text'
                // @ts-ignore
                icon={<SoundOutlined />}
                style={{
                    width: '100%'
                }}
            >
                Disable notifications
            </Button>
            <Button 
                type='text'
                // @ts-ignore
                icon={<PushpinOutlined />}
                style={{
                    width: '100%'
                }}
            >
                Pin
            </Button>
        </Space>
    );

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <Row 
            className={styles.message}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push('/chat')}
        >
            <Col 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '15px',
                }}
            >
                <Badge 
                    count={numberOfMessages}
                    size='small'
                >
                    {/* @ts-ignore */}
                    <Avatar icon={<UserOutlined />}/>
                </Badge>
            </Col>
            <Col>
                <Space direction='vertical'>
                    <span 
                        className={styles.messageTitle}
                    >
                        {title}
                    </span>
                    <div>
                        {lastMessage}
                    </div>
                </Space>
            </Col>
            <div className={styles.messageTime}>
                {time}
            </div>
            <Popover 
                placement='right' 
                content={content}
            >
                <Button 
                    style={{
                        display: !isHovering ? 'none' : '',
                        position: 'absolute',
                        right: '1%',
                        top: '5%',
                    }}
                    type='ghost' 
                    // @ts-ignore
                    icon={<EllipsisOutlined />} 
                    size={'small'}
                />
            </Popover>
        </Row>
    )
}
