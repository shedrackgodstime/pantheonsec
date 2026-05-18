import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge } from "~/components/ui/badge";

export default component$(() => {
  return (
    <div class="min-h-screen bg-white">
      {/* About Hero Section */}
      <section class="relative overflow-hidden bg-slate-900 py-24 lg:py-40 text-white">
        {/* Background visual detail */}
        <div class="absolute inset-0 z-0 opacity-20 telemetry-grid pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent"></div>

        <div class="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div class="max-w-4xl space-y-8">
            <Badge variant="primary">Our Mission</Badge>
            <h1 class="mb-10 text-4xl leading-[0.95] font-black tracking-tighter text-white lg:text-8xl">
              Securing the <br />
              <span class="italic text-slate-500">Global Infrastructure.</span>
            </h1>
            <p class="text-xl leading-relaxed font-medium text-slate-400 lg:text-2xl max-w-2xl">
              CyberShield was founded on a single principle: to provide elite,
              asymmetric defense for organizations that cannot afford a
              perimeter failure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Directives (Premium Light Refactor) */}
      <section class="relative overflow-hidden bg-white py-24 lg:py-40 text-slate-900">
        <div class="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div class="mb-20 lg:mb-32 max-w-4xl space-y-8">
            <Badge variant="secondary">Operational Philosophy</Badge>
            <h2 class="mb-10 text-4xl leading-[1.05] font-black tracking-tighter text-slate-900 lg:text-7xl">
              The Principles of <br />
              <span class="text-brand-secondary">Asymmetric Defense.</span>
            </h2>
            <p class="text-xl leading-relaxed font-medium text-slate-600 lg:text-2xl max-w-3xl">
              Our technical execution is guided by a rigorous ethical framework
              and a relentless pursuit of technical mastery.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2 lg:gap-y-24">
            {/* Directive 01 */}
            <div class="group relative border-t border-slate-100 pt-10">
              <span class="absolute top-0 left-0 py-3 font-mono text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
                Directive_01
              </span>
              <div class="space-y-6">
                <h3 class="transition-standard text-2xl font-bold tracking-tight text-slate-900 group-hover:text-brand-secondary">
                  Absolute Discretion
                </h3>
                <p class="font-medium leading-relaxed text-slate-500">
                  Confidentiality is our primary operational requirement. We
                  maintain tier-one privacy protocols for all client
                  engagements, ensuring that your security posture remains a
                  private strategic advantage.
                </p>
              </div>
            </div>

            {/* Directive 02 */}
            <div class="group relative border-t border-slate-100 pt-10">
              <span class="absolute top-0 left-0 py-3 font-mono text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
                Directive_02
              </span>
              <div class="space-y-6">
                <h3 class="transition-standard text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600">
                  Offensive Perspective
                </h3>
                <p class="font-medium leading-relaxed text-slate-500">
                  To build a resilient defense, one must master the art of the
                  attack. Our units approach every shield with the precision of
                  a spear, identifying vulnerabilities before they can be
                  weaponized.
                </p>
              </div>
            </div>

            {/* Directive 03 */}
            <div class="group relative border-t border-slate-100 pt-10">
              <span class="absolute top-0 left-0 py-3 font-mono text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
                Directive_03
              </span>
              <div class="space-y-6">
                <h3 class="transition-standard text-2xl font-bold tracking-tight text-slate-900 group-hover:text-brand-secondary">
                  Global Resilience
                </h3>
                <p class="font-medium leading-relaxed text-slate-500">
                  Threat actors operate without borders. Our response units are
                  engineered for global scalability, providing consistent,
                  high-fidelity protection across any jurisdiction and
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Directive 04 */}
            <div class="group relative border-t border-slate-100 pt-10">
              <span class="absolute top-0 left-0 py-3 font-mono text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
                Directive_04
              </span>
              <div class="space-y-6">
                <h3 class="transition-standard text-2xl font-bold tracking-tight text-slate-900 group-hover:text-brand-secondary">
                  Ethical Mastery
                </h3>
                <p class="font-medium leading-relaxed text-slate-500">
                  Technical brilliance must be anchored in integrity. Our
                  commitment to ethical security research ensures that we are
                  always a force for stabilization in the global digital
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About CyberShield | Our Mission & Expertise",
  meta: [
    {
      name: "description",
      content:
        "Learn about CyberShield's mission to provide elite cybersecurity defense and protect global digital infrastructure.",
    },
  ],
};
