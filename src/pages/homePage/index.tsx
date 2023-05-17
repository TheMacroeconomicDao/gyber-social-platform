'use client'

// Perhaps such an import is not suitable for FSD, so it needs to be fixed later
import '../../../assets/styles/globals.scss'
import HomeGlobalLayout from 'shared/ui/layouts/homeGlobalLayout';
import { HeaderComponent } from './ui/headerComponent';
import { Space } from 'antd';
import { AdditionalInfo } from './ui/additionalInfo';
import { Groups } from './ui/groups';

export default function HomePage() {

  return (
    <HomeGlobalLayout>
      <Space 
        style={{
          width: '60%',
        }}
        direction='vertical'
      >
        <HeaderComponent/>
        <AdditionalInfo/>

        <Space>
          <Groups/>
        </Space>
      </Space>
    </HomeGlobalLayout>
  )
}
