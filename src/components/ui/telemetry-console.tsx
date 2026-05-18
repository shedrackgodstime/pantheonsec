import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export interface TelemetryConsoleProps {
  title?: string;
  statusText?: string;
  statusColor?: "emerald" | "blue" | "rose";
  nodesCount?: string;
  shieldProtocol?: string;
  class?: string;
}

export const TelemetryConsole = component$<TelemetryConsoleProps>(
  ({
    title = "CS-CORE-TELEMETRY",
    statusText = "ONLINE",
    statusColor = "emerald",
    nodesCount = "1,482",
    shieldProtocol = "ENGAGED",
    class: className = "",
  }) => {
    const statusColors = {
      emerald: "text-emerald-400 bg-emerald-400",
      blue: "text-blue-400 bg-blue-400",
      rose: "text-rose-400 bg-rose-400",
    };

    const state = useStore({
      ingestionVal: 42.52,
      barHeights: [12, 28, 45, 18, 32, 14, 25, 49, 36, 12, 18, 42, 38, 22, 15, 29, 34, 48, 12, 19, 31, 24, 44, 38],
      logs: [
        "SYS_BOOT: zero-trust perimeter online.",
        "SECURE_GATEWAY_01: TLS handshake check OK.",
        "ACTIVE_GUARD: rekeying WireGuard tunnel...",
      ],
    });

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      const logTemplates = [
        "SEC: blocked port scan from 185.220.101.4",
        "SYS: re-keyed AES-256 session token",
        "INGEST: parsed 14k syslog lines",
        "ALRT: SQLi vector suppressed on gateway_2",
        "SYS: Kubernetes pods reports stable telemetry",
        "OK: TLS certs validated successfully",
        "SEC: threat mitigation threshold stable",
        "SYS: cleared cache buffer nodes",
        "SEC: blocked brute force on auth endpoint",
        "SYS: refreshed zero-trust policy model",
      ];

      const interval = setInterval(() => {
        // Shift bar heights to the left and append new random height
        const nextHeights = [...state.barHeights.slice(1)];
        nextHeights.push(Math.floor(Math.random() * 40) + 10);
        state.barHeights = nextHeights;
        
        // Slightly fluctuate ingestion rate
        state.ingestionVal = parseFloat((42 + Math.random() * 1.6).toFixed(2));

        // Randomly push new security logs
        if (Math.random() > 0.4) {
          const nextLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
          const nextLogs = [...state.logs.slice(1)];
          nextLogs.push(nextLog);
          state.logs = nextLogs;
        }
      }, 1000);

      return () => clearInterval(interval);
    });

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
          <div class="relative h-[360px] overflow-hidden p-4 text-slate-300 sm:h-[420px] sm:p-6">
            {/* Grid Background */}
            <div class="telemetry-grid absolute inset-0 opacity-20"></div>

            {/* Scanline */}
            <div class="via-brand-secondary/20 animate-scan pointer-events-none absolute top-0 right-0 left-0 z-10 h-16 bg-gradient-to-b from-transparent to-transparent"></div>

            {/* Content */}
            <div class="relative z-20 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-700/50 pb-2">
                <span class="text-xs text-slate-500 sm:text-sm font-semibold">SYSTEM STATUS</span>
                <span class="text-xs font-bold text-emerald-400 sm:text-sm">SECURE</span>
              </div>

              <div class="space-y-2">
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">ACTIVE DEFENSE NODES:</span>
                  <span class="text-white font-bold">{nodesCount}</span>
                </div>
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">THREAT INGESTION RATE:</span>
                  <span class="text-emerald-400 font-bold">{state.ingestionVal}k / sec</span>
                </div>
                <div class="flex justify-between text-[10px] sm:text-xs">
                  <span class="text-slate-400">SHIELD PROTOCOL:</span>
                  <span class="text-brand-secondary font-black">{shieldProtocol}</span>
                </div>
              </div>

              <div class="mt-4 border-t border-slate-700/50 pt-4">
                <div class="mb-2 text-[10px] text-slate-500 sm:text-xs font-semibold">LIVE ANOMALY SCAN</div>

                {/* Live animated bars */}
                <div class="mt-2 flex h-16 items-end space-x-1 opacity-80 sm:h-20">
                  {state.barHeights.map((height, i) => (
                    <div
                      key={i}
                      class="bg-brand-secondary/40 w-full rounded-t-sm transition-all duration-300 ease-in-out hover:bg-brand-secondary"
                      style={`height: ${height}%`}
                    ></div>
                  ))}
                </div>
                <div class="mt-1 flex justify-between text-[8px] text-slate-500 sm:text-[10px]">
                  <span>-1M</span>
                  <span>NOW</span>
                </div>
              </div>

              {/* Dynamic Scrolling Logs */}
              <div class="mt-4 border-t border-slate-700/50 pt-4 font-mono text-[9px] text-slate-400 sm:text-[10px] space-y-1.5">
                <div class="text-slate-500 uppercase tracking-widest text-[8px] font-bold">REAL-TIME INTRUSION MONITOR:</div>
                <div class="space-y-1">
                  {state.logs.map((log, idx) => (
                    <div key={idx} class="flex items-center space-x-2 transition-all duration-300">
                      <span class="text-brand-secondary">➜</span>
                      <span class={idx === state.logs.length - 1 ? "text-emerald-400 font-semibold" : "opacity-60"}>
                        {log}
                      </span>
                      {idx === state.logs.length - 1 && <span class="animate-pulse">_</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
