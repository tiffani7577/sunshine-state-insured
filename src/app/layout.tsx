import type { Metadata } from 'next'
import './globals.css'
import Script from "next/script"

const WM_GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? ""

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sunshinestateinsured.com'),
  title: {
    default: 'Sunshine State Insured | Florida Home Insurance Help',
    template: '%s | Sunshine State Insured',
  },
  description: 'Florida homeowners: get real answers about home insurance, Citizens Insurance alternatives, windstorm coverage, and flood insurance in Broward County and across Florida.',
  keywords: ['Florida home insurance', 'Citizens Insurance Florida', 'windstorm insurance Florida', 'flood insurance Broward County', 'home insurance Fort Lauderdale'],
  authors: [{ name: 'Sunshine State Insured' }],
  creator: 'Sunshine State Insured',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sunshinestateinsured.com',
    siteName: 'Sunshine State Insured',
    title: 'Sunshine State Insured | Florida Home Insurance Help',
    description: 'Real answers for Florida homeowners navigating the insurance crisis. Citizens Insurance, windstorm, flood, and more.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sunshine State Insured' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunshine State Insured | Florida Home Insurance Help',
    description: 'Real answers for Florida homeowners navigating the insurance crisis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'vPCH1Noq7VjxZkZ06GA_U9bi4yskM_riH-ll-0DT2XI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#FAFAF7]">
        
      {/* WO_MANUS_GA4 — GA4 + conversion events; set NEXT_PUBLIC_GA_MEASUREMENT_ID on the host */}
      {WM_GA_ID ? (
              <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${WM_GA_ID}`} strategy="afterInteractive" />
              <Script
                id="womanus-ga4-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${WM_GA_ID}',{send_page_view:true});`,
                }}
              />
              <Script id="womanus-ga4-events" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: "(function(){\nfunction gtagFn(){return typeof window!==\"undefined\"&&typeof window.gtag===\"function\"?window.gtag:null;}\nfunction wait(n,cb){var g=gtagFn();if(g)return cb(g);if(n>240)return;setTimeout(function(){wait(n+1,cb);},25);}\nwait(0,function(gtag){\ndocument.addEventListener(\"click\",function(ev){\nvar t=ev.target;if(!t||!t.closest)return;\nvar el=t.closest(\"a[href]\");if(!el)return;\nvar href=String(el.getAttribute(\"href\")||\"\");\nvar h=href.toLowerCase();\nif(h.indexOf(\"tel:\")===0){gtag(\"event\",\"phone_click\",{event_category:\"conversion\",link_url:href});return;}\nif(h.charAt(0)===\"/\"){\nvar paths=[\"/get-a-quote\",\"/get-quote\",\"/quote\",\"/request-a-quote\",\"/contact\",\"/call\",\"/phone\"];\nfor(var i=0;i<paths.length;i++){var p=paths[i];\nif(h===p||h.indexOf(p+\"/\")===0||h.indexOf(p+\"?\")===0){gtag(\"event\",\"cta_click\",{event_category:\"conversion\",link_url:href});return;}}\n}\n},true);\ndocument.addEventListener(\"submit\",function(ev){\nvar f=ev.target;if(f&&f.tagName===\"FORM\"){gtag(\"event\",\"form_submit\",{event_category:\"conversion\"});}\n},true);\n});\n})();" }} />
              </>
            ) : null}
      {children}
      
      <a href="/florida-homeowners-insurance-non-renewal-deadlin">florida homeowners insurance non renewal deadlin</a>
</body>
    </html>
  )
}