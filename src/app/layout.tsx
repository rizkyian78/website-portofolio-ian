import type {Metadata} from 'next'
import Script from 'next/script'

import './globals.css'
import {Analytics} from '@vercel/analytics/next'

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
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
  const TIKTOK_TRACKING_ID = process.env.NEXT_PUBLIC_TIKTOK_ID

  return (
    <html lang="en">
      {/* TikTok Pixel */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject = t;
              var ttq = w[t] = w[t] || [];
              ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie"];
              ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
              for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
              ttq.instance = function (t) { var e = ttq._i[t] || []; return e.push(ttq), ttq._i[t] = e, e };
              ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}; ttq._i[e] = []; var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0; o.src = i + "?sdkid=" + e + "&lib=" + t; var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) };
              ttq.load('${TIKTOK_TRACKING_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
      </Script>
      {/* Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="ga-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
      <body className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>{children}</body>
      <Analytics />
    </html>
  )
}
