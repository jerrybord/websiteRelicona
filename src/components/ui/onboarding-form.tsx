"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

interface FormData {
	name: string;
	email: string;
	company: string;
	profession: string;
	industry: string;
	budget: string;
	timeline: string;
}

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const gradientBg =
	"bg-[linear-gradient(to_right,#FF3827_0%,#FF3537_13%,#FF314F_33%,#FF4A42_44%,#FF6D30_59%,#FF961B_77%,#FFCA00_100%)] text-white border-none hover:opacity-90";

export default function OnboardingForm({ onClose }: { onClose: () => void }) {
	const { t } = useLanguage();
	const [currentStep, setCurrentStep] = useState(0);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		company: "",
		profession: "",
		industry: "",
		budget: "",
		timeline: "",
	});

	const steps = [
		{ id: "personal", title: t("form.step.personal") },
		{ id: "professional", title: t("form.step.professional") },
		{ id: "budget", title: t("form.step.budget") },
	];

	const updateFormData = (field: keyof FormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const nextStep = () => {
		if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
	};

	const prevStep = () => {
		if (currentStep > 0) setCurrentStep((prev) => prev - 1);
	};

	const handleSubmit = () => {
		setIsSubmitting(true);
		setTimeout(() => {
			toast.success(t("form.successToast"));
			setIsSubmitting(false);
			onClose();
		}, 1500);
	};

	const isStepValid = () => {
		switch (currentStep) {
			case 0:
				return formData.name.trim() !== "" && formData.email.trim() !== "";
			case 1:
				return formData.profession.trim() !== "" && formData.industry !== "";
			case 2:
				return formData.budget !== "" && formData.timeline !== "";
			default:
				return true;
		}
	};

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="w-full max-w-lg mx-auto py-8 relative">
				<button
					onClick={onClose}
					className="absolute -top-4 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
				>
					<X className="h-6 w-6" />
				</button>

				{/* Progress indicator */}
				<motion.div
					className="mb-8"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex justify-between mb-2">
						{steps.map((step, index) => (
							<div key={step.id} className="flex flex-col items-center">
								<div
									className={cn(
										"w-4 h-4 rounded-full transition-colors duration-300",
										index < currentStep
											? "bg-[#FF3827]"
											: index === currentStep
												? "bg-[#FF3827] ring-4 ring-[#FF3827]/20"
												: "bg-muted",
									)}
								/>
								<span
									className={cn(
										"text-xs mt-1.5 hidden sm:block font-cygre-reg",
										index === currentStep
											? "text-foreground font-cygre-semi"
											: "text-muted-foreground",
									)}
								>
									{step.title}
								</span>
							</div>
						))}
					</div>
					<div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
						<motion.div
							className="h-full bg-[linear-gradient(to_right,#FF3827_0%,#FFCA00_100%)]"
							initial={{ width: 0 }}
							animate={{
								width: `${(currentStep / (steps.length - 1)) * 100}%`,
							}}
							transition={{ duration: 0.3 }}
						/>
					</div>
				</motion.div>

				{/* Form card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Card className="border shadow-xl rounded-3xl overflow-hidden bg-background">
						<div>
							<AnimatePresence mode="wait">
								<motion.div
									key={currentStep}
									initial="hidden"
									animate="visible"
									exit="exit"
									variants={contentVariants}
								>
									{/* Step 1: Personal Info */}
									{currentStep === 0 && (
										<>
											<CardHeader>
												<CardTitle className="font-cygre-semi">
													{t("form.personal.title")}
												</CardTitle>
												<CardDescription className="font-cygre-reg">
													{t("form.personal.description")}
												</CardDescription>
											</CardHeader>
											<CardContent className="space-y-4 font-cygre-reg">
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="name">{t("form.personal.nameLabel")}</Label>
													<Input
														id="name"
														placeholder={t("form.personal.namePlaceholder")}
														value={formData.name}
														onChange={(e) =>
															updateFormData("name", e.target.value)
														}
													/>
												</motion.div>
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="email">{t("form.personal.emailLabel")}</Label>
													<Input
														id="email"
														type="email"
														placeholder={t("form.personal.emailPlaceholder")}
														value={formData.email}
														onChange={(e) =>
															updateFormData("email", e.target.value)
														}
													/>
												</motion.div>
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="company">
														{t("form.personal.companyLabel")}
													</Label>
													<Input
														id="company"
														placeholder={t("form.personal.companyPlaceholder")}
														value={formData.company}
														onChange={(e) =>
															updateFormData("company", e.target.value)
														}
													/>
												</motion.div>
											</CardContent>
										</>
									)}

									{/* Step 2: Professional Background */}
									{currentStep === 1 && (
										<>
											<CardHeader>
												<CardTitle className="font-cygre-semi">
													{t("form.professional.title")}
												</CardTitle>
												<CardDescription className="font-cygre-reg">
													{t("form.professional.description")}
												</CardDescription>
											</CardHeader>
											<CardContent className="space-y-4 font-cygre-reg">
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="profession">
														{t("form.professional.professionLabel")}
													</Label>
													<Input
														id="profession"
														placeholder={t("form.professional.professionPlaceholder")}
														value={formData.profession}
														onChange={(e) =>
															updateFormData(
																"profession",
																e.target.value,
															)
														}
													/>
												</motion.div>
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="industry">
														{t("form.professional.industryLabel")}
													</Label>
													<Select
														value={formData.industry}
														onValueChange={(value) =>
															updateFormData("industry", value)
														}
													>
														<SelectTrigger id="industry">
															<SelectValue placeholder={t("form.professional.industryPlaceholder")} />
														</SelectTrigger>
														<SelectContent className="font-cygre-reg">
															<SelectItem value="technology">
																{t("form.professional.technology")}
															</SelectItem>
															<SelectItem value="finance">
																{t("form.professional.finance")}
															</SelectItem>
															<SelectItem value="creative">
																{t("form.professional.creative")}
															</SelectItem>
															<SelectItem value="other">
																{t("form.professional.other")}
															</SelectItem>
														</SelectContent>
													</Select>
												</motion.div>
											</CardContent>
										</>
									)}

									{/* Step 3: Budget & Timeline */}
									{currentStep === 2 && (
										<>
											<CardHeader>
												<CardTitle className="font-cygre-semi">
													{t("form.budget.title")}
												</CardTitle>
												<CardDescription className="font-cygre-reg">
													{t("form.budget.description")}
												</CardDescription>
											</CardHeader>
											<CardContent className="space-y-4 font-cygre-reg">
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="budget">
														{t("form.budget.budgetLabel")}
													</Label>
													<Select
														value={formData.budget}
														onValueChange={(value) =>
															updateFormData("budget", value)
														}
													>
														<SelectTrigger id="budget">
															<SelectValue placeholder={t("form.budget.budgetPlaceholder")} />
														</SelectTrigger>
														<SelectContent className="font-cygre-reg">
															<SelectItem value="under-1000">
																{t("form.budget.under1000")}
															</SelectItem>
															<SelectItem value="1000-5000">
																{t("form.budget.1000to5000")}
															</SelectItem>
															<SelectItem value="over-5000">
																{t("form.budget.over5000")}
															</SelectItem>
														</SelectContent>
													</Select>
												</motion.div>
												<motion.div
													variants={fadeInUp}
													className="space-y-2"
												>
													<Label htmlFor="timeline">
														{t("form.budget.timelineLabel")}
													</Label>
													<Select
														value={formData.timeline}
														onValueChange={(value) =>
															updateFormData("timeline", value)
														}
													>
														<SelectTrigger id="timeline">
															<SelectValue placeholder={t("form.budget.timelinePlaceholder")} />
														</SelectTrigger>
														<SelectContent className="font-cygre-reg">
															<SelectItem value="asap">{t("form.budget.asap")}</SelectItem>
															<SelectItem value="1-month">
																{t("form.budget.1month")}
															</SelectItem>
															<SelectItem value="flexible">
																{t("form.budget.flexible")}
															</SelectItem>
														</SelectContent>
													</Select>
												</motion.div>
											</CardContent>
										</>
									)}
								</motion.div>
							</AnimatePresence>

							<CardFooter className="flex justify-between pt-6 pb-4">
								<Button
									type="button"
									onClick={prevStep}
									disabled={currentStep === 0}
									className={cn(
										"flex items-center gap-1 transition-all duration-300 rounded-2xl font-cygre-semi",
										gradientBg,
										currentStep === 0 && "opacity-50 grayscale",
									)}
								>
									<ChevronLeft className="h-4 w-4" /> {t("form.back")}
								</Button>
								<Button
									type="button"
									onClick={
										currentStep === steps.length - 1
											? handleSubmit
											: nextStep
									}
									disabled={!isStepValid() || isSubmitting}
									className={cn(
										"flex items-center gap-1 transition-all duration-300 rounded-2xl font-cygre-semi",
										gradientBg,
									)}
								>
									{isSubmitting ? (
										<>
											<Loader2 className="h-4 w-4 animate-spin" />{" "}
											{t("form.submitting")}
										</>
									) : (
										<>
											{currentStep === steps.length - 1
												? t("form.submit")
												: t("form.next")}{" "}
											{currentStep === steps.length - 1 ? (
												<Check className="h-4 w-4" />
											) : (
												<ChevronRight className="h-4 w-4" />
											)}
										</>
									)}
								</Button>
							</CardFooter>
						</div>
					</Card>
				</motion.div>
			</div>
		</motion.div>
	);
}
