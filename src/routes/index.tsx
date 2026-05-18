import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { TelemetryConsole } from "~/components/ui/telemetry-console";

export default component$(() => {
  return (
    <>
      <div class="hero-gradient relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-12 sm:px-8 lg:min-h-[95vh] lg:px-12 lg:py-24">
        {/* Background ambient elements */}
        <div class="telemetry-grid pointer-events-none absolute inset-0 z-0 opacity-30"></div>

        <div class="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:mb-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Copy & Actions */}
          <div class="flex flex-col items-center space-y-8 text-center lg:col-span-7 lg:items-start lg:text-left">
            <Badge variant="accent" pulse={true}>
              SECURE INTAKE // ACTIVE & DISCREET
            </Badge>

            <h1 class="text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl lg:text-7xl lg:leading-[1.05]">
              Asymmetric Defense for{" "}
              <span class="text-brand-secondary">Mission-Critical</span>{" "}
              Infrastructure.
            </h1>

            <p class="max-w-2xl text-lg leading-relaxed font-medium text-slate-600 sm:text-xl">
              CyberShield deploys elite Red Teaming, rapid Incident Response,
              and deep Digital Forensics to safeguard enterprise networks and
              cloud assets. We neutralize threats before they disrupt your
              operations.
            </p>

            <div class="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" class="group w-full sm:w-auto">
                Initiate Secure Intake
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
              <Button href="/services" variant="outline" size="lg" class="w-full sm:w-auto">
                View Tactical Scope
              </Button>
            </div>

            <div class="grid w-full grid-cols-2 gap-6 border-t border-slate-200/60 pt-8 sm:grid-cols-3">
              <div class="text-center lg:text-left">
                <p class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  &lt; 15m
                </p>
                <p class="mt-1 text-[10px] font-semibold tracking-widest text-slate-500 uppercase sm:text-xs">
                  Mean Time to Mitigation
                </p>
              </div>
              <div class="text-center lg:text-left">
                <p class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Zero-Day
                </p>
                <p class="mt-1 text-[10px] font-semibold tracking-widest text-slate-500 uppercase sm:text-xs">
                  Threat Anticipation
                </p>
              </div>
              <div class="col-span-2 text-center sm:col-span-1 lg:text-left">
                <p class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  24/7/365
                </p>
                <p class="mt-1 text-[10px] font-semibold tracking-widest text-slate-500 uppercase sm:text-xs">
                  Tactical Overwatch
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Visual */}
          <TelemetryConsole class="lg:col-span-5" />
        </div>
      </div>

      {/* The Perimeter Protocol (Compact Authority Bridge) */}
      <section class="relative overflow-hidden bg-slate-900 py-12 lg:py-16">
        {/* Background Image Layer with Overlay */}
        <div class="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
            alt="Security Infrastructure"
            class="h-full w-full object-cover opacity-70 grayscale"
            width={2070}
            height={1380}
          />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>

        <div class="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          <div class="max-w-4xl">
            <h2 class="mb-6 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Absolute Control Over Your Digital Perimeter.
            </h2>

            <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <div class="lg:col-span-8">
                <p class="text-lg leading-relaxed text-slate-400 sm:text-xl">
                  CyberShield engineers asymmetric defense layers that
                  neutralize sophisticated threat actors before they touch your
                  core infrastructure. We don't just monitor; we prevent.
                </p>
              </div>

              <div class="flex flex-row justify-start space-x-10 lg:col-span-4 lg:flex-col lg:justify-end lg:space-y-6 lg:space-x-0">
                <div>
                  <p class="text-2xl font-bold tracking-tight text-white">
                    99.9%
                  </p>
                  <p class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                    Suppression Efficiency
                  </p>
                </div>
                <div>
                  <p class="text-2xl font-bold tracking-tight text-white">
                    GLOBAL
                  </p>
                  <p class="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                    Tactical Deployment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section class="relative overflow-hidden bg-white py-24 lg:py-32">
        <div class="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div class="mb-16 max-w-3xl lg:mb-24 space-y-6">
            <Badge variant="slate">Service Capabilities</Badge>
            <h2 class="mb-6 text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-5xl">
              Elite Tactical Units for <br class="hidden lg:block" />
              <span class="text-brand-secondary">End-to-End</span>{" "}
              Infrastructure Defense.
            </h2>
            <p class="text-lg leading-relaxed font-medium text-slate-600">
              CyberShield operates through specialized departments, each focused
              on a critical vector of the security lifecycle. From proactive
              breach simulation to reactive digital forensics.
            </p>
          </div>

          {/* Services Grid */}
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 1: Red Teaming */}
            <div class="group transition-standard hover:border-brand-secondary/30 hover:shadow-brand-secondary/5 flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-slate-50/30 hover:shadow-2xl">
              {/* Image Placeholder */}
              <div class="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-900">
                <div class="telemetry-grid absolute inset-0 opacity-20"></div>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  CS_IMG_RED_TEAM
                </div>
                {/* Overlay on hover */}
                <div class="bg-brand-secondary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div class="flex flex-grow flex-col p-8">
                <span class="text-brand-secondary mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Unit 01 // Offensive
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-xl font-bold text-slate-900 transition-colors">
                  Red Teaming & Simulation
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Full-spectrum adversarial simulations designed to test your
                  detection and response capabilities against real-world threat
                  actors.
                </p>
                <Button href="/services" variant="link" class="group/btn self-start">
                  Analyze Scope
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            </div>

            {/* Service 2: Incident Response */}
            <div class="group transition-standard hover:border-brand-secondary/30 hover:shadow-brand-secondary/5 flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-slate-50/30 hover:shadow-2xl">
              <div class="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-900">
                <div class="telemetry-grid absolute inset-0 opacity-20"></div>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  CS_IMG_RESPONSE_OPS
                </div>
                <div class="bg-brand-secondary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div class="flex flex-grow flex-col p-8">
                <span class="mb-3 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">
                  Unit 02 // Reactive
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-xl font-bold text-slate-900 transition-colors">
                  Rapid Incident Response
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Immediate deployment of elite response teams to contain
                  breaches, neutralize threats, and restore operations with
                  minimal downtime.
                </p>
                <Button href="/services" variant="link" class="group/btn self-start">
                  Deploy Protocols
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            </div>

            {/* Service 3: Cloud Forensics */}
            <div class="group transition-standard hover:border-brand-secondary/30 hover:shadow-brand-secondary/5 flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-slate-50/30 hover:shadow-2xl">
              <div class="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-900">
                <div class="telemetry-grid absolute inset-0 opacity-20"></div>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  CS_IMG_FORENSICS
                </div>
                <div class="bg-brand-secondary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div class="flex flex-grow flex-col p-8">
                <span class="text-brand-secondary mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Unit 03 // Intelligence
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-xl font-bold text-slate-900 transition-colors">
                  Digital Forensics
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Deep-dive investigation into compromised systems to identify
                  root causes, extract evidence, and build comprehensive
                  forensic reports.
                </p>
                <Button href="/services" variant="link" class="group/btn self-start">
                  Investigate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            </div>

            {/* Service 4: Infrastructure */}
            <div class="group transition-standard hover:border-brand-secondary/30 hover:shadow-brand-secondary/5 flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-slate-50/30 hover:shadow-2xl">
              <div class="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-900">
                <div class="telemetry-grid absolute inset-0 opacity-20"></div>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  CS_IMG_NETWORK_OPS
                </div>
                <div class="bg-brand-secondary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>

              <div class="flex flex-grow flex-col p-8">
                <span class="mb-3 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                  Unit 04 // Shield
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-xl font-bold text-slate-900 transition-colors">
                  Infrastructure Hardening
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Securing hybrid-cloud environments and mission-critical
                  networks through rigorous architecture reviews and deployment
                  of active defense layers.
                </p>
                <Button href="/services" variant="link" class="group/btn self-start">
                  Review Defense
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "CyberShield | Enterprise-Grade Cybersecurity Services",
  meta: [
    {
      name: "description",
      content:
        "Protecting your digital infrastructure with elite red teaming, incident response, and forensic services.",
    },
  ],
};
