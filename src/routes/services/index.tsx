import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/layout/container";
import { PageHeader } from "~/components/layout/page-header";
import { Section } from "~/components/layout/section";
import { Card, CardImage } from "~/components/ui/card";

export default component$(() => {
  return (
    <div class="min-h-screen bg-white">
      {/* Services Hero Section (Unified Layout) */}
      <PageHeader
        badgeText="Our Capabilities"
        badgeVariant="secondary"
        title="Specialized Defense for Enterprise Resilience."
        subtitle="CyberShield provides a comprehensive suite of security services designed to identify, neutralize, and prevent sophisticated digital threats across your entire infrastructure."
        variant="muted"
      />

      {/* Service Unit 01: Red Teaming */}
      <Section variant="light" padding="lg">
        <Container>
          <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Visual Column (Modular Card System) */}
            <div class="lg:col-span-6">
              <Card>
                <CardImage variant="primary">
                  <span class="border border-slate-800 bg-slate-950/50 px-4 py-2 font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
                    Capability_Visual // Red_Team
                  </span>
                </CardImage>
              </Card>
            </div>

            {/* Content Column */}
            <div class="space-y-10 lg:col-span-6">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="text-brand-secondary text-xs font-black tracking-[0.3em] uppercase">
                    Unit 01
                  </span>
                  <div class="h-px w-12 bg-slate-200"></div>
                  <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Offensive Security
                  </span>
                </div>
                <h2 class="text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-5xl">
                  Red Teaming & <br />
                  Adversarial Simulation.
                </h2>
                <p class="text-lg leading-relaxed font-medium text-slate-600">
                  Our Red Team operations go beyond standard penetration
                  testing. We simulate real-world threat actors to test your
                  organization's entire security posture—from technical controls
                  to human response.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Breach Simulation
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    End-to-end attack scenarios to identify critical paths to
                    your mission-critical data.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Social Engineering
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Testing the human perimeter through sophisticated phishing
                    and physical access simulations.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    API & Cloud Security
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Deep-dive assessment of modern cloud infrastructure and
                    proprietary interface vulnerabilities.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Exploit Research
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Custom vulnerability research focused on your unique
                    technology stack and legacy systems.
                  </p>
                </div>
              </div>

              <div class="pt-4">
                <Button variant="primary" size="lg">
                  Request Simulation Scope
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Unit 02: Incident Response */}
      <Section variant="muted" padding="lg">
        <Container>
          <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Content Column */}
            <div class="order-2 space-y-10 lg:order-1 lg:col-span-6">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="text-xs font-black tracking-[0.3em] text-emerald-600 uppercase">
                    Unit 02
                  </span>
                  <div class="h-px w-12 bg-slate-200"></div>
                  <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Reactive Security
                  </span>
                </div>
                <h2 class="text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-5xl">
                  Rapid Incident Response & <br />
                  Breach Containment.
                </h2>
                <p class="text-lg leading-relaxed font-medium text-slate-600">
                  When a perimeter is breached, every second counts. Our elite
                  response units deploy immediately to isolate threats, minimize
                  operational disruption, and neutralize active adversaries.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Threat Containment
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Swift isolation of compromised nodes to prevent lateral
                    movement and data exfiltration.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Malware Analysis
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    In-depth reverse engineering of hostile binaries to identify
                    capabilities and attribution.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Forensic Triage
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Rapid identification of the entry vector and extent of the
                    compromise for immediate mitigation.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Recovery Operations
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Coordinated restoration of mission-critical services with
                    hardened security protocols.
                  </p>
                </div>
              </div>

              <div class="pt-4">
                <Button variant="primary" size="lg" class="hover:bg-emerald-600">
                  Deploy Response Unit
                </Button>
              </div>
            </div>

            {/* Visual Column (Modular Card System) */}
            <div class="order-1 lg:order-2 lg:col-span-6">
              <Card>
                <CardImage variant="emerald">
                  <span class="border border-slate-800 bg-slate-950/50 px-4 py-2 font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
                    Capability_Visual // Response_Ops
                  </span>
                </CardImage>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Unit 03: Digital Forensics */}
      <Section variant="light" padding="lg">
        <Container>
          <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Visual Column (Modular Card System) */}
            <div class="lg:col-span-6">
              <Card>
                <CardImage variant="primary">
                  <span class="border border-slate-800 bg-slate-950/50 px-4 py-2 font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
                    Capability_Visual // Forensics
                  </span>
                </CardImage>
              </Card>
            </div>

            {/* Content Column */}
            <div class="space-y-10 lg:col-span-6">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="text-brand-secondary text-xs font-black tracking-[0.3em] uppercase">
                    Unit 03
                  </span>
                  <div class="h-px w-12 bg-slate-200"></div>
                  <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Security Intelligence
                  </span>
                </div>
                <h2 class="text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-5xl">
                  Digital Forensics & <br />
                  Evidence Acquisition.
                </h2>
                <p class="text-lg leading-relaxed font-medium text-slate-600">
                  Our forensic experts utilize military-grade methodologies to
                  extract evidence, reconstruct attack timelines, and provide
                  comprehensive insights into complex security breaches.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Evidence Extraction
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Securing volatile data and persistent storage using
                    forensically sound imaging techniques.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Timeline Reconstruction
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Mapping precise event sequences to understand the duration
                    and depth of the adversary's presence.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Cloud Investigation
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Navigating complex cloud logs and ephemeral infrastructure
                    to trace sophisticated cross-tenant attacks.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Post-Mortem Analysis
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Providing detailed executive reports and technical
                    remediation roadmaps to prevent re-occurrence.
                  </p>
                </div>
              </div>

              <div class="pt-4">
                <Button variant="primary" size="lg">
                  Start Investigation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Unit 04: Infrastructure Hardening */}
      <Section variant="muted" padding="lg">
        <Container>
          <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Content Column */}
            <div class="order-2 space-y-10 lg:order-1 lg:col-span-6">
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="text-xs font-black tracking-[0.3em] text-slate-500 uppercase">
                    Unit 04
                  </span>
                  <div class="h-px w-12 bg-slate-200"></div>
                  <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Active Defense
                  </span>
                </div>
                <h2 class="text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-5xl">
                  Infrastructure Hardening & <br />
                  Architectural Review.
                </h2>
                <p class="text-lg leading-relaxed font-medium text-slate-600">
                  The strongest defense is engineered from the ground up. We
                  review, redesign, and reinforce your digital infrastructure
                  using modern zero-trust principles and robust security
                  protocols.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Zero-Trust Architecture
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Implementing granular identity-based access controls across
                    all network layers.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Cloud Hardening
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Optimization of AWS, Azure, and GCP environments to
                    eliminate configuration drift and leakage.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Network Segmentation
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Designing isolated environments to contain potential
                    breaches and protect critical assets.
                  </p>
                </div>
                <div class="space-y-3">
                  <h4 class="text-sm font-black tracking-wider text-slate-900 uppercase">
                    Compliance Alignment
                  </h4>
                  <p class="text-sm leading-relaxed text-slate-500">
                    Ensuring your technical infrastructure meets global
                    standards like SOC2, HIPAA, and GDPR.
                  </p>
                </div>
              </div>

              <div class="pt-4">
                <Button variant="primary" size="lg" class="hover:bg-slate-700">
                  Review Our Framework
                </Button>
              </div>
            </div>

            {/* Visual Column (Modular Card System) */}
            <div class="order-1 lg:order-2 lg:col-span-6">
              <Card>
                <CardImage variant="slate">
                  <span class="border border-slate-800 bg-slate-950/50 px-4 py-2 font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">
                    Capability_Visual // Network_Ops
                  </span>
                </CardImage>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Services CTA */}
      <Section variant="dark" padding="md" withGrid={true}>
        <Container class="text-center">
          <div class="mx-auto max-w-3xl space-y-10">
            <h2 class="text-3xl leading-tight font-black tracking-tighter text-white lg:text-6xl">
              Ready to Secure Your <br />
              <span class="text-brand-secondary">Digital Future?</span>
            </h2>
            <p class="text-xl font-medium text-slate-400">
              Consult with our specialists today to develop a tailored defense
              strategy for your organization.
            </p>
            <div class="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
              <Button href="/contact" variant="secondary" size="lg" class="w-full hover:bg-blue-500 sm:w-auto">
                Contact an Expert
              </Button>
              <Button href="/about" variant="outline" size="lg" class="w-full border-slate-700 bg-transparent text-white hover:bg-white hover:text-slate-900 sm:w-auto">
                Learn About Our Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Professional Security Services | CyberShield",
  meta: [
    {
      name: "description",
      content:
        "Explore CyberShield's specialized security capabilities including Red Teaming, Incident Response, and Digital Forensics.",
    },
  ],
};
