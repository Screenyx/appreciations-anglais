export type Classe = '6' | '5' | '4' | '3' | '2' | '1' | 'T'
export type Trimestre = 1 | 2 | 3

export interface Appreciation {
  texte: string
  classes: Classe[]
  profils: string[]
  trimestres: Trimestre[]
  // custom fields
  id?: string
  _builtin?: boolean
  _origTexte?: string
}

export interface BilanItem {
  texte: string
  classes?: Classe[]
  profils?: string[]
  trimestres?: Trimestre[]
  // custom fields
  id?: string
  classe?: Classe
  trim?: Trimestre
  profil?: string
}

export interface Profil {
  key: string
  label: string
  active: boolean
}

export interface Store {
  appreciations: Appreciation[]
  bilans: BilanItem[]
  apprOverrides: Record<string, Appreciation | 'deleted'>
  bilanOverrides: Record<string, { texte: string; profil?: string } | 'deleted'>
  profils: Profil[]
  dark: 0 | 1
}

export interface BilanBuiltinEntry {
  label: string
  color: string
  bg: string
  trims: Record<string, { profils: Record<string, string[]> }>
}
