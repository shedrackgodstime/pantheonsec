import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Container } from "~/components/layout/container";

export const Header = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <header
      class={`fixed top-0 right-0 left-0 z-50 border-b border-slate-200/50 transition-colors duration-300 ${isMenuOpen.value ? "bg-white" : "glass-panel"}`}
    >
      <Container>
        <div class="flex h-20 items-center justify-between lg:h-24">
          {/* Logo Section */}
          <div class="relative z-50 flex flex-1 items-center">
            <Link href="/" class="group flex items-center">
              <span class="text-xl font-extrabold tracking-tighter text-slate-900 uppercase transition-colors group-hover:text-brand-secondary lg:text-2xl">
                PantheonSec
              </span>
            </Link>
          </div>

          {/* Center Navigation - Perfectly Centered */}
          <nav class="hidden flex-1 items-center justify-center space-x-12 lg:flex">
            <Link
              href="/"
              class="hover:text-brand-secondary transition-standard group/link relative text-xs font-bold tracking-widest text-slate-500 uppercase"
            >
              Home
              <span class="bg-brand-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover/link:w-full"></span>
            </Link>
            <Link
              href="/services"
              class="hover:text-brand-secondary transition-standard group/link relative text-xs font-bold tracking-widest text-slate-500 uppercase"
            >
              Services
              <span class="bg-brand-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover/link:w-full"></span>
            </Link>
            <Link
              href="/solutions"
              class="hover:text-brand-secondary transition-standard group/link relative text-xs font-bold tracking-widest text-slate-500 uppercase"
            >
              Solutions
              <span class="bg-brand-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover/link:w-full"></span>
            </Link>
            <Link
              href="/blog"
              class="hover:text-brand-secondary transition-standard group/link relative text-xs font-bold tracking-widest text-slate-500 uppercase"
            >
              Insights
              <span class="bg-brand-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover/link:w-full"></span>
            </Link>
            <Link
              href="/about"
              class="hover:text-brand-secondary transition-standard group/link relative text-xs font-bold tracking-widest text-slate-500 uppercase"
            >
              About
              <span class="bg-brand-secondary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover/link:w-full"></span>
            </Link>
          </nav>

          {/* Right Action Section */}
          <div class="relative z-50 flex flex-1 items-center justify-end space-x-4 lg:space-x-6">
            <Link
              href="/contact"
              class="transition-standard hover:bg-brand-secondary hidden rounded-sm border border-transparent bg-slate-900 px-7 py-3 text-[11px] font-black tracking-widest text-white uppercase hover:border-white/10 hover:shadow-xl active:scale-95 sm:inline-flex"
            >
              Secure Intake
            </Link>

            <button
              onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
              class="hover:text-brand-secondary transition-standard p-2 text-slate-900 lg:hidden"
              aria-label="Toggle Menu"
            >
              {isMenuOpen.value ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu - Solid white background, no transparency */}
      <div
        class={`fixed inset-0 top-20 z-40 bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen.value ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
      >
        <nav class="flex h-full flex-col items-center justify-start space-y-10 bg-white px-8 pt-16">
          <Link
            href="/"
            onClick$={() => (isMenuOpen.value = false)}
            class="hover:text-brand-secondary text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick$={() => (isMenuOpen.value = false)}
            class="hover:text-brand-secondary text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            onClick$={() => (isMenuOpen.value = false)}
            class="hover:text-brand-secondary text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/blog"
            onClick$={() => (isMenuOpen.value = false)}
            class="hover:text-brand-secondary text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick$={() => (isMenuOpen.value = false)}
            class="hover:text-brand-secondary text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors"
          >
            About
          </Link>
          <div class="mt-auto mb-12 flex w-full flex-col items-center border-t border-slate-100 pt-8">
            <p class="mb-4 text-center font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              Protocol: Secure_Intake_V2
            </p>
            <Link
              href="/contact"
              onClick$={() => (isMenuOpen.value = false)}
              class="w-full max-w-xs rounded-sm bg-slate-900 py-4 text-center font-bold tracking-widest text-white uppercase shadow-xl"
            >
              Initiate Intake
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
});
