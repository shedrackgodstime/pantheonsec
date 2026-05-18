import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input, Select, Textarea } from "~/components/ui/form-controls";

export default component$(() => {
  const formState = useStore({
    isSubmitting: false,
    isSubmitted: false,
    secureToken: "",
    progress: 0,
  });

  const handleSubmit$ = $(() => {
    formState.isSubmitting = true;
    formState.progress = 10;
    
    // Simulate high-fidelity secure handshake/encryption sequence
    const interval = setInterval(() => {
      formState.progress += 25;
      if (formState.progress >= 100) {
        clearInterval(interval);
        
        // Generate cryptographic secure receipt key
        const chars = "ABCDEF0123456789";
        let token = "CS-INTAKE-";
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          if (i < 3) token += "-";
        }
        
        formState.secureToken = token;
        formState.isSubmitting = false;
        formState.isSubmitted = true;
      }
    }, 450);
  });

  return (
    <div class="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div class="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Column: Context & Information */}
          <div class="space-y-12 lg:col-span-5 lg:space-y-16">
            <div class="space-y-6">
              <Badge variant="secondary">Contact Us</Badge>
              <h1 class="text-4xl leading-[1.1] font-black tracking-tighter text-slate-900 lg:text-6xl">
                Get in <span class="text-brand-secondary">Touch.</span>
              </h1>
              <p class="max-w-md text-lg leading-relaxed font-medium text-slate-600">
                Have a question or need expert advice on your security? Our team
                is ready to help you protect your digital assets.
              </p>
            </div>

            <div class="space-y-10 border-t border-slate-200 pt-10">
              <div class="flex items-start space-x-5">
                <div class="text-brand-secondary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-slate-900 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <div class="space-y-1">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Expert Advice
                  </h4>
                  <p class="max-w-sm text-sm leading-relaxed text-slate-500">
                    Discuss your requirements directly with our senior security
                    consultants.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-5">
                <div class="text-brand-secondary flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-slate-900 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="space-y-1">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Fast Response
                  </h4>
                  <p class="max-w-sm text-sm leading-relaxed text-slate-500">
                    We prioritize all inquiries and aim to respond to all
                    messages within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6 rounded-sm border border-slate-800 bg-slate-900 p-8 shadow-2xl">
              <p class="font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase">
                Contact Information
              </p>
              <div class="space-y-3">
                <p class="text-lg font-bold tracking-tight text-white">
                  hello@cybershield.com
                </p>
                <div class="h-px w-12 bg-slate-800"></div>
                <p class="text-xs font-medium tracking-widest text-slate-400 uppercase">
                  Phone: +1 (800) 555-0123
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Intake Form or Success Overlay */}
          <div class="pb-12 lg:col-span-7 lg:pb-0">
            <div class="relative overflow-hidden rounded-sm border border-slate-100 bg-white px-6 py-10 shadow-2xl shadow-slate-200 sm:p-12 lg:sticky lg:top-32 lg:p-16 min-h-[580px] flex flex-col justify-center">
              {/* Subtle accent line */}
              <div class="bg-brand-secondary absolute top-0 left-0 h-1 w-full"></div>

              {/* State A: Submitting handshake animation */}
              {formState.isSubmitting && (
                <div class="space-y-8 text-center py-12 font-mono">
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 border border-brand-secondary animate-pulse-slow">
                    <svg viewBox="0 0 24 24" class="h-10 w-10 text-brand-secondary animate-spin" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="opacity-25" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div class="space-y-3">
                    <h3 class="text-sm font-black tracking-widest text-slate-950 uppercase">ENCRYPTING INTAKE DATA</h3>
                    <p class="text-[10px] text-slate-500 max-w-sm mx-auto leading-relaxed uppercase tracking-wider">
                      Securing transmission tunnels // onion routing v4 handshake ({formState.progress}%)
                    </p>
                  </div>
                  <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-xs mx-auto border border-slate-200">
                    <div class="bg-brand-secondary h-full transition-all duration-300" style={`width: ${formState.progress}%`}></div>
                  </div>
                </div>
              )}

              {/* State B: Handshake Success Cryptographic Receipt */}
              {formState.isSubmitted && !formState.isSubmitting && (
                <div class="space-y-8 font-mono py-6">
                  <div class="flex items-center space-x-4 border-b border-slate-200 pb-4">
                    <div class="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-black tracking-widest text-slate-900 uppercase">TRANSMISSION SECURE</h3>
                      <p class="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">INGESTION_STATUS // VERIFIED</p>
                    </div>
                  </div>

                  <div class="rounded-sm bg-slate-950 p-6 text-slate-300 text-xs space-y-4 border border-slate-800 shadow-2xl relative overflow-hidden">
                    <div class="telemetry-grid absolute inset-0 opacity-10"></div>
                    <div class="relative z-10 space-y-3">
                      <div class="flex justify-between border-b border-slate-800 pb-2">
                        <span class="text-slate-500 uppercase tracking-wider">PROTOCOL:</span>
                        <span class="text-brand-secondary font-black">ONION-V4-DIRECT</span>
                      </div>
                      <div class="flex justify-between border-b border-slate-800 pb-2">
                        <span class="text-slate-500 uppercase tracking-wider">SECURE RECEIPT KEY:</span>
                        <span class="text-emerald-400 font-bold tracking-wider">{formState.secureToken}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-slate-500 uppercase tracking-wider">TELEMETRY DECODE:</span>
                        <span class="text-white">ENCRYPTED</span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-4 text-[11px] leading-relaxed text-slate-600">
                    <p class="font-bold text-slate-900 uppercase tracking-wide">WHAT HAPPENS NEXT:</p>
                    <p>
                      Our senior security coordinators will decrypt and analyze your operational scope inside our isolated clean room within 4 hours.
                    </p>
                    <p>
                      If you require anonymous out-of-band correspondence, please keep the above **Secure Receipt Key** saved. You can use it to verify your telemetry details via our secure channels.
                    </p>
                  </div>

                  <div class="pt-4">
                    <Button
                      variant="primary"
                      class="w-full py-4 text-center tracking-widest hover:bg-brand-secondary"
                      onClick$={() => {
                        formState.isSubmitted = false;
                        formState.progress = 0;
                      }}
                    >
                      Establish New Session
                    </Button>
                  </div>
                </div>
              )}

              {/* State C: Normal Form Layout */}
              {!formState.isSubmitted && !formState.isSubmitting && (
                <form class="space-y-10" onSubmit$={handleSubmit$} preventdefault:submit>
                  <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                    <Input label="Your Name" placeholder="Full Name" name="name" required />
                    <Input label="Email Address" type="email" placeholder="email@company.com" name="email" required />
                  </div>

                  <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                    <Input label="Company Name" placeholder="Organization" name="company" />
                    <Select
                      label="Service Interest"
                      name="interest"
                      options={[
                        "Security Assessment",
                        "Incident Response",
                        "Forensic Investigation",
                        "Infrastructure Security",
                        "Other",
                      ]}
                    />
                  </div>

                  <Textarea label="Message Details" placeholder="How can we help you?" name="message" required />

                  <div class="pt-6">
                    <Button type="submit" variant="primary" size="xl" class="group w-full py-6 active:scale-[0.99] hover:bg-brand-secondary">
                      Send Message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Button>
                    <p class="mt-8 text-center font-mono text-[10px] tracking-[0.3em] text-slate-400 uppercase opacity-60">
                      We value your privacy. Your information is handled securely.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact Us | CyberShield",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with the CyberShield team for expert security advice.",
    },
  ],
};
