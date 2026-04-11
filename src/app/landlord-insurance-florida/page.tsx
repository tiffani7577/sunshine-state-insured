import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Landlord Insurance Florida: What Rental Owners Need',
  description: 'Florida landlord insurance costs $1,200–$2,500/yr. Your standard homeowners policy will not cover a rental. One liability claim can cost more than a decade of premiums.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/landlord-insurance-florida' },
  openGraph: {
    title: 'Landlord Insurance Florida: What Rental Owners Need',
    description: 'Florida landlord insurance costs $1,200–$2,500/yr. Your standard homeowners policy will not cover a rental property.',
    url: 'https://www.sunshinestateinsured.com/landlord-insurance-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Landlord Insurance Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How much does landlord insurance cost in Florida?',
    answer: 'Most Florida landlord policies for a single family rental home run $1,200 to $2,500 per year. Coastal properties, older homes, and properties with pools or other liability exposures will be at the higher end of that range.'
  },
  {
    question: 'What liability coverage does a Florida landlord actually need?',
    answer: "At minimum $300,000. Given Florida's litigation environment and the specific liability exposure created by tenant activity, $500,000 is more appropriate for most landlords. An umbrella policy providing additional coverage is worth considering for any landlord with significant assets to protect."
  },
  {
    question: 'Does landlord insurance cover damage caused by tenants?',
    answer: 'Standard landlord policies do not cover intentional damage or damage caused by tenant negligence beyond normal wear and tear. Some specialty policies offer limited tenant damage coverage but it is not standard. Security deposits and small claims court are typically the mechanisms for recovering tenant-caused damage.'
  },
  {
    question: 'Is flood insurance included in Florida landlord policies?',
    answer: 'No. Flood damage is not covered by standard landlord policies. A separate flood insurance policy is required for coverage of flood-related losses at your rental property.'
  },
  {
    question: 'Can I require my tenants to carry renters insurance?',
    answer: 'Yes and you should. Making renters insurance a lease requirement protects your tenants and reduces situations where your landlord liability coverage becomes their only recourse after an incident.'
  },
]

const relatedPages = [
  { href: '/home-insurance-pool-florida', label: 'Pool Liability Insurance' },
  { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: 'Flood Insurance in Florida' },
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Florida Homes' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Landlord Insurance Florida: What Every Rental Property Owner Needs Before the First Tenant Moves In"
      subtitle="Your standard homeowners policy will not cover you once you rent the property out. One uncovered liability claim can cost more than a decade of premiums."
      breadcrumb="Landlord Insurance Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>James bought a second property in Boca Raton in 2021. A three-bedroom house he planned to rent while he waited for values to appreciate. He called his existing insurer, told them he was renting the property, and asked if he was covered. The agent said yes.</p>

      <p>Two years later a tenant's guest slipped on the back patio and broke her wrist. She sued. James's carrier denied the claim. His policy had a clause excluding coverage for properties rented to others. The agent had been wrong. James paid $47,000 in legal fees and settlement costs out of pocket.</p>

      <p>His situation happens constantly in Florida's rental market.</p>

      <h2>Why Your Homeowners Policy Will Not Cover a Rental</h2>
      <p>A standard HO3 homeowners policy is designed for owner-occupied properties. The moment you rent your home to a tenant you have changed the nature of the risk in ways your standard policy does not cover. Tenant-related liability, loss of rental income if the property becomes uninhabitable, and damage caused by tenants that falls outside standard policy coverage — these are things a landlord policy addresses and a standard homeowners policy does not.</p>

      <p>Some carriers will cancel your policy entirely if they discover you are renting the property without notification. Others will deny claims arising from rental activity. Either way you are exposed.</p>

      <h2>What Landlord Insurance Actually Covers</h2>
      <p>A Florida landlord policy covers the physical structure of your rental property against covered perils including fire, wind, hail, lightning, and vandalism. It provides liability coverage if a tenant or their guest is injured on the property and pursues legal action. It covers loss of rental income if a covered event makes the property uninhabitable.</p>

      <p>If your rental generates $2,200 per month and sits empty for six months during repairs, that is $13,200 in lost income that a landlord policy can replace. Some landlord policies also cover appliances, fixtures, and furnishings you have provided as part of the rental.</p>

      <h2>What It Does Not Cover</h2>
      <p>Landlord insurance does not cover your tenant's personal belongings — that is their responsibility, which is why making renters insurance a lease requirement is smart. It does not cover intentional damage caused by tenants. And like all standard Florida property policies, it does not cover flood damage. A separate flood policy is required for that.</p>

      <div className="stat-callout">
        <div className="number">$1,200–$2,500</div>
        <p className="mt-1 text-teal-100 text-sm">Typical annual cost of landlord insurance in Florida for a single-family rental home.</p>
      </div>

      <h2>Liability Is the Real Issue</h2>
      <p>Florida is one of the most litigious states in the country. Slip and fall claims, dog bite claims, and premises liability suits are common. As a landlord you are responsible for maintaining a safe property. When something goes wrong, you are a target.</p>

      <p>Standard landlord policies typically include $100,000 in liability coverage. That is inadequate for most Florida rental property owners. A single serious injury claim can easily exceed that limit. At minimum, carry $300,000 in liability coverage. For landlords with significant assets, $500,000 plus a personal umbrella policy is a more appropriate floor.</p>

      <h2>Short-Term Rentals Are a Different Category</h2>
      <p>If you rent your property through Airbnb, VRBO, or similar platforms, a standard landlord policy may not cover you. Short-term rental activity is treated differently by most carriers. Some carriers offer specific short-term rental endorsements. Others require a commercial policy. Confirm with your agent how your rental activity is classified before assuming you are covered.</p>

      <h2>Getting the Right Coverage</h2>
      <p>An independent insurance agent who works with multiple carriers is your best resource for finding the right landlord policy in Florida. Coverage terms, liability limits, and loss-of-rent provisions vary significantly between carriers. Getting multiple quotes and comparing them side by side is the only way to know you have the right coverage at a competitive price.</p>
    </ArticleLayout>
  )
}
