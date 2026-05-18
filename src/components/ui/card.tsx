import { component$, Slot } from "@builder.io/qwik";

export interface CardProps {
  class?: string;
  hoverable?: boolean;
}

export const Card = component$<CardProps>(({ class: className = "", hoverable = true }) => {
  return (
    <div
      class={`group flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-slate-50/30 ${
        hoverable
          ? "transition-standard hover:border-brand-secondary/30 hover:shadow-brand-secondary/5 hover:shadow-2xl"
          : ""
      } ${className}`}
    >
      <Slot />
    </div>
  );
});

export interface CardImageProps {
  class?: string;
  variant?: "primary" | "emerald" | "slate";
}

export const CardImage = component$<CardImageProps>(({ class: className = "", variant = "primary" }) => {
  const overlays = {
    primary: "bg-brand-secondary/10",
    emerald: "bg-emerald-500/10",
    slate: "bg-slate-500/10",
  };

  return (
    <div class={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-900 ${className}`}>
      <div class="telemetry-grid absolute inset-0 opacity-20"></div>
      <Slot />
      {/* Overlay on hover */}
      <div class={`${overlays[variant]} absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
    </div>
  );
});

export const CardContent = component$<{ class?: string }>(({ class: className = "" }) => {
  return (
    <div class={`flex flex-grow flex-col p-8 ${className}`}>
      <Slot />
    </div>
  );
});
