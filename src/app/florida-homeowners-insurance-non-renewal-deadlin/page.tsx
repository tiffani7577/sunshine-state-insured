import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florida Homeowners Insurance Non-Renewal Deadline: 45-Day Notice Guide',
  description: 'Florida law gives you 45 days after a non-renewal notice to find new coverage. Act now — we can get you covered before your deadline. Call (435) 612-1009.',
  keywords: [
    'Florida homeowners insurance non renewal deadline',
    'Florida home insurance non renewal notice',
    'Florida insurance non renewal 45 days',
    'home insurance dropped Florida',
    'Florida insurance non renewal rights',
  ],
  alternates: {
    canonical: 'https://www.sunshinestateinsured.com/florida-homeowners-insurance-non-renewal-deadlin',
  },
  openGraph: {
    title: 'Florida Homeowners Insurance Non-Renewal Deadline: 45-Day Notice Guide',
    description: 'Florida law gives you 45 days after a non-renewal notice to find new coverage. Act now — we can get you covered before your deadline.',
    url: 'https://www.sunshinestateinsured.com/florida-homeowners-insurance-non-renewal-deadlin',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Florida Homeowners Insurance Non-Renewal Deadline Guide' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Homeowners Insurance Non-Renewal Deadline: 45-Day Notice Guide',
    description: 'Florida law gives you 45 days after a non-renewal notice to find new coverage. Act now — call (435) 612-1009.',
  },
}

export default function FloridaNonRenewalDeadlinePage() {
  const faqItems = [
    {
      question: 'How much notice does my insurer have to give before non-renewing my Florida home insurance?',
      answer:
        'Under Florida Statute 627.728, your insurer must provide at least 45 days written notice before your policy expiration date if they intend not to renew. If you received a notice with less than 45 days remaining, contact a licensed agent immediately — you may have additional rights.',
    },
    {
      question: 'What happens if I let my Florida home insurance lapse after a non-renewal?',
      answer:
        'If your policy lapses and you have a mortgage, your lender will purchase force-placed insurance on your behalf. Force-placed coverage is typically far more expensive than voluntary replacement coverage and provides much narrower protection — often covering only the structure, not your belongings or liability. Acting before your deadline is critical.',
    },
    {
      question: 'Can I get new home insurance in Florida after being non-renewed?',
      answer:
        'Yes. Being non-renewed does not mean you are uninsurable. Many admitted Florida carriers and surplus lines markets will consider your application. An independent agent with access to multiple carriers can shop your risk and find coverage before your deadline.',
    },
    {
      question: 'Does Citizens Insurance accept homeowners who were non-renewed by a private carrier?',
      answer:
        'Citizens Property Insurance Corporation is Florida\'s insurer of last resort and accepts eligible homeowners who cannot find coverage in the private market. However, Citizens has eligibility requirements and is actively depopulating — a private market option is usually preferable when available.',
    },
    {
      question: 'What should I do the day I receive a non-renewal notice?',
      answer:
        'Read the notice carefully to confirm the effective date and reason. Then contact an independent insurance agent immediately — do not wait until the final week. The earlier you start shopping, the more carrier options you have. Gather your current declarations page, any wind mitigation or 4-point inspection reports, and your home\'s year of construction.',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sunshinestateinsured.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Florida Homeowners Insurance Non-Renewal Deadline',
            item: 'https://www.sunshinestateinsured.com/florida-homeowners-insurance-non-renewal-deadlin',
          },
        ],
      },
      {
        '@type': 'Article',
        headline: 'Florida Homeowners Insurance Non-Renewal Deadline: What You Must Do in 45 Days',
        datePublished: '2025-01-15',
        dateModified: '2025-07-14',
        author: {
          '@type': 'Person',
          name: 'Sunshine State Insured',
          jobTitle: 'Licensed Florida Insurance Agent',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Sunshine State Insured',
          url: 'https://www.sunshinestateinsured.com',
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#FAFAF7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1B3A4B]" style={{ fontFamily: 'var(--font-dm-serif)' }}>
            Sunshine State Insured
          </Link>
          <a
            href="tel:14356121009"
            className="bg-[#E8572A] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-[#d04a20] transition"
          >
            Call (435) 612-1009
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1B3A4B] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#E8572A] font-semibold text-sm uppercase tracking-wide mb-3">
            Florida Insurance Non-Renewal — Act Within 45 Days
           <a href="/best-home-insurance-companies-florida-2026">best home insurance compa…</a></p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-dm-serif)' }}
          >
            Florida Homeowners Insurance Non-Renewal Deadline: What You Must Do Before Time Runs Out
          </h1>

          <p className="direct-answer-summary text-xl text-gray-300 mb-4 max-w-2xl">
            Florida law (Statute 627.728) requires your insurer to give you at least 45 days written notice before non-renewing your homeowners policy. Once that clock starts, you have a hard deadline to find replacement coverage — or face a lapse that triggers expensive lender-placed insurance. We can get you covered before your deadline.
           <a href="/best-homeowners-insurance-florida-2026">best homeowners insurance…</a></p>
      <section className="wm-trust rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 text-sm text-emerald-950">
        <div>Florida License W942527</div>
        <div>Licensed Independent Insurance Agent</div>
        <div>Access to Florida's admitted market</div>
        <div>Not tied to one carrier</div>
        <a href="tel:14356121009" className="font-semibold underline">Call (435) 612-1009</a>
      </section>


          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="tel:14356121009"
              className="inline-block bg-[#E8572A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d04a20] transition text-center cta-pulse"
            >
              Call Now for Immediate Help
            </a>
            <Link
              href="/get-a-quote"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1B3A4B] transition text-center"
            >
              Get a Free Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#0f766e] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium justify-center md:justify-start">
          <span>Florida License #W942527</span>
          <span>Licensed Independent Insurance Agent</span>
          <span>Access to Florida&apos;s admitted market</span>
          <span>Not tied to one carrier</span>
          <span>Phone (435) 612-1009</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-[#0f766e]" style={{ fontFamily: 'var(--font-dm-serif)' }}>45</p>
            <p className="text-sm text-gray-600 mt-1">Days statutory notice required <a href="/cheapest-home-insurance-fort-lauderdale">cheapest home insurance f…</a></p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f766e]" style={{ fontFamily: 'var(--font-dm-serif)' }}>627.728</p>
            <p className="text-sm text-gray-600 mt-1">Florida Statute governing non-renewals <a href="/citizens-insurance-vs-private-market-florida">citizens insurance vs pri…</a></p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f766e]" style={{ fontFamily: 'var(--font-dm-serif)' }}>1.3M+</p>
            <p className="text-sm text-gray-600 mt-1">Citizens policies as carriers exit Florida <a href="/condo-insurance-vs-homeowners-florida">condo insurance vs homeow…</a></p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#0f766e]" style={{ fontFamily: 'var(--font-dm-serif)' }}>$0</p>
            <p className="text-sm text-gray-600 mt-1">Cost to get a replacement quote today</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 prose">

        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>What Is a Florida Homeowners Insurance Non-Renewal?</h2>
          <p>
            A non-renewal is a decision by your insurance company not to continue your policy when it reaches its expiration date. Unlike a cancellation mid-term, a non-renewal takes effect at the end of your current policy period. Under <strong>Florida Statute 627.728</strong>, your insurer must deliver written notice of non-renewal at least <strong>45 days before your policy expires</strong>.
          </p>
          <p>
            Non-renewals have surged across Florida since 2020 as carriers have exited the state, restricted their books of business, or tightened underwriting guidelines in response to hurricane losses and litigation costs. Receiving a non-renewal notice does not mean you did something wrong — it often reflects a carrier’s statewide business decision rather than anything specific to your property.
          </p>
          <p>
            What matters now is the deadline. The 45-day window is not a suggestion — it is the minimum time the law guarantees you to find replacement coverage. Many homeowners wait too long and find themselves scrambling in the final week with fewer options and higher premiums.
          </p>
        </section>

        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>What Happens If You Miss the Non-Renewal Deadline?</h2>
          <p>
            If your policy expires without replacement coverage in place and you carry a mortgage, your lender will purchase <strong>force-placed insurance</strong> on your behalf. This is not a favor — it is a protection mechanism for the lender, not for you.
          </p>
          <div className="stat-callout">
            <p className="number">3–5×</p>
            <p className="mt-2 text-teal-100 text-lg">Force-placed insurance typically costs 3 to 5 times more than a voluntary replacement policy — and covers only the structure, not your belongings, liability, or additional living expenses.</p>
          </div>
          <p>
            Beyond cost, a coverage lapse creates a gap in your claims history that future insurers will scrutinize. Some carriers treat a lapse of even 30 days as a significant underwriting risk factor, which can limit your options and raise your premiums for years.
          </p>
          <p>
            The consequence is clear: act before the deadline. The relief is equally clear: replacement coverage is available in Florida’s admitted and surplus lines markets, and an independent agent can find it faster than going carrier-by-carrier on your own.
          </p>
        </section>

        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>Your 45-Day Action Plan After Receiving a Non-Renewal Notice</h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Read the notice carefully on day one',
                body: 'Confirm the exact expiration date and the stated reason for non-renewal. Florida law requires the reason to be stated. Note whether the notice was delivered at least 45 days before expiration — if not, you may have additional rights under Statute 627.728.',
              },
              {
                step: '2',
                title: 'Gather your documents immediately',
                body: 'Pull your current declarations page, any wind mitigation inspection report, 4-point inspection report, and your home’s year of construction. These documents speed up the quoting process significantly and can unlock discounts with replacement carriers.',
              },
              {
                step: '3',
                title: 'Contact an independent agent — not just one carrier',
                body: 'An independent agent has access to multiple admitted Florida carriers and surplus lines markets. Going directly to a single carrier limits your options. The earlier you call, the more time your agent has to shop your risk properly.',
              },
              {
                step: '4',
                title: 'Compare quotes on coverage, not just price',
                body: 'Review dwelling coverage limits, replacement cost vs. actual cash value, wind and hail deductibles, and flood exclusions. A policy that looks cheaper may leave you significantly underinsured after a storm.',
              },
              {
                step: '5',
                title: 'Bind coverage before your expiration date',
                body: 'Do not wait for the final day. Binding coverage early gives you time to resolve any underwriting questions, schedule any required inspections, and confirm your mortgage lender has the updated policy information.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B3A4B] mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>Why Are Florida Insurers Non-Renewing So Many Policies?</h2>
          <p>
            Florida’s insurance market has been under severe stress since 2017. Hurricane Irma, Hurricane Michael, Hurricane Ian, and Hurricane Idalia collectively caused hundreds of billions in insured losses. Simultaneously, Florida became the most litigated insurance state in the country, with assignment-of-benefits fraud and attorney fee multipliers driving up claims costs even in non-catastrophe years.
          </p>
          <p>
            Between 2020 and 2024, more than a dozen carriers became insolvent or voluntarily withdrew from Florida. Those that remain have responded by non-renewing policies in high-risk ZIP codes, tightening roof age requirements (many carriers now decline homes with roofs older than 15–20 years), and raising premiums aggressively.
          </p>
          <p>
            The Florida Legislature passed significant reforms in 2022 and 2023 aimed at reducing litigation and stabilizing the market. Reinsurance costs have begun to moderate, and a small number of new carriers have entered the state. However, the full effect of these reforms will take several years to flow through to consumer premiums and carrier appetite.
          </p>
          <p>
            In the meantime, homeowners receiving non-renewal notices should understand that the market, while difficult, is not closed. Independent agents with deep Florida market knowledge can access carriers and programs that are not available directly to consumers.
           <a href="/florida-home-insurance-cost-calculator">florida home insurance co…</a></p>
        </section>

        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>How to Find Replacement Coverage After a Non-Renewal</h2>
          <p>
            Your replacement options depend on your home’s location, age, construction type, roof condition, and claims history. Here is how the market is structured:
           <a href="/4-point-inspection-florida-home-insurance">4 point inspection florid…</a></p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: 'Admitted Florida Carriers',
                desc: 'State-regulated insurers that file rates with the Florida Office of Insurance Regulation. Policies are backed by the Florida Insurance Guaranty Association (FIGA) if the carrier becomes insolvent. This is the preferred market when available.',
              },
              {
                title: 'Surplus Lines Market',
                desc: 'Non-admitted carriers that can write risks the admitted market declines. Rates are not regulated by the state, but coverage can be comprehensive. Not backed by FIGA, so carrier financial strength matters more.',
              },
              {
                title: 'Citizens Property Insurance',
                desc: 'Florida’s state-backed insurer of last resort. Available when you cannot find coverage in the private market at a rate within 20% of Citizens\u2019 rate. Citizens is actively depopulating — private market options are preferable when available.',
              },
              {
                title: 'Specialty Programs',
                desc: 'Some carriers offer programs for older homes, coastal properties, or homes with prior claims. An independent agent with Florida market access can identify these programs, which are not advertised directly to consumers.',
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0f766e] mb-2" style={{ fontFamily: 'var(--font-dm-serif)' }}>{card.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="mb-12 p-6 bg-teal-50 rounded-xl border border-teal-100">
          <h2 className="text-xl font-semibold text-[#1B3A4B] mb-4" style={{ fontFamily: 'var(--font-dm-serif)' }}>Related Florida Insurance Guides</h2>
          <div className="space-y-3">
            <p>
              <Link href="/affordable-home-insurance-florida" className="text-[#0f766e] font-medium hover:underline">
                How to find affordable home insurance in Florida in 2026
              </Link>{' '}
              — strategies to lower your premium even after a non-renewal.
            </p>
            <p>
              <Link href="/florida-home-insurance-dropped" className="text-[#0f766e] font-medium hover:underline">
                What to do when your Florida home insurance is dropped
              </Link>{' '}
              — step-by-step guide for homeowners who received a cancellation or non-renewal.
            </p>
            <p>
              <Link href="/get-a-quote" className="text-[#0f766e] font-medium hover:underline">
                Get a free replacement quote before your deadline
              </Link>{' '}
              — takes less than 2 minutes to start.
            </p>
          </div>
        
      <nav aria-label="Related resources" data-wm-seo-links="1">
        <a href="/florida-homeowners-insurance-non-renewal-deadlin">florida homeowners insura…</a>
        <a href="/contact">contact</a>
      </nav>
</section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-dm-serif)' }}>Frequently Asked Questions About Florida Non-Renewal Deadlines</h2>
          <div className="space-y-6 mt-6">
            {faqItems.map((item) => (
              <div key={item.question} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1B3A4B]