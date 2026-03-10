import { GetStartedButton } from '../components/ui/GetStartedButton';
import { FloatingParticles } from '../components/animations/FloatingParticles';
import { CountUp } from '../components/animations/CountUp';
import { SocialProof } from '../sections/SocialProof';
import { ResultsWithCharts } from '../sections/ResultsWithCharts';
import { FAQ } from '../sections/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Particles */}
        <FloatingParticles count={40} colors={['rgba(249,115,22,0.3)', 'rgba(251,191,36,0.3)']} />

        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(45%_70%_at_50%_0%,rgba(249,115,22,0.10),transparent)]"></div>
          <div className="absolute inset-0 top-1/3 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(251,191,36,0.08),transparent)]"></div>
        </div>

        {/* Falling Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hidden md:block">
          <div className="relative w-full h-full animate-float-up" style={{
            backgroundImage: `
              radial-gradient(4px 100px at 0px 235px, #FF3827, transparent),
              radial-gradient(4px 100px at 300px 235px, #FF3537, transparent),
              radial-gradient(1.5px 1.5px at 150px 117.5px, #FF314F 100%, transparent 150%),
              radial-gradient(4px 100px at 0px 252px, #FF4A42, transparent),
              radial-gradient(4px 100px at 300px 252px, #FF6D30, transparent),
              radial-gradient(1.5px 1.5px at 150px 126px, #FF961B 100%, transparent 150%),
              radial-gradient(4px 100px at 0px 150px, #FFCA00, transparent)
            `,
            backgroundSize: '300px 235px',
            backgroundPosition: '0px 220px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full border border-orange-200 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-semibold text-orange-700">
              🔥 100+ projects launched in 2024
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-gray-900">Build Crypto & AI</span>
            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From Telegram bots to DeFi platforms — production-ready in <strong className="text-orange-600">4 weeks</strong>
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900"><CountUp end={100} duration={2} /></div>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900"><CountUp end={98} suffix="%" duration={2} /></div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900"><CountUp end={4} duration={2} /></div>
              <p className="text-sm text-gray-600">Weeks Avg</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <GetStartedButton>Start Your Project</GetStartedButton>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-orange-500 hover:text-orange-600 transition-all">
              View Portfolio
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-amber-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">50+</strong> happy clients
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Ship Faster
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Full-stack development, design, deployment — all in one package
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '⚡ Lightning Fast', desc: '4 weeks from idea to production-ready launch', icon: '⚡' },
              { title: '🛡️ 100% Reliable', desc: '99.2% on-time delivery rate, guaranteed', icon: '🛡️' },
              { title: '💰 Fixed Pricing', desc: 'No hourly rates, no surprises, transparent costs', icon: '💰' },
              { title: '🤝 Full Support', desc: '30 days post-launch + monthly maintenance plans', icon: '🤝' },
              { title: '🔒 Secure & Tested', desc: 'Bank-level security, thoroughly tested code', icon: '🔒' },
              { title: '📈 Proven Results', desc: '150+ successful projects, 98% satisfaction', icon: '📈' },
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results with Interactive Charts */}
      <ResultsWithCharts />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-sm font-semibold">Limited Spots This Month</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Ship Faster?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 150+ startups who chose speed over complexity
          </p>

          <button className="px-12 py-5 bg-white text-orange-600 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all mb-8">
            Start Your Project Now
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
            <span>✓ No credit card required</span>
            <span>✓ 30-day guarantee</span>
            <span>✓ Free consultation</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Relicona</h3>
            <p className="text-sm">Crypto & AI Products Built Right</p>
          </div>
          <p className="text-sm">© 2026 Relicona. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
