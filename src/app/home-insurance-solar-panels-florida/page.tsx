import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Solar Panels and Home Insurance Florida 2026',
  description: "Solar panels add $50–$75/yr to Florida homeowners premiums — but the real risk is a coverage gap. Make sure your dwelling limit reflects your system's added value.",
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-solar-panels-florida' },
  openGraph: {
    title: 'Solar Panels and Home Insurance Florida 2026',
    description: "Florida solar homeowners often have a coverage gap they don't discover until after a storm. Here's what to check.",
    url: 'https://www.sunshinestateinsured.com/home-insurance-solar-panels-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Solar Panels Home Insurance Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'Does homeowners insurance cover solar panels in Florida?',
    answer: 'Most Florida homeowners policies cover permanently attached rooftop solar panels as part of dwelling coverage up to the dwelling limit. Coverage details vary by carrier. You should confirm with your insurer how panels are classified and whether your coverage limit reflects their added value.'
  },
  {
    question: 'Do I need to tell my insurance company about solar panels?',
    answer: 'Yes. Material changes to your property should be disclosed to your insurer. Some policies have clauses that can affect coverage for losses related to undisclosed property changes. Notify your insurer when panels are installed.'
  },
  {
    question: 'Does the wind deductible apply to solar panel damage?',
    answer: 'Yes. Wind-related damage to solar panels is subject to the same hurricane or wind deductible as the rest of your dwelling. On a home with a 3% wind deductible and $400,000 in coverage that is $12,000 out of pocket before insurance contributes anything.'
  },
  {
    question: 'Are leased solar panels covered by my homeowners insurance?',
    answer: 'Leased panels are owned by the solar company rather than you. Your insurer needs to know the panels are on your roof. Your lease agreement will specify insurance obligations. Review it carefully and speak with both your insurer and the solar company about how damage and replacement are handled.'
  },
  {
    question: 'Should I increase my coverage limit when I add solar panels?',
    answer: 'Yes. If your solar system cost $25,000 or more and your dwelling coverage limit has not changed, you are underinsured. Your coverage limit should reflect the actual replacement cost of your home including all permanently attached systems.'
  },
]

const relatedPages = [
  { href: '/windstorm-deductible-florida-home-insurance', label: 'Understanding Wind Deductibles' },
  { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'Wind Mitigation Inspections' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
  { href: '/home-insurance-pool-florida', label: 'Pool and Home Insurance' },
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Florida Insurance So Expensive?' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Solar Panels and Home Insurance in Florida: What Actually Changes"
      subtitle="Solar panels do not automatically increase your Florida homeowners premium significantly — but they create coverage gaps most homeowners do not discover until after a storm."
      breadcrumb="Solar Panels Home Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Florida gets more sun than almost any other state. Solar installations have grown dramatically as a result, with hundreds of thousands of Florida homeowners making the switch over the past five years. Many of them have not thought carefully about how their solar system interacts with their homeowners insurance. Some find out the hard way after a hurricane.</p>

      <h2>Does Adding Solar Raise Your Insurance Premium?</h2>
      <p>The direct premium impact is often smaller than people expect. Most Florida insurers increase the annual premium by $50 to $75 for a rooftop solar installation. That is not the real issue.</p>

      <p>The real issue is whether your dwelling coverage limit has been updated to reflect the added value the solar system represents. If you installed a $28,000 solar system and your dwelling coverage limit did not change, you have a significant gap. In a total loss event your policy pays based on your coverage limit, not the actual replacement cost of your home and its systems.</p>

      <h2>How Solar Systems Are Covered</h2>
      <p>Most Florida insurers cover permanently attached rooftop solar panels as part of your dwelling coverage up to your dwelling limit. Some treat them as personal property or as an additional structure, which affects how they are covered and what deductibles apply. The specific treatment varies by carrier and by how the panels are installed and whether they include battery storage systems.</p>

      <p>Leased panels present a separate situation. If you lease your solar system through a solar company, the company owns the panels, not you. Your responsibility is to disclose the panels to your insurer and to understand what the lease agreement says about damage, replacement, and insurance obligations.</p>

      <div className="stat-callout">
        <div className="number">$12,000</div>
        <p className="mt-1 text-teal-100 text-sm">Out-of-pocket wind deductible on a $400,000 home with a 3% wind deductible — solar panel repairs below this threshold are entirely your cost.</p>
      </div>

      <h2>The Wind Deductible Problem for Solar Owners</h2>
      <p>This is the coverage gap Florida solar homeowners most commonly miss. Florida homeowners policies have a separate hurricane or wind deductible typically set at 2% to 5% of insured value. This deductible applies to wind-related damage including damage to your solar panels.</p>

      <p>On a home insured for $400,000 with a 3% wind deductible, you are responsible for the first $12,000 of wind damage before your policy pays anything. A solar system requiring $8,000 in repairs after a storm falls entirely below that deductible. You pay out of pocket regardless of whether you have insurance. Understanding your wind deductible relative to your solar investment is important before storm season, not after.</p>

      <h2>What to Do Before Your Next Renewal</h2>
      <p>Call your insurer and confirm three things: that your solar panels are disclosed and covered, that your dwelling coverage limit has been updated to include the value of your solar system, and exactly how your carrier classifies the panels for coverage purposes. If your system cost more than $20,000 and your coverage limit has not changed since installation, request a coverage review.</p>
    </ArticleLayout>
  )
}
