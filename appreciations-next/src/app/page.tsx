'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useStore } from '@/hooks/useStore'
import { builtinData } from '@/lib/builtinData'
import { builtinBilan } from '@/lib/builtinBilan'
import type { Classe, Trimestre, Appreciation, BilanItem, Profil } from '@/types'

const CLASSE_ORDER: Classe[] = ['6', '5', '4', '3', '2', '1', 'T']
const CLASSE_LABELS: Record<Classe, string> = { '6': '6ème', '5': '5ème', '4': '4ème', '3': '3ème', '2': 'Seconde', '1': 'Première', 'T': 'Terminale' }
const TRIM_LABELS: Record<number, string> = { 1: 'Trimestre 1', 2: 'Trimestre 2', 3: 'Trimestre 3' }
const TRIM_COLORS: Record<number, string> = { 1: '#b07d3a', 2: '#3a7ab0', 3: '#3a9b6f' }
const SECTION_COLORS: Record<Classe, string> = { '6': '#7c6a2e', '5': '#2e5fa3', '4': '#2e7c6a', '3': '#6a2e7c', '2': '#4a7c59', '1': '#c8553d', 'T': '#8b4a8b' }
type Tab = 'appreciations' | 'bilan' | 'config'

const PlusIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
const EditIcon = () => <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
const TrashIcon = () => <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" /></svg>
const RestoreIcon = () => <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
const SunIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
const MoonIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
const ExportIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
const ImportIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
const SettingsIcon = () => <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
const CopyIcon = () => <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>

function Toast({ msg, visible }: { msg: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-8 right-8 z-50 px-4 py-3 rounded-xl text-sm font-semibold text-white shadow-lg pointer-events-none select-none flex items-center gap-2
        transition-all duration-300 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
      style={{ background: 'var(--ink)' }}
    >
      {msg}
    </div>
  )
}

function Pill({ label, active, color, onClick }: { label: string; active: boolean; color?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-full text-xs font-semibold border-[1.5px] transition-all whitespace-nowrap cursor-pointer"
      style={{
        background: active ? (color || 'var(--ink)') : 'var(--paper)',
        color: active ? '#fff' : 'var(--ink)',
        borderColor: active ? (color || 'var(--ink)') : 'var(--border)',
      }}
    >
      {label}
    </button>
  )
}

function Tag({ label, color, bg }: { label: string; color?: string; bg?: string }) {
  return <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded" style={{ background: bg || 'var(--tag-bg)', color: color || 'var(--muted)' }}>{label}</span>
}

function InlineConfirm({ label, onConfirm, onCancel }: { label: string; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="flex items-center gap-1 rounded-lg shadow-md border px-2 py-1" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <span className="text-[10px] font-semibold mr-0.5" style={{ color: 'var(--muted)' }}>{label}</span>
      <button onClick={e => { e.stopPropagation(); onConfirm() }} className="px-2 py-0.5 rounded text-[11px] font-bold text-white bg-red-500 hover:bg-red-600 transition-colors">Oui</button>
      <button onClick={e => { e.stopPropagation(); onCancel() }} className="px-2 py-0.5 rounded text-[11px] font-bold transition-colors" style={{ background: 'var(--tag-bg)', color: 'var(--ink)' }}>Non</button>
    </div>
  )
}

function Card({ item, profilLabel, searchText, onCopy, onEdit, onDelete, onRestore }:
  { item: Appreciation & { _origTexte?: string; _builtin?: boolean }; profilLabel: (k: string) => string; searchText: string; onCopy: () => void; onEdit: () => void; onDelete: () => void; onRestore?: () => void }) {
  const [copied, setCopied] = useState(false)
  const [confirmDel, setConfirmDel] = useState(false)
  const isCustom = !!item.id && !item._builtin
  const isEdited = !!(item._builtin && item._origTexte)

  const hl = (text: string) => {
    if (!searchText) return <>{text}</>
    const re = new RegExp(`(${searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(re)
    return <>{parts.map((p, i) => re.test(p) ? <mark key={i} className="bg-yellow-200 rounded px-0.5">{p}</mark> : p)}</>
  }

  const copy = () => {
    if (confirmDel) return
    navigator.clipboard.writeText(item.texte).then(() => { setCopied(true); onCopy(); setTimeout(() => setCopied(false), 1800) })
  }

  return (
    <div
      onClick={copy}
      className={`group relative rounded-xl p-4 cursor-pointer transition-all border-[1.5px] flex flex-col gap-2.5
        ${copied ? 'border-green-400 shadow-sm' : 'border-[var(--border)] hover:border-[var(--ink)] hover:shadow-md hover:-translate-y-px'}
        ${isCustom ? 'border-l-[3px] !border-l-[var(--accent)]' : ''}
        ${isEdited ? 'border-l-[3px] !border-l-[var(--accent3)]' : ''}`}
      style={{ background: copied ? 'var(--copied-bg)' : 'var(--card)' }}
    >
      <div className="absolute top-2.5 right-2.5 z-10">
        {confirmDel ? (
          <InlineConfirm
            label={item._builtin ? 'Masquer ?' : 'Supprimer ?'}
            onConfirm={() => { onDelete(); setConfirmDel(false) }}
            onCancel={() => setConfirmDel(false)}
          />
        ) : (
          <div className="hidden group-hover:flex gap-0.5">
            <button onClick={e => { e.stopPropagation(); onEdit() }}
              className="p-1.5 rounded-lg transition-colors hover:bg-[var(--tag-bg)]"
              style={{ color: 'var(--muted)' }} aria-label="Modifier"><EditIcon /></button>
            <button onClick={e => { e.stopPropagation(); setConfirmDel(true) }}
              className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
              style={{ color: 'var(--muted)' }} aria-label="Supprimer"><TrashIcon /></button>
            {onRestore && (
              <button onClick={e => { e.stopPropagation(); onRestore() }}
                className="p-1.5 rounded-lg transition-colors hover:bg-blue-50"
                style={{ color: 'var(--accent3)' }} aria-label="Restaurer"><RestoreIcon /></button>
            )}
          </div>
        )}
      </div>

      <p className="text-[13px] leading-relaxed flex-1 pr-16" style={{ color: 'var(--ink)' }}>{hl(item.texte)}</p>

      <div className="flex items-end justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {item.profils.map(p => <Tag key={p} label={profilLabel(p)} />)}
          {item.trimestres.map(t => <Tag key={t} label={`T${t}`} bg={TRIM_COLORS[t] + '22'} color={TRIM_COLORS[t]} />)}
          {isCustom && <Tag label="✎ Perso" bg="#fde8e4" color="var(--accent)" />}
          {isEdited && <Tag label="✎ Modifié" bg="#ddeaff" color="var(--accent3)" />}
        </div>
        <span
          className="text-[10px] flex items-center gap-1 shrink-0 transition-all"
          style={{ color: copied ? 'var(--accent2)' : 'var(--muted)', opacity: copied ? 1 : 0.45 }}
        >
          {copied ? '✓ Copié !' : <><CopyIcon /> Copier</>}
        </span>
      </div>
    </div>
  )
}

interface ModalState { mode: 'appr' | 'bilan' | null; editAppr?: Appreciation; editBilan?: BilanItem; builtinOrigKey?: string }

function Modal({ state, profils, onClose, onSaveAppr, onSaveBilan, showToast }:
  { state: ModalState; profils: Profil[]; onClose: () => void; onSaveAppr: (i: Appreciation, origKey?: string) => void; onSaveBilan: (i: BilanItem, bilanKey?: string) => void; showToast: (m: string) => void }) {
  const { mode, editAppr, editBilan, builtinOrigKey } = state
  const [texte, setTexte] = useState('')
  const [classes, setClasses] = useState<Classe[]>([])
  const [trimestres, setTrimestres] = useState<number[]>([])
  const [profilsSel, setProfilsSel] = useState<string[]>([])
  const [bilanClasse, setBilanClasse] = useState<Classe | ''>('')
  const [bilanTrim, setBilanTrim] = useState(0)
  const [bilanProfil, setBilanProfil] = useState('')
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!mode) return
    setErrors({})
    if (mode === 'appr') {
      setTexte(editAppr?.texte ?? ''); setClasses(editAppr?.classes ?? [])
      setTrimestres(editAppr?.trimestres ?? []); setProfilsSel(editAppr?.profils ?? [])
    } else {
      setTexte(editBilan?.texte ?? ''); setBilanClasse(editBilan?.classe ?? '')
      setBilanTrim(editBilan?.trim ?? 0); setBilanProfil(editBilan?.profil ?? '')
    }
    setTimeout(() => ref.current?.focus(), 80)
  }, [mode, editAppr, editBilan])

  useEffect(() => {
    if (!mode) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [mode, onClose])

  const ap = profils.filter(p => p.active)
  const toggleC = (c: Classe) => setClasses(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c])
  const toggleT = (t: number) => setTrimestres(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])
  const toggleP = (k: string) => setProfilsSel(p => p.includes(k) ? p.filter(x => x !== k) : [...p, k])

  const submit = () => {
    const e: Record<string, boolean> = {}
    if (!texte.trim()) e.texte = true
    if (mode === 'appr') { if (!classes.length) e.cls = true; if (!trimestres.length) e.tri = true; if (!profilsSel.length) e.pro = true }
    else { if (!bilanClasse) e.bcls = true; if (!bilanTrim) e.btri = true; if (!bilanProfil) e.bpro = true }
    setErrors(e)
    if (Object.keys(e).length) { showToast('⚠ Tous les champs obligatoires doivent être remplis'); return }
    if (mode === 'appr') {
      onSaveAppr({ id: editAppr?.id || ('a' + Date.now()), texte, classes, trimestres: trimestres as Trimestre[], profils: profilsSel }, builtinOrigKey)
      showToast(editAppr || builtinOrigKey ? '✓ Appréciation modifiée !' : '✓ Appréciation ajoutée !')
    } else {
      const bilanKey = editBilan?.id?.startsWith('builtin||') ? editBilan.id.slice('builtin||'.length) : undefined
      onSaveBilan({ id: editBilan?.id?.startsWith('builtin||') ? ('b' + Date.now()) : (editBilan?.id || ('b' + Date.now())), texte, classe: bilanClasse as Classe, trim: bilanTrim as Trimestre, profil: bilanProfil }, bilanKey)
      showToast(editBilan && !editBilan.id?.startsWith('builtin||') ? '✓ Bilan modifié !' : '✓ Bilan enregistré !')
    }
    onClose()
  }

  if (!mode) return null
  const isEditing = !!(editAppr || editBilan || builtinOrigKey)
  const pill = (label: string, active: boolean, color: string, onClick: () => void) => (
    <button onClick={onClick}
      className="px-3 py-1 rounded-full text-xs font-semibold border-[1.5px] transition-all cursor-pointer"
      style={{ background: active ? color : 'var(--paper)', color: active ? '#fff' : 'var(--ink)', borderColor: active ? color : 'var(--border)' }}>
      {label}
    </button>
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(26,26,46,.6)', backdropFilter: 'blur(2px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl" style={{ background: 'var(--card)' }}>
        <div className="flex items-center justify-between p-5 pb-3 border-b sticky top-0 z-10" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-serif text-xl font-normal">
            {isEditing ? (mode === 'appr' ? "Modifier l'appréciation" : 'Modifier le bilan') : (mode === 'appr' ? 'Nouvelle appréciation' : 'Nouveau bilan trimestriel')}
          </h2>
          <button onClick={onClose}
            className="p-1.5 rounded-lg transition-colors hover:bg-[var(--tag-bg)]"
            style={{ color: 'var(--muted)' }} aria-label="Fermer (Échap)">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <div className="p-5 flex flex-col gap-4">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--muted)' }}>
              Texte <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <textarea ref={ref} value={texte} onChange={e => setTexte(e.target.value)} rows={4}
              placeholder={mode === 'appr' ? "Rédigez l'appréciation…" : "Rédigez le bilan trimestriel…"}
              className={`w-full rounded-xl px-3 py-2.5 text-sm resize-y border-[1.5px] outline-none transition-colors ${errors.texte ? 'border-[var(--accent)]' : 'border-[var(--border)] focus:border-[var(--ink)]'}`}
              style={{ background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'inherit' }} />
            {errors.texte && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Le texte est obligatoire.</p>}
            <p className="text-[11px] text-right mt-1" style={{ color: 'var(--muted)' }}>{texte.length} car.</p>
          </div>
          <hr style={{ borderColor: 'var(--border)' }} />
          {mode === 'appr' ? <>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Classe(s) <span style={{ color: 'var(--accent)' }}>*</span></div>
              <div className={`flex flex-wrap gap-1.5 ${errors.cls ? 'ring-2 ring-[var(--accent)] rounded-lg p-1' : ''}`}>
                {CLASSE_ORDER.map(c => pill(CLASSE_LABELS[c], classes.includes(c), SECTION_COLORS[c], () => toggleC(c)))}
              </div>
              {errors.cls && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Sélectionnez au moins une classe.</p>}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Trimestre(s) <span style={{ color: 'var(--accent)' }}>*</span></div>
              <div className={`flex gap-1.5 ${errors.tri ? 'ring-2 ring-[var(--accent)] rounded-lg p-1' : ''}`}>
                {[1, 2, 3].map(t => pill(`T${t}`, trimestres.includes(t), TRIM_COLORS[t], () => toggleT(t)))}
              </div>
              {errors.tri && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Sélectionnez au moins un trimestre.</p>}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Profil(s) <span style={{ color: 'var(--accent)' }}>*</span></div>
              <div className={`flex flex-wrap gap-1.5 ${errors.pro ? 'ring-2 ring-[var(--accent)] rounded-lg p-1' : ''}`}>
                {ap.map(p => pill(p.label, profilsSel.includes(p.key), 'var(--ink)', () => toggleP(p.key)))}
              </div>
              {errors.pro && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Sélectionnez au moins un profil.</p>}
            </div>
          </> : <>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Classe <span style={{ color: 'var(--accent)' }}>*</span></div>
              <div className={`flex flex-wrap gap-1.5 ${errors.bcls ? 'ring-2 ring-[var(--accent)] rounded-lg p-1' : ''}`}>
                {CLASSE_ORDER.map(c => pill(CLASSE_LABELS[c], bilanClasse === c, SECTION_COLORS[c], () => setBilanClasse(c)))}
              </div>
              {errors.bcls && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Sélectionnez une classe.</p>}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--muted)' }}>Trimestre <span style={{ color: 'var(--accent)' }}>*</span></div>
              <div className={`flex gap-1.5 ${errors.btri ? 'ring-2 ring-[var(--accent)] rounded-lg p-1' : ''}`}>
                {[1, 2, 3].map(t => pill(`T${t}`, bilanTrim === t, TRIM_COLORS[t], () => setBilanTrim(t)))}
              </div>
              {errors.btri && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Sélectionnez un trimestre.</p>}
            </div>
            <div>
              <label className="text-[11px] font-bold uppercase tracking-widest mb-1.5 block" style={{ color: 'var(--muted)' }}>Profil <span style={{ color: 'var(--accent)' }}>*</span></label>
              <select value={bilanProfil} onChange={e => setBilanProfil(e.target.value)}
                className={`w-full rounded-xl px-3 py-2.5 text-sm border-[1.5px] outline-none cursor-pointer transition-colors ${errors.bpro ? 'border-[var(--accent)]' : 'border-[var(--border)] focus:border-[var(--ink)]'}`}
                style={{ background: 'var(--paper)', color: 'var(--ink)', fontFamily: 'inherit' }}>
                <option value="">— Choisir un profil —</option>
                {ap.map(p => <option key={p.key} value={p.label}>{p.label}</option>)}
              </select>
              {errors.bpro && <p className="text-[11px] mt-1" style={{ color: 'var(--accent)' }}>Le profil est obligatoire.</p>}
            </div>
          </>}
        </div>

        <div className="flex justify-end gap-2 px-5 pb-5 pt-3 border-t sticky bottom-0" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <button onClick={onClose}
            className="px-4 py-2 rounded-full text-sm font-semibold border-[1.5px] transition-all hover:bg-[var(--tag-bg)]"
            style={{ background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--border)' }}>
            Annuler
          </button>
          <button onClick={submit}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'var(--accent)' }}>
            {isEditing ? 'Enregistrer les modifications' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  )
}

function ConfigTab({ profils, onSave, onRestoreAll, showToast }: { profils: Profil[]; onSave: (p: Profil[]) => void; onRestoreAll: () => void; showToast: (m: string) => void }) {
  const [local, setLocal] = useState<Profil[]>(() => profils.map(p => ({ ...p })))
  const [dirty, setDirty] = useState(false)
  const [confirmRestore, setConfirmRestore] = useState(false)
  const [confirmDeleteKey, setConfirmDeleteKey] = useState<string | null>(null)

  useEffect(() => { setLocal(profils.map(p => ({ ...p }))); setDirty(false) }, [profils])

  const update = (fn: (prev: Profil[]) => Profil[]) => { setLocal(fn); setDirty(true) }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl overflow-hidden border-[1.5px]" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <div className="flex items-center justify-between px-5 py-4 border-b" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-lg font-normal">Profils d&apos;élèves</h3>
            {dirty && (
              <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded" style={{ background: 'var(--accent)', color: '#fff' }}>
                Non enregistré
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { const key = 'custom_' + Date.now(); update(p => [...p, { key, label: 'Nouveau profil', active: true }]) }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border-[1.5px] transition-all hover:bg-[var(--tag-bg)]"
              style={{ background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--border)' }}>
              <PlusIcon /> Nouveau profil
            </button>
            <button
              onClick={() => { onSave(local); setDirty(false); showToast('✓ Configuration sauvegardée !') }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all ${dirty ? 'opacity-100 shadow-md' : 'opacity-60'}`}
              style={{ background: 'var(--accent2)' }}>
              ✓ Enregistrer
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-xs mb-2" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
            Personnalisez les libellés. Désactivez les profils inutilisés — ils disparaissent des formulaires et filtres.
          </p>
          {local.map(p => (
            <div key={p.key}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border-[1.5px] transition-all ${!p.active ? 'opacity-45' : ''}`}
              style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
              <input
                type="text" value={p.label}
                onChange={e => update(prev => prev.map(x => x.key === p.key ? { ...x, label: e.target.value } : x))}
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{ color: 'var(--ink)', fontFamily: 'inherit' }}
              />
              <button
                onClick={() => update(prev => prev.map(x => x.key === p.key ? { ...x, active: !x.active } : x))}
                className="w-9 h-5 rounded-full relative flex-shrink-0 transition-colors"
                style={{ background: p.active ? 'var(--accent2)' : 'var(--border)' }}
                aria-label={p.active ? 'Désactiver' : 'Activer'}>
                <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ left: p.active ? '17px' : '2px' }} />
              </button>
              {p.key.startsWith('custom_') && (
                confirmDeleteKey === p.key ? (
                  <InlineConfirm
                    label="Supprimer ?"
                    onConfirm={() => { update(prev => prev.filter(x => x.key !== p.key)); setConfirmDeleteKey(null) }}
                    onCancel={() => setConfirmDeleteKey(null)}
                  />
                ) : (
                  <button onClick={() => setConfirmDeleteKey(p.key)}
                    className="p-1.5 rounded-lg transition-colors hover:bg-red-50"
                    style={{ color: 'var(--muted)' }} aria-label="Supprimer"><TrashIcon /></button>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border-[1.5px]" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <div className="px-5 py-4 border-b" style={{ background: 'var(--paper)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif text-lg font-normal">Appréciations &amp; bilans par défaut</h3>
        </div>
        <div className="p-4">
          <p className="text-xs mb-4" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
            Modifiez ou masquez les éléments par défaut depuis les onglets Appréciations et Bilan trimestriel.
            Ce bouton restaure <strong style={{ color: 'var(--ink)' }}>tout</strong>.
          </p>
          {confirmRestore ? (
            <div className="flex items-center gap-3 p-3 rounded-xl border-[1.5px]" style={{ background: 'rgba(200,85,61,.07)', borderColor: 'var(--accent)' }}>
              <span className="text-sm flex-1" style={{ color: 'var(--ink)' }}>Restaurer toutes les données par défaut ?</span>
              <button onClick={() => { onRestoreAll(); setConfirmRestore(false) }}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-red-500 hover:bg-red-600 transition-colors flex-shrink-0">
                Oui, restaurer
              </button>
              <button onClick={() => setConfirmRestore(false)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border-[1.5px] transition-colors hover:bg-[var(--tag-bg)] flex-shrink-0"
                style={{ color: 'var(--ink)', borderColor: 'var(--border)' }}>
                Annuler
              </button>
            </div>
          ) : (
            <button onClick={() => setConfirmRestore(true)}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'var(--accent)' }}>
              ↺ Tout restaurer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const store = useStore()
  const [activeTab, setActiveTab] = useState<Tab>('appreciations')
  const [activeClasse, setActiveClasse] = useState<Classe | 'all'>('all')
  const [activeTrim, setActiveTrim] = useState<number | 'all'>('all')
  const [activeProfil, setActiveProfil] = useState('all')
  const [searchText, setSearchText] = useState('')
  const [bilanClasse, setBilanClasse] = useState<Classe | 'all'>('all')
  const [bilanTrim, setBilanTrim] = useState<number | 'all'>('all')
  const [toast, setToast] = useState({ msg: '', visible: false })
  const [modal, setModal] = useState<ModalState>({ mode: null })
  const [bilanConfirm, setBilanConfirm] = useState<string | null>(null)
  const [bilanCustomConfirm, setBilanCustomConfirm] = useState<string | null>(null)
  const toastRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const showToast = useCallback((msg: string) => {
    setToast({ msg, visible: true })
    clearTimeout(toastRef.current)
    toastRef.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2100)
  }, [])

  const profilLabel = useCallback((key: string) => store.profils.find(p => p.key === key)?.label ?? key, [store.profils])
  const activeProfils = store.profils.filter(p => p.active)

  const allData = useMemo((): (Appreciation & { _origTexte?: string; _builtin?: boolean })[] => {
    const base = builtinData
      .filter(item => store.apprOverrides[item.texte] !== 'deleted')
      .map(item => {
        const ov = store.apprOverrides[item.texte]
        if (ov && ov !== 'deleted') return { ...(ov as Appreciation), _origTexte: item.texte, _builtin: true }
        return { ...item, _builtin: true }
      })
    return [...base, ...store.appreciations]
  }, [store.apprOverrides, store.appreciations])

  const filtered = useMemo(() =>
    allData.filter(item => {
      const mc = activeClasse === 'all' || item.classes.includes(activeClasse as Classe)
      const mt = activeTrim === 'all' || item.trimestres.includes(activeTrim as Trimestre)
      const mp = activeProfil === 'all' || item.profils.includes(activeProfil)
      const ms = !searchText || item.texte.toLowerCase().includes(searchText.toLowerCase())
      return mc && mt && mp && ms
    }), [allData, activeClasse, activeTrim, activeProfil, searchText])

  const grouped = useMemo(() => {
    const g: Record<string, typeof allData> = {}
    filtered.forEach(item => {
      item.classes.forEach(c => {
        if (activeClasse !== 'all' && c !== activeClasse) return
        item.trimestres.forEach(t => {
          if (activeTrim !== 'all' && t !== activeTrim) return
          const key = `${c}-${t}`
          if (!g[key]) g[key] = []
          if (!g[key].find(x => x.texte === item.texte)) g[key].push(item)
        })
      })
    })
    return g
  }, [filtered, activeClasse, activeTrim, allData])

  const hasFilters = activeClasse !== 'all' || activeTrim !== 'all' || activeProfil !== 'all' || !!searchText
  const resetFilters = () => { setActiveClasse('all'); setActiveTrim('all'); setActiveProfil('all'); setSearchText('') }

  useEffect(() => {
    if (!store.loaded) return
    document.body.classList.toggle('dark-mode', store.dark === 1)
  }, [store.dark, store.loaded])

  if (!store.loaded) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--paper)' }}>
      <div className="w-8 h-8 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }} />
    </div>
  )

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* Header */}
      <header className="relative overflow-hidden px-8 pt-5 pb-4" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="font-serif absolute right-0 top-0 opacity-5 leading-none select-none pointer-events-none" style={{ fontSize: '14rem' }}>A</div>
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded mb-2 relative z-10" style={{ background: 'var(--accent)', color: '#fff' }}>Outil enseignant</span>
        <div className="flex items-center justify-between relative z-10">
          <h1 className="font-serif text-3xl font-normal tracking-tight">Appréciations Anglais</h1>
          <div className="flex items-center gap-1.5">
            <button onClick={store.exportData}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff' }}>
              <ExportIcon /> Export
            </button>
            <label
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-all hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff' }}>
              <ImportIcon /> Import
              <input type="file" accept=".json" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) { store.importData(f); showToast('✓ Import réussi !') }; e.target.value = '' }} />
            </label>
            <button onClick={() => setActiveTab('config')}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:bg-white/20"
              style={{ background: activeTab === 'config' ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff' }}>
              <SettingsIcon /> Config
            </button>
            <button onClick={store.toggleDark}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', color: '#fff' }}
              aria-label={store.dark === 1 ? 'Mode clair' : 'Mode sombre'}>
              {store.dark === 1 ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex" style={{ background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,.1)' }}>
        {(['appreciations', 'bilan', 'config'] as Tab[]).map(tab => {
          const label = tab === 'appreciations' ? '📝 Appréciations' : tab === 'bilan' ? '📊 Bilan trimestriel' : '⚙ Configuration'
          return (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all"
              style={{ color: activeTab === tab ? '#fff' : 'rgba(255,255,255,.45)', background: 'none', border: 'none', borderBottom: `3px solid ${activeTab === tab ? 'var(--accent)' : 'transparent'}` }}>
              {label}
            </button>
          )
        })}
      </div>

      {/* APPRÉCIATIONS */}
      {activeTab === 'appreciations' && (
        <>
          <div className="sticky top-0 z-10 px-6 py-3 flex flex-wrap gap-3 items-end shadow-md" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Classe</span>
              <div className="flex flex-wrap gap-1">
                <Pill label="Toutes" active={activeClasse === 'all'} onClick={() => setActiveClasse('all')} />
                {CLASSE_ORDER.map(c => <Pill key={c} label={CLASSE_LABELS[c]} active={activeClasse === c} color={SECTION_COLORS[c]} onClick={() => setActiveClasse(c)} />)}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Trimestre</span>
              <div className="flex gap-1">
                <Pill label="Tous" active={activeTrim === 'all'} onClick={() => setActiveTrim('all')} />
                {[1, 2, 3].map(t => <Pill key={t} label={`T${t}`} active={activeTrim === t} color={TRIM_COLORS[t]} onClick={() => setActiveTrim(t)} />)}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Profil</span>
              <div className="flex flex-wrap gap-1">
                <Pill label="Tous" active={activeProfil === 'all'} onClick={() => setActiveProfil('all')} />
                {activeProfils.map(p => <Pill key={p.key} label={p.label} active={activeProfil === p.key} onClick={() => setActiveProfil(p.key)} />)}
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-[160px]">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Recherche</span>
              <div className="relative">
                <input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Mot-clé…"
                  className="w-full px-3 py-1.5 rounded-full text-sm border-[1.5px] outline-none pr-8 transition-colors"
                  style={{ background: 'var(--paper)', color: 'var(--ink)', borderColor: searchText ? 'var(--ink)' : 'var(--border)', fontFamily: 'inherit' }} />
                {searchText && (
                  <button onClick={() => setSearchText('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-base leading-none font-bold rounded-full transition-colors hover:bg-[var(--border)]"
                    style={{ color: 'var(--muted)' }} aria-label="Effacer">×</button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 self-end">
              {hasFilters && (
                <button onClick={resetFilters}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border-[1.5px] transition-all hover:bg-[var(--tag-bg)]"
                  style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}>
                  Réinitialiser
                </button>
              )}
              <button onClick={() => setModal({ mode: 'appr' })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'var(--accent)' }}>
                <PlusIcon /> Ajouter
              </button>
            </div>
          </div>

          <div className="px-6 py-2 flex justify-between text-xs items-center" style={{ color: 'var(--muted)' }}>
            <span>
              <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong> appréciation{filtered.length > 1 ? 's' : ''}
              {hasFilters && <span> filtrée{filtered.length > 1 ? 's' : ''}</span>}
            </span>
            <span className="flex items-center gap-1 opacity-60"><CopyIcon /> Cliquez pour copier</span>
          </div>

          <div className="px-6 pb-12 max-w-screen-xl mx-auto">
            {Object.keys(grouped).length === 0 ? (
              <div className="text-center py-20" style={{ color: 'var(--muted)' }}>
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-semibold mb-1">Aucune appréciation ne correspond.</p>
                {hasFilters && (
                  <button onClick={resetFilters} className="text-sm underline mt-1 transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
                    Réinitialiser les filtres
                  </button>
                )}
              </div>
            ) : CLASSE_ORDER.flatMap(c => [1, 2, 3].map(t => {
              const key = `${c}-${t}`; const items = grouped[key]
              if (!items?.length) return null
              return (
                <div key={key} className="mb-8">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b-2" style={{ borderColor: 'var(--border)' }}>
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: SECTION_COLORS[c] }} />
                    <span className="font-serif text-lg">{CLASSE_LABELS[c]}</span>
                    <span className="text-xs font-bold italic" style={{ color: TRIM_COLORS[t] }}> — {TRIM_LABELS[t]}</span>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--tag-bg)', color: 'var(--muted)' }}>{items.length}</span>
                  </div>
                  <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))' }}>
                    {items.map((item, i) => (
                      <Card key={i} item={item} profilLabel={profilLabel} searchText={searchText}
                        onCopy={() => showToast('✓ Appréciation copiée !')}
                        onEdit={() => {
                          if (item.id && !item._builtin) setModal({ mode: 'appr', editAppr: item as Appreciation })
                          else setModal({ mode: 'appr', editAppr: item as Appreciation, builtinOrigKey: item._origTexte || item.texte })
                        }}
                        onDelete={() => {
                          if (item.id && !item._builtin) { store.deleteAppr(item.id); showToast('Supprimée.') }
                          else { store.overrideBuiltinAppr(item._origTexte || item.texte, 'deleted'); showToast('Masquée.') }
                        }}
                        onRestore={item._builtin && item._origTexte ? () => { store.restoreBuiltinAppr(item._origTexte!); showToast('Restaurée.') } : undefined}
                      />
                    ))}
                  </div>
                </div>
              )
            }))}
          </div>
        </>
      )}

      {/* BILAN */}
      {activeTab === 'bilan' && (
        <>
          <div className="sticky top-0 z-10 px-6 py-3 flex flex-wrap gap-3 items-end shadow-md" style={{ background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Classe</span>
              <div className="flex flex-wrap gap-1">
                <Pill label="Toutes" active={bilanClasse === 'all'} onClick={() => setBilanClasse('all')} />
                {CLASSE_ORDER.map(c => <Pill key={c} label={CLASSE_LABELS[c]} active={bilanClasse === c} color={SECTION_COLORS[c]} onClick={() => setBilanClasse(c)} />)}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Trimestre</span>
              <div className="flex gap-1">
                <Pill label="Tous" active={bilanTrim === 'all'} onClick={() => setBilanTrim('all')} />
                {[1, 2, 3].map(t => <Pill key={t} label={`T${t}`} active={bilanTrim === t} color={TRIM_COLORS[t]} onClick={() => setBilanTrim(t)} />)}
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3 self-end">
              <span className="text-xs" style={{ color: 'var(--muted)' }}>
                <strong style={{ color: 'var(--ink)' }}>{store.bilans.length}</strong> perso
              </span>
              <button onClick={() => setModal({ mode: 'bilan' })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'var(--accent)' }}>
                <PlusIcon /> Ajouter
              </button>
            </div>
          </div>

          <div className="p-6 max-w-screen-xl mx-auto grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(460px,1fr))' }}>
            {CLASSE_ORDER.flatMap(c => [1, 2, 3].map(t => {
              if (bilanClasse !== 'all' && bilanClasse !== c) return null
              if (bilanTrim !== 'all' && bilanTrim !== t) return null
              const bd = builtinBilan[c]; if (!bd) return null
              const td = bd.trims?.[String(t)]; if (!td) return null
              return (
                <div key={`${c}-${t}`} className="rounded-xl overflow-hidden border-[1.5px]" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: bd.bg, borderColor: 'var(--border)' }}>
                    <span className="text-lg">📋</span>
                    <h3 className="font-serif text-base font-normal">{CLASSE_LABELS[c]} — T{t}</h3>
                    <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{ background: SECTION_COLORS[c] }}>{CLASSE_LABELS[c]}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{ background: TRIM_COLORS[t] }}>T{t}</span>
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    {Object.entries(td.profils).map(([profil, texts]) => (
                      <div key={profil}>
                        <p className="text-[10px] font-bold uppercase tracking-widest mt-3 mb-1 px-1" style={{ color: 'var(--muted)' }}>{profil}</p>
                        {(texts as string[]).map((texte, i) => {
                          const key = `${c}||${t}||${profil}||${texte}`
                          const ov = store.bilanOverrides[key]
                          if (ov === 'deleted') return null
                          const display = ov && typeof ov === 'object' ? ov.texte : texte
                          const isEdited = !!(ov && typeof ov === 'object')
                          const isConfirming = bilanConfirm === key
                          return (
                            <div key={i}
                              className={`group relative rounded-lg px-3 py-2.5 text-xs leading-relaxed border-[1.5px] transition-all ${isEdited ? 'border-l-2' : 'border-transparent'} ${!isConfirming ? 'cursor-pointer hover:border-[var(--ink)]' : ''}`}
                              style={{ background: 'var(--paper)', borderLeftColor: isEdited ? 'var(--accent3)' : undefined }}
                              onClick={() => { if (!isConfirming) { navigator.clipboard.writeText(display); showToast('✓ Bilan copié !') } }}>
                              {display}
                              {isConfirming ? (
                                <div className="absolute top-1.5 right-2">
                                  <InlineConfirm
                                    label="Masquer ?"
                                    onConfirm={() => { store.overrideBuiltinBilan(key, 'deleted'); showToast('Masqué.'); setBilanConfirm(null) }}
                                    onCancel={() => setBilanConfirm(null)}
                                  />
                                </div>
                              ) : (
                                <div className="absolute top-1.5 right-2 hidden group-hover:flex gap-0.5">
                                  <button onClick={e => { e.stopPropagation(); setModal({ mode: 'bilan', editBilan: { texte: display, classe: c, trim: t as Trimestre, profil, id: 'builtin||' + key } }) }}
                                    className="p-1.5 rounded-lg transition-colors hover:bg-[var(--tag-bg)]" style={{ color: 'var(--muted)' }}><EditIcon /></button>
                                  <button onClick={e => { e.stopPropagation(); setBilanConfirm(key) }}
                                    className="p-1.5 rounded-lg transition-colors hover:bg-red-50" style={{ color: 'var(--muted)' }}><TrashIcon /></button>
                                  {isEdited && (
                                    <button onClick={e => { e.stopPropagation(); store.restoreBuiltinBilan(key); showToast('Restauré.') }}
                                      className="p-1.5 rounded-lg transition-colors hover:bg-blue-50" style={{ color: 'var(--accent3)' }}><RestoreIcon /></button>
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        })}
                        {store.bilans.filter(b => b.classe === c && b.trim === t && b.profil === profil).map(b => {
                          const isConfirmingCustom = bilanCustomConfirm === b.id
                          return (
                            <div key={b.id}
                              className={`group relative rounded-lg px-3 py-2.5 text-xs leading-relaxed border-[1.5px] border-l-2 transition-all ${!isConfirmingCustom ? 'cursor-pointer hover:border-[var(--ink)]' : ''}`}
                              style={{ background: 'var(--paper)', borderLeftColor: 'var(--accent)' }}
                              onClick={() => { if (!isConfirmingCustom) { navigator.clipboard.writeText(b.texte); showToast('✓ Bilan copié !') } }}>
                              {b.texte}
                              {isConfirmingCustom ? (
                                <div className="absolute top-1.5 right-2">
                                  <InlineConfirm
                                    label="Supprimer ?"
                                    onConfirm={() => { store.deleteBilan(b.id!); showToast('Supprimé.'); setBilanCustomConfirm(null) }}
                                    onCancel={() => setBilanCustomConfirm(null)}
                                  />
                                </div>
                              ) : (
                                <div className="absolute top-1.5 right-2 hidden group-hover:flex gap-0.5">
                                  <button onClick={e => { e.stopPropagation(); setModal({ mode: 'bilan', editBilan: b }) }}
                                    className="p-1.5 rounded-lg transition-colors hover:bg-[var(--tag-bg)]" style={{ color: 'var(--muted)' }}><EditIcon /></button>
                                  <button onClick={e => { e.stopPropagation(); setBilanCustomConfirm(b.id!) }}
                                    className="p-1.5 rounded-lg transition-colors hover:bg-red-50" style={{ color: 'var(--muted)' }}><TrashIcon /></button>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                    {store.bilans.filter(b => b.classe === c && b.trim === t && !Object.keys(td.profils).includes(b.profil || '')).map(b => {
                      const isConfirmingCustom = bilanCustomConfirm === b.id
                      return (
                        <div key={b.id}>
                          {b.profil && <p className="text-[10px] font-bold uppercase tracking-widest mt-3 mb-1 px-1" style={{ color: 'var(--muted)' }}>{b.profil}</p>}
                          <div
                            className={`group relative rounded-lg px-3 py-2.5 text-xs leading-relaxed border-[1.5px] border-l-2 transition-all ${!isConfirmingCustom ? 'cursor-pointer hover:border-[var(--ink)]' : ''}`}
                            style={{ background: 'var(--paper)', borderLeftColor: 'var(--accent)' }}
                            onClick={() => { if (!isConfirmingCustom) { navigator.clipboard.writeText(b.texte); showToast('✓ Bilan copié !') } }}>
                            {b.texte}
                            {isConfirmingCustom ? (
                              <div className="absolute top-1.5 right-2">
                                <InlineConfirm
                                  label="Supprimer ?"
                                  onConfirm={() => { store.deleteBilan(b.id!); showToast('Supprimé.'); setBilanCustomConfirm(null) }}
                                  onCancel={() => setBilanCustomConfirm(null)}
                                />
                              </div>
                            ) : (
                              <div className="absolute top-1.5 right-2 hidden group-hover:flex gap-0.5">
                                <button onClick={e => { e.stopPropagation(); setModal({ mode: 'bilan', editBilan: b }) }}
                                  className="p-1.5 rounded-lg transition-colors hover:bg-[var(--tag-bg)]" style={{ color: 'var(--muted)' }}><EditIcon /></button>
                                <button onClick={e => { e.stopPropagation(); setBilanCustomConfirm(b.id!) }}
                                  className="p-1.5 rounded-lg transition-colors hover:bg-red-50" style={{ color: 'var(--muted)' }}><TrashIcon /></button>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }))}
          </div>
        </>
      )}

      {/* CONFIG */}
      {activeTab === 'config' && (
        <div className="max-w-3xl mx-auto px-6 py-8">
          <ConfigTab profils={store.profils} onSave={store.saveProfils}
            onRestoreAll={() => { store.restoreAllBuiltins(); showToast('✓ Toutes les données par défaut ont été restaurées.') }}
            showToast={showToast} />
        </div>
      )}

      <Modal state={modal} profils={store.profils} onClose={() => setModal({ mode: null })}
        onSaveAppr={(item, origKey) => { if (origKey) store.overrideBuiltinAppr(origKey, item); else store.saveAppr(item) }}
        onSaveBilan={(item, bilanKey) => { if (bilanKey) store.overrideBuiltinBilan(bilanKey, { texte: item.texte, profil: item.profil }); else store.saveBilan(item) }}
        showToast={showToast} />

      <Toast msg={toast.msg} visible={toast.visible} />
    </div>
  )
}
