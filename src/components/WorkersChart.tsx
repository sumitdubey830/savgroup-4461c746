import { useEffect, useRef, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { year: 2020, workers: 120 },
  { year: 2021, workers: 380 },
  { year: 2022, workers: 720 },
  { year: 2023, workers: 1200 },
  { year: 2024, workers: 1850 },
  { year: 2025, workers: 2550 },
];

const GOLD = "#c9a84c";

export function WorkersChart({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl shadow-elegant w-full h-[520px] bg-navy p-6 sm:p-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.18),transparent_60%)] pointer-events-none" />
      <div className="relative flex flex-col h-full">
        <div>
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
            {label}
          </span>
          <div className="mt-2 text-4xl font-display font-bold text-primary-foreground">
            2020 — 2025
          </div>
          <div className="text-sm text-primary-foreground/60 mt-1">
            Workers deployed per year
          </div>
        </div>
        <div className="flex-1 mt-6 -ml-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visible ? data : []} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor={GOLD} stopOpacity={0.6} />
                  <stop offset="100%" stopColor={GOLD} stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.15)" }}
                tickLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={40}
              />
              <Tooltip
                cursor={{ stroke: GOLD, strokeOpacity: 0.3, strokeWidth: 1 }}
                contentStyle={{
                  background: "rgba(7,19,42,0.95)",
                  border: `1px solid ${GOLD}`,
                  borderRadius: 8,
                  color: "#fff",
                  fontSize: 13,
                }}
                labelStyle={{ color: GOLD, fontWeight: 600 }}
                formatter={(value: number) => [`${value.toLocaleString()} workers`, "Deployed"]}
                labelFormatter={(l) => `Year ${l}`}
              />
              <Line
                type="monotone"
                dataKey="workers"
                stroke="url(#goldLine)"
                strokeWidth={3}
                dot={{ fill: GOLD, stroke: "#07132a", strokeWidth: 2, r: 5 }}
                activeDot={{ fill: GOLD, stroke: "#fff", strokeWidth: 2, r: 7 }}
                isAnimationActive
                animationDuration={1800}
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
