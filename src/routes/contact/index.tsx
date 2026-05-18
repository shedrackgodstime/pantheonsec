import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div class="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Column: Context & Information */}
          <div class="space-y-12 lg:col-span-5 lg:space-y-16">
            <div class="space-y-6">
              <div class="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 inline-flex items-center rounded-sm border px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                Contact Us
              </div>
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

          {/* Right Column: The Intake Form */}
          <div class="pb-12 lg:col-span-7 lg:pb-0">
            <div class="relative overflow-hidden rounded-sm border border-slate-100 bg-white px-6 py-10 shadow-2xl shadow-slate-200 sm:p-12 lg:sticky lg:top-32 lg:p-16">
              {/* Subtle accent line */}
              <div class="bg-brand-secondary absolute top-0 left-0 h-1 w-full"></div>

              <form class="space-y-10" preventdefault:submit>
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                  <div class="space-y-3">
                    <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      class="focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none"
                    />
                  </div>
                  <div class="space-y-3">
                    <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      class="focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                  <div class="space-y-3">
                    <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Organization"
                      class="focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none"
                    />
                  </div>
                  <div class="space-y-3">
                    <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Service Interest
                    </label>
                    <div class="relative">
                      <select class="focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full cursor-pointer appearance-none rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm focus:ring-1 focus:outline-none">
                        <option>Security Assessment</option>
                        <option>Incident Response</option>
                        <option>Forensic Investigation</option>
                        <option>Infrastructure Security</option>
                        <option>Other</option>
                      </select>
                      <div class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    Message Details
                  </label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    class="focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full resize-none rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none"
                  ></textarea>
                </div>

                <div class="pt-6">
                  <button class="group transition-standard hover:bg-brand-secondary flex w-full items-center justify-center rounded-sm bg-slate-900 py-6 font-black tracking-[0.2em] text-white uppercase hover:shadow-2xl active:scale-[0.99]">
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
                  </button>
                  <p class="mt-8 text-center font-mono text-[10px] tracking-[0.3em] text-slate-400 uppercase opacity-60">
                    We value your privacy. Your information is handled securely.
                  </p>
                </div>
              </form>
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
