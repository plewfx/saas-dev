import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS',
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
