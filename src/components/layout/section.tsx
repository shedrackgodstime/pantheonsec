import { component$, Slot } from "@builder.io/qwik";

export interface SectionProps {
  variant?: "light" | "dark" | "muted";
  padding?: "sm" | "md" | "lg" | "none";
  class?: string;
  id?: string;
  withGrid?: boolean;
  withBorder?: boolean;
}

export const Section = component$<SectionProps>(
  ({
    variant = "light",
    padding = "md",
    class: className = "",
    id,
    withGrid = false,
    withBorder = false,
  }) => {
    const paddings = {
      none: "",
      sm: "py-12 lg:py-16",
      md: "py-24 lg:py-32",
      lg: "py-24 lg:py-40",
    };

    const variants = {
      light: "bg-white text-slate-900",
      muted: "bg-slate-50 text-slate-900",
      dark: "bg-slate-900 text-white",
    };

    const borderStyle = withBorder
      ? variant === "dark"
        ? "border-b border-slate-800"
        : "border-b border-slate-100"
      : "";

    return (
      <section
        id={id}
        class={`relative overflow-hidden ${variants[variant]} ${paddings[padding]} ${borderStyle} ${className}`}
      >
        {/* Telemetry visual grid overlay */}
        {withGrid && (
          <div
            class={`telemetry-grid pointer-events-none absolute inset-0 z-0 ${
              variant === "dark" ? "opacity-20" : "opacity-30"
            }`}
          ></div>
        )}
        <div class="relative z-10">
          <Slot />
        </div>
      </section>
    );
  }
);
