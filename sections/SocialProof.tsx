'use client';

import { CountUp } from '../components/animations/CountUp';

export function SocialProof() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-gray-600 mb-8 uppercase tracking-wider">
          Trusted by Leading Startups
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <CountUp end={150} suffix="+" duration={2.5} />
            <p className="text-sm text-gray-600 mt-1">Projects Delivered</p>
          </div>
          <div className="text-center">
            <CountUp end={99.8} suffix="%" duration={2.5} decimals={1} />
            <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <CountUp end={24} suffix="/7" duration={2.5} />
            <p className="text-sm text-gray-600 mt-1">Support Available</p>
          </div>
          <div className="text-center">
            <CountUp end={4} duration={2.5} />
            <p className="text-sm text-gray-600 mt-1 whitespace-nowrap">Weeks Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
