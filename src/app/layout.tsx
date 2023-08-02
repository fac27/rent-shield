import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/FooterWithLinks'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rent-shield',
  description: 'rent-shield',
  icons: {
    icon: '/rs-logo.svg',
  },
}
// export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {' '}
        <link rel="icon" href="./rs-logo.svg" type="image/svg+xml" />
      </head>

      <body
        className={`${quicksand.className} text-lg bg-[#EAEAEA] min-h-screen relative pb-14`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
