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
            Questions? Answered.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-orange-500 transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-orange-500 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
          <p className="text-lg text-gray-900 mb-4 font-semibold">Still have questions?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:scale-105">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
