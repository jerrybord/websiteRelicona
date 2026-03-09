"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { TrendingUp, Target, Zap } from "lucide-react";
import { useState } from "react";

// Animated Card Chart Component (adapted from 21st.dev)
function AnimatedCard({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group/animated-card relative w-full overflow-hidden rounded-xl border border-orange-200/50 bg-white shadow-sm dark:border-orange-900/50 dark:bg-black",
        "hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}

function CardVisual({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("h-[180px] w-full overflow-hidden", className)}
      {...props}
    />
  );
}

function CardBody({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 border-t border-orange-200/50 p-4 dark:border-orange-900/50",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-black dark:text-white",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-neutral-500 dark:text-neutral-400",
        className
      )}
      {...props}
    />
  );
}

// Visual Component with Animated Chart
interface VisualProps {
  mainColor?: string;
  secondaryColor?: string;
  gridColor?: string;
  bars: Array<{
    height: number;
    hoverHeight: number;
    y: number;
    hoverY: number;
    x: number;
    fill: string;
    hoverFill?: string;
  }>;
  badges?: Array<{
    label: string;
    color: string;
  }>;
}

function ChartVisual({
  mainColor = "#f97316",
  secondaryColor = "#ea580c",
  gridColor = "#80808015",
  bars,
  badges,
}: VisualProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          "--color": mainColor,
          "--secondary-color": secondaryColor,
        } as React.CSSProperties}
      />

      <div className="relative h-[180px] w-full overflow-hidden rounded-t-lg">
        {/* Animated Bars Layer */}
        <div className="ease-[cubic-bezier(0.6,0.6,0,1)] absolute inset-0 z-[8] flex h-[180px] w-full items-center justify-center transition-transform duration-500 group-hover/animated-card:scale-110">
          <svg width="100%" height="180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 180">
            {bars.map((bar, index) => (
              <rect
                key={index}
                width={bar.height}
                height={hovered ? bar.hoverHeight : bar.height}
                x={bar.x}
                y={hovered ? bar.hoverY : bar.y}
                fill={hovered ? (bar.hoverFill || bar.fill) : bar.fill}
                rx="2"
                ry="2"
                className="ease-[cubic-bezier(0.6,0.6,0,1)] transition-all duration-500"
              />
            ))}
          </svg>
        </div>

        {/* Hover Gradient Layer */}
        <div className="ease-[cubic-bezier(0.6,0.6,0,1)] absolute inset-0 z-[6] flex translate-y-full items-center justify-center opacity-0 transition-all duration-500 group-hover/animated-card:translate-y-0 group-hover/animated-card:opacity-100">
          <svg width="100%" height="180" viewBox="0 0 356 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="356" height="180" fill="url(#paint0_linear_results)" />
            <defs>
              <linearGradient
                id="paint0_linear_results"
                x1="178"
                y1="0"
                x2="178"
                y2="180"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.35" stopColor={mainColor} stopOpacity="0" />
                <stop offset="1" stopColor={mainColor} stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Badges Layer */}
        {badges && (
          <div className="absolute top-4 left-4 z-[8] flex items-center gap-1">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex shrink-0 items-center rounded-full border border-orange-200 bg-white/25 px-1.5 py-0.5 backdrop-blur-sm transition-opacity duration-300 ease-in-out group-hover/animated-card:opacity-0 dark:border-orange-800 dark:bg-black/25"
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: badge.color }}
                />
                <span className="ml-1 text-[10px] text-black dark:text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Grid Layer */}
        <div
          style={{ "--grid-color": gridColor } as React.CSSProperties}
          className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />

        {/* Ellipse Gradient */}
        <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
          <svg width="100%" height="180" viewBox="0 0 356 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="356" height="180" fill="url(#paint0_radial_results)" />
            <defs>
              <radialGradient
                id="paint0_radial_results"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(178 98) rotate(90) scale(98 178)"
              >
                <stop stopColor={mainColor} stopOpacity="0.25" />
                <stop offset="0.34" stopColor={mainColor} stopOpacity="0.15" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

// Main Section Component
export function ClientResultsSection() {
  const { t } = useLanguage();

  const results = [
    {
      id: "revenue",
      icon: TrendingUp,
      titleKey: "results.revenue.title",
      descKey: "results.revenue.desc",
      badges: [
        { label: "+42%", color: "#f97316" },
        { label: "+28%", color: "#ea580c" },
      ],
      bars: [
        { height: 15, hoverHeight: 15, y: 120, hoverY: 135, x: 40, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 15, y: 105, hoverY: 135, x: 60, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 95, hoverY: 125, x: 80, fill: "#f97316" },
        { height: 15, hoverHeight: 35, y: 85, hoverY: 115, x: 100, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 120, hoverY: 125, x: 120, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 15, y: 120, hoverY: 135, x: 140, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 35, y: 75, hoverY: 115, x: 160, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 95, hoverY: 135, x: 180, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 120, hoverY: 125, x: 200, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 45, y: 75, hoverY: 105, x: 220, fill: "#f97316" },
        { height: 15, hoverHeight: 35, y: 120, hoverY: 115, x: 240, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 55, y: 120, hoverY: 95, x: 260, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 55, y: 120, hoverY: 95, x: 280, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 65, y: 95, hoverY: 85, x: 300, fill: "#f97316" },
      ],
    },
    {
      id: "conversion",
      icon: Target,
      titleKey: "results.conversion.title",
      descKey: "results.conversion.desc",
      badges: [
        { label: "+65%", color: "#f97316" },
        { label: "+42%", color: "#ea580c" },
      ],
      bars: [
        { height: 15, hoverHeight: 20, y: 115, hoverY: 130, x: 40, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 20, y: 100, hoverY: 130, x: 60, fill: "#f97316" },
        { height: 15, hoverHeight: 30, y: 85, hoverY: 120, x: 80, fill: "#f97316" },
        { height: 15, hoverHeight: 40, y: 80, hoverY: 110, x: 100, fill: "#f97316" },
        { height: 15, hoverHeight: 35, y: 115, hoverY: 115, x: 120, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 25, y: 115, hoverY: 125, x: 140, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 45, y: 70, hoverY: 105, x: 160, fill: "#f97316" },
        { height: 15, hoverHeight: 35, y: 85, hoverY: 115, x: 180, fill: "#f97316" },
        { height: 15, hoverHeight: 35, y: 115, hoverY: 115, x: 200, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 55, y: 65, hoverY: 95, x: 220, fill: "#f97316" },
        { height: 15, hoverHeight: 45, y: 115, hoverY: 105, x: 240, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 60, y: 115, hoverY: 90, x: 260, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 65, y: 115, hoverY: 85, x: 280, fill: "#fed7aa", hoverFill: "#fdba74" },
        { height: 15, hoverHeight: 75, y: 85, hoverY: 75, x: 300, fill: "#f97316" },
      ],
    },
    {
      id: "time",
      icon: Zap,
      titleKey: "results.time.title",
      descKey: "results.time.desc",
      badges: [
        { label: "4 weeks", color: "#f97316" },
        { label: "vs 12", color: "#fed7aa" },
      ],
      bars: [
        // "Before" bars (tall, light)
        { height: 15, hoverHeight: 75, y: 75, hoverY: 75, x: 80, fill: "#fed7aa" },
        { height: 15, hoverHeight: 75, y: 75, hoverY: 75, x: 100, fill: "#fed7aa" },
        { height: 15, hoverHeight: 75, y: 75, hoverY: 75, x: 120, fill: "#fed7aa" },
        // Gap
        // "After" bars (short, orange)
        { height: 15, hoverHeight: 25, y: 125, hoverY: 125, x: 180, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 125, hoverY: 125, x: 200, fill: "#f97316" },
        { height: 15, hoverHeight: 25, y: 125, hoverY: 125, x: 220, fill: "#f97316" },
      ],
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#fffbf5] to-orange-50/50 dark:to-orange-950/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-in fade-in-50 slide-in-from-bottom-8 duration-700">
            {t("results.heading")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-100">
            {t("results.subheading")}
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, idx) => (
            <AnimatedCard
              key={result.id}
              className="animate-in fade-in-50 zoom-in-95 duration-700 ease-out fill-mode-backwards"
              style={{
                animationDelay: `${idx * 150 + 400}ms`,
              }}
            >
              <CardVisual>
                <ChartVisual
                  bars={result.bars}
                  badges={result.badges}
                />
              </CardVisual>
              <CardBody>
                <div className="flex items-center gap-2 mb-2">
                  <result.icon className="size-5 text-orange-600" />
                  <CardTitle>{t(result.titleKey)}</CardTitle>
                </div>
                <CardDescription>{t(result.descKey)}</CardDescription>
              </CardBody>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
