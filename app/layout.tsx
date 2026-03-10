import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Relicona - Crypto & AI Products Built Right',
  description: 'Production-ready Telegram bots, DeFi tools, and AI apps in 4 weeks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
