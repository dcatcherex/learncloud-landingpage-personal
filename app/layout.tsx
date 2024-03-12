import React from 'react'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'

import './globals.css'
// const inter = Inter({ subsets: ['latin'] })
const prompt = Prompt({
  weight: ['200','300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',})

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
        <body className={`${prompt.className}`}>
          <ThemeProvider 
            attribute='class' 
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
            >
          {children}
          </ThemeProvider>
          <TailwindIndicator />
        </body>
      </html>
  )
}