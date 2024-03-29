import "@/styles/globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans';


import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/globals/footer"
import { Header } from "@/components/globals/header"
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        <div className="relative flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
