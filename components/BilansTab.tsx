"use client";

import { useState } from "react";
import { BILANS, BILAN_PROFILES, CLASSES, TRIMESTRES, type BilanProfile } from "@/data/appreciations";
import ProfilePicker from "@/components/ProfilePicker";
import AppreciationCard from "@/components/AppreciationCard";

export default function BilansTab() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTrimestre, setSelectedTrimestre] = useState("");
  const [selectedProfiles, setSelectedProfiles] = useState<BilanProfile[]>([]);
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();

  const results = BILANS.filter((b) => {
    const profilesOk =
      selectedProfiles.length === 0 ||
      b.profiles.every((p) => selectedProfiles.includes(p));
    const classOk =
      !selectedClass || b.classes.length === 0 || b.classes.includes(selectedClass);
    const trimOk =
      !selectedTrimestre || b.trimesters.length === 0 || b.trimesters.includes(selectedTrimestre);
    const searchOk = !q || b.text.toLowerCase().includes(q);
    return profilesOk && classOk && trimOk && searchOk;
  });

  const hasFilter = selectedClass || selectedTrimestre || selectedProfiles.length > 0 || search;

  const toggleProfile = (p: BilanProfile) => {
    setSelectedProfiles((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Filters row */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} style={selectStyle}>
          <option value="">Classe...</option>
          {CLASSES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={selectedTrimestre} onChange={(e) => setSelectedTrimestre(e.target.value)} style={selectStyle}>
          <option value="">Trimestre...</option>
          {TRIMESTRES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>

        <input
          type="text"
          placeholder="Rechercher dans le texte..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchStyle}
        />

        {hasFilter && (
          <button
            onClick={() => { setSelectedClass(""); setSelectedTrimestre(""); setSelectedProfiles([]); setSearch(""); }}
            style={resetBtnStyle}
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Profile picker */}
      <ProfilePicker profiles={BILAN_PROFILES} selected={selectedProfiles} onToggle={toggleProfile} />

      {/* Results */}
      <div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12, fontWeight: 500 }}>
          🌿 {results.length} bilan{results.length !== 1 ? "s" : ""}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {results.map((b) => (
            <AppreciationCard key={b.id} text={b.text} profiles={b.profiles} highlight={q} />
          ))}
        </div>
      </div>
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  padding: "8px 14px",
  borderRadius: 20,
  border: "2px solid #fce4ec",
  background: "white",
  color: "var(--text)",
  fontSize: 14,
  cursor: "pointer",
  outline: "none",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

const searchStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: 20,
  border: "2px solid #fce4ec",
  background: "white",
  color: "var(--text)",
  fontSize: 14,
  outline: "none",
  minWidth: 220,
  flex: 1,
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

const resetBtnStyle: React.CSSProperties = {
  padding: "7px 16px",
  borderRadius: 20,
  border: "2px solid #fce4ec",
  background: "white",
  color: "var(--text-muted)",
  fontSize: 13,
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};
