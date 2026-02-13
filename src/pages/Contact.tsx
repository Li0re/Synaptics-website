import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company required").max(100),
  projectType: z.string().min(1, "Please select"),
  otherDetail: z.string().optional(),
  description: z.string().trim().min(1, "Required").max(2000),
  budget: z.string().min(1, "Please select"),
  timeline: z.string().trim().min(1, "Required").max(200),
  referral: z.string().trim().min(1, "Required").max(200)
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const projectTypes = [
    t("project.type.medical"),
    t("project.type.realestate"),
    t("project.type.law"),
    t("project.type.restaurant"),
    t("project.type.plumber"),
    t("project.type.tiling"),
    t("project.type.plasterer"),
    t("project.type.electrician"),
    t("project.type.accountant"),
    t("project.type.other"),
  ];

  const budgetOptions = [
    { value: "starter", label: t("contact.budget.starter") },
    { value: "growth", label: t("contact.budget.growth") },
    { value: "enterprise", label: t("contact.budget.enterprise") },
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      description: "",
      budget: "",
      timeline: "",
      referral: "",
      otherDetail: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data
      });
      if (error) throw error;
      toast.success(t("contact.toast.success"));
      form.reset();
      setSelectedProjectType("");
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProjectTypeClick = (type: string) => {
    setSelectedProjectType(type);
    form.setValue("projectType", type);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <Layout hideFooter variant="dark">
      <section className="h-screen bg-black text-white pt-24 overflow-hidden flex flex-col">
        <motion.div
          className="container h-full flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-full items-center">

            {/* LEFT: Headline + Info */}
            <motion.div variants={itemVariants} className="md:sticky md:top-24 md:self-start h-fit">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-[-0.03em] mb-6">
                {t("contact.title.line1")}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
                  {t("contact.title.line2")}
                </span>
              </h1>

              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-md">
                {t("contact.desc")}
              </p>

              {/* Info cards */}
              <div className="space-y-3">
                <div className="group p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{t("contact.useCase")}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{t("contact.useCase.desc")}</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{t("contact.onboarding")}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{t("contact.onboarding.desc")}</p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{t("contact.pricing")}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{t("contact.pricing.desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Form Card */}
            <motion.div variants={itemVariants} className="h-full overflow-y-auto no-scrollbar py-6">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                            {t("contact.form.name")} <span className="text-emerald-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl h-10 px-4 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                            {t("contact.form.email")} <span className="text-emerald-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@clinic.com" className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl h-10 px-4 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    </div>

                    {/* Company Name */}
                    <FormField control={form.control} name="company" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                          {t("contact.form.company")} <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.company")} className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl h-10 px-4 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />

                    {/* Use Case Chips */}
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                          {t("contact.form.useCase")} <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className={cn(
                                  "w-full justify-between bg-white/[0.04] border-white/[0.08] text-white rounded-xl h-10 px-4 hover:bg-white/[0.06] hover:text-white hover:border-white/[0.15]",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? projectTypes.find(
                                    (type) => type === field.value
                                  )
                                  : t("contact.form.useCase")}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-gray-900 border-gray-700 rounded-xl">
                            <Command className="bg-transparent">
                              <CommandInput placeholder={t("contact.form.useCase") + "..."} className="text-white" />
                              <CommandList>
                                <CommandEmpty className="py-0 text-left">
                                  <div
                                    onClick={() => {
                                      form.setValue("projectType", t("project.type.other"));
                                      handleProjectTypeClick(t("project.type.other"));
                                      setOpen(false);
                                    }}
                                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none text-white hover:bg-gray-800"
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        field.value === t("project.type.other")
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {t("project.type.other")}
                                  </div>
                                </CommandEmpty>
                                <CommandGroup>
                                  {projectTypes.map((type) => (
                                    <CommandItem
                                      value={type}
                                      key={type}
                                      onSelect={() => {
                                        form.setValue("projectType", type);
                                        handleProjectTypeClick(type);
                                        setOpen(false);
                                      }}
                                      className="text-white hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          type === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {type}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <AnimatePresence>
                          {selectedProjectType === t("project.type.other") && (
                            <motion.div
                              key="other-detail-input"
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden p-[1px]"
                            >
                              <FormField
                                control={form.control}
                                name="otherDetail"
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    placeholder={t("contact.form.otherDetail.placeholder")}
                                    className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-500 rounded-xl h-10 px-4 text-sm focus:border-blue-400/50 focus:bg-white/[0.06] transition-all w-full"
                                  />
                                )}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />

                    {/* Description */}
                    <FormField control={form.control} name="description" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                          {t("contact.form.tellMore")} <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea placeholder={t("contact.form.tellMore.placeholder")} className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl min-h-[80px] px-4 py-3 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm resize-none" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />

                    {/* Budget & Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <FormField control={form.control} name="budget" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                            {t("contact.form.budget")} <span className="text-emerald-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/[0.04] border-white/[0.08] text-white rounded-xl h-10 px-4 focus:ring-blue-400/50 focus:border-blue-400/50 text-sm [&>span]:text-left">
                                <SelectValue placeholder={t("contact.form.budgetPlaceholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-900 border-gray-700 rounded-xl">
                              {budgetOptions.map(option => (
                                <SelectItem key={option.value} value={option.value} className="text-white hover:bg-gray-800 focus:bg-gray-800 text-sm">
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="timeline" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                            {t("contact.form.timeline")} <span className="text-emerald-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.timelinePlaceholder")} className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl h-10 px-4 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs" />
                        </FormItem>
                      )} />
                    </div>

                    {/* Referral */}
                    <FormField control={form.control} name="referral" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] uppercase tracking-[0.15em] font-medium text-gray-500">
                          {t("contact.form.referral")} <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.referralPlaceholder")} className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl h-10 px-4 focus:border-blue-400/50 focus:bg-white/[0.06] transition-all text-sm" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )} />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-400 hover:to-emerald-400 transition-all text-sm font-semibold uppercase tracking-widest disabled:opacity-50 shadow-[0_8px_32px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.3)] border-0"
                    >
                      {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Bottom text */}
              <p className="text-xs text-gray-600 mt-6 text-center">
                © {new Date().getFullYear()} Synaptics. {t("footer.copyright")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Contact;