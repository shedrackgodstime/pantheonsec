import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  class?: string;
  onClick$?: any;
  type?: "button" | "submit" | "reset";
}

export const Button = component$<ButtonProps>(
  ({ variant = "primary", size = "md", href, class: className = "", onClick$, type = "button" }) => {
    const baseStyles = "transition-standard inline-flex items-center justify-center rounded-sm font-semibold tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
      secondary: "bg-brand-secondary text-white hover:bg-blue-700 focus:ring-brand-secondary shadow-lg shadow-brand-secondary/20",
      outline: "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus:ring-slate-500",
      link: "text-slate-900 hover:text-brand-secondary p-0 tracking-widest normal-case border-none bg-transparent hover:shadow-none focus:ring-0 focus:ring-offset-0",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3.5 text-xs font-bold tracking-widest",
      lg: "px-8 py-4 text-sm font-bold tracking-widest",
      xl: "px-10 py-5 text-sm font-black tracking-[0.2em]",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} class={combinedClasses} onClick$={onClick$}>
          <Slot />
        </Link>
      );
    }

    return (
      <button type={type} class={combinedClasses} onClick$={onClick$}>
        <Slot />
      </button>
    );
  }
);
