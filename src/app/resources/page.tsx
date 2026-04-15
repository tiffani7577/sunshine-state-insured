import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Florida Home Insurance Resources & Guides',
  description: "Free guides for Florida homeowners on insurance costs, coverage, carriers, and how to lower your premium. Written by a licensed FL insurance agent.",
  alternates: { canonical: 'https://www.sunshinestateinsured.com/resources' },
  openGraph: {
    title: 'Florida Home Insurance Resources & Guides',
    description: "Free guides for Florida homeowners on insurance costs, coverage, carriers, and how to lower your premium.",
    url: 'https://www.sunshinestateinsured.com/resources',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
}

const categories = [
  {
    title: "Understanding Florida's Insurance Crisis",
    description: "Why Florida home insurance is so expensive and what's driving the market.",
    articles: [
      { href: '/why-is-florida-home-insurance-so-expensive', label: "Why Is Florida Home Insurance So Expensive?", desc: "7 data-backed reasons Florida homeowners pay $8,292/yr — nearly 3x the national average." },
      { href: '/citizens-insurance-vs-private-market-florida', label: "Citizens Insurance vs. Private Market: Which Is Right for You?", desc: "When Citizens makes sense and when you should be in the private market." },
      { href: '/home-insurance-dropped-by-carrier-florida', label: "Home Insurance Dropped by Carrier in Florida", desc: "What to do immediately if you received a non-renewal notice. You have 120 days." },
      { href: '/best-home-insurance-companies-florida-2026', label: "Best Home Insurance Companies in Florida 2026", desc: "Top-rated carriers currently writing policies in Florida, ranked by financial strength and value." },
      { href: '/best-homeowners-insurance-florida-2026', label: "Best Homeowners Insurance Florida 2026", desc: "Updated rankings for 2026 based on current market availability and pricing." },
    ]
  },
  {
    title: "Reducing Your Premium",
    description: "Proven strategies to lower what you pay without sacrificing coverage.",
    articles: [
      { href: '/how-to-lower-home-insurance-premium-florida', label: "9 Proven Ways to Lower Your Florida Home Insurance Premium", desc: "Most homeowners can save $500–$2,400/year. Start with a wind mitigation inspection." },
      { href: '/wind-mitigation-inspection-fort-lauderdale', label: "Wind Mitigation Inspections in Fort Lauderdale", desc: "A $150–$200 inspection that can cut your premium by 20–45%. Here's how it works." },
      { href: '/4-point-inspection-florida-home-insurance', label: "4-Point Inspection for Florida Home Insurance", desc: "What carriers look for and how to prepare so it doesn't hurt your coverage." },
      { href: '/how-to-get-off-citizens-insurance-florida', label: "How to Get Off Citizens Insurance in Florida", desc: "Step-by-step guide to moving from Citizens to a private carrier and saving money." },
      { href: '/affordable-home-insurance-florida', label: "Affordable Home Insurance in Florida", desc: "How to find genuinely affordable coverage in the most expensive insurance market in the US." },
      { href: '/cheapest-home-insurance-fort-lauderdale', label: "Cheapest Home Insurance in Fort Lauderdale", desc: "Current rates and the carriers offering the best value in Broward County." },
    ]
  },
  {
    title: "Property-Specific Coverage Issues",
    description: "Insurance challenges tied to your home's specific features or condition.",
    articles: [
      { href: '/home-insurance-with-roof-over-15-years-florida', label: "Home Insurance With a Roof Over 15 Years Old", desc: "Your options when carriers won't cover your older roof — and the real cost of replacing it." },
      { href: '/home-insurance-for-older-homes-florida', label: "Home Insurance for Older Homes in Florida", desc: "Coverage challenges for pre-1990 homes and how to navigate them." },
      { href: '/home-insurance-aluminum-wiring-florida', label: "Home Insurance With Aluminum Wiring in Florida", desc: "Why aluminum wiring is a red flag for carriers and what you can do about it." },
      { href: '/home-insurance-cast-iron-pipes-florida', label: "Home Insurance With Cast Iron Pipes in Florida", desc: "How plumbing age affects your insurability and what carriers require." },
      { href: '/home-insurance-solar-panels-florida', label: "Home Insurance With Solar Panels in Florida", desc: "How solar panels affect your coverage, your premium, and your claim rights." },
      { href: '/home-insurance-pool-florida', label: "Home Insurance With a Pool in Florida", desc: "Liability exposure, coverage requirements, and how pools affect your premium." },
    ]
  },
  {
    title: "Flood & Windstorm Coverage",
    description: "Florida-specific coverage types that standard policies often exclude.",
    articles: [
      { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: "Do I Need Flood Insurance If I'm Not in a Flood Zone?", desc: "25% of flood claims come from outside high-risk zones. Here's how to decide." },
      { href: '/flood-insurance-broward-county', label: "Flood Insurance in Broward County", desc: "NFIP vs. private flood insurance options for Broward homeowners." },
      { href: '/what-does-windstorm-deductible-mean-florida', label: "What Does a Windstorm Deductible Mean in Florida?", desc: "How windstorm deductibles work, how they're calculated, and what you'll owe after a storm." },
      { href: '/hurricane-insurance-claims-florida', label: "Hurricane Insurance Claims in Florida", desc: "How to file, what to document, and how to avoid claim mistakes after a storm." },
    ]
  },
  {
    title: "Specific Situations",
    description: "Guides for homeowners in particular circumstances.",
    articles: [
      { href: '/new-homeowner-insurance-florida-first-time-buyer', label: "Home Insurance for First-Time Buyers in Florida", desc: "What you need to know before closing — and how to avoid overpaying from day one." },
      { href: '/home-insurance-after-cancellation-florida', label: "Home Insurance After a Cancellation in Florida", desc: "How to find coverage after a mid-term cancellation and what carriers will and won't overlook." },
      { href: '/home-insurance-after-hurricane-claim-florida', label: "Home Insurance After a Hurricane Claim", desc: "How claims history affects your future coverage options and what to expect." },
      { href: '/condo-insurance-vs-homeowners-florida', label: "Condo Insurance vs. Homeowners Insurance in Florida", desc: "What your condo association's master policy covers — and what it doesn't." },
      { href: '/mobile-home-insurance-florida', label: "Mobile Home Insurance in Florida", desc: "Coverage options for manufactured and mobile homes, including Citizens eligibility." },
      { href: '/landlord-insurance-florida', label: "Landlord Insurance in Florida", desc: "What rental property owners need beyond a standard homeowners policy." },
    ]
  },
  {
    title: "By Location",
    description: "Local insurance guides for specific Florida counties and cities.",
    articles: [
      { href: '/home-insurance-broward-county', label: "Home Insurance in Broward County", desc: "Rates, carriers, and coverage options specific to Broward County homeowners." },
      { href: '/flood-insurance-broward-county', label: "Flood Insurance in Broward County", desc: "NFIP and private flood options for Broward's flood-prone neighborhoods." },
      { href: '/wind-mitigation-inspection-fort-lauderdale', label: "Wind Mitigation Inspections — Fort Lauderdale", desc: "Local inspectors, costs, and credits available to Fort Lauderdale homeowners." },
      { href: '/cheapest-home-insurance-fort-lauderdale', label: "Cheapest Home Insurance — Fort Lauderdale", desc: "Current market rates and best-value carriers in Fort Lauderdale." },
    ]
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-teal-800 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-2">Free Guides</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Florida Home Insurance Resources</h1>
            <p className="text-teal-100 text-lg max-w-2xl">
              Straightforward guides written by a licensed Florida insurance agent — no fluff, no sales pitch. Just the information you need to make smart decisions about your coverage.
            </p>
            <p className="text-teal-300 text-sm mt-3">Tiffani LeBlanc · FL DFS License #W942527 · (435) 612-1009</p>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {categories.map((cat) => (
            <section key={cat.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-1">{cat.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{cat.description}</p>
              <div className="grid gap-3">
                {cat.articles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="block bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-teal-500 hover:shadow-sm transition-all group"
                  >
                    <p className="font-semibold text-teal-800 group-hover:text-teal-600 mb-1">{article.label}</p>
                    <p className="text-gray-500 text-sm">{article.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <div className="bg-teal-700 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Have a question not covered here?</h2>
            <p className="text-teal-100 mb-5">Call Tiffani directly — licensed Florida insurance agent, no hold music, no call center.</p>
            <a
              href="tel:4356121009"
              className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-lg text-lg hover:bg-teal-50 transition-colors"
            >
              Call (435) 612-1009
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
