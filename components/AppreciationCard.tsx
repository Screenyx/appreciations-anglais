"use client";

import { useState } from "react";

const PETAL_PALETTE = [
  { bg: "#fce4ec", text: "#c2185b" },
  { bg: "#f3e5f5", text: "#7b1fa2" },
  { bg: "#e3f2fd", text: "#1565c0" },
  { bg: "#e8f5e9", text: "#2e7d32" },
  { bg: "#fff8e1", text: "#e65100" },
  { bg: "#fbe9e7", text: "#bf360c" },
  { bg: "#e8eaf6", text: "#283593" },
  { bg: "#f1f8e9", text: "#558b2f" },
  { bg: "#fdf2f8", text: "#9c27b0" },
  { bg: "#e0f7fa", text: "#00695c" },
];

function petalForName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + h * 31;
  return PETAL_PALETTE[Math.abs(h) % PETAL_PALETTE.length];
}

interface Props {
  text: string;
  profiles: string[];
  highlight?: string;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const parts = text.split(
    new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  );
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            style={{ background: "#fef08a", borderRadius: 3, padding: "0 2px" }}
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function AppreciationCard({ text, profiles, highlight = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const isCombo = profiles.length > 1;

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={{
        background: isCombo
          ? "linear-gradient(135deg, #fdf4ff 0%, #fce4ec 100%)"
          : "white",
        border: isCombo ? "1.5px solid #e879f9" : "1.5px solid #fce4ec",
        borderRadius: 12,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: isCombo
          ? "0 3px 14px rgba(168, 85, 247, 0.12)"
          : "0 1px 5px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <p
          style={{
            flex: 1,
            margin: 0,
            lineHeight: 1.65,
            fontSize: 14,
            color: "var(--text)",
          }}
        >
          <HighlightedText text={text} query={highlight} />
        </p>
        <button
          onClick={handleCopy}
          style={{
            flexShrink: 0,
            padding: "5px 14px",
            borderRadius: 20,
            border: "none",
            background: copied
              ? "linear-gradient(135deg, #bbf7d0, #86efac)"
              : "linear-gradient(135deg, #fce7f3, #ede9fe)",
            color: copied ? "#166534" : "#9333ea",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.15s",
            whiteSpace: "nowrap",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          {copied ? "✓ Copié !" : "Copier"}
        </button>
      </div>
      {profiles.length > 0 && (
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {profiles.map((p) => {
            const petal = petalForName(p);
            return (
              <span
                key={p}
                style={{
                  fontSize: 11,
                  padding: "2px 10px",
                  borderRadius: 12,
                  background: petal.bg,
                  color: petal.text,
                  fontWeight: 600,
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
