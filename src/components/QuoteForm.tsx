"use client"

interface QuoteFormProps {
  variant?: 'sidebar' | 'inline' | 'hero'
  title?: string
}

function isOpen(): boolean {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const est = new Date(utc + (-5 * 60) * 60000)
  const day = est.getDay()
  const t = est.getHours() * 60 + est.getMinutes()
  if (day >= 1 && day <= 5) return t >= 540 && t < 1260
  if (day === 6) return t >= 720 && t < 1020
  return false
}

export default function QuoteForm({ variant = 'sidebar', title }: QuoteFormProps) {
  const open = isOpen()
  const formTitle = title || 'Get Free Florida Home Insurance Information'

  const baseClasses = variant === 'hero'
    ? 'bg-white rounded-2xl shadow-2xl p-6 sm:p-8'
    : variant === 'inline'
    ? 'bg-teal-50 border border-teal-100 rounded-2xl p-6 sm:p-8'
    : 'bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sticky top-24'

  return (
    <div className={baseClasses}>
      <h3 className="font-serif text-xl text-teal-800 mb-1">{formTitle}</h3>
      <p className="text-sm text-gray-500 mb-5">
        {open
          ? 'Specialists available now. Call for free Florida home insurance information — no obligation.'
          : 'Call during business hours for free Florida home insurance information. No obligation.'}
      </p>

      <div className="flex items-center gap-2 mb-3">
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${open ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
        <span className={`text-xs font-semibold ${open ? 'text-green-700' : 'text-gray-500'}`}>
          {open ? 'Available Now' : 'Currently Closed'}
        </span>
      </div>

      <a
        href="tel:+14356121009"
        className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg text-base transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        (435) 612-1009
      </a>

      <p className="text-xs text-gray-400 text-center mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
      <p className="text-xs text-gray-400 text-center mt-1">Free information. No obligation. No spam.</p>
    </div>
  )
}
