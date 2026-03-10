'use client';

export function GetStartedButton({ children = 'Get Started' }: { children?: React.ReactNode }) {
  return (
    <button className="inline-flex items-center justify-center min-w-[132px] px-9 py-4 text-base text-white font-semibold rounded-full bg-gradient-to-r from-[#f97316] to-[#fbbf24] hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300">
      {children}
    </button>
  );
}
