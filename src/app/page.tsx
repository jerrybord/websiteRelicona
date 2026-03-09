"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import { Header } from "@/components/ui/header-1";
import { FallingPattern } from "@/components/ui/falling-pattern";
import OnboardingForm from "@/components/ui/onboarding-form";
import { LanguageProvider } from "@/lib/language-context";
import { ServicesSection } from "@/components/ui/services-section";
import { PortfolioSection } from "@/components/ui/portfolio-section";

export default function DemoOne() {
	const [showForm, setShowForm] = useState(false);

	return (
		<LanguageProvider>
		<div className="w-full relative min-h-screen bg-[#fffbf5]">
			{/* Full-page warm tint — consistent landing page feel */}
			<div
				aria-hidden="true"
				className="absolute inset-0 z-0 pointer-events-none"
				style={{
					background: `
						radial-gradient(80% 50% at 50% 0%, rgba(249,115,22,0.08), transparent 70%),
						radial-gradient(60% 40% at 50% 100%, rgba(251,191,36,0.06), transparent 60%),
						radial-gradient(50% 80% at 0% 50%, rgba(249,115,22,0.04), transparent),
						radial-gradient(50% 80% at 100% 50%, rgba(251,191,36,0.04), transparent)
					`,
				}}
			/>

			{/* Animated falling pattern - hidden on mobile for performance */}
			<div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none hidden md:block">
				<FallingPattern className="h-full [mask-image:radial-gradient(ellipse_at_center,transparent,var(--background))]" />
			</div>

			{/* Existing UI — untouched, on top */}
			<div className="relative z-10 flex w-full flex-col">
				<Header />
				<main className="grow">
					<HeroSection onGetStarted={() => setShowForm(true)} />
					{/* LogosSection removed - will add real clients later */}
					<ServicesSection />
					<PortfolioSection />
				</main>
			</div>

			{/* Onboarding form modal overlay */}
			<AnimatePresence>
				{showForm && <OnboardingForm onClose={() => setShowForm(false)} />}
			</AnimatePresence>
		</div>
		</LanguageProvider>
	);
}
