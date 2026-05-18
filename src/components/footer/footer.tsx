import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="relative overflow-hidden border-t border-slate-800 bg-slate-900 py-16 text-slate-400 lg:py-24">
      {/* Subtle background telemetry grid for consistency */}
      <div class="telemetry-grid pointer-events-none absolute inset-0 z-0 opacity-10"></div>

      <div class="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          {/* Brand Column */}
          <div class="space-y-8 lg:col-span-4">
            <Link href="/" class="group flex items-center space-x-3">
              <div class="bg-brand-secondary transition-standard shadow-brand-secondary/20 flex h-10 w-10 items-center justify-center rounded-sm shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L3 7V12C3 17.52 6.84 22.65 12 24C17.16 22.65 21 17.52 21 12V7L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span class="text-2xl font-black tracking-tighter text-white uppercase">
                CyberShield
              </span>
            </Link>
            <p class="max-w-sm text-sm leading-relaxed">
              Deploying elite asymmetric defense protocols for global enterprise
              infrastructure. Our mission is the absolute neutralization of
              digital threats before they manifest.
            </p>
            <div class="flex space-x-4">
              {/* Social Placeholders with tactical styling */}
              {["X", "LI", "GH"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  class="hover:border-brand-secondary transition-standard flex h-8 w-8 items-center justify-center rounded-sm border border-slate-700 text-[10px] font-bold hover:text-white"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div class="space-y-6 lg:col-span-2">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              Capabilities
            </h4>
            <ul class="space-y-4 text-sm">
              <li>
                <Link
                  href="/services"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Red Teaming
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Incident Response
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Cloud Forensics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Threat Hunting
                </Link>
              </li>
            </ul>
          </div>

          <div class="space-y-6 lg:col-span-2">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              Intelligence
            </h4>
            <ul class="space-y-4 text-sm">
              <li>
                <Link
                  href="/blog"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Security Advisories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Research Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Zero-Day Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div class="space-y-6 lg:col-span-2">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              Company
            </h4>
            <ul class="space-y-4 text-sm">
              <li>
                <Link
                  href="/about"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  class="hover:text-brand-secondary transition-colors"
                >
                  The Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Status Column */}
          <div class="space-y-6 lg:col-span-2">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              System Status
            </h4>
            <div class="rounded-sm border border-slate-700/50 bg-slate-800/50 p-4">
              <div class="mb-2 flex items-center space-x-2">
                <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                <span class="text-[10px] font-bold tracking-widest text-emerald-500 uppercase">
                  Global Ops: Normal
                </span>
              </div>
              <p class="font-mono text-[9px] leading-tight uppercase opacity-50">
                All monitoring nodes active. Latency within nominal parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-slate-800 pt-8 md:flex-row md:space-y-0 lg:mt-24">
          <p class="font-mono text-[10px] tracking-widest uppercase opacity-40">
            &copy; {currentYear} CyberShield Tactical Operations. All rights
            reserved.
          </p>
          <div class="flex space-x-8 text-[10px] font-bold tracking-widest uppercase opacity-60">
            <a href="#" class="transition-colors hover:text-white">
              Privacy Protocol
            </a>
            <a href="#" class="transition-colors hover:text-white">
              Terms of Engagement
            </a>
            <a href="#" class="transition-colors hover:text-white">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
