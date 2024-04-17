import React from 'react'
import type { Metadata } from 'next'

import TopNav from '@/components/top-nav'

import { GoogleTagManager } from '@next/third-parties/google'

import { IBM_Plex_Sans_Thai } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'



import './globals.css'

// ibm plex thai

const ibm = IBM_Plex_Sans_Thai({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['thai'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'AI Learn',
  description: 'Personalized learning experience',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRFVKRR6" />
      <body className={`${ibm.className}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <TopNav />
          {children}
        </ThemeProvider>
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  )
}