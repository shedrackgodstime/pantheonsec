import { component$, Slot } from "@builder.io/qwik";

export interface ContainerProps {
  class?: string;
}

export const Container = component$<ContainerProps>(({ class: className = "" }) => {
  return (
    <div class={`mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 ${className}`}>
      <Slot />
    </div>
  );
});
