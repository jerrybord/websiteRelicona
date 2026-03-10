import { GetStartedButton } from '@/components/ui/GetStartedButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-orange-600">Relicona</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '⚡ Fast', desc: '4 weeks from idea to launch' },
              { title: '🛡️ Reliable', desc: '99.2% on-time delivery rate' },
              { title: '💰 Fixed Price', desc: 'No hourly rates, no surprises' },
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 Relicona. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
