'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How long does it take to build my project?', a: 'Most projects are delivered within 4-6 weeks from kickoff.' },
  { q: 'What is included in the fixed price?', a: 'Everything: design, development, testing, deployment, and 30 days of post-launch support.' },
  { q: 'Do you provide ongoing maintenance?', a: 'Yes! We offer monthly maintenance plans starting at $499/month.' },
  { q: 'What if I\'m not satisfied?', a: '30-day money-back guarantee. If you\'re not happy, we\'ll refund 100% of your payment.' }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Questions? <span className="gradient-brand-text">Answered.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="relative bg-white rounded-xl border-2 border-gray-200 overflow-hidden group transition-all">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] gradient-brand pointer-events-none">
                <div className="w-full h-full bg-white rounded-xl"></div>
              </div>
              
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="relative z-10 w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="url(#faq-arrow-gradient)" strokeWidth={2} viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="faq-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF3827" />
                      <stop offset="1%" stopColor="#FF3827" />
                      <stop offset="13%" stopColor="#FF3537" />
                      <stop offset="33%" stopColor="#FF314F" />
                      <stop offset="44%" stopColor="#FF4A42" />
                      <stop offset="59%" stopColor="#FF6D30" />
                      <stop offset="77%" stopColor="#FF961B" />
                      <stop offset="100%" stopColor="#FFCA00" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`relative z-10 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 gradient-brand-light rounded-2xl border border-orange-200">
          <p className="text-lg text-gray-900 mb-4 font-semibold">Still have questions?</p>
          <button className="px-6 py-3 gradient-brand text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
