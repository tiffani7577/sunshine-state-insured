import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'What Does Florida Homeowners Insurance Cover? Full Guide',
  description: 'Florida HO3 policies cover dwelling, other structures, personal property, loss of use, liability, and medical payments. Flood and sinkhole are always separate.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/what-does-florida-homeowners-insurance-cover' },
  openGraph: {
    title: 'What Does Florida Homeowners Insurance Cover? Full Guide',
    description: 'A complete breakdown of what Florida homeowners insurance covers — and the important gaps most homeowners do not know about.',
    url: 'https://www.sunshinestateinsured.com/what-does-florida-homeowners-insurance-cover',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'What Does Florida Homeowners Insurance Cover' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'Does Florida homeowners insurance cover hurricane damage?',
    answer: 'Yes, but with a separate hurricane or windstorm deductible that is typically 2% to 5% of your insured dwelling value — not a flat dollar amount. On a $400,000 home with a 3% deductible, you pay the first $12,000 out of pocket before insurance contributes.'
  },
  {
    question: 'Does Florida homeowners insurance cover flood damage?',
    answer: 'No. Standard Florida homeowners policies explicitly exclude flood damage. Flood insurance is a completely separate policy available through the National Flood Insurance Program or private flood carriers. This is one of the most important coverage gaps Florida homeowners face.'
  },
  {
    question: 'Does Florida homeowners insurance cover mold?',
    answer: 'Limited mold coverage is included in most Florida policies, typically capped at $10,000 to $25,000. Coverage applies only to mold that results from a covered water loss. Mold from long-term moisture, humidity, or maintenance neglect is generally excluded.'
  },
  {
    question: 'Does Florida homeowners insurance cover sinkhole damage?',
    answer: 'Standard policies cover catastrophic ground cover collapse — the most severe form of sinkhole activity. Coverage for lesser sinkhole damage requires a separate sinkhole coverage endorsement. Florida law requires insurers to offer this endorsement but it is not included by default.'
  },
  {
    question: 'What is not covered by Florida homeowners insurance?',
    answer: 'Flood damage, earthquake damage, normal wear and tear, maintenance-related deterioration, pest damage (termites, rodents), and intentional damage are standard exclusions. Sinkhole damage below catastrophic ground cover collapse is also excluded without a separate endorsement.'
  },
]

const relatedPages = [
  { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: 'Do I Need Flood Insurance?' },
  { href: '/windstorm-deductible-florida-home-insurance', label: 'Understanding Wind Deductibles' },
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Florida Insurance So Expensive?' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="What Does Florida Homeowners Insurance Actually Cover?"
      subtitle="A standard Florida HO3 policy covers six categories of loss. Understanding what each covers — and what each excludes — is the difference between being protected and being surprised."
      breadcrumb="What Florida Homeowners Insurance Covers"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Florida homeowners insurance covers your home structure, other structures on your property, your personal belongings, additional living expenses if you are displaced, personal liability, and medical payments to others. It does not cover flood damage, sinkhole damage beyond catastrophic collapse, or normal wear and tear. Those are the headlines. The details matter significantly.</p>

      <h2>The Six Coverage Categories in a Standard HO3 Policy</h2>

      <h3>Dwelling Coverage (Coverage A)</h3>
      <p>Dwelling coverage pays to repair or rebuild the physical structure of your home if it is damaged by a covered peril. Covered perils in an HO3 policy include fire, lightning, windstorm, hail, explosion, riot, aircraft, vehicles, smoke, vandalism, theft, falling objects, weight of ice or snow, and sudden accidental water discharge from plumbing or appliances.</p>
      <p>The most important thing about dwelling coverage in Florida is the hurricane deductible. Wind damage from a named storm is covered, but subject to a separate deductible that is typically 2% to 5% of your insured dwelling value rather than a flat dollar amount. On a home insured for $400,000 with a 3% hurricane deductible, you pay the first $12,000 of wind damage out of pocket.</p>

      <h3>Other Structures (Coverage B)</h3>
      <p>Other structures coverage pays for damage to detached structures on your property including fences, detached garages, sheds, and pools. The standard limit is 10% of your dwelling coverage amount. On a $400,000 dwelling policy that is $40,000 for all other structures combined.</p>

      <h3>Personal Property (Coverage C)</h3>
      <p>Personal property coverage pays for damage to or theft of your belongings including furniture, clothing, electronics, and appliances. The standard limit is 50% to 70% of dwelling coverage. Coverage for high-value items like jewelry, art, and collectibles is typically capped at low sublimits and may require separate scheduled endorsements.</p>

      <h3>Loss of Use (Coverage D)</h3>
      <p>If a covered loss makes your home uninhabitable, loss of use coverage pays for temporary housing and additional living expenses while repairs are made. The standard limit is 20% to 30% of dwelling coverage.</p>

      <h3>Personal Liability (Coverage E)</h3>
      <p>Personal liability coverage pays if someone is injured on your property or if you cause damage to someone else's property and they sue you. Standard limits are $100,000 to $300,000. For homeowners with pools, trampolines, dogs, or significant assets to protect, higher limits and a personal umbrella policy are worth considering.</p>

      <h3>Medical Payments (Coverage F)</h3>
      <p>Medical payments coverage pays for minor injuries to guests on your property regardless of fault. Standard limits are $1,000 to $5,000. This coverage is designed to handle small claims without litigation.</p>

      <div className="stat-callout">
        <div className="number">$12,000</div>
        <p className="mt-1 text-teal-100 text-sm">Out-of-pocket hurricane deductible on a $400,000 Florida home with a 3% wind deductible — before insurance pays a single dollar.</p>
      </div>

      <h2>What Florida Homeowners Insurance Does Not Cover</h2>
      <p><strong>Flood damage</strong> is the most significant exclusion. Standard policies explicitly exclude all flood-related losses. A separate flood insurance policy is required. This is not a technicality — it is the reason thousands of Florida homeowners have faced devastating uninsured losses after storms.</p>
      <p><strong>Sinkhole damage</strong> beyond catastrophic ground cover collapse requires a separate endorsement. Florida law requires insurers to offer this coverage but it is not included by default.</p>
      <p><strong>Normal wear and tear</strong>, maintenance neglect, and gradual deterioration are excluded. Insurance covers sudden, accidental losses — not the results of deferred maintenance.</p>
      <p><strong>Pest damage</strong> from termites, rodents, and similar infestations is excluded from all standard policies.</p>
    </ArticleLayout>
  )
}
