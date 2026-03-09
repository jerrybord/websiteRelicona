"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Bot, Zap, Brain, Palette } from "lucide-react";
import { useState, useRef } from "react";

const services = [
	{
		icon: Bot,
		titleKey: "services.bot.title",
		descKey: "services.bot.desc",
		gradient: "from-blue-500 to-cyan-500",
		features: ["Telegram", "Discord", "AI Integration"],
	},
	{
		icon: Zap,
		titleKey: "services.defi.title",
		descKey: "services.defi.desc",
		gradient: "from-purple-500 to-pink-500",
		features: ["Smart Contracts", "DEX", "DeFi"],
	},
	{
		icon: Brain,
		titleKey: "services.ai.title",
		descKey: "services.ai.desc",
		gradient: "from-orange-500 to-red-500",
		features: ["ML Models", "Automation", "NLP"],
	},
	{
		icon: Palette,
		titleKey: "services.design.title",
		descKey: "services.design.desc",
		gradient: "from-green-500 to-emerald-500",
		features: ["UI/UX", "Brand", "Design Systems"],
	},
];

export function ServicesSection() {
	const { t } = useLanguage();

	return (
		<section className="relative py-24 px-4 bg-[#fffbf5]">
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50" />

			<div className="mx-auto max-w-6xl relative z-10">
				{/* Header with enhanced animation */}
				<div className="text-center mb-16 space-y-4">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent animate-in fade-in-50 slide-in-from-bottom-8 duration-700">
						{t("services.heading")}
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-100">
						{t("services.subheading")}
					</p>
				</div>

				{/* Services Grid with 3D Tilt Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((service, idx) => (
						<TiltCard key={idx} service={service} index={idx} />
					))}
				</div>
			</div>
		</section>
	);
}

// 3D Tilt Card Component (inspired by 21st.dev + Aceternity UI)
function TiltCard({ 
	service, 
	index 
}: { 
	service: typeof services[0]; 
	index: number;
}) {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const { t } = useLanguage();

	// Check if desktop (tilt only on desktop)
	const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current || !isDesktop) return;

		const rect = cardRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		// Subtle tilt (max 8 degrees)
		const rotateXValue = (mouseY / rect.height) * -8;
		const rotateYValue = (mouseX / rect.width) * 8;

		setRotateX(rotateXValue);
		setRotateY(rotateYValue);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
		setIsHovered(false);
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			className={cn(
				"group relative animate-in fade-in-50 slide-in-from-bottom-8 duration-700 ease-out fill-mode-backwards"
			)}
			style={{
				perspective: "1000px",
				animationDelay: `${index * 150 + 400}ms`,
			}}
		>
			<div
				className={cn(
					"relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50",
					"transition-all duration-300 ease-out",
					"hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/10",
					"overflow-hidden"
				)}
				style={{
					transform: isDesktop
						? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`
						: "none",
					transformStyle: "preserve-3d",
					transition: isHovered ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
				}}
			>
				{/* Gradient glow effect */}
				<div
					className={cn(
						"absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-3xl",
						`bg-gradient-to-br ${service.gradient}`
					)}
					style={{ transform: "translateZ(-50px)" }}
				/>

				{/* Animated border shine */}
				<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
					<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_linear_infinite]" />
				</div>

				{/* Icon with enhanced animation */}
				<div className="relative mb-6 w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 group-hover:scale-110 transition-transform duration-300">
					<div
						className={cn(
							"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
							`bg-gradient-to-br ${service.gradient}`
						)}
					/>
					<service.icon className="size-10 text-orange-600 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
				</div>

				{/* Content */}
				<h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
					{t(service.titleKey)}
				</h3>

				<p className="text-muted-foreground leading-relaxed mb-6">
					{t(service.descKey)}
				</p>

				{/* Features with staggered reveal */}
				<ul className="space-y-2">
					{service.features.map((feature, idx) => (
						<li
							key={idx}
							className={cn(
								"flex items-center text-sm text-muted-foreground/80",
								"transition-all duration-300",
								isHovered ? "translate-x-2 opacity-100" : "translate-x-0 opacity-70"
							)}
							style={{
								transitionDelay: `${idx * 50}ms`,
							}}
						>
							<span
								className={cn(
									"mr-3 text-lg font-bold bg-gradient-to-br",
									service.gradient,
									"bg-clip-text text-transparent"
								)}
							>
								→
							</span>
							{feature}
						</li>
					))}
				</ul>

				{/* Floating particles effect */}
				{isHovered && (
					<>
						<div
							className="absolute top-10 right-10 w-2 h-2 rounded-full bg-orange-500/50 animate-float"
							style={{ animationDelay: "0ms" }}
						/>
						<div
							className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-amber-500/50 animate-float"
							style={{ animationDelay: "300ms" }}
						/>
						<div
							className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-orange-400/40 animate-float"
							style={{ animationDelay: "600ms" }}
						/>
					</>
				)}
			</div>
		</div>
	);
}
