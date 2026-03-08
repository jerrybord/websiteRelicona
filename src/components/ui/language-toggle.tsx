"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const isEn = language === "en"

  return (
    <div
      className={cn(
        "relative flex items-center w-[72px] h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        "bg-[linear-gradient(to_right,#FF3827_0%,#FF3537_13%,#FF314F_33%,#FF4A42_44%,#FF6D30_59%,#FF961B_77%,#FFCA00_100%)]",
        className
      )}
      onClick={() => setLanguage(isEn ? "ru" : "en")}
      role="button"
      tabIndex={0}
      aria-label="Toggle Language"
    >
      {/* Sliding Pill */}
      <div
        className={cn(
          "absolute w-[30px] h-[24px] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out",
          isEn ? "translate-x-0" : "translate-x-[34px]"
        )}
      />

      {/* Labels */}
      <div className="relative z-10 flex w-full justify-between items-center px-[6px] text-[12px] font-bold uppercase tracking-wider select-none font-cygre-semi">
        <span className={cn("transition-colors duration-300", isEn ? "text-[#FF3827]" : "text-white")}>
          En
        </span>
        <span className={cn("transition-colors duration-300", !isEn ? "text-[#FF961B]" : "text-white")}>
          Ru
        </span>
      </div>
    </div>
  )
}
