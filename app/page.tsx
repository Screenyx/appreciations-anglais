"use client";

import { useState } from "react";
import AppreciationsTab from "@/components/AppreciationsTab";
import BilansTab from "@/components/BilansTab";

type Tab = "appreciations" | "bilans";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("appreciations");

  return (
    <div className="min-h-screen">
      <header
        style={{
          background: "linear-gradient(135deg, #f9a8d4 0%, #c4b5fd 55%, #86efac 100%)",
          padding: "0 24px",
          boxShadow: "0 3px 16px rgba(233, 73, 138, 0.18)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28, height: 64 }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: 18,
                color: "#fff",
                letterSpacing: "-0.01em",
                textShadow: "0 1px 4px rgba(0,0,0,0.12)",
              }}
            >
              🌸 Appréciations Anglais
            </span>
            <nav style={{ display: "flex", gap: 6 }}>
              {(["appreciations", "bilans"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: 20,
                    border: "none",
                    cursor: "pointer",
                    fontWeight: activeTab === tab ? 700 : 500,
                    fontSize: 14,
                    background:
                      activeTab === tab
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.22)",
                    color: activeTab === tab ? "#e8498a" : "rgba(255,255,255,0.9)",
                    transition: "all 0.15s",
                    boxShadow:
                      activeTab === tab ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  {tab === "appreciations" ? "🌺 Appréciations" : "🌿 Bilans"}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "28px 24px" }}>
        {activeTab === "appreciations" ? <AppreciationsTab /> : <BilansTab />}
      </main>
    </div>
  );
}
