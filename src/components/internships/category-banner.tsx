"use client";

import { useEffect, useState } from "react";

interface BannerConfig {
  bg: string;
  fg: string;
  accent: string;
  photo: string;
  svg: React.ReactNode;
}

const BANNERS: Record<string, BannerConfig> = {
  STEM: {
    bg: "#e9eff5",
    fg: "#3d5a7c",
    accent: "#8aa5c4",
    photo:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#e9eff5" />
        <g transform="translate(160 44)">
          <ellipse
            cx="0"
            cy="0"
            rx="92"
            ry="22"
            fill="none"
            stroke="#8aa5c4"
            strokeWidth="1.25"
            opacity="0.7"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="92"
            ry="22"
            fill="none"
            stroke="#8aa5c4"
            strokeWidth="1.25"
            opacity="0.55"
            transform="rotate(60)"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="92"
            ry="22"
            fill="none"
            stroke="#8aa5c4"
            strokeWidth="1.25"
            opacity="0.55"
            transform="rotate(-60)"
          />
          <circle cx="0" cy="0" r="5" fill="#3d5a7c" />
        </g>
      </svg>
    ),
  },
  "Computer Science": {
    bg: "#ece5f1",
    fg: "#4d3a6b",
    accent: "#9c83be",
    photo:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#ece5f1" />
        <g
          fill="none"
          stroke="#4d3a6b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        >
          <path d="M132 26 L108 44 L132 62" />
          <path d="M188 26 L212 44 L188 62" />
          <line x1="172" y1="22" x2="148" y2="66" strokeWidth="2.5" />
        </g>
      </svg>
    ),
  },
  Biology: {
    bg: "#e3eed8",
    fg: "#3f5e2d",
    accent: "#7c9c5e",
    photo:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#e3eed8" />
        <circle
          cx="160"
          cy="44"
          r="30"
          fill="none"
          stroke="#7c9c5e"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <circle cx="160" cy="44" r="8" fill="#3f5e2d" opacity="0.55" />
        <circle
          cx="234"
          cy="38"
          r="14"
          fill="none"
          stroke="#7c9c5e"
          strokeWidth="1.25"
          opacity="0.65"
        />
        <circle cx="234" cy="38" r="3.5" fill="#3f5e2d" opacity="0.5" />
        <circle
          cx="86"
          cy="52"
          r="10"
          fill="none"
          stroke="#7c9c5e"
          strokeWidth="1.25"
          opacity="0.65"
        />
        <circle cx="86" cy="52" r="2.5" fill="#3f5e2d" opacity="0.5" />
      </svg>
    ),
  },
  Mathematics: {
    bg: "#e8e9f2",
    fg: "#36406b",
    accent: "#7681ad",
    photo:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#e8e9f2" />
        <line
          x1="20"
          y1="44"
          x2="300"
          y2="44"
          stroke="#7681ad"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <line
          x1="160"
          y1="10"
          x2="160"
          y2="78"
          stroke="#7681ad"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <path
          d="M20 70 Q90 70 130 44 T240 18 L300 8"
          fill="none"
          stroke="#36406b"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="160" cy="44" r="3" fill="#36406b" />
      </svg>
    ),
  },
  "Earth Science": {
    bg: "#dceae8",
    fg: "#2a5650",
    accent: "#6a9690",
    photo:
      "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#dceae8" />
        <path
          d="M0 88 L70 38 L120 60 L180 24 L240 54 L320 30 L320 88 Z"
          fill="#6a9690"
          opacity="0.45"
        />
        <path
          d="M0 88 L50 58 L100 70 L160 44 L220 66 L290 50 L320 60 L320 88 Z"
          fill="#2a5650"
          opacity="0.7"
        />
      </svg>
    ),
  },
  Arts: {
    bg: "#f2e3d6",
    fg: "#7a482a",
    accent: "#c47b50",
    photo:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#f2e3d6" />
        <path
          d="M30 56 C 90 36, 160 64, 230 40 S 296 52, 296 40"
          fill="none"
          stroke="#c47b50"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M40 70 C 110 64, 180 76, 270 66"
          fill="none"
          stroke="#7a482a"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  Business: {
    bg: "#e3e7ee",
    fg: "#384559",
    accent: "#6e7c93",
    photo:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#e3e7ee" />
        <g fill="#6e7c93" opacity="0.6">
          <rect x="40" y="48" width="28" height="40" />
          <rect x="76" y="32" width="22" height="56" />
          <rect x="106" y="40" width="18" height="48" />
          <rect x="132" y="22" width="32" height="66" />
          <polygon points="148,22 148,12 152,12 152,22" />
          <rect x="174" y="36" width="24" height="52" />
          <rect x="206" y="28" width="20" height="60" />
          <rect x="234" y="44" width="26" height="44" />
          <rect x="266" y="38" width="20" height="50" />
        </g>
      </svg>
    ),
  },
  Government: {
    bg: "#ebe6dd",
    fg: "#5a4a35",
    accent: "#9a8862",
    photo:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#ebe6dd" />
        <g fill="#9a8862" opacity="0.65">
          <polygon points="100,24 160,8 220,24" />
          <rect x="98" y="24" width="124" height="5" />
          <rect x="108" y="32" width="10" height="44" />
          <rect x="134" y="32" width="10" height="44" />
          <rect x="176" y="32" width="10" height="44" />
          <rect x="202" y="32" width="10" height="44" />
          <rect x="96" y="76" width="128" height="6" />
        </g>
      </svg>
    ),
  },
  General: {
    bg: "#ece6db",
    fg: "#4d4332",
    accent: "#9a8a6c",
    photo:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=70",
    svg: (
      <svg
        viewBox="0 0 320 88"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true" style={{ width: "100%", height: "100%" }}
      >
        <rect width="320" height="88" fill="#ece6db" />
        <g fill="none" stroke="#9a8a6c" strokeWidth="1" opacity="0.55">
          <circle cx="160" cy="44" r="14" />
          <circle cx="160" cy="44" r="26" />
          <circle cx="160" cy="44" r="38" />
          <circle cx="160" cy="44" r="50" />
        </g>
        <circle cx="160" cy="44" r="4" fill="#4d4332" opacity="0.7" />
      </svg>
    ),
  },
};

export function getBannerConfig(category: string): BannerConfig {
  return BANNERS[category] ?? BANNERS.General;
}

export function CategoryBanner({
  category,
  height = 88,
}: {
  category: string;
  height?: number;
}) {
  const b = getBannerConfig(category);
  const [photoOk, setPhotoOk] = useState(true);

  useEffect(() => {
    if (!b.photo) {
      setPhotoOk(false);
      return;
    }
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (!cancelled) setPhotoOk(true);
    };
    img.onerror = () => {
      if (!cancelled) setPhotoOk(false);
    };
    img.src = b.photo;
    return () => {
      cancelled = true;
    };
  }, [b.photo]);

  const tint = (hex: string, a: number) => {
    const m = hex.replace("#", "");
    const r = parseInt(m.slice(0, 2), 16);
    const g = parseInt(m.slice(2, 4), 16);
    const bl = parseInt(m.slice(4, 6), 16);
    return `rgba(${r},${g},${bl},${a})`;
  };

  return (
    <div
      style={{
        height,
        background: b.bg,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        width: "100%",
      }}
    >
      {photoOk && b.photo && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${b.photo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.72) saturate(0.9)",
          }}
        />
      )}
      {photoOk && b.photo && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${tint(b.bg, 0.35)} 0%, ${tint(b.bg, 0.55)} 100%)`,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: photoOk && b.photo ? 0.35 : 1,
        }}
      >
        {b.svg}
      </div>
    </div>
  );
}
