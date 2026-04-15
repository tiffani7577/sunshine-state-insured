import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalculatorClient from './calculator-client'

export const metadata: Metadata = {
  title: 'Florida Home Insurance Cost Calculator | 2026 Estimate',
  description: 'Get an instant estimate of your Florida home insurance premium. Enter your zip code, home value, roof age, and more. Free calculator with no signup required.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/florida-home-insurance-cost-calculator' },
  openGraph: {
    title: 'Florida Home Insurance Cost Calculator | 2026 Estimate',
    description: 'Get an instant estimate of your Florida home insurance premium. Free calculator with no signup required.',
    url: 'https://www.sunshinestateinsured.com/florida-home-insurance-cost-calculator',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
}

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <CalculatorClient />
      <Footer />
    </>
  )
}
