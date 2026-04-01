import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sunshinestateinsured.com'),
  title: {
    default: 'Sunshine State Insured | Florida Home Insurance Help',
    template: '%s | Sunshine State Insured',
  },
  description: 'Florida homeowners: get real answers about home insurance, Citizens Insurance alternatives, windstorm coverage, and flood insurance in Broward County and across Florida.',
  keywords: ['Florida home insurance', 'Citizens Insurance Florida', 'windstorm insurance Florida', 'flood insurance Broward County', 'home insurance Fort Lauderdale'],
  authors: [{ name: 'Sunshine State Insured' }],
  creator: 'Sunshine State Insured',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunshinestateinsured.com',
    siteName: 'Sunshine State Insured',
    title: 'Sunshine State Insured | Florida Home Insurance Help',
    description: 'Real answers for Florida homeowners navigating the insurance crisis. Citizens Insurance, windstorm, flood, and more.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sunshine State Insured' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunshine State Insured | Florida Home Insurance Help',
    description: 'Real answers for Florida homeowners navigating the insurance crisis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'vPCH1Noq7VjxZkZ06GA_U9bi4yskM_riH-ll-0DT2XI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#FAFAF7]">
        {children}
      </body>
    </html>
  )
}
