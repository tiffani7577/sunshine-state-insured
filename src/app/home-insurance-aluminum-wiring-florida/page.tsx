import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home Insurance Aluminum Wiring Florida: Full Guide',
  description: 'Homes built 1965–1973 often have aluminum wiring. Many Florida insurers decline or charge more. CO/ALR remediation ($1,500–$4,000) can restore your insurability.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-aluminum-wiring-florida' },
  openGraph: {
    title: 'Home Insurance Aluminum Wiring Florida: Full Guide',
    description: 'Aluminum wiring makes Florida home insurance harder to get. Here are your mitigation options and how to find coverage.',
    url: 'https://www.sunshinestateinsured.com/home-insurance-aluminum-wiring-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Home Insurance Aluminum Wiring Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How do I know if my home has aluminum wiring?',
    answer: 'A licensed electrician can confirm through an inspection of your panel and a sample of outlets. Aluminum wiring built between 1965 and 1973 is often marked AL in the panel and appears silver-colored at connection points rather than the copper orange-red color.'
  },
  {
    question: 'What is CO/ALR remediation and does it satisfy insurers?',
    answer: 'CO/ALR remediation involves installing special outlets, switches, and connection devices rated for aluminum wiring at all connection points, combined with application of antioxidant compound. Many Florida insurers accept documented CO/ALR remediation as sufficient mitigation to write a standard policy.'
  },
  {
    question: 'How much does it cost to fix aluminum wiring in Florida?',
    answer: 'CO/ALR remediation typically costs $1,500 to $4,000 depending on home size. Full rewiring with copper replacement costs $8,000 to $15,000 for a typical Florida home.'
  },
  {
    question: 'Can I get homeowners insurance with aluminum wiring and no remediation?',
    answer: 'Some surplus lines carriers will write policies on homes with unremediated aluminum wiring at higher premiums. Standard market carriers are more likely to decline or add significant premium increases. An independent agent with surplus lines access is your best resource.'
  },
  {
    question: 'Is aluminum wiring dangerous?',
    answer: 'The Consumer Product Safety Commission found homes with aluminum wiring are 55 times more likely to experience connection failures that create fire hazards compared to copper-wired homes. The risk is concentrated at connection points rather than in the wiring itself. Remediation addresses those connection points specifically.'
  },
]

const relatedPages = [
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Florida Homes' },
  { href: '/4-point-inspection-florida-home-insurance', label: '4-Point Inspection Guide' },
  { href: '/home-insurance-cast-iron-pipes-florida', label: 'Cast Iron Pipes Insurance' },
  { href: '/home-insurance-dropped-by-carrier-florida', label: 'Dropped by Your Carrier?' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Home Insurance with Aluminum Wiring in Florida: The Full Picture"
      subtitle="Homes built between 1965 and 1973 often have aluminum wiring. Many Florida insurers will not write policies on these homes — but mitigation options exist."
      breadcrumb="Aluminum Wiring Home Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Robert bought his 1969 Pompano Beach home for $340,000. He knew it needed updating. What he did not know was that aluminum wiring running through his walls was going to make finding homeowners insurance genuinely difficult. His first insurer dropped him at renewal when they discovered the wiring during an inspection. His second declined to quote when he disclosed it upfront. His third wrote a policy but at a premium $900 higher than comparable homes in his neighborhood.</p>

      <p>Robert's situation is common in Florida neighborhoods built during a specific window — roughly 1965 to 1973 — when aluminum was widely substituted for copper due to materials shortages and cost pressures.</p>

      <h2>Why Aluminum Wiring Creates Fire Risk</h2>
      <p>Aluminum wiring conducts electricity adequately. The problem is what happens at connection points including outlets, switches, junction boxes, and fixtures. Aluminum and copper expand and contract at different rates with temperature changes. Over time this causes connections to loosen. Loose electrical connections generate heat. Heat creates fire risk.</p>

      <p>Aluminum also oxidizes differently than copper. The oxidation layer that forms on aluminum connections resists electricity more than copper oxidation does, which increases resistance at connection points and generates additional heat. The U.S. Consumer Product Safety Commission found that homes wired with aluminum are <strong>55 times more likely</strong> to have connection failures that create fire hazards than homes wired with copper.</p>

      <h2>What Insurers Do With Aluminum Wiring</h2>
      <p>Carrier responses fall into three categories: some decline entirely, some write the policy at a meaningfully higher premium, and some will write the policy if you can demonstrate that the aluminum wiring issue has been mitigated through one of two accepted methods.</p>

      <div className="stat-callout">
        <div className="number">55×</div>
        <p className="mt-1 text-teal-100 text-sm">CPSC finding: homes with aluminum wiring are 55 times more likely to have connection failures creating fire hazards than copper-wired homes.</p>
      </div>

      <h2>The Two Mitigation Options</h2>
      <p>A <strong>full rewire</strong> replaces all aluminum wiring throughout the home with copper. It solves the problem completely and permanently. It also costs $8,000 to $15,000 for a typical Florida home and involves significant disruption including opening walls and patching drywall.</p>

      <p><strong>CO/ALR remediation</strong> is a less invasive alternative that many insurers accept. A licensed electrician installs special outlets, switches, and connection devices rated specifically for use with aluminum wiring at every connection point in the home. They also apply antioxidant compound to all aluminum connections. This approach typically costs $1,500 to $4,000 and takes one to two days. Many Florida insurers will accept documented CO/ALR remediation as sufficient mitigation to write a standard policy. Getting detailed documentation from your electrician listing every connection point addressed is essential.</p>

      <h2>How to Confirm Whether Your Home Has Aluminum Wiring</h2>
      <p>A licensed electrician can inspect your panel and a sample of outlets to determine what wiring is present. In the electrical panel, aluminum wiring is often marked with the designation AL. At outlets and switches, aluminum wire is silver-colored rather than the orange-red color of copper. If you are buying a home built between 1965 and 1973, include a specific question about wiring material in your electrical inspection.</p>
    </ArticleLayout>
  )
}
