import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.sunshinestateinsured.com/affordable-home-insurance-florida' },
  openGraph: {
    title: 'Affordable Home Insurance Florida 2026',
    description: 'Find affordable Florida home insurance in 2026. Compare carriers, discounts, and strategies to lower your premium.',
    url: 'https://www.sunshinestateinsured.com/affordable-home-insurance-florida',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: 'Affordable Home Insurance Florida 2026' }],
    type: 'website',
    locale: 'en_US',
  },
  title: 'Affordable Home Insurance Florida 2026',
  description: "Find affordable Florida home insurance in 2026. Compare carriers, discounts, and strategies to lower your premium — even in today's hard market.",
  keywords: ['affordable home insurance Florida', 'cheap home insurance Florida', 'low cost homeowners insurance Florida', 'Florida home insurance discount', 'reduce home insurance premium Florida'],
}

export default function AffordableHomeInsurancePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1B3A4B]">Sunshine State Insured</Link>
          <a href="tel:4356121009" className="bg-[#E8572A] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-[#d04a20] transition">
            Call (435) 612-1009
          </a>
        </div>
      </nav>

      <section className="bg-[#1B3A4B] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#E8572A] font-semibold text-sm uppercase tracking-wide mb-3">Florida Home Insurance 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Affordable Home Insurance in Florida: How to Lower Your Premium in 2026</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Florida homeowners pay some of the highest insurance rates in the nation — but there are real strategies to reduce your premium without sacrificing coverage.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d04a20] transition">
            Get a Free Quote — Call (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-4">Why Florida Home Insurance Is So Expensive</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Florida homeowners pay an average of $3,600–$5,000 per year for home insurance — nearly three times the national average. The reasons are well-documented: hurricane exposure, litigation costs, reinsurance pricing, and a shrinking pool of carriers willing to write policies in the state.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Between 2020 and 2024, more than a dozen insurance companies left Florida entirely or went insolvent. Those that remain have raised rates aggressively. Citizens Property Insurance — the state-backed insurer of last resort — now covers over 1.3 million policies and is actively depopulating by pushing customers to private carriers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Despite this environment, there are legitimate strategies to find more affordable coverage. The key is knowing which factors you can control and which discounts you qualify for.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-6">7 Ways to Get More Affordable Home Insurance in Florida</h2>
          <div className="space-y-5">
            {[
              { num: '1', title: 'Get a Wind Mitigation Inspection', desc: "A wind mitigation inspection ($75–$150) documents your home\'s hurricane-resistant features — roof shape, roof covering, roof deck attachment, and opening protection. Insurers are required by Florida law to offer discounts for these features. Homeowners with hip roofs and impact windows routinely save $500–$2,000 per year." },
              { num: '2', title: 'Replace Your Roof', desc: 'Roof age is the single biggest factor in Florida home insurance pricing. A roof over 15–20 years old can make your home uninsurable with many carriers, or result in actual cash value (ACV) coverage instead of replacement cost. A new roof can reduce your premium by 20–40% and open up more carrier options.' },
              { num: '3', title: 'Raise Your Deductible', desc: 'Increasing your all-other-perils (AOP) deductible from $1,000 to $2,500 or $5,000 can lower your annual premium by 10–25%. This works best if you have emergency savings to cover the higher deductible. Note: your hurricane deductible is separate and typically set as a percentage of your insured value.' },
              { num: '4', title: 'Shop Multiple Carriers', desc: 'Florida has dozens of admitted and surplus lines carriers with very different pricing models. The same home can have a $2,000 premium with one carrier and $4,500 with another. Working with an independent agent who has access to multiple markets is the fastest way to find competitive pricing.' },
              { num: '5', title: 'Bundle Home and Auto', desc: 'Bundling your home and auto insurance with the same carrier typically saves 5–15% on both policies. Not all Florida carriers offer both lines, but those that do — like Universal, Slide, and Heritage — offer meaningful multi-policy discounts.' },
              { num: '6', title: 'Install a Security System', desc: 'Central station monitored alarm systems qualify for discounts with most carriers. Smoke detectors, deadbolt locks, and fire extinguishers also contribute to credits. These discounts are typically 2–5% but add up over time.' },
              { num: '7', title: 'Consider Citizens Property Insurance', desc: 'If private market rates are unaffordable, Citizens Property Insurance is the state-backed option. Rates are regulated and often lower than private carriers for certain risk profiles — particularly older homes in coastal areas. However, Citizens has limitations on coverage amounts and is actively trying to reduce its policy count.' },
            ].map(item => (
              <div key={item.num} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-[#1B3A4B] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{item.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A4B] mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-4">Average Home Insurance Rates by Florida County (2026)</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">Rates vary significantly by location. Coastal counties in South Florida pay the most, while inland counties in Central Florida tend to have lower premiums.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#1B3A4B] text-white">
                  <th className="text-left p-4 rounded-tl-xl">County</th>
                  <th className="text-left p-4">Avg Annual Premium</th>
                  <th className="text-left p-4 rounded-tr-xl">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Miami-Dade', '$5,200–$8,500', 'Very High'],
                  ['Broward', '$4,800–$7,200', 'Very High'],
                  ['Palm Beach', '$4,500–$6,800', 'High'],
                  ['Monroe (Keys)', '$6,000–$12,000+', 'Extreme'],
                  ['Collier', '$4,200–$6,500', 'High'],
                  ['Hillsborough', '$2,800–$4,200', 'Moderate'],
                  ['Orange (Orlando)', '$2,400–$3,800', 'Moderate'],
                  ['Duval (Jacksonville)', '$2,200–$3,500', 'Moderate'],
                ].map(([county, rate, risk], i) => (
                  <tr key={county} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-[#1B3A4B]">{county}</td>
                    <td className="p-4 text-gray-700">{rate}</td>
                    <td className="p-4"><span className={`px-2 py-1 rounded text-xs font-semibold ${risk === 'Extreme' ? 'bg-red-100 text-red-700' : risk === 'Very High' ? 'bg-orange-100 text-orange-700' : risk === 'High' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{risk}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-[#1B3A4B] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Affordable Coverage Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists compare rates across multiple Florida carriers to find you the best coverage at the lowest price. Call now for a free, no-obligation quote.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#d04a20] transition">
            Call (435) 612-1009 — Free Quote
          </a>
          <p className="text-gray-400 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-[#1B3A4B] mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to Lower Your Home Insurance Premium' },
              { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'Wind Mitigation Inspections in Fort Lauderdale' },
              { href: '/home-insurance-with-roof-over-15-years-florida', label: 'Home Insurance With an Old Roof' },
              { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens Insurance vs. Private Market' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#E8572A] transition text-[#1B3A4B] font-medium">
                <span className="text-[#E8572A]">→</span> {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
