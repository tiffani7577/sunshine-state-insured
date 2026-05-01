import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Florida Second Home Insurance | Vacation Property Coverage 2026',
  description: 'Insure your Florida vacation home or second property. Specialized coverage for seasonal residences, short-term rentals, and investment properties. Get quotes from licensed Florida agents.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/florida-second-home-vacation-property-insurance' },
  openGraph: {
    title: 'Florida Second Home Insurance | Vacation Property Coverage',
    description: 'Specialized insurance for Florida vacation homes, second properties, and seasonal residences. Coverage designed for properties you don\'t live in year-round.',
    url: 'https://www.sunshinestateinsured.com/florida-second-home-vacation-property-insurance',
    type: 'article',
  },
}

export default function SecondHomeInsurance() {
  const faqs = [
    {
      q: 'What is second home insurance in Florida?',
      a: 'Second home insurance is a specialized policy designed for properties you don\'t occupy as your primary residence. It covers vacation homes, seasonal properties, and investment properties with coverage tailored to the unique risks of vacant or occasionally-occupied homes.',
    },
    {
      q: 'Why is second home insurance more expensive than primary home insurance?',
      a: 'Second homes are considered higher risk because they\'re vacant for extended periods, which increases exposure to theft, vandalism, water damage, and weather damage. Insurers charge higher premiums to account for these increased risks and longer response times to claims.',
    },
    {
      q: 'Can I use my primary home insurance policy for my vacation property?',
      a: 'No. Most homeowners policies explicitly exclude properties that are vacant for more than 30-60 days. Using a primary home policy for a second property could result in claim denial. You need a separate policy designed for second homes.',
    },
    {
      q: 'What does Florida second home insurance cover?',
      a: 'Typical coverage includes dwelling protection, personal property, liability, and additional living expenses. However, coverage is often more limited than primary home policies. Flood and windstorm are typically excluded and must be purchased separately.',
    },
    {
      q: 'How much does second home insurance cost in Florida?',
      a: 'Costs vary widely based on location, property value, age, and how often you occupy it. Expect to pay 15-50% more than primary home insurance. Coastal properties and those in high-risk areas cost significantly more.',
    },
    {
      q: 'Do I need flood insurance for my Florida second home?',
      a: 'If your property is in a flood zone (which most Florida coastal and many inland properties are), flood insurance is essential. Standard homeowners policies don\'t cover flood damage. Mortgage lenders typically require it for properties with mortgages.',
    },
    {
      q: 'Can I rent out my second home and still use homeowners insurance?',
      a: 'No. If you rent your property short-term or long-term, you need landlord/investment property insurance (DP-3 policy), not second home insurance. Homeowners policies exclude rental income and liability from tenant activities.',
    },
    {
      q: 'What discounts are available for second homes in Florida?',
      a: 'Common discounts include bundling with primary home insurance, security system discounts, claims-free discounts, and paying in full. Some insurers offer discounts for properties occupied for a minimum number of days per year.',
    },
  ]

  const relatedTopics = [
    { title: 'Landlord Insurance Florida', href: '/landlord-insurance-florida', desc: 'If you rent your property long-term' },
    { title: 'Flood Insurance Broward County', href: '/flood-insurance-broward-county', desc: 'Essential for coastal second homes' },
    { title: 'Home Insurance for Older Homes', href: '/home-insurance-for-older-homes-florida', desc: 'If your second home is an older property' },
    { title: 'What Does Homeowners Insurance Cover', href: '/what-does-florida-homeowners-insurance-cover', desc: 'Understand coverage limits and exclusions' },
    { title: 'How to Lower Home Insurance Premium', href: '/how-to-lower-home-insurance-premium-florida', desc: 'Ways to reduce your second home insurance costs' },
    { title: 'Wind Mitigation Inspection', href: '/wind-mitigation-inspection-fort-lauderdale', desc: 'Get discounts on coastal properties' },
  ]

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-r from-teal-600 to-teal-700 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-semibold">Specialized Coverage for Seasonal Properties</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Florida Second Home Insurance<br />
              <span className="text-teal-100">Coverage Built for Vacation Properties</span>
            </h1>
            <p className="text-teal-50 text-lg sm:text-xl leading-relaxed mb-8">
              Your vacation home or seasonal property needs specialized insurance. We help Florida homeowners find affordable, comprehensive coverage designed specifically for second homes and vacation properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-teal-700 font-bold py-4 px-8 rounded-xl transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Block (AEO) */}
      <section className="bg-blue-50 border-l-4 border-blue-500 py-8 px-6 mb-12 max-w-6xl mx-auto mt-12">
        <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-lg text-gray-900 leading-relaxed">
          Second home insurance in Florida is a specialized policy for vacation homes and seasonal properties you don't occupy year-round. It costs 15-50% more than primary home insurance because vacant properties face higher risks of theft, vandalism, and weather damage. You cannot use your primary home policy for a second property—most policies exclude coverage for properties vacant more than 30-60 days. Costs vary by location, property value, and occupancy, with coastal properties typically costing significantly more.
        </p>
      </section>

      {/* Why Second Home Insurance is Different */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Why It Matters</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">Why Second Home Insurance Differs from Primary Home Coverage</h2>
          <p className="text-gray-600 text-lg">Your vacation home faces unique risks that standard homeowners policies don't cover.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏚️</div>
            <h3 className="font-semibold text-gray-900 text-xl mb-3">Extended Vacancy Risk</h3>
            <p className="text-gray-600 leading-relaxed">
              Vacant properties are targets for theft and vandalism. Water damage from frozen pipes or leaks goes undetected longer. Weather damage accumulates without immediate repair.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-semibold text-gray-900 text-xl mb-3">Higher Premiums, Limited Coverage</h3>
            <p className="text-gray-600 leading-relaxed">
              Insurers charge more for second homes because claims are more frequent and costly. Coverage limits are often lower, and exclusions are stricter than primary home policies.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="font-semibold text-gray-900 text-xl mb-3">Flood & Windstorm Exclusions</h3>
            <p className="text-gray-600 leading-relaxed">
              Most second home policies exclude flood and windstorm damage. In Florida, these are critical exposures. You must purchase separate policies for these risks.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-semibold text-gray-900 text-xl mb-3">Occupancy Requirements</h3>
            <p className="text-gray-600 leading-relaxed">
              Second home policies require minimum occupancy (often 30-60 days per year). If you don't meet occupancy thresholds, your coverage may be void or require a different policy type.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Coverage Options</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">What Florida Second Home Insurance Covers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Dwelling Coverage',
                desc: 'Protects the structure of your home against covered perils like fire, theft, and vandalism. Coverage limits are typically lower than primary home policies.',
              },
              {
                title: 'Personal Property',
                desc: 'Covers your belongings inside the home (furniture, electronics, etc.). Limits are often 50-70% of dwelling coverage, and some items have sub-limits.',
              },
              {
                title: 'Liability Protection',
                desc: 'Covers legal liability if someone is injured on your property or you accidentally damage someone else\'s property. Typically $100K-$300K in coverage.',
              },
              {
                title: 'Additional Living Expenses',
                desc: 'If your home becomes uninhabitable due to a covered loss, this covers temporary housing, food, and other living costs while repairs are made.',
              },
              {
                title: 'Flood Insurance (Separate)',
                desc: 'Not included in standard policies. Required if your property is in a flood zone. Must be purchased separately through the National Flood Insurance Program or private insurers.',
              },
              {
                title: 'Windstorm Insurance (Separate)',
                desc: 'Covers damage from hurricanes and windstorms. In Florida, this is often excluded from standard policies and must be purchased separately.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Pricing Factors</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">What Affects Your Second Home Insurance Cost</h2>
        </div>

        <div className="space-y-4">
          {[
            { factor: 'Location', impact: 'Coastal properties cost 30-50% more. High-risk areas (Miami-Dade, Broward) have higher premiums.' },
            { factor: 'Property Age', impact: 'Homes built before 1980 cost more. Older roofs significantly increase premiums.' },
            { factor: 'Occupancy Level', impact: 'Properties occupied fewer days per year cost more. Some insurers require 30-60 days minimum occupancy.' },
            { factor: 'Distance from Primary Home', impact: 'Properties far from your primary residence cost more (higher claim response time).' },
            { factor: 'Roof Condition', impact: 'Roofs over 15 years old increase premiums by 25-40%. Newer roofs qualify for discounts.' },
            { factor: 'Security Features', impact: 'Alarms, deadbolts, and security systems can reduce premiums by 5-15%.' },
            { factor: 'Claims History', impact: 'Previous claims on the property increase premiums. Claims-free properties get discounts.' },
            { factor: 'Deductible Choice', impact: 'Higher deductibles ($2,500+) lower premiums. Lower deductibles ($500-$1,000) increase premiums.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-teal-700 font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.factor}</h3>
                <p className="text-gray-600 text-sm">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ways to Save */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Cost Reduction</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">How to Lower Your Second Home Insurance Costs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Bundle Policies',
                desc: 'Insure your primary and second home with the same carrier for 10-25% discount.',
              },
              {
                title: 'Increase Occupancy',
                desc: 'Staying at your property more often (30+ days/year) can reduce premiums by 10-20%.',
              },
              {
                title: 'Upgrade Security',
                desc: 'Install alarms, deadbolts, and security cameras for 5-15% discount.',
              },
              {
                title: 'Maintain the Property',
                desc: 'Regular maintenance and roof inspections can prevent claims and reduce premiums.',
              },
              {
                title: 'Raise Your Deductible',
                desc: 'Moving from $500 to $2,500 deductible can save 15-30% on premiums.',
              },
              {
                title: 'Ask About Discounts',
                desc: 'Inquire about claims-free discounts, loyalty discounts, and occupancy-based discounts.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-teal-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Home vs Landlord Insurance */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Know the Difference</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-4">Second Home Insurance vs. Landlord Insurance</h2>
          <p className="text-gray-600 text-lg">Not sure which policy you need? Here's the difference:</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Second Home Insurance</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Landlord Insurance (DP-3)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">Use</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Vacation/seasonal property you occupy</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Investment property rented to tenants</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">Occupancy</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">30-60+ days per year</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Tenant-occupied (0 days owner)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">Coverage</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Dwelling, personal property, liability</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Dwelling only (no personal property)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">Liability</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Homeowner liability</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">Landlord liability (tenant injuries)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">Cost</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">15-50% more than primary home</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-600">20-40% more than second home</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-sm mt-6 italic">
          <strong>Important:</strong> If you rent your second home (even short-term), you must use landlord insurance, not second home insurance. Using the wrong policy type could result in claim denial.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Common Questions About Florida Second Home Insurance</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer group hover:border-teal-300 transition-colors">
                <summary className="font-semibold text-gray-900 text-lg flex items-center justify-between">
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Related Topics</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Learn More About Florida Home Insurance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTopics.map((topic, i) => (
            <Link
              key={i}
              href={topic.href}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">{topic.desc}</p>
              <div className="mt-4 flex items-center text-teal-600 text-sm font-semibold">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Ready to Protect Your Florida Vacation Home?</h2>
          <p className="text-teal-50 text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized quote for second home insurance. Our licensed Florida agents understand the unique risks of vacation properties and can find you the best coverage at the right price.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-teal-700 font-bold py-4 px-10 rounded-xl text-lg transition-colors"
          >
            Get Your Quote Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
