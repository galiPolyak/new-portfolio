import './globals.css'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import Script from 'next/script'

const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script 
          src="https://use.fontawesome.com/6fae6375b5.js" 
          strategy="afterInteractive" // Loads the script asynchronously after the page is interactive
        />
      </head>
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
