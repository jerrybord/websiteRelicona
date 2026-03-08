"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { useLanguage } from "@/lib/language-context";

export function HeroSection({ onGetStarted }: { onGetStarted?: () => void } = {}) {
	const { t } = useLanguage();

	return (
		<section className="mx-auto w-full max-w-5xl">
			{/* Shared SVG gradient for icons */}
			<svg aria-hidden="true" className="absolute size-0">
				<defs>
					<linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#FF3827" />
						<stop offset="33%" stopColor="#FF314F" />
						<stop offset="100%" stopColor="#FFCA00" />
					</linearGradient>
				</defs>
			</svg>
			{/* Warm radial glow — Relicona style */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(45%_70%_at_50%_0%,rgba(249,115,22,0.10),transparent)] contain-strict" />
				<div className="absolute inset-0 top-1/3 isolate -z-10 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(251,191,36,0.08),transparent)] contain-strict" />
			</div>

			{/* main content */}
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">

				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-full border border-orange-200 bg-card px-3 py-1 shadow-sm shadow-orange-100",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#link"
				>
					<RocketIcon className="size-3" stroke="url(#icon-gradient)" />
					<span className="text-xs">{t("hero.badge")}</span>
					<span className="block h-5 border-l" />
					<ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
				</a>

				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl font-bold tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
						"text-shadow-[0_0px_60px_rgba(249,115,22,0.15)]"
					)}
				>
					{t("hero.titleLine1")} <br /> {t("hero.titleLine2")}
				</h1>

				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
					{t("hero.subtitle")}
				</p>

				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button className="gap-2 rounded-full border-orange-200 bg-white text-foreground shadow-sm hover:bg-orange-50 h-auto min-w-[132px] px-9 py-[15px] text-base leading-[19px] font-bold" variant="outline" asChild>
						<a href="https://calendly.com/jerryborderless/30min" target="_blank" rel="noopener noreferrer">
							<PhoneCallIcon className="size-4 shrink-0" stroke="url(#icon-gradient)" />
							<span>{t("hero.bookCall")}</span>
						</a>
					</Button>
					<GradientButton className="gap-2 rounded-full" onClick={onGetStarted}>
						<span>{t("hero.getStarted")}</span>
						<ArrowRightIcon className="size-4 shrink-0" />
					</GradientButton>
				</div>
			</div>
		</section>
	);
}

export function LogosSection() {
	const { t } = useLanguage();

	return (
		<section className="relative space-y-4 pt-6 pb-10">
			<h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
				{t("logos.trustedBy")} <span className="font-semibold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #FF3827 0%, #FF3537 13%, #FF314F 33%, #FF4A42 44%, #FF6D30 59%, #FF961B 77%, #FFCA00 100%)' }}>{t("logos.experts")}</span>
			</h2>
			<div className="relative z-10 mx-auto max-w-4xl">
				<LogoCloud logos={logos} />
			</div>
		</section>
	);
}

const logos = [
	{
		src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
		alt: "Nvidia Logo",
	},
	{
		src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
		alt: "Supabase Logo",
	},
	{
		src: "https://storage.efferd.com/logo/openai-wordmark.svg",
		alt: "OpenAI Logo",
	},
	{
		src: "https://storage.efferd.com/logo/turso-wordmark.svg",
		alt: "Turso Logo",
	},
	{
		src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
		alt: "Vercel Logo",
	},
	{
		src: "https://storage.efferd.com/logo/github-wordmark.svg",
		alt: "GitHub Logo",
	},
	{
		src: "https://storage.efferd.com/logo/claude-wordmark.svg",
		alt: "Claude AI Logo",
	},
	{
		src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
		alt: "Clerk Logo",
	},
];
