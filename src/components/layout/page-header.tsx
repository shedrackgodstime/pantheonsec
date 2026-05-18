import { component$ } from "@builder.io/qwik";
import { Badge } from "~/components/ui/badge";
import { Container } from "./container";
import { Section } from "./section";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeVariant?: "primary" | "secondary";
  variant?: "light" | "dark" | "muted";
}

export const PageHeader = component$<PageHeaderProps>(
  ({ title, subtitle, badgeText, badgeVariant = "secondary", variant = "muted" }) => {
    return (
      <Section variant={variant} padding="md" withGrid={true} withBorder={true}>
        <Container>
          <div class="max-w-4xl space-y-6">
            <Badge variant={badgeVariant}>{badgeText}</Badge>
            <h1 class={`text-4xl leading-[1.1] font-black tracking-tighter lg:text-7xl ${variant === "dark" ? "text-white" : "text-slate-900"}`}>
              {title}
            </h1>
            <p class={`max-w-2xl text-xl leading-relaxed font-medium ${variant === "dark" ? "text-slate-400" : "text-slate-600"}`}>
              {subtitle}
            </p>
          </div>
        </Container>
      </Section>
    );
  }
);
