"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Language toggle
    "en": "En",
    "ru": "Ru",

    // Header nav
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",

    // Hero section
    "hero.badge": "crypto & AI focused",
    "hero.titleLine1": "Crypto & AI Products.",
    "hero.titleLine2": "Built Right.",
    "hero.subtitle": "We build Telegram bots, DeFi tools, and AI-powered apps for startups that move fast.",
    "hero.bookCall": "Book a Call",
    "hero.getStarted": "Get started",

    // Logos section (keeping structure for future real clients)
    "logos.trustedBy": "Used by",
    "logos.experts": "startups",

    // Services section
    "services.heading": "What We Do",
    "services.subheading": "From idea to production-ready code",
    "services.bot.title": "Telegram Bots",
    "services.bot.desc": "Payment systems, DeFi integrations, automation, and custom bot solutions",
    "services.defi.title": "DeFi Tools",
    "services.defi.desc": "Smart contracts, trading bots, analytics dashboards, and blockchain integrations",
    "services.ai.title": "AI Integration",
    "services.ai.desc": "LLM-powered apps, automation, data analysis, and intelligent systems",
    "services.design.title": "Design & Prototyping",
    "services.design.desc": "From Figma to production-ready UI with modern design systems",

    // Portfolio section
    "portfolio.heading": "Recent Work",
    "portfolio.subheading": "Projects we've built for startups and ourselves",
    "portfolio.imageComingSoon": "Screenshot coming soon",
    "portfolio.project1.title": "Telegram Stars Payment Bot",
    "portfolio.project1.desc": "Automated Telegram Stars purchase system with RUB payment integration",
    "portfolio.project1.tech": "Node.js, Telegram API, Payment APIs",
    "portfolio.project2.title": "VPN Service in Telegram",
    "portfolio.project2.desc": "Fast VPN service with Telegram bot interface and RUB payments",
    "portfolio.project2.tech": "Telegram Bot, VPN APIs, Payment Systems",
    "portfolio.project3.title": "Custom DeFi Tool",
    "portfolio.project3.desc": "Trading automation and analytics for crypto enthusiasts",
    "portfolio.project3.tech": "React, Web3.js, Trading APIs",
    "portfolio.cta": "Want to build something like this?",
    "portfolio.ctaButton": "Let's talk",

    // Onboarding form — step titles
    "form.step.personal": "Personal Info",
    "form.step.professional": "Professional",
    "form.step.budget": "Budget",

    // Step 1: Personal Info
    "form.personal.title": "Tell us about yourself",
    "form.personal.description": "Let\u2019s start with some basic information",
    "form.personal.nameLabel": "Full Name",
    "form.personal.namePlaceholder": "John Doe",
    "form.personal.emailLabel": "Email Address",
    "form.personal.emailPlaceholder": "john@example.com",
    "form.personal.companyLabel": "Company/Organization (Optional)",
    "form.personal.companyPlaceholder": "Your Company",

    // Step 2: Professional Background
    "form.professional.title": "Professional Background",
    "form.professional.description": "Tell us about your professional experience",
    "form.professional.professionLabel": "What\u2019s your profession?",
    "form.professional.professionPlaceholder": "e.g. Designer, Developer, Marketer",
    "form.professional.industryLabel": "What industry do you work in?",
    "form.professional.industryPlaceholder": "Select an industry",
    "form.professional.technology": "Technology",
    "form.professional.finance": "Finance",
    "form.professional.creative": "Creative Arts",
    "form.professional.other": "Other",

    // Step 3: Budget & Timeline
    "form.budget.title": "Budget & Timeline",
    "form.budget.description": "Let\u2019s talk about your investment",
    "form.budget.budgetLabel": "What\u2019s your budget range? (USD)",
    "form.budget.budgetPlaceholder": "Select your budget",
    "form.budget.under1000": "Under $1,000",
    "form.budget.1000to5000": "$1,000 - $5,000",
    "form.budget.over5000": "Over $5,000",
    "form.budget.timelineLabel": "Expected timeline?",
    "form.budget.timelinePlaceholder": "Select timeline",
    "form.budget.asap": "ASAP",
    "form.budget.1month": "Within 1 month",
    "form.budget.flexible": "Flexible",

    // Form navigation
    "form.back": "Back",
    "form.next": "Next",
    "form.submit": "Submit",
    "form.submitting": "Submitting...",
    "form.successToast": "Form submitted successfully!",
  },
  ru: {
    // Language toggle
    "en": "En",
    "ru": "Ru",

    // Header nav
    "nav.features": "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438",
    "nav.pricing": "\u0426\u0435\u043D\u044B",
    "nav.about": "\u041E \u043D\u0430\u0441",

    // Hero section
    "hero.badge": "крипта & AI",
    "hero.titleLine1": "Крипта & AI продукты.",
    "hero.titleLine2": "Сделано правильно.",
    "hero.subtitle": "Создаём Telegram-боты, DeFi-инструменты и AI-приложения для стартапов, которые двигаются быстро.",
    "hero.bookCall": "Забронировать звонок",
    "hero.getStarted": "Начать",

    // Logos section
    "logos.trustedBy": "Используют",
    "logos.experts": "стартапы",

    // Services section
    "services.heading": "Чем мы занимаемся",
    "services.subheading": "От идеи до готового продукта",
    "services.bot.title": "Telegram-боты",
    "services.bot.desc": "Платёжные системы, DeFi-интеграции, автоматизация и кастомные решения",
    "services.defi.title": "DeFi-инструменты",
    "services.defi.desc": "Смарт-контракты, торговые боты, аналитические дашборды и блокчейн-интеграции",
    "services.ai.title": "AI-интеграция",
    "services.ai.desc": "LLM-приложения, автоматизация, анализ данных и интеллектуальные системы",
    "services.design.title": "Дизайн и прототипирование",
    "services.design.desc": "От Figma до production-ready UI с современными дизайн-системами",

    // Portfolio section
    "portfolio.heading": "Недавние проекты",
    "portfolio.subheading": "Проекты, которые мы создали для стартапов и себя",
    "portfolio.imageComingSoon": "Скриншот скоро появится",
    "portfolio.project1.title": "Бот покупки Telegram Stars",
    "portfolio.project1.desc": "Автоматизированная система покупки Telegram Stars с интеграцией оплаты в рублях",
    "portfolio.project1.tech": "Node.js, Telegram API, платёжные API",
    "portfolio.project2.title": "VPN-сервис в Telegram",
    "portfolio.project2.desc": "Быстрый VPN-сервис с интерфейсом Telegram-бота и оплатой в рублях",
    "portfolio.project2.tech": "Telegram Bot, VPN APIs, платёжные системы",
    "portfolio.project3.title": "Кастомный DeFi-инструмент",
    "portfolio.project3.desc": "Автоматизация торговли и аналитика для крипто-энтузиастов",
    "portfolio.project3.tech": "React, Web3.js, торговые API",
    "portfolio.cta": "Хотите создать что-то подобное?",
    "portfolio.ctaButton": "Давайте поговорим",

    // Onboarding form — step titles
    "form.step.personal": "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    "form.step.professional": "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F",
    "form.step.budget": "\u0411\u044E\u0434\u0436\u0435\u0442",

    // Step 1: Personal Info
    "form.personal.title": "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0441\u0435\u0431\u0435",
    "form.personal.description": "\u041D\u0430\u0447\u043D\u0451\u043C \u0441 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
    "form.personal.nameLabel": "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F",
    "form.personal.namePlaceholder": "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",
    "form.personal.emailLabel": "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
    "form.personal.emailPlaceholder": "ivan@example.com",
    "form.personal.companyLabel": "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F/\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    "form.personal.companyPlaceholder": "\u0412\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",

    // Step 2: Professional Background
    "form.professional.title": "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442",
    "form.professional.description": "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u0432\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u044B\u0442\u0435",
    "form.professional.professionLabel": "\u0412\u0430\u0448\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F?",
    "form.professional.professionPlaceholder": "\u043D\u0430\u043F\u0440. \u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440, \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, \u041C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433",
    "form.professional.industryLabel": "\u0412 \u043A\u0430\u043A\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u0432\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435?",
    "form.professional.industryPlaceholder": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0440\u0430\u0441\u043B\u044C",
    "form.professional.technology": "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
    "form.professional.finance": "\u0424\u0438\u043D\u0430\u043D\u0441\u044B",
    "form.professional.creative": "\u0422\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E",
    "form.professional.other": "\u0414\u0440\u0443\u0433\u043E\u0435",

    // Step 3: Budget & Timeline
    "form.budget.title": "\u0411\u044E\u0434\u0436\u0435\u0442 \u0438 \u0441\u0440\u043E\u043A\u0438",
    "form.budget.description": "\u041F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u043C \u043E \u0432\u0430\u0448\u0438\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F\u0445",
    "form.budget.budgetLabel": "\u0412\u0430\u0448 \u0431\u044E\u0434\u0436\u0435\u0442? (USD)",
    "form.budget.budgetPlaceholder": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u044E\u0434\u0436\u0435\u0442",
    "form.budget.under1000": "\u041C\u0435\u043D\u0435\u0435 $1,000",
    "form.budget.1000to5000": "$1,000 - $5,000",
    "form.budget.over5000": "\u0411\u043E\u043B\u0435\u0435 $5,000",
    "form.budget.timelineLabel": "\u041E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0435 \u0441\u0440\u043E\u043A\u0438?",
    "form.budget.timelinePlaceholder": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0440\u043E\u043A",
    "form.budget.asap": "\u041A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435",
    "form.budget.1month": "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 1 \u043C\u0435\u0441\u044F\u0446\u0430",
    "form.budget.flexible": "\u0413\u0438\u0431\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438",

    // Form navigation
    "form.back": "\u041D\u0430\u0437\u0430\u0434",
    "form.next": "\u0414\u0430\u043B\u0435\u0435",
    "form.submit": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    "form.submitting": "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...",
    "form.successToast": "\u0424\u043E\u0440\u043C\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
