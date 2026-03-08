"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		titleKey: "portfolio.project1.title",
		descKey: "portfolio.project1.desc",
		techKey: "portfolio.project1.tech",
		// Add image later: image: "/projects/telegram-stars-bot.png",
	},
	{
		titleKey: "portfolio.project2.title",
		descKey: "portfolio.project2.desc",
		techKey: "portfolio.project2.tech",
		// Add image later: image: "/projects/vpn-service.png",
	},
	{
		titleKey: "portfolio.project3.title",
		descKey: "portfolio.project3.desc",
		techKey: "portfolio.project3.tech",
		// Add image later: image: "/projects/custom-project.png",
	},
];

export function PortfolioSection() {
	const { t } = useLanguage();

	return (
		<section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-orange-50/30">
			<div className="mx-auto max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("portfolio.heading")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("portfolio.subheading")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className={cn(
								"group relative rounded-2xl border border-orange-200 bg-card overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-orange-300",
								"fade-in slide-in-from-bottom-8 animate-in fill-mode-backwards duration-500 ease-out"
							)}
							style={{ animationDelay: `${idx * 100 + 600}ms` }}
						>
							{/* Placeholder for image - add later */}
							<div className="aspect-video bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
								<div className="text-white/30 text-sm font-medium">
									{t("portfolio.imageComingSoon")}
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors">
									{t(project.titleKey)}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{t(project.descKey)}
								</p>
								<div className="flex items-center gap-2 text-xs text-muted-foreground">
									<span className="font-medium">Tech:</span>
									<span>{t(project.techKey)}</span>
								</div>
							</div>

							{/* Hover overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-12">
					<p className="text-muted-foreground mb-4">
						{t("portfolio.cta")}
					</p>
					<a
						href="https://calendly.com/jerryborderless/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
					>
						<span>{t("portfolio.ctaButton")}</span>
						<ExternalLink className="size-4" />
					</a>
				</div>
			</div>
		</section>
	);
}
