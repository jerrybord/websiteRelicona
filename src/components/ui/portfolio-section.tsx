"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
	{
		titleKey: "portfolio.project3.title",
		descKey: "portfolio.project3.desc",
		techKey: "portfolio.project3.tech",
		image: "/projects/ai-environment.webp",
		category: "ai",
		link: "#",
	},
	{
		titleKey: "portfolio.project2.title",
		descKey: "portfolio.project2.desc",
		techKey: "portfolio.project2.tech",
		image: "/projects/sovereign-vpn.webp",
		category: "web",
		link: "#",
	},
	{
		titleKey: "portfolio.project1.title",
		descKey: "portfolio.project1.desc",
		techKey: "portfolio.project1.tech",
		image: "/projects/memstar-bot.webp",
		category: "bot",
		link: "#",
	},
];

const categories = [
	{ key: "all", labelKey: "portfolio.filter.all" },
	{ key: "ai", labelKey: "portfolio.filter.ai" },
	{ key: "bot", labelKey: "portfolio.filter.bot" },
	{ key: "web", labelKey: "portfolio.filter.web" },
];

export function PortfolioSection() {
	const { t } = useLanguage();
	const [filter, setFilter] = useState("all");
	const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

	const filteredProjects =
		filter === "all"
			? projects
			: projects.filter((p) => p.category === filter);

	return (
		<section className="relative py-24 px-4 bg-gradient-to-b from-orange-50/50 to-white">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-in fade-in-50 slide-in-from-bottom-8 duration-700">
						{t("portfolio.heading")}
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-100">
						{t("portfolio.subheading")}
					</p>

					{/* Animated Filter Tabs */}
					<div className="flex gap-3 flex-wrap justify-center animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-200">
						{categories.map((cat) => (
							<button
								key={cat.key}
								onClick={() => setFilter(cat.key)}
								className={cn(
									"relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group",
									filter === cat.key ? "text-white" : "text-muted-foreground hover:text-foreground"
								)}
							>
								{/* Animated background */}
								<span
									className={cn(
										"absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-transform duration-300",
										filter === cat.key ? "scale-100" : "scale-0 group-hover:scale-100"
									)}
								/>
								<span className="relative z-10">{t(cat.labelKey)}</span>
							</button>
						))}
					</div>
				</div>

				{/* Masonry Grid */}
				<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
					{filteredProjects.map((project, idx) => (
						<ProjectCard
							key={idx}
							project={project}
							index={idx}
							onClick={() => setSelectedProject(project)}
						/>
					))}
				</div>

				{/* CTA */}
				<div className="text-center mt-16 animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-300">
					<p className="text-muted-foreground mb-6 text-lg">
						{t("portfolio.cta")}
					</p>
					<a
						href="https://calendly.com/jerryborderless/30min"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:scale-105 group"
					>
						<span>{t("portfolio.ctaButton")}</span>
						<ExternalLink className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
					</a>
				</div>
			</div>

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
			)}
		</section>
	);
}

function ProjectCard({
	project,
	index,
	onClick,
}: {
	project: typeof projects[0];
	index: number;
	onClick: () => void;
}) {
	const { t } = useLanguage();
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div
			className="group relative break-inside-avoid cursor-pointer mb-6 animate-in fade-in-50 zoom-in-95 duration-700 ease-out fill-mode-backwards"
			onClick={onClick}
			style={{
				animationDelay: `${index * 100 + 400}ms`,
			}}
		>
			<div className="relative overflow-hidden rounded-2xl bg-card border border-orange-200/50 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
				{/* Image with Next.js optimization */}
				<div className="relative aspect-[4/3]">
					<Image
						src={project.image}
						alt={t(project.titleKey)}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className={cn(
							"object-cover transition-all duration-700",
							"group-hover:scale-110",
							isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
						)}
						onLoad={() => setIsLoaded(true)}
					/>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

					{/* Animated shine effect */}
					<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_linear_infinite]" />
					</div>
				</div>

				{/* Content */}
				<div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
					<h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
						{t(project.titleKey)}
					</h3>

					<p className="text-sm text-gray-300 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 line-clamp-2">
						{t(project.descKey)}
					</p>

					<div className="flex items-center gap-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
						<span className="font-semibold text-orange-400">Tech:</span>
						<span className="line-clamp-1">{t(project.techKey)}</span>
					</div>
				</div>

				{/* Hover border glow */}
				<div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/30 transition-colors duration-300 pointer-events-none" />
			</div>
		</div>
	);
}

// Modal Component using native dialog
function ProjectModal({
	project,
	onClose,
}: {
	project: typeof projects[0];
	onClose: () => void;
}) {
	const { t } = useLanguage();

	useEffect(() => {
		// Prevent body scroll
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	useEffect(() => {
		// Close on Escape
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in-0 duration-300"
			onClick={onClose}
		>
			<div
				className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center group"
					aria-label="Close"
				>
					<X className="size-5 group-hover:rotate-90 transition-transform duration-200" />
				</button>

				{/* Image */}
				<div className="relative aspect-video bg-gradient-to-br from-orange-500/20 to-amber-500/20">
					<Image src={project.image} alt={t(project.titleKey)} fill className="object-cover" />
				</div>

				{/* Content */}
				<div className="p-6 md:p-8">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
						{t(project.titleKey)}
					</h2>

					<p className="text-muted-foreground text-lg mb-6 leading-relaxed">
						{t(project.descKey)}
					</p>

					<div className="flex flex-wrap gap-3 mb-6">
						{t(project.techKey)
							.split(",")
							.map((tech: string, idx: number) => (
								<span
									key={idx}
									className="px-4 py-2 rounded-full text-sm bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-200 text-foreground font-medium"
								>
									{tech.trim()}
								</span>
							))}
					</div>

					{project.link && project.link !== "#" && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all group"
						>
							<span>View Project</span>
							<ExternalLink className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
