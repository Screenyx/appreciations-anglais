import { useState, useEffect, useCallback } from 'react'
import type { Store, Profil, Appreciation, BilanItem } from '@/types'
import { DEFAULT_PROFILS } from '@/lib/defaultProfils'

const STORAGE_KEY = 'appreciations_anglais_data'

function readStore(): Partial<Store> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

function writeStore(patch: Partial<Store>) {
  if (typeof window === 'undefined') return
  try {
    const current = readStore()
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...patch }))
  } catch {}
}

function mergedProfils(saved?: Profil[]): Profil[] {
  if (!saved?.length) return DEFAULT_PROFILS.map(p => ({ ...p }))
  const savedKeys = new Set(saved.map(p => p.key))
  const newDefaults = DEFAULT_PROFILS.filter(p => !savedKeys.has(p.key))
  return [...saved, ...newDefaults]
}

export function useStore() {
  const [appreciations, setAppreciations] = useState<Appreciation[]>([])
  const [bilans, setBilans] = useState<BilanItem[]>([])
  const [apprOverrides, setApprOverrides] = useState<Store['apprOverrides']>({})
  const [bilanOverrides, setBilanOverrides] = useState<Store['bilanOverrides']>({})
  const [profils, setProfils] = useState<Profil[]>(DEFAULT_PROFILS.map(p => ({ ...p })))
  const [dark, setDark] = useState<0 | 1>(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const d = readStore()
    setAppreciations(d.appreciations ?? [])
    setBilans(d.bilans ?? [])
    setApprOverrides(d.apprOverrides ?? {})
    setBilanOverrides(d.bilanOverrides ?? {})
    const merged = mergedProfils(d.profils)
    setProfils(merged)
    const savedDark = (d.dark ?? 0) as 0 | 1
    setDark(savedDark)
    setLoaded(true)
  }, [])

  const persist = useCallback((patch: Partial<Store>) => {
    writeStore(patch)
  }, [])

  const persistAll = useCallback((overrides?: Partial<Store>) => {
    const state: Partial<Store> = {
      appreciations,
      bilans,
      apprOverrides,
      bilanOverrides,
      profils,
      dark,
      ...overrides,
    }
    writeStore(state)
  }, [appreciations, bilans, apprOverrides, bilanOverrides, profils, dark])

  // ── Appréciations ──────────────────────────────────────────────────────────
  const saveAppr = useCallback((item: Appreciation) => {
    setAppreciations(prev => {
      const next = prev.find(x => x.id === item.id)
        ? prev.map(x => x.id === item.id ? item : x)
        : [...prev, item]
      writeStore({ appreciations: next, bilans, apprOverrides, bilanOverrides, profils, dark })
      return next
    })
  }, [bilans, apprOverrides, bilanOverrides, profils, dark])

  const deleteAppr = useCallback((id: string) => {
    setAppreciations(prev => {
      const next = prev.filter(x => x.id !== id)
      writeStore({ appreciations: next, bilans, apprOverrides, bilanOverrides, profils, dark })
      return next
    })
  }, [bilans, apprOverrides, bilanOverrides, profils, dark])

  const overrideBuiltinAppr = useCallback((origTexte: string, value: Appreciation | 'deleted') => {
    setApprOverrides(prev => {
      const next = { ...prev, [origTexte]: value }
      writeStore({ appreciations, bilans, apprOverrides: next, bilanOverrides, profils, dark })
      return next
    })
  }, [appreciations, bilans, bilanOverrides, profils, dark])

  const restoreBuiltinAppr = useCallback((origTexte: string) => {
    setApprOverrides(prev => {
      const next = { ...prev }
      delete next[origTexte]
      writeStore({ appreciations, bilans, apprOverrides: next, bilanOverrides, profils, dark })
      return next
    })
  }, [appreciations, bilans, bilanOverrides, profils, dark])

  // ── Bilans ─────────────────────────────────────────────────────────────────
  const saveBilan = useCallback((item: BilanItem) => {
    setBilans(prev => {
      const next = prev.find(x => x.id === item.id)
        ? prev.map(x => x.id === item.id ? item : x)
        : [...prev, item]
      writeStore({ appreciations, bilans: next, apprOverrides, bilanOverrides, profils, dark })
      return next
    })
  }, [appreciations, apprOverrides, bilanOverrides, profils, dark])

  const deleteBilan = useCallback((id: string) => {
    setBilans(prev => {
      const next = prev.filter(x => x.id !== id)
      writeStore({ appreciations, bilans: next, apprOverrides, bilanOverrides, profils, dark })
      return next
    })
  }, [appreciations, apprOverrides, bilanOverrides, profils, dark])

  const overrideBuiltinBilan = useCallback((key: string, value: { texte: string; profil?: string } | 'deleted') => {
    setBilanOverrides(prev => {
      const next = { ...prev, [key]: value }
      writeStore({ appreciations, bilans, apprOverrides, bilanOverrides: next, profils, dark })
      return next
    })
  }, [appreciations, bilans, apprOverrides, profils, dark])

  const restoreBuiltinBilan = useCallback((key: string) => {
    setBilanOverrides(prev => {
      const next = { ...prev }
      delete next[key]
      writeStore({ appreciations, bilans, apprOverrides, bilanOverrides: next, profils, dark })
      return next
    })
  }, [appreciations, bilans, apprOverrides, profils, dark])

  // ── Profils ────────────────────────────────────────────────────────────────
  const saveProfils = useCallback((updated: Profil[]) => {
    setProfils(updated)
    writeStore({ appreciations, bilans, apprOverrides, bilanOverrides, profils: updated, dark })
  }, [appreciations, bilans, apprOverrides, bilanOverrides, dark])

  // ── Dark mode ──────────────────────────────────────────────────────────────
  const toggleDark = useCallback(() => {
    setDark(prev => {
      const next = prev === 1 ? 0 : 1
      writeStore({ appreciations, bilans, apprOverrides, bilanOverrides, profils, dark: next })
      return next
    })
  }, [appreciations, bilans, apprOverrides, bilanOverrides, profils])

  // ── Restore all builtins ───────────────────────────────────────────────────
  const restoreAllBuiltins = useCallback(() => {
    setApprOverrides({})
    setBilanOverrides({})
    writeStore({ appreciations, bilans, apprOverrides: {}, bilanOverrides: {}, profils, dark })
  }, [appreciations, bilans, profils, dark])

  // ── Export / Import ────────────────────────────────────────────────────────
  const exportData = useCallback(() => {
    const data: Store & { exportDate: string } = {
      appreciations, bilans, apprOverrides, bilanOverrides, profils, dark,
      exportDate: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `appreciations_${new Date().toISOString().slice(0, 10)}.json`
    a.click()
  }, [appreciations, bilans, apprOverrides, bilanOverrides, profils, dark])

  const importData = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = e => {
      try {
        const d = JSON.parse(e.target?.result as string) as Partial<Store>
        const newAppreciations = [...appreciations, ...(d.appreciations ?? []).filter(x => !appreciations.find(y => y.id === x.id))]
        const newBilans = [...bilans, ...(d.bilans ?? []).filter(x => !bilans.find(y => y.id === x.id))]
        const newApprOv = { ...apprOverrides, ...(d.apprOverrides ?? {}) }
        const newBilanOv = { ...bilanOverrides, ...(d.bilanOverrides ?? {}) }
        const newProfils = d.profils ? mergedProfils(d.profils) : profils

        setAppreciations(newAppreciations)
        setBilans(newBilans)
        setApprOverrides(newApprOv)
        setBilanOverrides(newBilanOv)
        setProfils(newProfils)

        writeStore({ appreciations: newAppreciations, bilans: newBilans, apprOverrides: newApprOv, bilanOverrides: newBilanOv, profils: newProfils, dark })
        return { apprCount: (d.appreciations ?? []).length, bilanCount: (d.bilans ?? []).length }
      } catch { return null }
    }
    reader.readAsText(file)
  }, [appreciations, bilans, apprOverrides, bilanOverrides, profils, dark])

  return {
    loaded, appreciations, bilans, apprOverrides, bilanOverrides, profils, dark,
    saveAppr, deleteAppr, overrideBuiltinAppr, restoreBuiltinAppr,
    saveBilan, deleteBilan, overrideBuiltinBilan, restoreBuiltinBilan,
    saveProfils, toggleDark, restoreAllBuiltins, exportData, importData, persistAll,
  }
}
