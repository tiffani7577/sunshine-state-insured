import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home Insurance with Cast Iron Pipes Florida Guide',
  description: 'Getting homeowners insurance with cast iron pipes in Florida is possible but harder. Most pre-1975 homes have them. Learn your options before your next renewal.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-cast-iron-pipes-florida' },
  openGraph: {
    title: 'Home Insurance with Cast Iron Pipes Florida Guide',
    description: "Cast iron pipes are causing non-renewals across South Florida. Here's what carriers are doing and what your options are.",
    url: 'https://www.sunshinestateinsured.com/home-insurance-cast-iron-pipes-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Home Insurance Cast Iron Pipes Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How do I know if my Florida home has cast iron pipes?',
    answer: 'Homes built before approximately 1975 frequently have cast iron drain pipes. A licensed plumber can confirm through a camera inspection. Cast iron pipes have a distinctive dark metallic appearance and are typically found in the drain, waste, and vent system rather than supply lines.'
  },
  {
    question: 'Can I get homeowners insurance with cast iron pipes in Florida?',
    answer: 'Yes in most cases, though your options may be more limited than for a home with modern PVC plumbing. Surplus lines carriers specialize in exactly this situation and can often provide coverage when standard carriers decline.'
  },
  {
    question: 'What does pipe lining cost in Florida?',
    answer: 'Pipe lining, which applies an epoxy coating to the interior of existing cast iron pipes to restore structural integrity, typically costs $3,000 to $15,000 depending on the size of the system and the extent of the work required.'
  },
  {
    question: 'Will insurance cover cast iron pipe failure in Florida?',
    answer: 'Only if your policy does not include a plumbing exclusion. Policies written on homes with cast iron pipes often include exclusions that specifically remove coverage for losses originating from the plumbing system. Read your policy carefully and ask your agent directly whether plumbing losses are covered.'
  },
  {
    question: 'How much does a plumbing camera inspection cost?',
    answer: 'A camera inspection of your drain lines by a licensed plumber typically costs $300 to $500 in Florida. This is a worthwhile investment before shopping for insurance as a clean inspection report can meaningfully expand your coverage options.'
  },
]

const relatedPages = [
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Florida Homes' },
  { href: '/4-point-inspection-florida-home-insurance', label: '4-Point Inspection Guide' },
  { href: '/home-insurance-aluminum-wiring-florida', label: 'Aluminum Wiring Insurance' },
  { href: '/home-insurance-dropped-by-carrier-florida', label: 'Dropped by Your Carrier?' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Home Insurance with Cast Iron Pipes in Florida: What You Need to Know Before Your Next Renewal"
      subtitle="Getting homeowners insurance with cast iron pipes in Florida is possible but increasingly difficult. Most homes built before 1975 have them."
      breadcrumb="Cast Iron Pipes Home Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Susan had lived in her 1967 Fort Lauderdale home for 22 years. She knew it had cast iron pipes. They had never caused a problem she was aware of. When her insurer sent a non-renewal notice last year, cast iron pipes were listed as a contributing reason. She called three other carriers. Two declined to quote. One offered a policy with a plumbing exclusion — meaning if her pipes failed she would pay for the damage herself.</p>

      <p>Susan's situation plays out across South Florida every single day. Cast iron pipe issues have become one of the defining coverage challenges for owners of older Florida homes.</p>

      <h2>Why Cast Iron Pipes Are a Specific Problem in Florida</h2>
      <p>Cast iron pipes were the standard for drain, waste, and vent plumbing in homes built from roughly the 1940s through the mid-1970s. For decades they performed reliably. Florida's environment has changed that calculus.</p>

      <p>The combination of humidity, a high water table, acidic soil, and the chemistry of what flows through drain pipes creates conditions that accelerate cast iron corrosion at a rate significantly faster than drier climates. Cast iron pipes in Florida homes are deteriorating decades faster than similar pipes in other states.</p>

      <p>When cast iron pipes fail in Florida they rarely fail at a single point. The entire system deteriorates. Roots intrude at joints. Sections collapse. Sewage backs up through slabs into living spaces. Remediation requires breaking up concrete to access and replace the pipes and runs anywhere from $15,000 to $80,000 depending on the size of the home and the extent of the damage.</p>

      <h2>What Insurers Are Doing About It</h2>
      <p>Some carriers will not write policies on homes with cast iron pipes regardless of their current condition. Some will write the policy but include a plumbing exclusion that removes coverage for losses originating from the plumbing system. Some carriers will write the policy but require a plumbing camera inspection first — a licensed plumber runs a camera through your drain lines and produces a condition report.</p>

      <div className="stat-callout">
        <div className="number">$15K–$80K</div>
        <p className="mt-1 text-teal-100 text-sm">Typical cost of cast iron pipe remediation in Florida — one of the most expensive covered losses in the state's insurance market.</p>
      </div>

      <h2>What a Plumbing Camera Inspection Involves</h2>
      <p>A licensed plumber inserts a camera into your drain lines through a cleanout access point and runs it through the system recording the condition of the pipes. The inspection typically takes two to three hours for a standard single-family home and costs $300 to $500.</p>

      <p>A clean report showing intact pipes with no significant corrosion, root intrusion, or joint separation is a document with real value when shopping for insurance. If the inspection reveals deterioration you have two main options: pipe lining (an epoxy coating applied to the interior of existing pipes that restores structural integrity, costing $3,000 to $15,000) or full pipe replacement ($15,000 to $50,000 depending on home size).</p>

      <h2>Your Realistic Options</h2>
      <p>Standard market carriers may be limited for your home depending on pipe condition and location. An independent agent with access to surplus lines carriers is your most important resource. Surplus lines carriers specialize in risks that standard carriers decline and can often write policies for homes that the standard market will not touch — at a higher premium, but coverage exists.</p>
    </ArticleLayout>
  )
}
