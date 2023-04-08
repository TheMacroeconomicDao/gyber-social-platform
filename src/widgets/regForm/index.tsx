import React, { FC } from 'react'
import { Card } from 'antd'
import { Logo } from 'shared/ui/logo';
import { RegistrationForm } from './ui/form';

// Need to add decomposition and styles 
// + transfer styles to scss
export const RegForm:FC = () => {

    return (
        <Card 
            bordered={false} 
            style={{ 
                width: '40%',
                height: 300 
            }}
            bodyStyle={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '100%',
            }}
        >
            <Card.Grid style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40%'
            }}>
                <Logo
                    width={120}
                    height={120}
                    background={'#13c2c2'}
                    logoColour={'#ffffff'}
                />
            </Card.Grid>
            <Card.Grid style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '60%'
            }}>
                <RegistrationForm/>
            </Card.Grid>
        </Card>
    )
}
