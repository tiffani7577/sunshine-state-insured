import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home Insurance with a Pool Florida: Costs and Coverage',
  description: 'A Florida pool adds $50–$150/yr to your homeowners premium. The real cost is liability. One drowning claim can exceed $1M. Know what your policy actually covers.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-pool-florida' },
  openGraph: {
    title: 'Home Insurance with a Pool Florida: Costs and Coverage',
    description: 'Florida pools increase your liability exposure significantly. Here is what your policy covers and what gaps to watch for.',
    url: 'https://www.sunshinestateinsured.com/home-insurance-pool-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Home Insurance Pool Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How much does a pool add to homeowners insurance in Florida?',
    answer: 'A pool typically adds $50 to $150 per year to a standard Florida homeowners premium. The direct premium increase is modest. The more significant impact is on liability exposure, which is why reviewing your liability limits when you have a pool is important.'
  },
  {
    question: 'What liability coverage do I need with a Florida pool?',
    answer: 'Standard policies include $100,000 to $300,000 in liability coverage. For pool owners in Florida, $300,000 is a minimum and a personal umbrella policy providing $1,000,000 or more in additional coverage is strongly worth considering. A single drowning or serious injury claim can exceed standard policy limits.'
  },
  {
    question: 'Does homeowners insurance cover pool damage in Florida?',
    answer: 'Pool damage coverage depends on the cause. Damage from a covered peril like a hurricane or falling tree is typically covered under your dwelling or other structures coverage. Damage from normal wear, settling, or earth movement is generally excluded. Equipment breakdown coverage is a separate endorsement worth considering for pool equipment.'
  },
  {
    question: 'Does Florida law require a pool fence?',
    answer: 'Yes. Florida law requires residential pools to be surrounded by a barrier at least 4 feet high with a self-closing, self-latching gate. Compliance with this requirement is also relevant to your insurance coverage — some carriers require documented barrier compliance.'
  },
  {
    question: 'Can I lose my homeowners insurance because of a pool?',
    answer: 'Most carriers will not cancel your policy solely because of a pool. However, some carriers require specific safety features including fencing, self-latching gates, and pool alarms as a condition of coverage. Failure to maintain required safety features could affect a claim.'
  },
]

const relatedPages = [
  { href: '/landlord-insurance-florida', label: 'Landlord Insurance Florida' },
  { href: '/windstorm-deductible-florida-home-insurance', label: 'Understanding Wind Deductibles' },
  { href: '/home-insurance-solar-panels-florida', label: 'Solar Panels and Insurance' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Florida Insurance So Expensive?' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Home Insurance with a Pool in Florida: What It Costs and What It Covers"
      subtitle="A Florida pool adds modestly to your annual premium. The real issue is liability — and most pool owners are significantly underinsured for it."
      breadcrumb="Pool Home Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Florida has more residential swimming pools per capita than any other state. It also has a drowning rate that consistently ranks among the highest in the country. These two facts are connected, and they are the reason that having a pool in Florida is not just a lifestyle choice — it is a liability decision that your insurance needs to reflect.</p>

      <h2>What a Pool Actually Costs in Insurance Terms</h2>
      <p>The direct premium increase for adding a pool to your Florida homeowners policy is typically $50 to $150 per year. That number is not the problem. The problem is that most Florida pool owners carry $100,000 to $300,000 in liability coverage — the standard amount that comes with a basic homeowners policy — and that is not enough for the liability a pool creates.</p>

      <p>A drowning claim or a serious pool-related injury claim in Florida can easily exceed $500,000. A wrongful death claim involving a child can exceed $1,000,000. Standard policy limits leave a meaningful gap between what your insurance pays and what a lawsuit can cost.</p>

      <h2>How Your Pool Is Covered for Physical Damage</h2>
      <p>The pool structure itself is typically covered as an other structure under your homeowners policy, subject to your other structures coverage limit (usually 10% of your dwelling coverage). Pool equipment — pumps, heaters, filters — may be covered under dwelling coverage or other structures depending on how they are installed and how your carrier classifies them.</p>

      <p>Coverage applies to damage from covered perils: hurricane, wind, hail, fire, falling objects, and similar events. It does not apply to damage from normal wear and tear, earth movement, settling, or gradual deterioration. If your pool deck cracks over time from ground movement — common in Florida's sandy soil — that is not a covered loss.</p>

      <div className="stat-callout">
        <div className="number">$1M+</div>
        <p className="mt-1 text-teal-100 text-sm">A wrongful death claim involving a child drowning in a residential pool can exceed $1,000,000 — far beyond standard policy limits.</p>
      </div>

      <h2>The Liability Gap and How to Close It</h2>
      <p>A personal umbrella policy is the most cost-effective way to close the liability gap that a pool creates. An umbrella policy provides $1,000,000 to $5,000,000 in additional liability coverage above your homeowners policy limits. For most Florida homeowners the annual cost is $200 to $400 per year — a small price relative to the exposure a pool creates.</p>

      <p>Review your current liability limit. If you have a pool and your liability coverage is $100,000, that is inadequate. Increase it to at least $300,000 within your homeowners policy and add an umbrella policy on top of that.</p>

      <h2>Florida Pool Safety Requirements</h2>
      <p>Florida law requires all residential pools to be enclosed by a barrier at least 4 feet high with a self-closing, self-latching gate. This is a legal requirement, not just a best practice. Some insurers also require pool alarms and specific gate hardware as a condition of coverage. Confirm with your carrier what safety features they require and document compliance. If a claim arises and your pool was not in compliance with Florida's barrier law, it can affect how your claim is handled.</p>
    </ArticleLayout>
  )
}
