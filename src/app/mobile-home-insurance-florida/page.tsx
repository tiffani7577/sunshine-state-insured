import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Mobile Home Insurance Florida 2026 Guide',
  description: "Florida mobile home insurance costs $700–$1,500/yr but requires specialist carriers. Learn what's covered, what's excluded, and how to find coverage.",
  alternates: { canonical: 'https://www.sunshinestateinsured.com/mobile-home-insurance-florida' },
  openGraph: {
    title: 'Mobile Home Insurance Florida 2026 Guide',
    description: "Florida mobile home insurance costs $700–$1,500/yr. Learn what's covered and how to find the right carrier.",
    url: 'https://www.sunshinestateinsured.com/mobile-home-insurance-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Mobile Home Insurance Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How much does mobile home insurance cost in Florida?',
    answer: 'Most Florida mobile home policies run $700 to $1,500 per year depending on the age and size of the home, its location, and the coverage limits you choose. Homes in coastal counties or older manufactured homes will be at the higher end of that range.'
  },
  {
    question: 'Can I get hurricane coverage for a mobile home in Florida?',
    answer: 'Yes, but it requires a policy specifically designed for manufactured or mobile homes. Standard HO3 homeowners policies do not cover mobile homes. Carriers that specialize in manufactured housing typically offer wind and hurricane coverage, though premiums are higher for homes in coastal areas.'
  },
  {
    question: 'Does Citizens Insurance cover mobile homes in Florida?',
    answer: "Citizens Property Insurance does offer coverage for mobile and manufactured homes through its MH program. Eligibility requirements apply and Citizens' coverage limits and terms for manufactured homes differ from its standard homeowners program."
  },
  {
    question: 'What is the difference between a mobile home and a manufactured home for insurance purposes?',
    answer: 'Technically, "mobile home" refers to units built before June 15, 1976, when federal HUD standards took effect. "Manufactured home" refers to units built after that date under HUD code. Insurers treat them differently — post-1976 manufactured homes built to HUD standards are generally easier to insure and qualify for better rates.'
  },
  {
    question: 'Do I need separate flood insurance for my mobile home in Florida?',
    answer: "Yes. Standard mobile and manufactured home policies exclude flood damage. If your home is in a flood zone — or even outside one, since 25% of Florida flood claims come from low-risk zones — you need a separate NFIP or private flood policy. Your mortgage lender may require it."
  },
]

const relatedPages = [
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Florida Homes' },
  { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: 'Flood Insurance Outside Flood Zones' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
  { href: '/4-point-inspection-florida-home-insurance', label: '4-Point Inspection Guide' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Mobile Home Insurance in Florida: A Complete 2026 Guide"
      subtitle="Mobile and manufactured homes require specialist coverage. Standard homeowners policies do not apply — and the Florida market has unique challenges."
      breadcrumb="Mobile Home Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Florida has more mobile and manufactured homes than almost any other state. Hundreds of thousands of Floridians live in manufactured housing communities from Pensacola to Homestead. Yet mobile home insurance remains one of the least understood corners of the Florida insurance market — and one of the most consequential when something goes wrong.</p>

      <p>If you own a mobile or manufactured home in Florida, this guide covers what coverage you need, what standard policies miss, and how to find the right carrier for your specific situation.</p>

      <h2>Why Mobile Homes Need Specialist Insurance</h2>
      <p>A standard HO3 homeowners policy is written for site-built homes. Mobile and manufactured homes have different construction standards, different wind resistance profiles, and different risk characteristics. Most standard carriers will not write a policy on a mobile or manufactured home at all. Those that do often use a modified form that excludes key coverages.</p>

      <p>The result is that mobile home owners who assume their standard policy covers them are often wrong — and they find out at the worst possible time.</p>

      <h2>What a Proper Mobile Home Policy Covers</h2>
      <p>A policy designed for manufactured housing covers the physical structure against covered perils including fire, wind, hail, lightning, and vandalism. It provides personal property coverage for your belongings inside the home. It includes liability coverage if someone is injured on your property. And it can include additional living expenses if a covered loss makes your home uninhabitable while repairs are made.</p>

      <p>Wind coverage is the critical element in Florida. A mobile home policy without wind coverage is not adequate coverage in this state. Confirm explicitly that your policy covers hurricane and windstorm damage before you sign.</p>

      <h2>What Most Policies Exclude</h2>
      <p>Flood damage is excluded from virtually every standard mobile home policy. In Florida, where flooding is a genuine risk statewide — not just in designated flood zones — this exclusion matters. A separate flood policy through the National Flood Insurance Program or a private flood carrier is essential for most Florida manufactured home owners.</p>

      <p>Older mobile homes, particularly those built before 1976, face additional exclusions and underwriting restrictions. Pre-HUD code homes are harder to insure and may only qualify for actual cash value coverage rather than replacement cost coverage, meaning depreciation is deducted from any claim payment.</p>

      <div className="stat-callout">
        <div className="number">$700–$1,500</div>
        <p className="mt-1 text-teal-100 text-sm">Typical annual cost of mobile home insurance in Florida — varies by age, location, and coverage level.</p>
      </div>

      <h2>HUD Code and Why It Matters</h2>
      <p>On June 15, 1976, the federal government implemented the HUD Manufactured Home Construction and Safety Standards. Homes built after this date are constructed to a uniform federal code that significantly improved structural integrity, fire safety, and wind resistance compared to pre-1976 units.</p>

      <p>For insurance purposes, the HUD code date is a meaningful dividing line. Post-1976 manufactured homes qualify for a broader range of carriers and better rates. Pre-1976 mobile homes face more limited options and typically higher premiums.</p>

      <h2>Tie-Downs and Wind Mitigation</h2>
      <p>Florida requires manufactured homes to be properly anchored to their foundation using an approved tie-down system. Beyond being a legal requirement, proper tie-downs are an insurance consideration. Some carriers require documentation of tie-down installation. Homes with properly installed and documented tie-down systems may qualify for wind mitigation credits that reduce premiums.</p>

      <h2>Finding Coverage in Florida's Market</h2>
      <p>The number of carriers willing to write manufactured home policies in Florida is smaller than the standard homeowners market. Working with an independent agent who has relationships with specialty manufactured housing carriers is the most efficient path to finding adequate coverage at a competitive price.</p>

      <p>Citizens Property Insurance offers a manufactured home program that serves as a backstop for homeowners who cannot find private market coverage. If the private market has declined your application, Citizens may be an option depending on your home's age, condition, and location.</p>
    </ArticleLayout>
  )
}
