import { firm } from '../data/site.js'
import { practice } from '../data/practice.js'
import Icon from './Icon.jsx'
import { SoonLink } from './ComingSoon.jsx'

const quick = [
  ['#services', 'Practice areas'],
  ['#process', 'How it works'],
  ['#reviews', 'Reviews'],
  ['#team', 'Our team'],
  ['#stories', 'Case studies'],
  ['#awards', 'Awards'],
  ['#articles', 'Articles'],
  ['#contact', 'Contact'],
]

const legal = [
  ['disclaimer', 'Disclaimer'],
  ['terms-conditions', 'Terms and conditions'],
  ['privacy-policy', 'Privacy policy'],
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-sky">
      <div className="h-1.5 bg-gold" />
      <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1.4fr] lg:py-20">
        <div>
          <span className="inline-block rounded-2xl bg-white px-4 py-3">
            <img src="/images/logo.png" alt="Burke Mead Lawyers" width="263" height="49" loading="lazy" className="h-9 w-auto" />
          </span>
          <p className="mt-6 max-w-[22rem] text-[0.95rem] leading-relaxed">{firm.legal}</p>
          <div className="mt-5">
            <a href={firm.phoneHref} className="flex min-h-11 items-center gap-3 font-display text-[1.15rem] font-semibold text-white hover:text-gold">
              <Icon name="phone" className="size-5 text-gold" />
              {firm.phone}
            </a>
            <a href={`mailto:${firm.email}`} className="flex min-h-11 items-center gap-3 text-white hover:text-gold">
              <Icon name="mail" className="size-5 text-gold" />
              {firm.email}
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-[1.05rem] font-semibold text-white">Quick links</h2>
          <ul className="mt-2 grid grid-cols-2 gap-x-6 lg:grid-cols-1">
            {quick.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-11 items-center transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[1.05rem] font-semibold text-white">Practice areas</h2>
          <ul className="mt-2 grid gap-x-6 sm:grid-cols-2">
            {practice.map((p) => (
              <li key={p.slug}>
                <SoonLink page={p.name} className="inline-flex min-h-11 items-center transition-colors hover:text-gold">
                  {p.name}
                </SoonLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-1 py-4 text-[0.9rem] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6">
            {legal.map(([slug, label]) => (
              <li key={slug}>
                <SoonLink page={label} className="inline-flex min-h-11 items-center hover:text-gold">
                  {label}
                </SoonLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
