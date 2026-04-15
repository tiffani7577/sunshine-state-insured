'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

// Florida county risk multipliers (based on 2026 carrier data)
const countyMultipliers: Record<string, number> = {
  'broward': 1.45,
  'miami-dade': 1.52,
  'palm-beach': 1.38,
  'duval': 1.15,
  'hillsborough': 1.20,
  'orange': 1.18,
  'pinellas': 1.42,
  'lee': 1.35,
  'collier': 1.40,
  'default': 1.25,
}

// Base monthly premium calculation (simplified model)
const calculateBaseMonthly = (homeValue: number): number => {
  return (homeValue / 100000) * 75
}

export default function CalculatorClient() {
  const [homeValue, setHomeValue] = useState(350000)
  const [yearBuilt, setYearBuilt] = useState(1995)
  const [roofType, setRoofType] = useState('asphalt')
  const [county, setCounty] = useState('broward')
  const [hasWindMitigation, setHasWindMitigation] = useState(false)
  const [deductible, setDeductible] = useState(1000)

  const estimate = useMemo(() => {
    let base = calculateBaseMonthly(homeValue)
    
    // County risk adjustment
    const multiplier = countyMultipliers[county] || countyMultipliers['default']
    base = base * multiplier

    // Roof age adjustment (most significant factor)
    const roofAge = 2026 - yearBuilt
    if (roofAge > 20) base = base * 1.6
    else if (roofAge > 15) base = base * 1.45
    else if (roofAge > 10) base = base * 1.15
    else base = base * 0.95

    // Roof type adjustment
    if (roofType === 'metal') base = base * 0.85
    else if (roofType === 'tile') base = base * 0.90
    else if (roofType === 'asphalt') base = base * 1.0

    // Wind mitigation credit
    if (hasWindMitigation) base = base * 0.75

    // Deductible adjustment
    if (deductible === 2500) base = base * 0.88
    else if (deductible === 5000) base = base * 0.75

    return {
      monthly: Math.round(base),
      annual: Math.round(base * 12),
      roofAge,
    }
  }, [homeValue, yearBuilt, roofType, county, hasWindMitigation, deductible])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-teal-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-2">Free Tool</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Florida Home Insurance Cost Calculator</h1>
          <p className="text-teal-100 text-lg">
            Get an instant estimate of what you'll pay for home insurance in Florida. No signup, no email required.
          </p>
        </div>
      </div>

      {/* Quick Answer Block (AEO) */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-8">
          <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-gray-800 text-base">
            The average Florida homeowner pays <strong>$8,292 per year</strong> for home insurance — more than 3x the national average. Your actual cost depends on your home value, roof age, location, and coverage choices. Use this calculator to see your personalized estimate in seconds.
          </p>
        </div>

        {/* Calculator */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Input Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Home Details</h2>

            {/* Home Value */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Home Value: ${homeValue.toLocaleString()}
              </label>
              <input
                type="range"
                min="100000"
                max="1000000"
                step="25000"
                value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-xs text-gray-500 mt-1">$100K – $1M</p>
            </div>

            {/* Year Built */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Year Built: {yearBuilt} ({estimate.roofAge} years old)
              </label>
              <select
                value={yearBuilt}
                onChange={(e) => setYearBuilt(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                {Array.from({ length: 70 }, (_, i) => 2026 - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {estimate.roofAge > 15 && (
                <p className="text-xs text-red-600 mt-1">⚠️ Roof age is a major cost driver. Consider a roof inspection or replacement.</p>
              )}
            </div>

            {/* Roof Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Roof Type</label>
              <select
                value={roofType}
                onChange={(e) => setRoofType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="asphalt">Asphalt Shingles</option>
                <option value="metal">Metal Roof</option>
                <option value="tile">Concrete Tile</option>
              </select>
            </div>

            {/* County */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">County</label>
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="broward">Broward County</option>
                <option value="miami-dade">Miami-Dade County</option>
                <option value="palm-beach">Palm Beach County</option>
                <option value="pinellas">Pinellas County</option>
                <option value="duval">Duval County</option>
                <option value="hillsborough">Hillsborough County</option>
                <option value="orange">Orange County</option>
                <option value="lee">Lee County</option>
                <option value="collier">Collier County</option>
              </select>
            </div>

            {/* Wind Mitigation */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasWindMitigation}
                  onChange={(e) => setHasWindMitigation(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm font-semibold text-gray-700">
                  I have a wind mitigation inspection report
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1">
                A wind mitigation inspection can save 20-45% on your premium. <Link href="/wind-mitigation-inspection-fort-lauderdale" className="text-teal-600 hover:underline">Learn more</Link>
              </p>
            </div>

            {/* Deductible */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Standard Deductible</label>
              <select
                value={deductible}
                onChange={(e) => setDeductible(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value={500}>$500</option>
                <option value={1000}>$1,000</option>
                <option value={2500}>$2,500</option>
                <option value={5000}>$5,000</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-lg p-8 mb-6">
              <p className="text-teal-200 text-sm uppercase tracking-widest mb-2">Your Estimated Premium</p>
              <div className="mb-6">
                <p className="text-5xl font-bold mb-1">${estimate.monthly}</p>
                <p className="text-teal-200 text-lg">per month</p>
                <p className="text-teal-300 text-sm mt-2">${estimate.annual.toLocaleString()} per year</p>
              </div>

              <div className="border-t border-teal-600 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-teal-200">Home Value:</span>
                  <span className="font-semibold">${homeValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-teal-200">County Risk:</span>
                  <span className="font-semibold">{(countyMultipliers[county] || 1.25).toFixed(2)}x</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-teal-200">Roof Age:</span>
                  <span className="font-semibold">{estimate.roofAge} years</span>
                </div>
                {hasWindMitigation && (
                  <div className="flex justify-between text-sm text-green-300">
                    <span>Wind Mitigation Credit:</span>
                    <span className="font-semibold">-25%</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 flex-1">
              <h3 className="font-bold text-gray-900 mb-4">What's Next?</h3>
              <ul className="space-y-3 mb-6 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">1.</span>
                  <span>This is an estimate based on 2026 average rates. Actual quotes vary by carrier.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">2.</span>
                  <span>Get real quotes from multiple carriers to compare.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-600 font-bold">3.</span>
                  <span>Ask about discounts: bundling, autopay, claims-free, security systems.</span>
                </li>
              </ul>
              <a
                href="/get-a-quote"
                className="block w-full bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors mb-3"
              >
                Get Real Quotes Now
              </a>
              <a
                href="/how-to-lower-home-insurance-premium-florida"
                className="block w-full border border-teal-500 text-teal-700 hover:bg-teal-50 font-bold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Ways to Lower Your Premium
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does This Calculator Work?</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What factors affect my Florida home insurance premium?</h3>
              <p className="text-gray-700 text-sm">
                Your premium is based on your home's value, location, roof age, construction type, claims history, and coverage limits. The biggest factors are roof age (homes with roofs over 15 years old pay 40-60% more) and location (coastal counties pay 40-50% more than inland areas).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Is this estimate accurate?</h3>
              <p className="text-gray-700 text-sm">
                This calculator uses 2026 average rates and industry multipliers. Your actual quote will vary based on your specific property, carrier, claims history, and other underwriting factors. Always get quotes from multiple carriers for comparison.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Why is roof age such a big factor?</h3>
              <p className="text-gray-700 text-sm">
                Florida carriers have decades of claims data showing that older roofs fail at much higher rates during hurricanes and storms. A 20-year-old roof is 3-4x more likely to file a claim than a 5-year-old roof. Most carriers stop writing new policies for roofs over 15 years old.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can I really save 25% with a wind mitigation inspection?</h3>
              <p className="text-gray-700 text-sm">
                Yes. A wind mitigation inspection costs $150-$250 and documents your home's hurricane-resistant features. Florida law requires carriers to apply credits based on the inspection results. Most homeowners save $500-$2,000 per year — the inspection pays for itself in the first month.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Should I raise my deductible to lower my premium?</h3>
              <p className="text-gray-700 text-sm">
                Raising your standard deductible from $500 to $2,500 saves about 12% on your premium. But only do this if you have emergency savings to cover the higher deductible. For windstorm deductibles, be more cautious — they can be 2-5% of your home's value after a hurricane.
              </p>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-teal-50 rounded-lg border border-teal-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <p className="text-gray-700 mb-6">
            Want to dig deeper? Check out these guides for more information on reducing your premium and understanding your coverage.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to-lower-home-insurance-premium-florida" className="block p-4 bg-white rounded border border-gray-200 hover:border-teal-500 hover:shadow-sm transition-all">
              <p className="font-semibold text-teal-800">9 Proven Ways to Lower Your Premium</p>
              <p className="text-sm text-gray-600 mt-1">Wind mitigation, roof replacement, bundling, and more.</p>
            </Link>
            <Link href="/home-insurance-with-roof-over-15-years-florida" className="block p-4 bg-white rounded border border-gray-200 hover:border-teal-500 hover:shadow-sm transition-all">
              <p className="font-semibold text-teal-800">Roof Over 15 Years Old?</p>
              <p className="text-sm text-gray-600 mt-1">Your options when carriers won't cover older roofs.</p>
            </Link>
            <Link href="/wind-mitigation-inspection-fort-lauderdale" className="block p-4 bg-white rounded border border-gray-200 hover:border-teal-500 hover:shadow-sm transition-all">
              <p className="font-semibold text-teal-800">Wind Mitigation Inspections</p>
              <p className="text-sm text-gray-600 mt-1">Save 20-45% with a $200 inspection.</p>
            </Link>
            <Link href="/citizens-insurance-vs-private-market-florida" className="block p-4 bg-white rounded border border-gray-200 hover:border-teal-500 hover:shadow-sm transition-all">
              <p className="font-semibold text-teal-800">Citizens vs. Private Market</p>
              <p className="text-sm text-gray-600 mt-1">When each option makes sense.</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-teal-700 text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Ready to Get Real Quotes?</h2>
          <p className="text-teal-100 mb-5">
            This calculator gives you an estimate. Get personalized quotes from multiple carriers to compare actual rates.
          </p>
          <a
            href="/get-a-quote"
            className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-lg text-lg hover:bg-teal-50 transition-colors"
          >
            Get Free Quotes
          </a>
        </div>
      </div>
    </main>
  )
}
