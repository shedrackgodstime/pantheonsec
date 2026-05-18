import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/layout/container";
import { PageHeader } from "~/components/layout/page-header";
import { Section } from "~/components/layout/section";
import { Card, CardImage, CardContent } from "~/components/ui/card";

export default component$(() => {
  return (
    <div class="min-h-screen bg-white">
      {/* Solutions Page Header */}
      <PageHeader
        badgeText="Security Solutions"
        badgeVariant="primary"
        title="Resilient Security for Complex Ecosystems."
        subtitle="CyberShield delivers tailored, enterprise-wide defense systems designed for continuous stabilization, active protection, and compliance alignment."
        variant="dark"
      />

      {/* Solutions Grid */}
      <Section variant="light" padding="lg">
        <Container>
          <div class="mb-16 max-w-3xl space-y-6">
            <Badge variant="secondary">Operational Verticals</Badge>
            <h2 class="text-3xl leading-tight font-black tracking-tighter text-slate-900 lg:text-6xl">
              Tailored Safeguards for <br />
              <span class="text-brand-secondary">High-Value Target</span> Industries.
            </h2>
            <p class="text-lg leading-relaxed font-medium text-slate-600">
              Each industry operates under a unique threat profile. Our solutions combine deep sector expertise with modular technical controls.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Solution 1: Finance */}
            <Card>
              <CardImage>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  SOL_FINTECH_SHIELD
                </div>
              </CardImage>
              <CardContent>
                <span class="text-brand-secondary mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Sector 01 // Finance
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-2xl font-bold text-slate-900 transition-colors">
                  FinTech & High-Frequency Systems
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Protecting transaction pipelines, API mesh networks, and trading nodes against microsecond latencies, side-channel attacks, and ledger manipulation.
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">PCI-DSS V4</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">API HARDENING</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">MUTUAL TLS</span>
                </div>
                <Button href="/contact" variant="primary" size="md">
                  Consult Financial Specialists
                </Button>
              </CardContent>
            </Card>

            {/* Solution 2: Cloud */}
            <Card>
              <CardImage>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  SOL_HYBRID_CLOUD
                </div>
              </CardImage>
              <CardContent>
                <span class="text-emerald-600 mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Sector 02 // Infrastructure
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-2xl font-bold text-slate-900 transition-colors">
                  Sovereign Cloud & Hybrid Networks
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Enforcing strict multi-tenant isolation, cryptographic posture integrity, and prevention of credential leakage in cloud and hybrid setups.
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">AWS/GCP/AZURE</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">K8S HARDENING</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">ZERO TRUST</span>
                </div>
                <Button href="/contact" variant="primary" size="md" class="hover:bg-emerald-600">
                  Secure Your Cloud Mesh
                </Button>
              </CardContent>
            </Card>

            {/* Solution 3: Government */}
            <Card>
              <CardImage>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  SOL_STATE_DEFENSE
                </div>
              </CardImage>
              <CardContent>
                <span class="text-slate-500 mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Sector 03 // Sovereign
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-2xl font-bold text-slate-900 transition-colors">
                  State & Critical National Infrastructure
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Hardening Supervisory Control and Data Acquisition (SCADA) systems, regional power grids, and municipal data fabrics against nation-state offensive groups.
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">SCADA/OT</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">NIST SP 800-82</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">AIR GAPPED</span>
                </div>
                <Button href="/contact" variant="primary" size="md" class="hover:bg-slate-700">
                  Initiate Sovereign Intake
                  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </Button>
              </CardContent>
            </Card>

            {/* Solution 4: Healthcare */}
            <Card>
              <CardImage>
                <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                  SOL_MED_OVERWATCH
                </div>
              </CardImage>
              <CardContent>
                <span class="text-brand-secondary mb-3 text-[10px] font-black tracking-[0.3em] uppercase">
                  Sector 04 // Healthcare
                </span>
                <h3 class="group-hover:text-brand-secondary mb-4 text-2xl font-bold text-slate-900 transition-colors">
                  Healthcare & Patient Data Networks
                </h3>
                <p class="mb-8 flex-grow text-sm leading-relaxed text-slate-600">
                  Safeguarding electronic health records (EHR) databases, cloud telemetry diagnostics, and connected IoT hospital perimeters against ransomware vector ingress.
                </p>
                <div class="flex flex-wrap gap-2 mb-8">
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">HIPAA COMPLIANT</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">EHR OVERWATCH</span>
                  <span class="bg-slate-100 px-2 py-1 font-mono text-[9px] font-bold text-slate-500 rounded-sm">RANSOM SHIELD</span>
                </div>
                <Button href="/contact" variant="primary" size="md">
                  Secure Patient Networks
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Enterprise Solutions | CyberShield",
  meta: [
    {
      name: "description",
      content:
        "Tailored cybersecurity solutions for fintech systems, hybrid clouds, critical state infrastructure, and healthcare telemetry.",
    },
  ],
};
