import { component$, Slot } from "@builder.io/qwik";

export interface BadgeProps {
  variant?: "primary" | "secondary" | "accent" | "emerald" | "slate" | "outline";
  class?: string;
  pulse?: boolean;
}

export const Badge = component$<BadgeProps>(
  ({ variant = "primary", class: className = "", pulse = false }) => {
    const baseStyles = "inline-flex items-center rounded-sm px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase font-mono";
    
    const variants = {
      primary: "bg-brand-secondary text-white shadow-lg shadow-brand-secondary/20",
      secondary: "bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20",
      accent: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
      emerald: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
      slate: "bg-slate-100 text-slate-500 border border-slate-200",
      outline: "border border-slate-700 bg-transparent text-slate-400",
    };

    return (
      <div class={`${baseStyles} ${variants[variant]} ${className}`}>
        {pulse && (
          <span class="animate-pulse-slow mr-2 flex h-2 w-2 rounded-full bg-emerald-500"></span>
        )}
        <Slot />
      </div>
    );
  }
);
