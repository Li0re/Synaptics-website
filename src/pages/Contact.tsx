import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "AI Agent",
  "Automation",
  "Website",
  "SaaS",
  "Other",
] as const;

const budgetOptions = [
  { value: "less-than-10k", label: "Less than €10k" },
  { value: "10k-30k", label: "€10k - €30k" },
  { value: "30k-60k", label: "€30k - €60k" },
  { value: "60k-100k", label: "€60k - €100k" },
  { value: "100k-plus", label: "€100k+" },
] as const;

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().trim().min(1, "Project description is required").max(2000, "Description must be less than 2000 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().trim().min(1, "Timeline is required").max(200, "Timeline must be less than 200 characters"),
  referral: z.string().trim().min(1, "Please tell us how you found us").max(200, "Must be less than 200 characters"),
  favoriteMedia: z.string().trim().max(200, "Must be less than 200 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");

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
      favoriteMedia: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast.success("Your inquiry has been sent! We'll get back to you soon.");
      form.reset();
      setSelectedProjectType("");
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("Failed to send your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProjectTypeClick = (type: string) => {
    setSelectedProjectType(type);
    form.setValue("projectType", type);
  };

  return (
    <Layout hideFooter variant="dark">
      <section className="min-h-screen bg-black text-white pt-24">
        <div className="container py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-[-0.03em] mb-16">
              Let's work
              <br />
              together.
            </h1>

            {/* Project Inquiry Section */}
            <div className="mb-16">
              <h2 className="text-xs uppercase tracking-[0.15em] font-medium text-emerald-400 mb-6">
                Project Inquiry
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Hey! We'd love to learn about what you're working towards to ensure we're a good fit.
                As a next step, please review the details below and submit our "Ship It" form.
              </p>

              <div className="space-y-6 text-gray-400 mb-12">
                <p>
                  <span className="text-white font-medium">Timing.</span> We're a boutique AI studio dedicated to
                  exceptional outcomes. We work with full focus on a select few clients at a time—rushed timelines
                  are generally not possible.
                </p>
                <p>
                  <span className="text-white font-medium">Scope.</span> We specialize in AI agents, intelligent
                  automations (n8n, Make, custom solutions), SaaS development, and web design. We're open to other
                  requests but prioritize high-impact projects over quick fixes.
                </p>
                <p>
                  <span className="text-white font-medium">Budget.</span> Budgets vary based on deliverables, timelines,
                  and complexity. Our engagements typically start at €10k, with comprehensive AI solutions extending
                  higher. If your expectations differ, please don't hesitate to continue the conversation.
                </p>
              </div>

              <p className="text-gray-400 mb-12">
                If you have questions or are unsure if we're a fit, please don't hesitate to reach out.
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          Your Name <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          Your Email <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Type here"
                            className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                        Company Name <span className="text-emerald-400">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type here"
                          className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Project Type */}
                <FormField
                  control={form.control}
                  name="projectType"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                        Project Type <span className="text-emerald-400">*</span>
                      </FormLabel>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => handleProjectTypeClick(type)}
                            className={`px-6 py-3 rounded-full border text-sm uppercase tracking-wide transition-all ${
                              selectedProjectType === type
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-white border-gray-700 hover:border-gray-500"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Project Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                        Project Description <span className="text-emerald-400">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Details About Your Project..."
                          className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-2xl min-h-[150px] px-6 py-4 focus:border-emerald-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          Budget Expectation <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-gray-700 text-white rounded-full h-14 px-6 focus:ring-emerald-400 focus:border-emerald-400 uppercase tracking-wide [&>span]:text-left">
                              <SelectValue placeholder="Select One" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border-gray-700">
                            {budgetOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                className="text-white hover:bg-gray-800 focus:bg-gray-800"
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          Timeline Expectation <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Referral & Favorite Media Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="referral"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          How You Found Us <span className="text-emerald-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="favoriteMedia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500">
                          Favorite Movie or Album
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type here"
                            className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 rounded-full h-14 px-6 focus:border-emerald-400 uppercase tracking-wide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-full border-2 border-gray-700 bg-transparent text-emerald-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all text-lg font-bold uppercase tracking-widest disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Ship It"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Bottom text */}
          <div className="mt-32 md:mt-48">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Synaptics. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
