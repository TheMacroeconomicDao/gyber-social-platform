import './styles/reset.scss'
import './styles/global.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import {Header} from "@/widgets/Header/Header";
import {Navbar} from "@/widgets/Navbar/Navbar";
import {Footer} from "@/widgets/Footer/Footer";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Cyber',
  description: 'Cyber-social platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Header/>
      <Navbar/>
        {children}
      <Footer />
      </body>
    </html>
  )
}
