import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Florida Homeowners Insurance Dropped by Carrier | Replacement Options 2026',
  description: 'Your insurance company dropped you? Here\'s exactly what to do. Step-by-step action plan, replacement coverage options, and how to get quotes fast.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/florida-homeowners-insurance-dropped-by-carrier' },
  openGraph: {
    title: 'Florida Homeowners Insurance Dropped by Carrier | Replacement Options 2026',
    description: 'Your insurance company dropped you? Here\'s exactly what to do. Step-by-step action plan, replacement coverage options.',
    url: 'https://www.sunshinestateinsured.com/florida-homeowners-insurance-dropped-by-carrier',
    siteName: 'Sunshine State Insured',
    type: 'article',
    locale: 'en_US',
  },
}

export default function DroppedByCarrierPage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero with Phone Number */}
        <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-red-500/50">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></span>
                  Urgent: Dropped by Your Carrier?
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
                  Your Insurance Company Dropped You.
                  <span className="text-teal-300 italic"> Here's What to Do.</span>
                </h1>

                <p className="mt-5 text-teal-100 text-lg sm:text-xl max-w-xl leading-relaxed">
                  580,000+ Florida homeowners were dropped in 2024. You have options. Get replacement coverage fast with our step-by-step action plan.
                </p>

                {/* Call CTA - Prominent Above Fold */}
                <div className="mt-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 mb-6">
                  <p className="text-teal-200 text-sm font-semibold uppercase tracking-wider mb-2">Call Now for Instant Quotes</p>
                  <a
                    href="tel:(435)612-1009"
                    className="inline-flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-colors shadow-lg w-full sm:w-auto"
                  >
                    📞 (435) 612-1009
                  </a>
                  <p className="text-teal-200 text-xs mt-3">Available Mon–Fri, 9am–6pm EST. We'll find you coverage today.</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {['Fast Replacement', 'All Carriers', 'No Hassle'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-teal-200 text-sm">
                      <span className="text-coral-400">✓</span> {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                  <p className="text-teal-300 font-semibold text-sm uppercase tracking-wider mb-4">Key Stats</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-serif text-3xl">580K+</p>
                      <p className="text-teal-200 text-sm">Dropped in 2024</p>
                    </div>
                    <div>
                      <p className="text-white font-serif text-3xl">30 Days</p>
                      <p className="text-teal-200 text-sm">Typical notice period</p>
                    </div>
                    <div>
                      <p className="text-white font-serif text-3xl">3-5 Options</p>
                      <p className="text-teal-200 text-sm">Available to you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Block (AEO) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base">
              If your insurance company dropped you, you have <strong>30 days to find replacement coverage</strong>. Your options include private carriers, Citizens Insurance (the insurer of last resort), or specialty carriers. Most homeowners find coverage within 24 hours. Call us at <strong>(435) 612-1009</strong> for instant quotes from multiple carriers.
            </p>
          </div>
        </section>

        {/* Step-by-Step Action Plan */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="mb-10">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Your Action Plan</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">What to Do When Your Insurance Company Drops You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: 'Read Your Cancellation Notice Carefully',
                desc: 'Your carrier must give you 30 days notice. Check the reason (non-renewal, underwriting review, etc.). Keep this letter — you\'ll need it to apply for new coverage.',
                icon: '📋',
              },
              {
                step: 2,
                title: 'Gather Your Property Documents',
                desc: 'Have ready: property address, home value, year built, roof age, roof type, square footage, claims history (last 5 years), and any wind mitigation inspection reports.',
                icon: '📄',
              },
              {
                step: 3,
                title: 'Call for Quotes Immediately',
                desc: 'Don\'t wait. Call us at (435) 612-1009 or get quotes from multiple carriers. Most homeowners get 3-5 options within 24 hours. Rates vary significantly by carrier.',
                icon: '📞',
              },
              {
                step: 4,
                title: 'Compare Coverage & Rates',
                desc: 'Don\'t just pick the cheapest option. Compare deductibles, coverage limits, exclusions, and financial strength ratings. A $50/month savings isn\'t worth a weak carrier.',
                icon: '⚖️',
              },
              {
                step: 5,
                title: 'Bind Coverage Before Your Current Policy Expires',
                desc: 'Once you choose a carrier, bind coverage immediately. This locks in your rate and ensures no gap in coverage. Your new policy starts on your old policy\'s expiration date.',
                icon: '✓',
              },
              {
                step: 6,
                title: 'Cancel Your Old Policy (Optional)',
                desc: 'If you\'ve bound new coverage, you can cancel the old policy. But don\'t cancel until new coverage is in force. Never have a gap in coverage.',
                icon: '🚫',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-600 text-white text-xs font-bold">
                        {item.step}
                      </span>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Replacement Options */}
        <section className="bg-teal-50 py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Your Coverage Options</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Where to Get Replacement Coverage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Private Carriers',
                  icon: '🏢',
                  pros: ['Best rates', 'Most options', 'Better customer service'],
                  cons: ['May have restrictions', 'Stricter underwriting', 'Limited availability'],
                  best: 'If your home qualifies',
                },
                {
                  title: 'Citizens Insurance',
                  icon: '🛡️',
                  pros: ['Insurer of last resort', 'Accepts most homes', 'Statewide coverage'],
                  cons: ['Higher rates', 'Surcharge possible', 'Limited coverage'],
                  best: 'If private carriers deny you',
                },
                {
                  title: 'Specialty Carriers',
                  icon: '🎯',
                  pros: ['Accept problem properties', 'Roof age flexibility', 'Competitive rates'],
                  cons: ['Limited availability', 'Niche focus', 'May exit market'],
                  best: 'If you have older roof or claims',
                },
                {
                  title: 'Non-Standard Carriers',
                  icon: '⚡',
                  pros: ['Accept high-risk homes', 'Fast underwriting', 'Flexible terms'],
                  cons: ['Higher premiums', 'Weaker financial ratings', 'Limited coverage'],
                  best: 'Last resort option',
                },
              ].map((option) => (
                <div key={option.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{option.icon}</span>
                    <h3 className="font-semibold text-lg text-gray-900">{option.title}</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-green-700 mb-2">✓ Pros:</p>
                      <ul className="space-y-1 text-gray-700">
                        {option.pros.map((pro) => (
                          <li key={pro}>• {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-amber-700 mb-2">⚠ Cons:</p>
                      <ul className="space-y-1 text-gray-700">
                        {option.cons.map((con) => (
                          <li key={con}>• {con}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-teal-700 font-semibold">{option.best}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="mb-10">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">FAQ: Insurance Dropped by Carrier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Why did my insurance company drop me?',
                a: 'Carriers drop policies for several reasons: non-renewal due to claims history, underwriting review (especially after hurricane claims), roof age (over 15 years), property condition, or market exit. Check your cancellation notice for the specific reason.',
              },
              {
                q: 'How long do I have to find new coverage?',
                a: 'You have 30 days from the date of the cancellation notice. This is your grace period. Don\'t wait — the sooner you apply, the sooner you\'ll have options. Some carriers take 5-10 business days to underwrite.',
              },
              {
                q: 'Will my new premium be higher?',
                a: 'Possibly. If you were dropped due to claims or property issues, replacement carriers may charge more. But rates vary significantly. Get quotes from 3-5 carriers to find the best rate for your situation.',
              },
              {
                q: 'Can I get Citizens Insurance immediately?',
                a: 'Citizens can take 2-4 weeks to underwrite. If you\'re close to your expiration date, apply for Citizens AND private carriers at the same time. This ensures you have coverage no matter what.',
              },
              {
                q: 'What if I have a roof over 15 years old?',
                a: 'Most standard carriers won\'t write roofs over 15 years old. Your options: specialty carriers, Citizens Insurance, or non-standard carriers. A roof inspection or replacement can open up better options.',
              },
              {
                q: 'Can I appeal the cancellation?',
                a: 'Not really — non-renewals aren\'t appealable. But if the carrier made an error, you can file a complaint with the Florida Department of Insurance. Focus on finding replacement coverage instead.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="bg-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">Related Guides</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Next Steps After Being Dropped</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: '/citizens-insurance-vs-private-market-florida',
                  title: 'Citizens vs. Private Market',
                  desc: 'When each option makes sense and how to compare rates.',
                },
                {
                  href: '/home-insurance-with-roof-over-15-years-florida',
                  title: 'Roof Over 15 Years Old?',
                  desc: 'Your coverage options and how to qualify for better rates.',
                },
                {
                  href: '/how-to-lower-home-insurance-premium-florida',
                  title: 'Lower Your Premium',
                  desc: 'Proven strategies to reduce your replacement coverage cost.',
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group bg-teal-50 border border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-teal-900 group-hover:text-teal-700 mb-2">{guide.title}</h3>
                  <p className="text-teal-700 text-sm">{guide.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                    Read more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">Don't Wait. Get Replacement Coverage Today.</h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Call us now for instant quotes from multiple carriers. Most homeowners get coverage within 24 hours.
            </p>
            <a
              href="tel:(435)612-1009"
              className="inline-flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg"
            >
              📞 Call (435) 612-1009
            </a>
            <p className="text-teal-200 text-sm mt-4">Mon–Fri, 9am–6pm EST</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
