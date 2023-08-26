import './styles/reset.scss'
import './styles/global.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import {Header} from "@/widgets/Header/Header";
import {Navbar} from "@/widgets/Navbar";
import {Footer} from "@/widgets/Footer/Footer";
import Head from 'next/head';



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Gybernaty Community',
  description: 'Gybernaty Community of advanced enthusiasts and developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any'/>
      </Head>
      <body className={montserrat.className}>
      <Header/>
      <Navbar/>
        {children}
      <Footer />
      </body>
    </html>
  )
}
