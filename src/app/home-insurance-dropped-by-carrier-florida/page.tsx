import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home Insurance Dropped by Carrier Florida',
  description: 'Dropped by your Florida home insurance carrier? Here's exactly what to do next — including Citizens, surplus lines, and new carrier options.'s exactly what to do, your legal rights, and how to find new coverage fast.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/home-insurance-dropped-by-carrier-florida' },
  openGraph: {
    title: 'Home Insurance Dropped by Carrier Florida',
    description: 'Dropped by your Florida home insurance carrier? Here's what to do next — Citizens, surplus lines, and new options.',
    url: 'https://www.sunshinestateinsured.com/home-insurance-dropped-by-carrier-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Home Insurance Dropped by Carrier Florida' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'How much notice does a Florida insurance carrier have to give before dropping me?',
    answer: 'Florida law requires carriers to provide at least 120 days written notice before non-renewing a personal lines residential policy. For cancellations mid-term (which are rarer and require specific cause), carriers must provide 45 days notice. If you received a non-renewal notice, you have at least 120 days to find new coverage — use that time wisely.'
  },
  {
    question: 'Can my Florida insurance carrier drop me after I file a claim?',
    answer: 'Florida law prohibits carriers from non-renewing a policy solely because you filed a single claim. However, carriers can consider your claims history as part of their overall underwriting review. If you\'ve filed multiple claims within a 3-5 year period, carriers may choose not to renew. The non-renewal notice must state the reason for non-renewal.'
  },
  {
    question: 'What is Citizens Insurance and can I get it if I\'m dropped?',
    answer: 'Citizens Property Insurance Corporation is Florida\'s state-backed insurer of last resort. If you\'ve been dropped by a private carrier and cannot find comparable coverage in the private market within 15% of Citizens\' premium, you are eligible for Citizens. You must apply through a licensed Florida insurance agent who is appointed with Citizens.'
  },
  {
    question: 'Will being dropped by my insurance carrier affect my ability to get new coverage?',
    answer: 'A non-renewal (carrier choosing not to renew at the end of your policy term) is different from a cancellation and is less likely to affect your ability to get new coverage. However, if the non-renewal was due to claims history, some carriers may view that unfavorably. Being transparent with new carriers about your situation and working with an independent agent who can access multiple markets is the best approach.'
  },
  {
    question: 'What if I can\'t find any carrier willing to insure my home?',
    answer: 'If you genuinely cannot find coverage in the private market, Citizens Insurance is available as the insurer of last resort. Citizens is required by Florida law to provide coverage to eligible Florida homeowners who cannot find private market coverage. There is no scenario where a Florida homeowner is completely without options — though the options may be more limited and more expensive for high-risk properties.'
  },
]

const relatedPages = [
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
  { href: '/best-home-insurance-companies-florida-2026', label: 'Best Home Insurance Companies 2026' },
  { href: '/home-insurance-with-roof-over-15-years-florida', label: 'Roof Over 15 Years Old' },
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Florida Insurance So Expensive?' },
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Homes' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Premium' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="Home Insurance Dropped by Carrier in Florida: What to Do Right Now"
      subtitle="A non-renewal notice is stressful — but you have more options and more time than you think. Here's your step-by-step action plan."
      breadcrumb="Dropped by Your Carrier"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>You opened your mail and found a non-renewal notice from your Florida home insurance carrier. Your first reaction is probably panic — and that's understandable. But here's what you need to know immediately: <strong>you have options, you have time, and this is more common than you think.</strong></p>

      <p>Since 2020, more than 700,000 Florida homeowners have received non-renewal notices as carriers have exited the state or tightened their underwriting standards. If you're one of them, this guide walks you through exactly what to do, step by step.</p>

      <h2>Step 1: Read the Notice Carefully</h2>
      <p>Before you do anything else, read your non-renewal notice carefully. Florida law requires carriers to state the reason for non-renewal. Common reasons include:</p>
      <ul>
        <li><strong>Roof age:</strong> Your roof is over 15 years old (the most common reason in 2024-2026)</li>
        <li><strong>Claims history:</strong> Multiple claims in the past 3-5 years</li>
        <li><strong>Underwriting changes:</strong> The carrier is exiting Florida or your county entirely</li>
        <li><strong>Property condition:</strong> Issues identified during an inspection</li>
        <li><strong>Coverage amount:</strong> Your home's value exceeds the carrier's maximum coverage limit</li>
      </ul>
      <p>Understanding the reason matters because it determines your strategy. A roof age issue has a different solution than a claims history issue.</p>

      <h2>Step 2: Know Your Timeline</h2>
      <p>Florida law requires carriers to provide at least <strong>120 days written notice</strong> before non-renewing a personal lines residential policy. This means you have at least four months to find new coverage. Do not wait until the last week — start shopping immediately, but don't panic.</p>
      <p>Note the exact date your current coverage ends. Mark it on your calendar. You need new coverage in place before that date — even a single day without coverage can create problems with your mortgage lender and leave you exposed.</p>

      <h2>Step 3: Contact an Independent Insurance Agent Immediately</h2>
      <p>This is the most important step. An independent insurance agent — one who works with multiple carriers rather than representing a single company — is your best resource in this situation. They can:</p>
      <ul>
        <li>Access quotes from dozens of Florida carriers simultaneously</li>
        <li>Know which carriers are currently writing policies for your specific situation (roof age, claims history, location)</li>
        <li>Help you understand Citizens Insurance eligibility</li>
        <li>Identify coverage gaps in any new policy you're considering</li>
        <li>Advocate on your behalf if there are underwriting issues</li>
      </ul>
      <p>Do not simply go to a single carrier's website and try to get a quote directly. In Florida's current market, the carriers most likely to insure your specific property may not be the ones with the biggest advertising budgets.</p>

      <h2>Step 4: Address the Underlying Issue If Possible</h2>
      <p>If your non-renewal is due to a fixable issue, address it before shopping for new coverage:</p>
      <ul>
        <li><strong>Roof age:</strong> Get a roof inspection. If the inspector certifies the roof is in good condition with significant remaining useful life, some carriers will accept this. If the roof genuinely needs replacement, get quotes — a new roof opens up the full private market to you.</li>
        <li><strong>Property condition:</strong> If the carrier cited specific property conditions (peeling paint, damaged gutters, overgrown vegetation), address them and document the repairs with photos.</li>
        <li><strong>Claims history:</strong> You can't change your history, but you can be transparent about it and work with carriers that have more flexible underwriting for your claims profile.</li>
      </ul>

      <h2>Step 5: Explore All Your Options</h2>

      <h3>Private Market Carriers</h3>
      <p>Even if your current carrier is dropping you, other private carriers may be willing to insure your home. Florida's private market includes dozens of carriers with different underwriting appetites. Some specialize in older homes, some in coastal properties, some in homes with prior claims. An independent agent can identify which carriers are the best fit.</p>

      <h3>Citizens Insurance</h3>
      <p>If private market options are limited or unaffordable, Citizens Insurance is available as the insurer of last resort. To qualify for Citizens, you generally need to demonstrate that no private carrier will offer comparable coverage within 20% of Citizens' premium. Your agent can help you document this eligibility.</p>

      <h3>Surplus Lines Market</h3>
      <p>For properties that don't qualify for standard market coverage, the surplus lines market (also called the "non-admitted" market) offers another option. Surplus lines carriers operate under different regulations and can insure risks that standard carriers won't. Premiums are typically higher, but coverage may be available when standard market options are exhausted.</p>

      <div className="stat-callout">
        <div className="number">700,000+</div>
        <p className="mt-1 text-teal-100 text-sm">Florida homeowners who have received non-renewal notices since 2020 as carriers have exited the state or tightened underwriting.</p>
      </div>

      <h2>What NOT to Do</h2>
      <ul>
        <li><strong>Don't let your coverage lapse.</strong> Even a single day without coverage violates most mortgage agreements and leaves you completely exposed. Your lender may force-place coverage on your behalf — which is typically far more expensive than any market alternative.</li>
        <li><strong>Don't assume Citizens is your only option.</strong> The private market has more options than many homeowners realize, especially if you work with an independent agent who knows the market.</li>
        <li><strong>Don't accept the first quote you get.</strong> Florida's insurance market varies significantly by carrier. Get at least three quotes before making a decision.</li>
        <li><strong>Don't ignore the notice.</strong> 120 days sounds like a long time, but the Florida market moves slowly. Start the process within the first two weeks of receiving your notice.</li>
      </ul>
    </ArticleLayout>
  )
}
