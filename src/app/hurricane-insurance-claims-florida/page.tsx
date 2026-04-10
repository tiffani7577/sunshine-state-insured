import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Hurricane Insurance Claims Florida | File & Maximize Payout',
  description: 'Step-by-step guide to filing a hurricane insurance claim in Florida. Learn what to document, how to avoid claim denials, and when to hire a public adjuster.',
  keywords: ['hurricane insurance claims Florida', 'file hurricane claim Florida', 'hurricane damage insurance Florida', 'Florida hurricane claim denied', 'public adjuster Florida hurricane'],
  openGraph: {
    title: 'Hurricane Insurance Claims Florida | File & Maximize Payout',
    description: 'Step-by-step guide to filing a hurricane insurance claim in Florida.',
    url: 'https://www.sunshinestateinsured.com/hurricane-insurance-claims-florida',
  },
}

export default function HurricaneInsuranceClaimsPage() {
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
          <p className="text-[#E8572A] font-semibold text-sm uppercase tracking-wide mb-3">Florida Hurricane Claims Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Hurricane Insurance Claims in Florida: A Complete Guide</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Filing a hurricane claim correctly can mean the difference between a full payout and a denied or underpaid claim. Here's exactly what to do — step by step.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d04a20] transition">
            Speak to a Specialist — (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-4">Understanding Your Hurricane Deductible</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Before filing a claim, understand your hurricane deductible — it is almost certainly different from your standard all-other-perils (AOP) deductible. In Florida, hurricane deductibles are typically set as a percentage of your home's insured value: 2%, 5%, or 10% are common options.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            On a home insured for $400,000, a 2% hurricane deductible means you pay the first $8,000 out of pocket. A 5% deductible means $20,000. This is why many smaller hurricane claims — under $10,000–$15,000 in damage — may not be worth filing if your deductible exceeds the damage amount.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The hurricane deductible applies when the National Hurricane Center officially names a storm as a hurricane. Tropical storms and unnamed windstorms typically fall under your standard AOP deductible, which is usually lower.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-6">Step-by-Step: How to File a Hurricane Claim in Florida</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Ensure Safety First', desc: 'Do not enter your home until it is structurally safe. If there is gas, electrical, or structural damage, contact the appropriate utility or emergency services before entering.' },
              { step: '2', title: 'Document Everything Before Cleanup', desc: 'Photograph and video every area of damage before moving anything or making repairs. Capture wide shots and close-ups. This documentation is critical — adjusters and insurers rely on it to assess your claim. Back up photos to cloud storage immediately.' },
              { step: '3', title: 'Make Emergency Temporary Repairs', desc: 'You are required to mitigate further damage. Cover broken windows, tarp damaged roofs, and remove standing water. Keep all receipts — your insurer should reimburse reasonable emergency repair costs. Do not make permanent repairs until the adjuster has inspected.' },
              { step: '4', title: 'File Your Claim Promptly', desc: 'Contact your insurer as soon as possible. Florida law requires insurers to acknowledge your claim within 14 days and make a coverage decision within 90 days. Filing quickly starts this clock and ensures you are in the queue before adjuster backlogs build up after a major storm.' },
              { step: '5', title: 'Meet the Adjuster — and Know Your Rights', desc: 'Your insurer will send an adjuster to inspect the damage. You have the right to be present during the inspection. Take notes, ask questions, and point out all damage — do not assume the adjuster will find everything. You can also hire your own public adjuster to represent your interests.' },
              { step: '6', title: 'Review the Settlement Offer Carefully', desc: 'Do not automatically accept the first settlement offer. Review it against your own documentation and contractor estimates. If the offer seems low, you can dispute it, request a re-inspection, or invoke the appraisal process outlined in your policy.' },
              { step: '7', title: 'Know the Statute of Limitations', desc: 'Florida law gives you 3 years from the date of loss to file a hurricane claim (as of 2023 legislative changes). However, filing sooner is always better — evidence degrades, contractors get booked, and adjusters\' memories fade.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-[#E8572A] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B3A4B] mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1B3A4B] mb-4">When to Hire a Public Adjuster</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A public adjuster works for you — not the insurance company. They assess your damage, prepare your claim, and negotiate with the insurer on your behalf. In Florida, public adjusters typically charge 10–20% of the final settlement amount.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Public adjusters are worth considering when: your claim is large (over $25,000), your insurer has denied or significantly underpaid your claim, the damage is complex (roof, structural, mold), or you simply don't have time to manage the process yourself.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Florida has strict licensing requirements for public adjusters. Verify any public adjuster you hire is licensed through the Florida Department of Financial Services (myfloridacfo.com).
          </p>
        </section>

        <section className="bg-[#1B3A4B] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Your Hurricane Claim?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists can help you understand your coverage, review your settlement offer, and connect you with the right resources. Call now for free guidance.</p>
          <a href="tel:4356121009" className="inline-block bg-[#E8572A] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#d04a20] transition">
            Call (435) 612-1009 — Free Consultation
          </a>
          <p className="text-gray-400 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-[#1B3A4B] mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/home-insurance-after-hurricane-claim-florida', label: 'Home Insurance After a Hurricane Claim' },
              { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'Wind Mitigation Inspections' },
              { href: '/what-does-windstorm-deductible-mean-florida', label: 'Understanding Your Windstorm Deductible' },
              { href: '/home-insurance-dropped-by-carrier-florida', label: 'What to Do If Your Insurer Drops You' },
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
