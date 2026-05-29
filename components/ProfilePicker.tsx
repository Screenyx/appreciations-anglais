"use client";

const PETAL_PALETTE = [
  { bg: "#fce4ec", text: "#c2185b", border: "#f48fb1" },
  { bg: "#f3e5f5", text: "#7b1fa2", border: "#ce93d8" },
  { bg: "#e3f2fd", text: "#1565c0", border: "#90caf9" },
  { bg: "#e8f5e9", text: "#2e7d32", border: "#a5d6a7" },
  { bg: "#fff8e1", text: "#e65100", border: "#ffe082" },
  { bg: "#fbe9e7", text: "#bf360c", border: "#ffab91" },
  { bg: "#e8eaf6", text: "#283593", border: "#9fa8da" },
  { bg: "#f1f8e9", text: "#558b2f", border: "#c5e1a5" },
  { bg: "#fdf2f8", text: "#9c27b0", border: "#f48fb1" },
  { bg: "#e0f7fa", text: "#00695c", border: "#80deea" },
];

interface Props<T extends string> {
  profiles: T[];
  selected: T[];
  onToggle: (p: T) => void;
}

export default function ProfilePicker<T extends string>({ profiles, selected, onToggle }: Props<T>) {
  return (
    <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#e8498a",
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        🌸 Profils
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {profiles.map((p, i) => {
          const active = selected.includes(p);
          const petal = PETAL_PALETTE[i % PETAL_PALETTE.length];
          return (
            <button
              key={p}
              onClick={() => onToggle(p)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                border: active ? `2px solid ${petal.border}` : "2px solid #f0e6ea",
                background: active ? petal.bg : "rgba(255,255,255,0.85)",
                color: active ? petal.text : "#b09090",
                fontSize: 13,
                fontWeight: active ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.12s",
                boxShadow: active ? `0 2px 8px ${petal.border}80` : "none",
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}
