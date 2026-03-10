'use client';

export function Results() {
  const results = [
    { metric: '3x', label: 'Faster Time to Market', gradient: 'from-blue-500 to-cyan-500' },
    { metric: '60%', label: 'Lower Development Cost', gradient: 'from-purple-500 to-pink-500' },
    { metric: '98%', label: 'Client Satisfaction Rate', gradient: 'from-orange-500 to-amber-500' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <div 
              key={i}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-10 rounded-2xl blur-xl`}></div>
              
              <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                  {result.metric}
                </div>
                <p className="text-gray-700 font-medium">
                  {result.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border border-orange-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">$2.5M</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">500K+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Days Avg Launch</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">10x</div>
            <div className="text-sm text-gray-600">ROI in Year 1</div>
          </div>
        </div>
      </div>
    </section>
  );
}
