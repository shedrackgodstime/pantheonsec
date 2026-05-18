import { component$ } from "@builder.io/qwik";

export interface TelemetryConsoleProps {
  title?: string;
  statusText?: string;
  statusColor?: "emerald" | "blue" | "rose";
  nodesCount?: string;
  ingestionRate?: string;
  shieldProtocol?: string;
  class?: string;
}

export const TelemetryConsole = component$<TelemetryConsoleProps>(
  ({
    title = "CS-CORE-TELEMETRY",
    statusText = "ONLINE",
    statusColor = "emerald",
    nodesCount = "1,482",
    ingestionRate = "42.5k / sec",
    shieldProtocol = "ENGAGED",
    class: className = "",
  }) => {
    const statusColors = {
      emerald: "text-emerald-400 bg-emerald-400",
      blue: "text-blue-400 bg-blue-400",
      rose: "text-rose-400 bg-rose-400",
    };

    return (
      <div class={`relative mx-auto mt-8 w-full max-w-lg lg:mt-0 lg:max-w-none ${className}`}>
        <div class="bg-brand-secondary/10 animate-pulse-slow absolute -inset-10 rounded-full blur-3xl"></div>

        <div class="dark-glass-panel relative overflow-hidden rounded-xl border border-slate-700/50 font-mono text-sm shadow-2xl">
          {/* Terminal Header */}
          <div class="flex items-center border-b border-slate-700/50 bg-slate-900/80 px-4 py-3">
            <div class="flex space-x-2">
              <div class="h-3 w-3 rounded-full bg-slate-600"></div>
              <div class="h-3 w-3 rounded-full bg-slate-600"></div>
              <div class="h-3 w-3 rounded-full bg-slate-600"></div>
            </div>
            <div class="ml-4 flex-1 text-center text-xs font-semibold tracking-wider text-slate-400">
              {title}
            </div>
            <div class={`flex items-center text-xs ${statusColors[statusColor].split(" ")[0]}`}>
              <span class={`mr-2 h-2 w-2 animate-pulse rounded-full ${statusColors[statusColor].split(" ")[1]}`}></span>
              {statusText}
            </div>
          </div>

          {/* Terminal Body */}
          <div class="relative h-[320px] overflow-hidden p-4 text-slate-300 sm:h-[400px] sm:p-6">
            {/* Grid Background */}
            <div class="telemetry-grid absolute inset-0 opacity-20"></div>

            {/* Scanline */}
            <div class="via-brand-secondary/20 animate-scan pointer-events-none absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-transparent to-transparent"></div>

            {/* Content */}
            <div class="relative z-20 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-700/50 pb-2">
                <span class="text-xs text-slate-500 sm:text-sm">SYSTEM STATUS</span>
                <span class="text-xs font-bold text-emerald-400 sm:text-sm">SECURE</span>
              </div>

              <div class="space-y-2">
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">ACTIVE DEFENSE NODES:</span>
                  <span class="text-white">{nodesCount}</span>
                </div>
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">THREAT INGESTION RATE:</span>
                  <span class="text-white">{ingestionRate}</span>
                </div>
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">SHIELD PROTOCOL:</span>
                  <span class="text-brand-secondary">{shieldProtocol}</span>
                </div>
              </div>

              <div class="mt-4 border-t border-slate-700/50 pt-4 sm:mt-6">
                <div class="mb-2 text-[10px] text-slate-500 sm:text-xs">LIVE ANOMALY SCAN</div>

                {/* Faux graph bars */}
                <div class="mt-2 flex h-16 items-end space-x-1 opacity-80 sm:h-24">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = Math.floor(Math.random() * 40) + 10;
                    return (
                      <div
                        key={i}
                        class="bg-brand-secondary/40 w-full rounded-t-sm"
                        style={`height: ${height}%`}
                      ></div>
                    );
                  })}
                </div>
                <div class="mt-1 flex justify-between text-[8px] text-slate-500 sm:text-[10px]">
                  <span>-1H</span>
                  <span>NOW</span>
                </div>
              </div>

              <div class="mt-4 font-mono text-[10px] text-slate-400 sm:text-xs">
                <span class="text-brand-secondary mr-2">➜</span>
                <span class="opacity-70">Awaiting external input...</span>
                <span class="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
