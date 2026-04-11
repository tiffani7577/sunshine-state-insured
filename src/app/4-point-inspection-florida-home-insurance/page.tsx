import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: '4-Point Inspection Florida Home Insurance Guide',
  description: 'A 4-point inspection checks roof, electrical, plumbing, and HVAC. Florida insurers require one for most homes over 30 years old. Know what to expect.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/4-point-inspection-florida-home-insurance' },
  openGraph: {
    title: '4-Point Inspection Florida Home Insurance Guide',
    description: 'Florida insurers require a 4-point inspection for most homes over 30 years old. Learn what inspectors look for and what happens if you fail.',
    url: 'https://www.sunshinestateinsured.com/4-point-inspection-florida-home-insurance',
    siteName: 'Sunshine State Insured',
    images: [{ url: 'https://www.sunshinestateinsured.com/og-image.jpg', width: 1200, height: 630, alt: '4-Point Inspection Florida Home Insurance' }],
    type: 'website',
    locale: 'en_US',
  },
}

const faqs = [
  {
    question: 'What does a 4-point inspection cost in Florida?',
    answer: 'Most 4-point inspections cost $75 to $150 as a standalone service. Bundled with a wind mitigation inspection the combined cost is typically $150 to $200.'
  },
  {
    question: 'How old does a home have to be before insurers require a 4-point inspection?',
    answer: 'Most Florida insurers require a 4-point inspection for homes 30 years old or older. Some carriers set the threshold at 25 years. The requirement is widespread across the Florida market.'
  },
  {
    question: 'What electrical panels will cause a failed 4-point inspection?',
    answer: 'Federal Pacific Stab-Lok panels and Zinsco panels are the most commonly flagged issues and will result in denial from most standard carriers. Homes with aluminum wiring are also significantly harder to insure.'
  },
  {
    question: 'Can I get insurance after a failed 4-point inspection?',
    answer: 'Yes in most cases. Surplus lines carriers specialize in properties that standard carriers decline. You will typically pay a higher premium but coverage is usually available. Citizens Property Insurance may also be an option depending on the specific issues identified.'
  },
  {
    question: 'What happens if my roof is too old for insurance?',
    answer: 'Most carriers will not write a new policy on a roof older than 15 to 20 years. Options include negotiating roof replacement with a seller before closing, finding a surplus lines carrier willing to write coverage temporarily, or in some cases Citizens Property Insurance depending on their current underwriting guidelines.'
  },
]

const relatedPages = [
  { href: '/home-insurance-for-older-homes-florida', label: 'Insurance for Older Florida Homes' },
  { href: '/home-insurance-with-roof-over-15-years-florida', label: 'Roof Over 15 Years Old' },
  { href: '/home-insurance-aluminum-wiring-florida', label: 'Aluminum Wiring Insurance' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs. Private Market' },
  { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'Wind Mitigation Inspections' },
]

export default function Page() {
  return (
    <ArticleLayout
      title="The 4-Point Inspection Florida Homeowners Do Not See Coming"
      subtitle="A 4-point inspection examines your roof, electrical, plumbing, and HVAC. Failing one can result in denied coverage or policy cancellation."
      breadcrumb="4-Point Inspection Florida"
      faqs={faqs}
      relatedPages={relatedPages}
    >
      <p>Dennis and Carol found their dream home in Delray Beach. Three bedrooms, a screened porch, original terrazzo floors. Built in 1978. They made an offer, it was accepted, and they were two weeks from closing when their insurance agent called with news that nearly killed the deal.</p>

      <p>The 4-point inspection had come back with problems. The electrical panel was a Federal Pacific Stab-Lok, a brand so notorious for causing fires that most Florida insurers will not touch a home that has one. The roof was 19 years old with signs of deterioration. Two items. Two potential deal killers.</p>

      <p>Dennis and Carol had never heard of a 4-point inspection before that phone call. Most buyers have not.</p>

      <h2>What Is a 4-Point Inspection?</h2>
      <p>A 4-point inspection is an evaluation of the four major systems in a home that insurers care about most: the roof, electrical system, plumbing, and HVAC. It is not a full home inspection. A full inspection looks at everything including windows, doors, insulation, drainage, and structural components. A 4-point is narrower and specifically designed to help insurance companies assess risk before they agree to write a policy.</p>

      <p>In Florida, most insurers require a 4-point inspection for any home that is 30 years old or older. Some carriers require them for homes as young as 25 years. In a state where the median home age in cities like Fort Lauderdale, Miami, and Tampa runs well into the 1970s and 1980s, this requirement affects a very large number of homeowners.</p>

      <h2>What Inspectors Are Looking For</h2>

      <h3>1. Roof</h3>
      <p>The roof is the most important system. Florida insurers are focused on roofs because a compromised roof in a hurricane can mean a total loss. Inspectors evaluate the age of the roof, the material, the condition, and how it attaches to the structure. A roof with less than three years of remaining life will result in denial from most carriers. A roof over 20 years old is a red flag regardless of its apparent condition.</p>

      <h3>2. Electrical</h3>
      <p>The electrical system is where older Florida homes run into the most serious trouble. Three things will result in an almost immediate denial: a Federal Pacific Stab-Lok panel (installed widely from the 1950s through the 1980s with a documented history of failing to trip during electrical overloads), a Zinsco panel (similar failure patterns), and aluminum wiring (used in homes built between 1965 and 1973 as a substitute for copper, creating fire risks at connection points).</p>

      <h3>3. Plumbing</h3>
      <p>The plumbing system is evaluated for material and condition. Copper is preferred by carriers. CPVC is generally acceptable. Galvanized steel raises concerns. Cast iron is a significant red flag in Florida due to the accelerated corrosion caused by the state's humidity, soil chemistry, and water table. Inspectors also note active leaks, signs of prior water damage, and the age of the water heater.</p>

      <h3>4. HVAC</h3>
      <p>The HVAC system is assessed for age and remaining useful life. A 20-year-old air handler in Florida that shows no evidence of regular maintenance is a liability from an insurer's perspective.</p>

      <div className="stat-callout">
        <div className="number">$75–$150</div>
        <p className="mt-1 text-teal-100 text-sm">Typical cost of a standalone 4-point inspection in Florida. Bundled with a wind mitigation report: $150–$200 total.</p>
      </div>

      <h2>What Happens If You Fail</h2>
      <p>Failing a 4-point inspection does not automatically mean you cannot get insurance. It means you need to understand exactly what the problem is and what your options are.</p>

      <p>Some issues are disqualifying with standard carriers but insurable through surplus lines carriers who specialize in hard-to-place risks. You will pay more but coverage exists.</p>

      <p>Some issues are worth fixing before you shop for insurance. Replacing a Federal Pacific panel costs $1,500 to $3,000. A new roof on a Florida home averages $12,000 to $18,000 depending on size and material. Neither cost is small but both can mean the difference between being insurable and not.</p>

      <p>Citizens Property Insurance has its own inspection requirements that are somewhat more flexible than private carriers. If the private market has declined you, Citizens may still be an option.</p>

      <h2>The Roof Age Problem</h2>
      <p>Florida's insurance market has effectively created a roof age cutoff. Most private carriers will not write a new policy on a home with a roof older than 15 years. Some draw the line at 20 years. A handful will go to 25 years with strong documentation of condition.</p>

      <p>This creates a specific problem for buyers. You find a home you want, you make an offer, and then you discover the roof is 18 years old and no standard carrier will write coverage. Your lender requires insurance to close. The solutions are negotiating a roof replacement as a condition of sale, asking the seller to escrow funds for replacement, or finding a surplus lines carrier willing to write the policy temporarily. None of these are easy but all of them are paths real Florida buyers use every day.</p>

      <h2>Bundling With Wind Mitigation</h2>
      <p>Many inspectors offer a bundle combining the 4-point with a wind mitigation inspection for $150 to $200 total. The wind mitigation report can reduce your annual premium by $200 to $500 or more, which means the bundle pays for itself quickly. If you need a 4-point inspection, always ask about the bundle.</p>
    </ArticleLayout>
  )
}
