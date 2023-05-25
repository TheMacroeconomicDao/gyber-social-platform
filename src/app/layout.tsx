import '../../assets/styles/globals.scss'
import { Montserrat } from '@next/font/google'

export const metadata = {
  title: 'Gyber',
  description: 'Cyber-social platform',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
