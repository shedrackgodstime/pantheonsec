import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Container } from "~/components/layout/container";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="relative overflow-hidden border-t border-slate-800 bg-slate-900 py-12 text-slate-400 lg:py-16">
      <Container class="relative z-10">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand & Status Column */}
          <div class="space-y-6 lg:col-span-6">
            <Link href="/" class="group flex items-center">
              <span class="text-xl font-extrabold tracking-tighter text-white uppercase transition-colors group-hover:text-brand-secondary">
                PantheonSec
              </span>
            </Link>
            <p class="max-w-md text-sm leading-relaxed opacity-80">
              Elite asymmetric defense for enterprise infrastructure.
              Neutralizing digital threats through proactive red teaming and
              rapid response operations.
            </p>
            <div class="flex items-center space-x-2">
              <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              <span class="text-[10px] font-bold tracking-[0.2em] text-emerald-500 uppercase">
                Ops Center: Active
              </span>
            </div>
          </div>

          {/* Moderate Links - Services */}
          <div class="space-y-6 lg:col-span-3">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              Services
            </h4>
            <ul class="space-y-3 text-sm">
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
                  Digital Forensics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Cloud Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Moderate Links - Company */}
          <div class="space-y-6 lg:col-span-3">
            <h4 class="text-xs font-black tracking-[0.2em] text-white uppercase">
              Company
            </h4>
            <ul class="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  class="hover:text-brand-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Intelligence
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
              <li>
                <Link
                  href="/contact"
                  class="hover:text-brand-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-slate-800 pt-8 md:flex-row md:space-y-0 lg:mt-16">
          <p class="font-mono text-[9px] tracking-widest uppercase opacity-40">
            &copy; {currentYear} PantheonSec Tactical Operations.
          </p>
          <div class="flex space-x-6 text-[9px] font-bold tracking-widest uppercase opacity-60">
            <a href="#" class="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" class="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" class="transition-colors hover:text-white">
              Compliance
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
});
