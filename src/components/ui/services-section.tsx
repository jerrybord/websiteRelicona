"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { Bot, Zap, Brain, Palette } from "lucide-react";

const services = [
	{
		icon: Bot,
		titleKey: "services.bot.title",
		descKey: "services.bot.desc",
	},
	{
		icon: Zap,
		titleKey: "services.defi.title",
		descKey: "services.defi.desc",
	},
	{
		icon: Brain,
		titleKey: "services.ai.title",
		descKey: "services.ai.desc",
	},
	{
		icon: Palette,
		titleKey: "services.design.title",
		descKey: "services.design.desc",
	},
];

export function ServicesSection() {
	const { t } = useLanguage();

	return (
		<section className="relative py-20 px-4">
			<div className="mx-auto max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("services.heading")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("services.subheading")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{services.map((service, idx) => (
						<div
							key={idx}
							className={cn(
								"group relative rounded-2xl border border-orange-200 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-orange-300",
								"fade-in slide-in-from-bottom-8 animate-in fill-mode-backwards duration-500 ease-out"
							)}
							style={{ animationDelay: `${idx * 100 + 400}ms` }}
						>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-3">
										<service.icon className="size-6 text-white" />
									</div>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										{t(service.titleKey)}
									</h3>
									<p className="text-muted-foreground">
										{t(service.descKey)}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
