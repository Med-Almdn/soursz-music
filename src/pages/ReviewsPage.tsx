import React, { useMemo, useState } from "react";
import {
  Star,
  StarHalf,
  Quote,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";

type Review = {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  date: string;
  verified?: boolean;
  text: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "John Doe",
    role: "CEO",
    company: "TechCorp",
    rating: 5,
    date: "Nov 2025",
    verified: true,
    text: `An incredible service that transformed how we handle our content curation. The targeting feels accurate and the reporting is clear. Highly recommended!`,
  },
  {
    id: "r2",
    name: "Jane Smith",
    role: "Marketing Director",
    company: "IndieWave",
    rating: 5,
    date: "Oct 2025",
    verified: true,
    text: `The efficiency and quality exceeded our expectations. The campaign dashboard is clean, and the team support is fast.`,
  },
  {
    id: "r3",
    name: "Mike Johnson",
    role: "Content Manager",
    company: "VibeStudio",
    rating: 4,
    date: "Sep 2025",
    verified: false,
    text: `A game-changer for our strategy. AI-powered recommendations are strong and placements feel relevant. Would love more export options, but overall excellent.`,
  },
  {
    id: "r4",
    name: "Amina L.",
    role: "Artist",
    company: "Independent",
    rating: 5,
    date: "Aug 2025",
    verified: true,
    text: `I saw a real jump in listeners after the campaign. The process was smooth and the communication was professional.`,
  },
  {
    id: "r5",
    name: "Chris P.",
    role: "Label Ops",
    company: "NorthSide Records",
    rating: 4,
    date: "Jul 2025",
    verified: true,
    text: `Solid results, clear guidance, and strong tracking. The UI feels premium and simple.`,
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={16} className="text-amber-400 fill-amber-400" />
      ))}
      {half && <StarHalf size={16} className="text-amber-400 fill-amber-400" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} size={16} className="text-gray-600" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
      <span className="text-sm font-semibold text-gray-200">{initials}</span>
    </div>
  );
}

const ReviewsPage: React.FC = () => {
  const [filter, setFilter] = useState<"all" | 5 | 4 | 3>("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const { avg, total } = useMemo(() => {
    const total = REVIEWS.length;
    const sum = REVIEWS.reduce((acc, r) => acc + r.rating, 0);
    return { avg: total ? sum / total : 0, total };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return REVIEWS;
    return REVIEWS.filter((r) => Math.floor(r.rating) === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-950 pt-10">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Customer Reviews
          </h1>
          <p className="mt-3 text-gray-400">
            Real feedback from artists, teams, and labels using our platform.
          </p>

          {/* Summary */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-gray-900/60 px-5 py-4 shadow-xl">
            <div className="text-left">
              <p className="text-3xl font-bold text-white leading-none">
                {avg.toFixed(1)}
              </p>
              <p className="mt-1 text-xs text-gray-400">{total} reviews</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-left">
              <Stars rating={avg} />
              <p className="mt-1 text-xs text-gray-400">Average rating</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <SlidersHorizontal size={18} className="text-gray-400" />
            <span className="text-sm">Filter</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "All" },
              { key: 5, label: "5★" },
              { key: 4, label: "4★" },
              { key: 3, label: "3★" },
            ].map((t) => {
              const active = filter === (t.key as any);
              return (
                <button
                  key={String(t.key)}
                  onClick={() => setFilter(t.key as any)}
                  className={[
                    "rounded-full px-4 py-2 text-sm border transition",
                    active
                      ? "bg-indigo-600/20 border-indigo-500/40 text-white"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => {
            const isExpanded = !!expanded[r.id];
            const short =
              r.text.length > 140 ? r.text.slice(0, 140) + "…" : r.text;

            return (
              <div
                key={r.id}
                className="group relative rounded-2xl border border-white/10 bg-gray-900/60 p-6 shadow-lg transition hover:border-white/20 hover:bg-gray-900/75"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/5" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={r.name} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-white">
                            {r.name}
                          </h3>
                          {r.verified && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[11px] text-emerald-200">
                              <CheckCircle2 size={14} />
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">
                          {r.role}
                          {r.company ? `, ${r.company}` : ""}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <Stars rating={r.rating} />
                      <p className="mt-1 text-xs text-gray-500">{r.date}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <div className="mt-1 text-indigo-300/80">
                      <Quote size={18} />
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      “{isExpanded ? r.text : short}”
                    </p>
                  </div>

                  {r.text.length > 140 && (
                    <button
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [r.id]: !prev[r.id],
                        }))
                      }
                      className="mt-4 text-sm text-indigo-300 hover:text-indigo-200 transition"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
