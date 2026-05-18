import { component$ } from "@builder.io/qwik";

export interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  class?: string;
  name?: string;
  required?: boolean;
}

export const Input = component$<InputProps>(
  ({ type = "text", placeholder, label, value, class: className = "", name, required = false }) => {
    return (
      <div class="space-y-3">
        {label && (
          <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          required={required}
          class={`focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none ${className}`}
        />
      </div>
    );
  }
);

export interface TextareaProps {
  placeholder?: string;
  label?: string;
  value?: string;
  rows?: number;
  class?: string;
  name?: string;
  required?: boolean;
}

export const Textarea = component$<TextareaProps>(
  ({ placeholder, label, value, rows = 6, class: className = "", name, required = false }) => {
    return (
      <div class="space-y-3">
        {label && (
          <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {label}
          </label>
        )}
        <textarea
          placeholder={placeholder}
          rows={rows}
          value={value}
          name={name}
          required={required}
          class={`focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full resize-none rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm placeholder:text-slate-300 focus:ring-1 focus:outline-none ${className}`}
        ></textarea>
      </div>
    );
  }
);

export interface SelectProps {
  label?: string;
  class?: string;
  name?: string;
  options: string[];
}

export const Select = component$<SelectProps>(
  ({ label, class: className = "", name, options }) => {
    return (
      <div class="space-y-3">
        {label && (
          <label class="text-[10px] font-black tracking-widest text-slate-400 uppercase">
            {label}
          </label>
        )}
        <div class="relative">
          <select
            name={name}
            class={`focus:ring-brand-secondary focus:border-brand-secondary transition-standard w-full cursor-pointer appearance-none rounded-sm border border-slate-200 bg-slate-50 px-4 py-4 text-sm focus:ring-1 focus:outline-none ${className}`}
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);
