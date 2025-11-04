import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rizky Ian Indiarto',
  description:
    'Rizky Ian Indiarto is a backend engineer at OCBC Regional Development Center, building secure, scalable, and high-performance banking systems. With a background in fintech and startups, he has developed payment gateways, risk control systems, and developer tools that power financial innovation across Southeast Asia.',
  keywords: [
    'Rizky Ian Indiarto',
    'Software Engineer',
    'Backend Developer',
    'OCBC',
    'Golang',
    'Kafka',
    'PostgreSQL',
    'Node.js',
    'Banking Software',
    'Fintech Engineer',
    'Indonesia',
  ],
  openGraph: {
    title: 'Rizky Ian Indiarto — Backend Engineer at OCBC',
    description:
      'Backend engineer specializing in secure, scalable systems and fintech solutions. Currently part of OCBC’s Regional Development Center, crafting reliable banking platforms for Southeast Asia.',
    url: 'https://rizkyian.com', // replace with your actual domain
    siteName: 'Rizky Ian Indiarto',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizky Ian Indiarto — Backend Engineer',
    description: 'Backend engineer specializing in secure, high-performance banking systems at OCBC Regional Development Center.',
    creator: '@rizkyian778', // optional, if you have a Twitter handle
    images: ['/logo.png'], // optional, replace if you have one
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>{children}</body>
    </html>
  )
}
