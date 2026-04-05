import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Insurance After Cancellation Florida | Get Covered Again Fast',
  description: 'Lost your Florida home insurance? Find out how to get covered again after a cancellation or non-renewal. Options for high-risk homes, old roofs, and claims history.',
  keywords: ['home insurance after cancellation Florida', 'Florida home insurance non-renewal', 'insurance dropped Florida', 'high risk home insurance Florida', 'home insurance after claim Florida'],
  openGraph: {
    title: 'Home Insurance After Cancellation Florida | Get Covered Again Fast',
    description: 'Lost your Florida home insurance? Find out how to get covered again.',
    url: 'https://www.sunshinestateinsured.com/home-insurance-after-cancellation-florida',
  },
}

export default function HomeInsuranceAfterCancellationPage() {
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
          <p className="text-[#E8572A] font-semibold text-sm uppercase tracking-wide mb-3">Florida Insurance Help</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Home Insurance After Cancellation in Florida: Your Options</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Getting dropped by your insurer in Florida is more common than ever. Here's exactly what to do next — and how to find coverage fast before your mortgage lender force-places a policy.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d04a20] transition">
            Get Coverage Now — Call (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-4">Why Florida Insurers Are Canceling and Non-Renewing Policies</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Since 2020, Florida has seen an unprecedented wave of insurance cancellations and non-renewals. More than a dozen carriers have exited the state or gone insolvent, leaving hundreds of thousands of homeowners scrambling for coverage. If you received a non-renewal notice, you are not alone.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The most common reasons Florida insurers cancel or non-renew policies include: roofs over 15–20 years old, prior claims (especially water damage or hurricane claims), homes in high-risk coastal zones, older electrical systems (knob-and-tube or aluminum wiring), and general portfolio reductions as carriers exit the Florida market.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Florida law requires insurers to give you at least 45 days notice before non-renewal (120 days for policies in effect more than 90 days). A cancellation mid-term requires only 45 days notice for most reasons. Use that time to find replacement coverage before the lapse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-6">Your Options After a Cancellation or Non-Renewal</h2>
          <div className="space-y-5">
            {[
              { title: 'Shop the Private Market First', desc: 'Even if one carrier dropped you, others may still write your home. Florida has dozens of admitted and surplus lines carriers with different underwriting appetites. An independent agent with access to multiple markets is your best starting point. Carriers like Slide, Heritage, Universal, and Demotech-rated regional companies may accept risks that larger carriers avoid.' },
              { title: 'Citizens Property Insurance', desc: 'Citizens is Florida\'s insurer of last resort, backed by the state. If you cannot find coverage in the private market at a reasonable price, Citizens must cover you (with some exceptions). Rates are regulated and often lower than surplus lines alternatives. However, Citizens is actively depopulating — you may be moved to a private carrier after a year or two.' },
              { title: 'Surplus Lines Carriers', desc: 'Surplus lines insurers are not admitted in Florida but are licensed to write coverage for high-risk properties. They typically charge more than admitted carriers but will cover homes that admitted carriers won\'t — including older roofs, homes with prior claims, and coastal properties. Lloyd\'s of London syndicates and other E&S carriers operate in this space.' },
              { title: 'Make Repairs to Qualify for Better Coverage', desc: 'If your cancellation was due to a roof age or condition issue, replacing the roof may open up significantly better and cheaper coverage options. The cost of a new roof ($8,000–$20,000) can be offset by lower premiums and better coverage terms over 3–5 years.' },
              { title: 'Avoid Force-Placed Insurance', desc: 'If you have a mortgage and let your coverage lapse, your lender will purchase force-placed (lender-placed) insurance on your behalf and charge you for it. Force-placed insurance is typically 2–5x more expensive than voluntary coverage and only protects the lender\'s interest — not your personal property or liability. Avoid this at all costs.' },
            ].map(item => (
              <div key={item.title} className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#1B3A4B] mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1B3A4B] mb-4">⚠️ Act Fast — You Have a Limited Window</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A lapse in coverage — even for a single day — can make it harder to find new coverage and gives your lender grounds to force-place insurance. If you received a cancellation or non-renewal notice, start shopping for replacement coverage immediately, not on the last day of your policy.
          </p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d04a20] transition">
            Call Now — (435) 612-1009
          </a>
        </section>

        <section className="bg-[#1B3A4B] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Covered Again Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists work with multiple Florida carriers to find coverage for difficult-to-insure homes. Old roofs, prior claims, coastal properties — we know who will write your home.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#d04a20] transition">
            Call (435) 612-1009 — Get Covered Fast
          </a>
          <p className="text-gray-400 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-[#1B3A4B] mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/home-insurance-dropped-by-carrier-florida', label: 'What to Do If Your Insurer Drops You' },
              { href: '/home-insurance-with-roof-over-15-years-florida', label: 'Home Insurance With an Old Roof' },
              { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens Insurance vs. Private Market' },
              { href: '/affordable-home-insurance-florida', label: 'Finding Affordable Home Insurance in Florida' },
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
