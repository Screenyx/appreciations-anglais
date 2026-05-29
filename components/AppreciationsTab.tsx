"use client";

import { useState } from "react";
import { APPRECIATIONS, PROFILES, CLASSES, TRIMESTRES, type Profile } from "@/data/appreciations";
import ProfilePicker from "@/components/ProfilePicker";
import AppreciationCard from "@/components/AppreciationCard";

export default function AppreciationsTab() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTrimestre, setSelectedTrimestre] = useState("");
  const [selectedProfiles, setSelectedProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();

  const results = APPRECIATIONS.filter((a) => {
    const profilesOk =
      selectedProfiles.length === 0 ||
      a.profiles.every((p) => selectedProfiles.includes(p));
    const classOk =
      !selectedClass || a.classes.length === 0 || a.classes.includes(selectedClass);
    const trimOk =
      !selectedTrimestre || a.trimesters.length === 0 || a.trimesters.includes(selectedTrimestre);
    const searchOk = !q || a.text.toLowerCase().includes(q);
    return profilesOk && classOk && trimOk && searchOk;
  });

  const hasFilter = selectedClass || selectedTrimestre || selectedProfiles.length > 0 || search;

  const toggleProfile = (p: Profile) => {
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
      <ProfilePicker profiles={PROFILES} selected={selectedProfiles} onToggle={toggleProfile} />

      {/* Results */}
      <div>
        <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12, fontWeight: 500 }}>
          🌿 {results.length} appréciation{results.length !== 1 ? "s" : ""}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {results.map((a) => (
            <AppreciationCard key={a.id} text={a.text} profiles={a.profiles} highlight={q} />
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
