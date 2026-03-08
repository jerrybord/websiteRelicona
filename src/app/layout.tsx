import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relicona",
  description: "Building teams that help you scale and lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#fffbf5' }}>
      <body className="antialiased" style={{ backgroundColor: '#fffbf5', minHeight: '100vh' }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
