'use client';

import { AnimatedChart } from '../components/charts/AnimatedChart';

const revenueData = [
  { name: 'Jan', value: 12000 },
  { name: 'Feb', value: 19000 },
  { name: 'Mar', value: 28000 },
  { name: 'Apr', value: 35000 },
  { name: 'May', value: 48000 },
  { name: 'Jun', value: 62000 }
];

const timeData = [
  { name: 'Traditional', value: 180 },
  { name: 'Relicona', value: 28 }
];

export function ResultsWithCharts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The <span className="gradient-brand-text">Numbers</span> Don't Lie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects. Data-driven success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          <AnimatedChart
            title="Client Revenue Growth"
            type="line"
            data={revenueData}
            metric="+142%"
            description="Average increase in first 6 months"
          />

          <AnimatedChart
            title="Time to Market"
            type="bar"
            data={timeData}
            metric="3x Faster"
            description="vs traditional development (days)"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 gradient-brand-light rounded-3xl border border-orange-200">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-brand-text mb-2">150+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-brand-text mb-2">$2.5M</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-brand-text mb-2">500K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-brand-text mb-2">24 Days</div>
            <div className="text-sm text-gray-600">Avg. Launch Time</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            "These aren't projections or estimates. This is real data from real clients who trusted us to build their products."
          </p>
        </div>
      </div>
    </section>
  );
}
