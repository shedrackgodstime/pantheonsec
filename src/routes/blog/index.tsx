import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/layout/container";
import { PageHeader } from "~/components/layout/page-header";
import { Section } from "~/components/layout/section";
import { Card, CardImage, CardContent } from "~/components/ui/card";

export default component$(() => {
  const posts = [
    {
      unit: "Unit 03 // Advisory",
      title: "The Mechanics of Zero-Trust Tunneling: WireGuard vs IPsec",
      description: "A comprehensive audit of tunneling protocols under active adversarial interception scenarios, examining packet structure, handshake latencies, and forward secrecy posture.",
      date: "May 18, 2026",
      readTime: "7 min read",
      tags: ["WIREGUARD", "TUNNELING", "SECURE SHIELD"],
      visual: "BLOG_POST_01"
    },
    {
      unit: "Unit 01 // Research",
      title: "Hardening Software Supply Chains Against Dependency Confusion",
      description: "Deep dive into active namespace hijack vectors on public package registries, and standard protocols to secure corporate package consumption engines.",
      date: "May 14, 2026",
      readTime: "12 min read",
      tags: ["SUPPLY CHAIN", "CI/CD SEC", "VULN AUDIT"],
      visual: "BLOG_POST_02"
    },
    {
      unit: "Unit 02 // Forensics",
      title: "Reverse Engineering Ransomware Vector: Cryptographic Analysis",
      description: "Reconstructing the key schedule and containment sequence of a sophisticated nation-state malware variant deployed against high-value target assets.",
      date: "May 09, 2026",
      readTime: "15 min read",
      tags: ["REVERSE ENG", "MALWARE ANALYSIS", "CONTAINMENT"],
      visual: "BLOG_POST_03"
    },
    {
      unit: "Unit 04 // Architecture",
      title: "Kubernetes Hardening: Core Protocols for Multi-Tenant Isolation",
      description: "Standard configurations for securing etcd keyspaces, configuring strict eBPF network policies, and isolating high-risk pods in multi-tenant environments.",
      date: "May 02, 2026",
      readTime: "9 min read",
      tags: ["K8S HARDENING", "EBPF", "ZERO TRUST"],
      visual: "BLOG_POST_04"
    }
  ];

  return (
    <div class="min-h-screen bg-white">
      {/* Blog Page Header */}
      <PageHeader
        badgeText="Threat Intelligence"
        badgeVariant="secondary"
        title="Advanced Analysis & Security Advisories."
        subtitle="Deep insights, structural breakdowns, and incident response advisories curated by our leading security intelligence units."
        variant="muted"
      />

      {/* Blog Posts Grid */}
      <Section variant="light" padding="lg">
        <Container>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {posts.map((post, index) => (
              <Card key={index}>
                <CardImage>
                  <div class="relative z-10 border border-slate-800 bg-slate-950/50 px-4 py-2 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                    {post.visual}
                  </div>
                </CardImage>
                <CardContent>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-brand-secondary text-[10px] font-black tracking-[0.3em] uppercase">
                      {post.unit}
                    </span>
                    <span class="font-mono text-[10px] text-slate-400">
                      {post.date}
                    </span>
                  </div>

                  <h3 class="group-hover:text-brand-secondary mb-4 text-2xl font-bold text-slate-900 transition-colors">
                    {post.title}
                  </h3>
                  <p class="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
                    {post.description}
                  </p>

                  <div class="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div class="flex gap-2">
                      {post.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} class="bg-slate-100 px-2 py-0.5 font-mono text-[8px] font-bold text-slate-500 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span class="font-mono text-[10px] text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Threat Intelligence Insights | PantheonSec",
  meta: [
    {
      name: "description",
      content:
        "Technical analysis, reverse engineering guides, and cloud infrastructure security advisories from PantheonSec.",
    },
  ],
};
