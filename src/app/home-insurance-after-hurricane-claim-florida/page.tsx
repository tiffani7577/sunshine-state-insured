import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home Insurance After Hurricane Claim Florida',
  description: "How to navigate Florida home insurance after filing a hurricane claim. What carriers look for and how to protect your coverage.'s what happens to your insurance, whether you'll be dropped, and how to protect your coverage after a claim.",
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-after-hurricane-claim-florida' },
  openGraph: {
    title: 'Home Insurance After Hurricane Claim Florida',
    description: 'Navigate Florida home insurance after a hurricane claim. What carriers look for and how to protect your coverage.',
    url: 'https://www.sunshinestateinsured.com/home-insurance-after-hurricane-claim-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Home Insurance After Hurricane Claim Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'Will my Florida home insurance be cancelled after a hurricane claim?',
    answer: 'Florida law prohibits carriers from cancelling your policy mid-term solely because you filed a hurricane claim. However, your carrier can choose not to renew your policy at the end of your policy term if you have multiple claims in a 3-5 year period. A single hurricane claim typically does not result in non-renewal, but it may affect your premium at renewal. Multiple claims significantly increase your non-renewal risk.'
  },
  {
    question: 'How long does a hurricane insurance claim take to settle in Florida?',
    answer: 'Florida law requires carriers to acknowledge a claim within 14 days and make a coverage decision within 90 days of receiving proof of loss. However, after major hurricanes when thousands of claims are filed simultaneously, the practical timeline is often longer. Simple claims with clear damage may settle in 30-60 days. Complex claims involving significant structural damage, disputes over coverage, or public adjuster involvement can take 6-18 months.'
  },
  {
    question: 'Should I hire a public adjuster for my hurricane claim in Florida?',
    answer: 'A public adjuster works on your behalf (not the insurance company\'s behalf) to document and negotiate your claim. They typically charge 10-20% of your claim settlement. For large, complex claims involving significant structural damage, a public adjuster can often negotiate a significantly higher settlement that more than covers their fee. For smaller, straightforward claims, the fee may not be worth it. Get a free consultation before deciding.'
  },
  {
    question: 'What is the difference between wind damage and flood damage in a hurricane claim?',
    answer: 'This distinction is critical and the source of many disputed claims. Wind damage (roof damage, broken windows, structural damage from wind) is covered by your homeowners policy. Flood damage (water that enters from the ground up, storm surge) is only covered by a separate flood insurance policy. After a hurricane, determining which damage was caused by wind vs. flood can be complex and is frequently disputed between homeowners and carriers.'
  },
  {
    question: 'Can I file a hurricane claim years after the storm in Florida?',
    answer: 'Florida law was changed significantly in 2023. As of 2023, the statute of limitations for hurricane property insurance claims is 1 year from the date of loss (reduced from 3 years). This means if your home was damaged in a hurricane, you must file your claim within 1 year of the storm. After that deadline, your carrier can deny the claim based on late reporting. Do not delay filing a claim after storm damage.'
  },
]

const relatedPages = [
  { href: '/what-does-windstorm-deductible-mean-florida', label: 'Windstorm Deductibles Explained' },
  { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: 'Flood Insurance Outside Flood Zones' },
  { href: '/flood-insurance-broward-county', label: 'Flood Insurance Broward County' },
  { href: '/home-insurance-dropped-by-carrier-florida', label: 'Dropped by Your Carrier?' },
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Florida Insurance So Expensive?' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Home Insurance After a Hurricane Claim in Florida"
      subtitle="Filing a hurricane claim is stressful enough. Here's what to expect from your carrier, your rights under Florida law, and how to protect your coverage going forward."
      breadcrumb="After a Hurricane Claim"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>A hurricane just hit. Your home has damage. Now what? Filing a hurricane insurance claim in Florida is a process with specific legal timelines, common pitfalls, and rights you may not know you have. This guide walks you through every step — from the moment the storm passes to the final settlement check.</p>

      <h2>Immediately After the Storm: The First 72 Hours</h2>

      <h3>Document Everything Before Any Repairs</h3>
      <p>Before you touch anything, photograph and video every piece of damage you can safely access. Take wide shots showing the full scope of damage and close-up shots showing specific damage points. Document the date and time on your photos. This documentation is your evidence — without it, disputes about the extent of pre-repair damage are much harder to resolve in your favor.</p>

      <h3>Make Emergency Repairs to Prevent Further Damage</h3>
      <p>Your policy requires you to take reasonable steps to prevent further damage after a covered loss. This means tarping a damaged roof, boarding broken windows, and removing standing water. Keep all receipts for emergency repair materials — these costs are typically reimbursable under your policy's "additional coverages" section. Do not make permanent repairs until your adjuster has inspected the damage.</p>

      <h3>File Your Claim Immediately</h3>
      <p>Florida's 2023 insurance reform reduced the statute of limitations for hurricane claims to <strong>1 year from the date of loss.</strong> Do not wait. Call your carrier's claims line or file online as soon as it is safe to do so. Get a claim number and write it down. Florida law requires your carrier to acknowledge your claim within 14 days.</p>

      <h2>Understanding the Claims Process</h2>

      <h3>The Insurance Adjuster's Visit</h3>
      <p>Your carrier will send an adjuster to inspect your damage. This adjuster works for your insurance company, not for you. Their job is to assess the damage and determine what your carrier owes under your policy. Be present during the inspection. Point out all damage, including damage that may not be immediately visible. Ask the adjuster to explain what they're documenting and what they're not.</p>

      <h3>The Proof of Loss</h3>
      <p>Your carrier will ask you to submit a "proof of loss" — a formal statement of the damages and their value. Florida law gives carriers 90 days from receipt of your proof of loss to make a coverage decision. Make sure your proof of loss is complete and accurate. Underestimating your damages at this stage can limit your recovery later.</p>

      <h3>The Settlement Offer</h3>
      <p>Your carrier will make a settlement offer based on their adjuster's assessment. You are not required to accept the first offer. If you believe the offer is too low, you have options: negotiate directly with your carrier, hire a public adjuster to advocate on your behalf, or invoke your policy's appraisal clause (which allows both parties to hire independent appraisers to resolve disputes).</p>

      <div className="stat-callout">
        <div className="number">1 Year</div>
        <p className="mt-1 text-teal-100 text-sm">Florida's statute of limitations for hurricane insurance claims as of 2023. You must file within 1 year of the storm — no exceptions.</p>
      </div>

      <h2>Wind vs. Flood: The Most Common Dispute</h2>
      <p>After a hurricane, the most common and most contentious claims dispute in Florida is the wind vs. flood question. Your homeowners policy covers wind damage. Your flood policy (if you have one) covers flood damage. But after a hurricane, the two types of damage often occur simultaneously and can be difficult to distinguish.</p>
      <p>Common scenarios where this becomes a dispute:</p>
      <ul>
        <li>Water enters your home through a storm-damaged roof (wind damage — covered by homeowners)</li>
        <li>Water enters your home from the ground up due to storm surge (flood damage — only covered by flood policy)</li>
        <li>Water enters through wind-damaged windows (wind damage — covered by homeowners)</li>
        <li>Your home floods because storm surge overwhelmed the drainage system (flood damage — only covered by flood policy)</li>
      </ul>
      <p>If you have both homeowners and flood insurance, this distinction matters for which policy pays. If you only have homeowners insurance, flood damage is simply not covered — regardless of how the water entered your home.</p>

      <h2>Your Rights Under Florida Law</h2>
      <p>Florida has strong consumer protections for insurance claimants. Key rights you should know:</p>
      <ul>
        <li><strong>Right to a timely response:</strong> Your carrier must acknowledge your claim within 14 days and make a coverage decision within 90 days of receiving your proof of loss.</li>
        <li><strong>Right to a copy of your policy:</strong> Your carrier must provide a complete copy of your policy within 30 days of your request.</li>
        <li><strong>Right to an appraisal:</strong> If you and your carrier disagree on the value of your loss, either party can invoke the appraisal clause, which provides a binding dispute resolution process.</li>
        <li><strong>Right to file a complaint:</strong> If you believe your carrier is acting in bad faith, you can file a complaint with the Florida Department of Financial Services (DFS) at myfloridacfo.com.</li>
      </ul>

      <h2>How a Hurricane Claim Affects Your Future Coverage</h2>
      <p>Florida law prohibits carriers from cancelling your policy mid-term solely because you filed a claim. However, at renewal, your carrier can consider your claims history. Here's the realistic picture:</p>
      <ul>
        <li><strong>One hurricane claim:</strong> Unlikely to result in non-renewal. May result in a modest premium increase at renewal.</li>
        <li><strong>Two claims in 3 years:</strong> Significantly increases non-renewal risk. Many carriers will not renew policies with two or more claims in a 3-5 year period.</li>
        <li><strong>Three or more claims:</strong> Very high non-renewal risk. You may need to seek coverage through Citizens Insurance or the surplus lines market.</li>
      </ul>
      <p>This reality means Florida homeowners face a difficult decision after a hurricane: file a claim for relatively minor damage (which may result in a payout that barely exceeds your deductible) or pay out of pocket to preserve their claims-free status and insurability. There's no universal right answer — it depends on the size of the damage, your deductible, and your carrier's specific underwriting criteria.</p>
    </ArticleLayout>
  )
}
