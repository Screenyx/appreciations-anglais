export type Profile =
  | "ExcellentÂ·e"
  | "Bon niveau"
  | "Peut mieux faire"
  | "En difficultÃ©"
  | "TravailleurÂ·se"
  | "Ã€ l'oral"
  | "Ã€ l'Ã©crit"
  | "PassifÂ·ve"
  | "Encouragements"
  | "ProblÃ©matique"
  | "DiscretÂ·e mais sÃ©rieuxÂ·se"
  | "BavardÂ·e mais compÃ©tentÂ·e"
  | "DÃ©faitiste"
  | "MoteurÂ·rice et impliquÃ©Â·e"
  | "Participation rÃ©guliÃ¨re et pertinente"
  | "Bon niveau, participation Ã  parfaire"
  | "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"
  | "MoteurÂ·rice mais parfois impatientÂ·e"
  | "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"
  | "ParticipatifÂ·ve mais parfois trop discretÂ·e"
  | "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"
  | "Participe bien mais manque de confiance"
  | "MoteurÂ·rice, Ã  progresser sur la prÃ©cision";

export type BilanProfile =
  | "Tous"
  | "ExcellentÂ·e"
  | "Bon niveau"
  | "Peut mieux faire"
  | "En difficultÃ©"
  | "TravailleurÂ·se"
  | "Ã€ l'oral"
  | "Ã€ l'Ã©crit"
  | "PassifÂ·ve"
  | "Encouragements"
  | "ProblÃ©matique";

export const PROFILES: Profile[] = [
  "ExcellentÂ·e", "Bon niveau", "Peut mieux faire", "En difficultÃ©",
  "TravailleurÂ·se", "Ã€ l'oral", "Ã€ l'Ã©crit", "PassifÂ·ve",
  "Encouragements", "ProblÃ©matique", "DiscretÂ·e mais sÃ©rieuxÂ·se",
  "BavardÂ·e mais compÃ©tentÂ·e", "DÃ©faitiste", "MoteurÂ·rice et impliquÃ©Â·e",
  "Participation rÃ©guliÃ¨re et pertinente", "Bon niveau, participation Ã  parfaire",
  "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re", "MoteurÂ·rice mais parfois impatientÂ·e",
  "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole",
  "ParticipatifÂ·ve mais parfois trop discretÂ·e",
  "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral",
  "Participe bien mais manque de confiance",
  "MoteurÂ·rice, Ã  progresser sur la prÃ©cision",
];

export const BILAN_PROFILES: BilanProfile[] = [
  "Tous", "ExcellentÂ·e", "Bon niveau", "Peut mieux faire", "En difficultÃ©",
  "TravailleurÂ·se", "Ã€ l'oral", "Ã€ l'Ã©crit", "PassifÂ·ve", "Encouragements", "ProblÃ©matique",
];

export const CLASSES = ["6Ã¨me", "5Ã¨me", "4Ã¨me", "3Ã¨me", "2nde", "1Ã¨re", "Terminale"];
export const TRIMESTRES = ["Trimestre 1", "Trimestre 2", "Trimestre 3"];

export interface Appreciation {
  id: number;
  text: string;
  profiles: Profile[];
  classes: string[];    // [] = toutes les classes
  trimesters: string[]; // [] = tous les trimestres
}

export interface Bilan {
  id: number;
  text: string;
  profiles: BilanProfile[];
  classes: string[];
  trimesters: string[];
}

// Raccourcis pour la lisibilitÃ©
const ALL: string[] = [];
const T1 = ["Trimestre 1"];
const T2 = ["Trimestre 2"];
const T3 = ["Trimestre 3"];
const COLLEGE = ["6Ã¨me", "5Ã¨me", "4Ã¨me", "3Ã¨me"];
const LYCEE = ["2nde", "1Ã¨re", "Terminale"];
const EARLY = ["6Ã¨me", "5Ã¨me"];
const TERM = ["Terminale"];

export const APPRECIATIONS: Appreciation[] = [
  // â”€â”€ ExcellentÂ·e â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 1,  text: "Ã‰lÃ¨ve remarquable qui maÃ®trise parfaitement les compÃ©tences attendues en anglais. Excellent trimestre.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "TrÃ¨s beau niveau en anglais. Les productions Ã©crites et orales tÃ©moignent d'une grande maÃ®trise de la langue.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Excellents rÃ©sultats ce trimestre. L'Ã©lÃ¨ve fait preuve d'une aisance remarquable Ã  l'Ã©crit comme Ã  l'oral.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Niveau excellent. Les interventions sont toujours pertinentes et les Ã©crits d'une grande qualitÃ©.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "TrÃ¨s beau trimestre. La maÃ®trise de l'anglais est impressionnante, tant Ã  l'oral qu'Ã  l'Ã©crit. Continuez ainsi !", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ Bon niveau â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 6,  text: "Bon trimestre en anglais. Les acquis sont solides et les rÃ©sultats satisfaisants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Bon niveau gÃ©nÃ©ral en anglais. Les compÃ©tences sont bien maÃ®trisÃ©es et le travail rÃ©gulier.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Bons rÃ©sultats ce trimestre. L'Ã©lÃ¨ve s'engage sÃ©rieusement dans les apprentissages.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Niveau satisfaisant en anglais. Les bases sont solides et les rÃ©sultats encourageants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 10, text: "Bon travail ce trimestre. Les efforts fournis se reflÃ¨tent positivement dans les rÃ©sultats.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  // â”€â”€ Peut mieux faire â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 11, text: "Des capacitÃ©s certaines qui ne sont pas encore pleinement exploitÃ©es. Des efforts supplÃ©mentaires permettraient d'obtenir de meilleurs rÃ©sultats.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Le niveau pourrait Ãªtre meilleur avec plus d'implication. Il convient de se montrer plus rÃ©gulierÂ·Ã¨re dans le travail.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 13, text: "RÃ©sultats en demi-teinte. Les capacitÃ©s sont lÃ  mais le travail manque de rÃ©gularitÃ©.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 14, text: "Trimestre moyen. Un investissement plus soutenu est attendu pour le prochain trimestre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Des acquis fragiles qui demandent Ã  Ãªtre consolidÃ©s. Un travail plus rÃ©gulier est nÃ©cessaire.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  // â”€â”€ En difficultÃ© â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 16, text: "Trimestre difficile en anglais. Il est important de consolider les bases et de solliciter davantage l'aide du professeur.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 17, text: "L'Ã©lÃ¨ve rencontre des difficultÃ©s persistantes en anglais. Un travail rÃ©gulier Ã  la maison est indispensable.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 18, text: "Des lacunes importantes sont Ã  combler. Je reste disponible pour accompagner l'Ã©lÃ¨ve dans ses progrÃ¨s.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 19, text: "La situation est prÃ©occupante. Un soutien et un investissement plus importants sont nÃ©cessaires pour progresser.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 20, text: "MalgrÃ© des difficultÃ©s rÃ©elles, il faut persÃ©vÃ©rer. Chaque effort compte et les progrÃ¨s sont possibles.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },

  // â”€â”€ TravailleurÂ·se â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 21, text: "Ã‰lÃ¨ve sÃ©rieuxÂ·se et travailleurÂ·se. L'investissement rÃ©gulier finit toujours par payer. Continuez ainsi !", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 22, text: "Je salue le sÃ©rieux et la persÃ©vÃ©rance dont fait preuve l'Ã©lÃ¨ve tout au long de ce trimestre.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "Un travail rÃ©gulier et consciencieux qui mÃ©rite d'Ãªtre encouragÃ©. Beau trimestre.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'application et la rigueur dont fait preuve l'Ã©lÃ¨ve sont exemplaires et pleinement rÃ©compensÃ©es.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "TrÃ¨s bon trimestre sur le plan du travail. L'engagement est constant et trÃ¨s apprÃ©ciable.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },

  // â”€â”€ Ã€ l'oral â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 26, text: "De belles qualitÃ©s Ã  l'oral. L'Ã©lÃ¨ve s'exprime avec aisance et pertinence en anglais.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "TrÃ¨s Ã  l'aise Ã  l'oral, les interventions sont riches, bien construites et spontanÃ©es.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "L'expression orale est le point fort de l'Ã©lÃ¨ve. Il convient maintenant de travailler davantage Ã  l'Ã©crit pour Ã©quilibrer les compÃ©tences.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "Belle maÃ®trise de l'expression orale. La prise de parole est spontanÃ©e et bien articulÃ©e.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 30, text: "Les progrÃ¨s Ã  l'oral sont notables ce trimestre. La confiance et la fluiditÃ© sont au rendez-vous.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },

  // â”€â”€ Ã€ l'Ã©crit â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 31, text: "De belles qualitÃ©s Ã  l'Ã©crit. Les productions sont soignÃ©es, structurÃ©es et linguistiquement riches.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'expression Ã©crite est le point fort de l'Ã©lÃ¨ve. Les travaux Ã©crits sont de trÃ¨s bonne facture.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "TrÃ¨s bon travail Ã  l'Ã©crit. Il serait bÃ©nÃ©fique d'oser davantage s'exprimer Ã  l'oral.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 34, text: "Les productions Ã©crites tÃ©moignent d'une bonne maÃ®trise de la langue. Bel effort de prÃ©cision.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Bonne maÃ®trise Ã  l'Ã©crit ce trimestre. Les efforts de rÃ©daction sont visibles et trÃ¨s apprÃ©ciÃ©s.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },

  // â”€â”€ PassifÂ·ve â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 36, text: "Une participation trop effacÃ©e qui pÃ©nalise la progression. Il est important de s'impliquer davantage en cours.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "L'Ã©lÃ¨ve reste trop en retrait. Une prise d'initiative plus frÃ©quente serait bÃ©nÃ©fique pour progresser.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 38, text: "Le manque de participation est prÃ©judiciable. Il faut oser prendre la parole et s'engager davantage.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Trimestre trop passifÂ·ve. Les compÃ©tences existent mais restent inexploitÃ©es faute d'engagement suffisant.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 40, text: "Il est dommage de constater une telle passivitÃ©. S'impliquer davantage permettrait Ã  l'Ã©lÃ¨ve de progresser significativement.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },

  // â”€â”€ Encouragements â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 41, text: "Des efforts encourageants ce trimestre. Il faut continuer dans cette voie pour consolider les acquis.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 42, text: "Je perÃ§ois une progression rÃ©elle. Ces encouragements doivent motiver l'Ã©lÃ¨ve Ã  poursuivre ses efforts.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 43, text: "On sent la volontÃ© de progresser, c'est trÃ¨s positif. Gardons cette dynamique pour le prochain trimestre !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 44, text: "Bon courage pour la suite ! Les efforts fournis commencent Ã  porter leurs fruits.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Une progression perceptible qui mÃ©rite d'Ãªtre soulignÃ©e. Continuez avec le mÃªme investissement !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  // â”€â”€ ProblÃ©matique â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 46, text: "Le comportement en classe perturbe le bon dÃ©roulement des cours. Un changement d'attitude est indispensable.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 47, text: "Des difficultÃ©s de comportement qui nuisent aux apprentissages. Il est urgent de remÃ©dier Ã  cette situation.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 48, text: "L'attitude en classe est problÃ©matique et pÃ©nalise l'Ã©lÃ¨ve ainsi que ses camarades. Des efforts sont attendus.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 49, text: "MalgrÃ© les mises en garde rÃ©pÃ©tÃ©es, le comportement reste inadaptÃ© au cadre scolaire.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 50, text: "La situation nÃ©cessite une remise au point. L'attitude en classe doit impÃ©rativement changer.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },

  // â”€â”€ DiscretÂ·e mais sÃ©rieuxÂ·se â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 51, text: "Ã‰lÃ¨ve discretÂ·e mais dont le sÃ©rieux et l'investissement ne font aucun doute. Beau travail ce trimestre.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 52, text: "Une participation discrÃ¨te mais un travail rigoureux et des rÃ©sultats solides. Bravo !", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 53, text: "Sans Ãªtre trÃ¨s bavardÂ·e, l'Ã©lÃ¨ve travaille sÃ©rieusement et produit un travail de qualitÃ© constante.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 54, text: "La discrÃ©tion ne doit pas faire oublier la qualitÃ© du travail fourni. FÃ©licitations pour ce trimestre.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },

  // â”€â”€ BavardÂ·e mais compÃ©tentÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 55, text: "Un enthousiasme parfois envahissant mais une vraie maÃ®trise de l'anglais. Il faut apprendre Ã  canaliser son Ã©nergie.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 56, text: "TrÃ¨s bavardÂ·e mais les connaissances sont lÃ . Mieux gÃ©rer sa prise de parole serait bÃ©nÃ©fique pour tous.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 57, text: "De l'entrain et de la compÃ©tence ! Il s'agit maintenant de savoir s'exprimer au bon moment.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 58, text: "La vivacitÃ© de l'Ã©lÃ¨ve doit Ãªtre canalisÃ©e : les compÃ©tences sont indÃ©niables, mais il faut savoir s'imposer des limites.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ DÃ©faitiste â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 59, text: "L'Ã©lÃ¨ve se dÃ©courage trop facilement. Il faut croire davantage en ses capacitÃ©s pour progresser.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 60, text: "L'attitude dÃ©faitiste freine la progression. Les capacitÃ©s sont rÃ©elles, il faut apprendre Ã  se faire confiance.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 61, text: "Trop de nÃ©gativitÃ© face aux difficultÃ©s. PersÃ©vÃ©rer est la clÃ© du succÃ¨s en langue Ã©trangÃ¨re.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 62, text: "Il est dommage de baisser les bras si facilement. Avec de la persÃ©vÃ©rance, les progrÃ¨s viendraient sÃ»rement.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: ALL },

  // â”€â”€ MoteurÂ·rice et impliquÃ©Â·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 63, text: "VÃ©ritable moteurÂ·rice de la classe. L'implication et l'enthousiasme de l'Ã©lÃ¨ve sont exemplaires.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 64, text: "TrÃ¨s impliquÃ©Â·e, l'Ã©lÃ¨ve entraÃ®ne la classe dans une dynamique positive. Excellent trimestre.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 65, text: "Une participation active et stimulante. L'Ã©lÃ¨ve est unÂ·e atout pour la dynamique de classe.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 66, text: "L'investissement et l'enthousiasme de l'Ã©lÃ¨ve sont communicatifs. C'est un plaisir de travailler en classe.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 67, text: "MoteurÂ·rice en cours, l'Ã©lÃ¨ve dynamise les Ã©changes et contribue Ã  l'ambiance studieuse de la classe.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ Participation rÃ©guliÃ¨re et pertinente â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 68, text: "Une participation rÃ©guliÃ¨re et de qualitÃ©. Les interventions sont toujours pertinentes et enrichissent le cours.", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 69, text: "TrÃ¨s belle participation ce trimestre. L'Ã©lÃ¨ve s'implique rÃ©guliÃ¨rement et avec beaucoup d'Ã -propos.", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 70, text: "La participation est un modÃ¨le de rÃ©gularitÃ© et de pertinence. FÃ©licitations pour ce beau trimestre !", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 71, text: "Interventions frÃ©quentes et toujours bien construites. Un vrai plaisir Ã  avoir en classe.", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },

  // â”€â”€ Bon niveau, participation Ã  parfaire â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 72, text: "Bon niveau en anglais mais la participation en classe reste insuffisante. Il faut oser davantage s'exprimer.", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 73, text: "De bonnes bases qui mÃ©ritent d'Ãªtre mises en valeur par une participation plus active en cours.", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 74, text: "Les compÃ©tences sont lÃ  mais elles peinent Ã  se manifester Ã  l'oral. Il faut lever la main plus souvent !", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 75, text: "Bon travail Ã  l'Ã©crit, mais la participation orale est encore trop rare. Osez prendre la parole !", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },

  // â”€â”€ ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 76, text: "De bonnes journÃ©es alternent avec des pÃ©riodes plus creuses. Une participation plus constante est attendue.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 77, text: "ActifÂ·ve par intermittence. Il faudrait maintenir ce niveau d'engagement tout au long du trimestre.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 78, text: "La participation est variable. Un engagement plus rÃ©gulier permettrait d'obtenir de meilleurs rÃ©sultats.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 79, text: "On sent que l'Ã©lÃ¨ve peut donner bien plus. L'irrÃ©gularitÃ© de l'engagement est le principal frein Ã  la progression.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },

  // â”€â”€ MoteurÂ·rice mais parfois impatientÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 80, text: "TrÃ¨s impliquÃ©Â·e en cours, l'Ã©lÃ¨ve doit nÃ©anmoins apprendre Ã  laisser davantage de place aux autres.", profiles: ["MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 81, text: "Un enthousiasme rÃ©el qui se transforme parfois en impatience. Il faut veiller Ã  respecter le rythme de chacun.", profiles: ["MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 82, text: "Excellent engagement mais l'impatience prend parfois le dessus. Un peu de retenue serait bÃ©nÃ©fique.", profiles: ["MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 83, text: "MoteurÂ·rice de la classe mais parfois emportÃ©Â·e par l'enthousiasme. Travailler sur l'Ã©coute serait trÃ¨s profitable.", profiles: ["MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 84, text: "Un investissement remarquable, mais l'Ã©lÃ¨ve doit veiller Ã  laisser plus de place Ã  ses camarades.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 85, text: "L'implication est totale, ce qui est trÃ¨s apprÃ©ciable. Il faudrait nÃ©anmoins ne pas monopoliser la parole.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 86, text: "TrÃ¨s volontaire et impliquÃ©Â·e. Il serait bÃ©nÃ©fique de canaliser cet enthousiasme pour favoriser la participation de toute la classe.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 87, text: "Participation enthousiaste et de qualitÃ©, mais qui gagnerait Ã  se modÃ©rer pour favoriser un tour de parole Ã©quitable.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },

  // â”€â”€ ParticipatifÂ·ve mais parfois trop discretÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 88, text: "Participation prÃ©sente mais encore trop timide. L'Ã©lÃ¨ve a toutes les ressources pour s'exprimer davantage.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },
  { id: 89, text: "On perÃ§oit la volontÃ© de participer, mais la timiditÃ© freine encore trop souvent l'expression orale.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },
  { id: 90, text: "Des interventions intÃ©ressantes mais trop rares. Gagnez en confiance et osez prendre la parole plus souvent !", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },
  { id: 91, text: "ParticipatifÂ·ve mais encore trop discretÂ·e. Il ne faut pas hÃ©siter Ã  se lancer : les idÃ©es sont lÃ  !", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 92, text: "De trÃ¨s bonnes productions Ã©crites mais une timiditÃ© Ã  l'oral qui freine la progression. Il faut oser !", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 93, text: "L'aisance Ã  l'Ã©crit est remarquable. Il est maintenant temps de transposer cette maÃ®trise Ã  l'expression orale.", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 94, text: "TrÃ¨s bonÂ·ne Ã  l'Ã©crit, plus rÃ©servÃ©Â·e Ã  l'oral. Un rÃ©Ã©quilibrage des compÃ©tences est Ã  travailler.", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 95, text: "Les Ã©crits sont excellents. L'oral reste le prochain dÃ©fi Ã  relever avec confiance et persÃ©vÃ©rance.", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },

  // â”€â”€ Participe bien mais manque de confiance â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 96,  text: "Une participation de qualitÃ© malgrÃ© un manque de confiance visible. Il faut croire davantage en ses capacitÃ©s !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 97,  text: "L'Ã©lÃ¨ve participe avec sÃ©rieux mais semble douter de luiÂ·elle. Pourtant, les rÃ©ponses sont souvent trÃ¨s justes !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 98,  text: "Bon niveau mais manque de confiance en soi. Se faire confiance permettrait d'exploiter pleinement son potentiel.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 99,  text: "Les interventions sont pertinentes mais hÃ©sitantes. Il faut oser s'affirmer davantage : les connaissances sont lÃ  !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },

  // â”€â”€ MoteurÂ·rice, Ã  progresser sur la prÃ©cision â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 100, text: "TrÃ¨s impliquÃ©Â·e et stimulantÂ·e pour la classe. Il faut maintenant travailler la prÃ©cision de la langue pour aller encore plus loin.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },
  { id: 101, text: "Bel enthousiasme et belle implication. Le prochain objectif est de gagner en prÃ©cision linguistique.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },
  { id: 102, text: "MoteurÂ·rice en classe, l'Ã©lÃ¨ve doit maintenant soigner la rigueur de ses productions pour progresser davantage.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },
  { id: 103, text: "Une participation dynamique et engagÃ©e. La progression passe dÃ©sormais par un travail plus fin sur la prÃ©cision.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â€” gÃ©nÃ©riques â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 104, text: "Un travail sÃ©rieux et constant qui se reflÃ¨te dans d'excellents rÃ©sultats. Trimestre exemplaire.", profiles: ["ExcellentÂ·e", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 105, text: "La rigueur et l'investissement de l'Ã©lÃ¨ve expliquent amplement ce niveau excellent.", profiles: ["ExcellentÂ·e", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 106, text: "Excellence et participation se conjuguent admirablement. Les interventions enrichissent le cours et tÃ©moignent d'une maÃ®trise remarquable.", profiles: ["ExcellentÂ·e", "Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 107, text: "Un niveau excellent portÃ© par une participation rÃ©guliÃ¨re et toujours pertinente. Un modÃ¨le pour la classe.", profiles: ["ExcellentÂ·e", "Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 108, text: "Ã‰lÃ¨ve brillantÂ·e qui dynamise l'ensemble de la classe par son implication et son enthousiasme.", profiles: ["ExcellentÂ·e", "MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 109, text: "L'excellence se conjugue avec un investissement exemplaire. L'Ã©lÃ¨ve est une vraie force pour la classe.", profiles: ["ExcellentÂ·e", "MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 110, text: "Niveau excellent, particuliÃ¨rement perceptible Ã  l'oral. Les Ã©changes sont riches et tÃ©moignent d'une vraie maÃ®trise.", profiles: ["ExcellentÂ·e", "Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 111, text: "Un niveau excellent qui Ã©clate dans les productions Ã©crites : prÃ©cision, richesse lexicale et structuration au rendez-vous.", profiles: ["ExcellentÂ·e", "Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 112, text: "Un niveau excellent Ã  l'Ã©crit qui ne demande qu'Ã  s'exprimer davantage Ã  l'oral. Les bases sont lÃ  : il faut oser !", profiles: ["ExcellentÂ·e", "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 113, text: "TrÃ¨s impliquÃ©Â·e et d'excellent niveau. Travailler la prÃ©cision linguistique permettrait d'atteindre un niveau encore plus remarquable.", profiles: ["ExcellentÂ·e", "MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },
  { id: 114, text: "Un travail sÃ©rieux et rÃ©gulier qui porte ses fruits. Le bon niveau en anglais est la juste rÃ©compense de cet investissement.", profiles: ["Bon niveau", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 115, text: "Un bon niveau en anglais qui peine Ã  se manifester en cours. Une participation plus active confirmerait pleinement ces acquis.", profiles: ["Bon niveau", "PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 116, text: "Les acquis sont solides mais l'engagement en classe manque de constance. Un investissement plus rÃ©gulier permettrait d'exploiter pleinement ce bon niveau.", profiles: ["Bon niveau", "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 117, text: "DiscretÂ·e mais sÃ©rieuxÂ·se, l'Ã©lÃ¨ve maintient un bon niveau constant. La qualitÃ© du travail parle d'elle-mÃªme.", profiles: ["Bon niveau", "DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 118, text: "Bon niveau et participation rÃ©guliÃ¨re font de cetÂ·te Ã©lÃ¨ve un Ã©lÃ©ment positif de la classe.", profiles: ["Bon niveau", "Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 119, text: "Un bon niveau global, avec une aisance particuliÃ¨re Ã  l'Ã©crit. S'investir davantage Ã  l'oral Ã©quilibrerait les compÃ©tences.", profiles: ["Bon niveau", "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 120, text: "Un bon niveau bien rÃ©el, que le manque de confiance empÃªche d'exprimer pleinement. Il faut s'affirmer davantage !", profiles: ["Bon niveau", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 121, text: "Un bon niveau et un sÃ©rieux indÃ©niable, mais une participation encore trop discrÃ¨te. Les connaissances sont lÃ  : il faut oser !", profiles: ["Bon niveau, participation Ã  parfaire", "DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 122, text: "Le niveau est bon et les rares interventions sont pertinentes. La confiance en soi est la clÃ© pour participer plus librement.", profiles: ["Bon niveau, participation Ã  parfaire", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 123, text: "Des capacitÃ©s certaines que la passivitÃ© en cours empÃªche d'exploiter. Un engagement plus actif serait dÃ©terminant.", profiles: ["Peut mieux faire", "PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 124, text: "Des ressources inexploitÃ©es par manque de confiance et de persÃ©vÃ©rance. Il faut dÃ©passer cette attitude dÃ©faitiste.", profiles: ["Peut mieux faire", "DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 125, text: "Des Ã©clairs de bonne volontÃ© mais trop irrÃ©guliers pour progresser rÃ©ellement. La constance dans l'effort est la clÃ©.", profiles: ["Peut mieux faire", "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 126, text: "De la bonne volontÃ© et du travail, mais les mÃ©thodes sont Ã  consolider. Un effort ciblÃ© permettrait de progresser plus vite.", profiles: ["Peut mieux faire", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 127, text: "Quelques progrÃ¨s perceptibles ce trimestre, mais les efforts doivent Ãªtre amplifiÃ©s. Le potentiel est lÃ  !", profiles: ["Peut mieux faire", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 128, text: "MalgrÃ© les efforts fournis, les lacunes persistent. Il est important de cibler les points faibles et de demander de l'aide.", profiles: ["En difficultÃ©", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 129, text: "Les difficultÃ©s engendrent un dÃ©couragement qui aggrave la situation. Il est essentiel de persÃ©vÃ©rer.", profiles: ["En difficultÃ©", "DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 130, text: "Un trimestre difficile, mais la volontÃ© de progresser est lÃ . Ces efforts doivent Ãªtre maintenus et amplifiÃ©s.", profiles: ["En difficultÃ©", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 131, text: "Les difficultÃ©s sont accentuÃ©es par un manque de participation. S'impliquer davantage est une premiÃ¨re Ã©tape indispensable.", profiles: ["En difficultÃ©", "PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 132, text: "L'investissement rÃ©gulier est trÃ¨s apprÃ©ciable et commence Ã  porter ses fruits. Il faut poursuivre dans cette voie.", profiles: ["TravailleurÂ·se", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 133, text: "TrÃ¨s Ã  l'aise Ã  l'oral et vÃ©ritable moteurÂ·rice des Ã©changes. Une participation enthousiaste et de qualitÃ©.", profiles: ["Ã€ l'oral", "MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 134, text: "Une aisance Ã  l'oral remarquable, mise au service d'une participation rÃ©guliÃ¨re et toujours pertinente.", profiles: ["Ã€ l'oral", "Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 135, text: "Une vraie aisance Ã  l'oral et des connaissances solides. Il faut apprendre Ã  s'exprimer au bon moment.", profiles: ["Ã€ l'oral", "BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 136, text: "D'excellentes productions Ã©crites qui tÃ©moignent d'une vraie maÃ®trise. L'enjeu est de transposer cette aisance Ã  l'oral.", profiles: ["Ã€ l'Ã©crit", "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 137, text: "Un enthousiasme et une implication remarquables. Il serait bÃ©nÃ©fique de canaliser cet Ã©lan pour favoriser un tour de parole Ã©quitable.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 138, text: "VÃ©ritable moteurÂ·rice de la classe, mais l'impatience nuit parfois Ã  la dynamique. Apprendre Ã  Ã©couter serait un vrai atout.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 139, text: "Un investissement exemplaire. La prÃ©cision linguistique est le dernier palier Ã  franchir pour aller encore plus loin.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },
  { id: 140, text: "Des interventions intÃ©ressantes mais encore trop rares. Le manque de confiance freine une participation qui pourrait Ãªtre bien plus riche.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 141, text: "Beaucoup d'enthousiasme et de vraies compÃ©tences, mais l'impatience et le bavardage perturbent parfois le cours.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e", "MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 142, text: "L'attitude en classe nuit Ã  des rÃ©sultats qui pourraient Ãªtre bien meilleurs. Un changement de comportement est indispensable.", profiles: ["ProblÃ©matique", "Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 143, text: "Des difficultÃ©s rÃ©elles auxquelles s'ajoute un comportement problÃ©matique. Il est urgent de remÃ©dier aux deux.", profiles: ["ProblÃ©matique", "En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 144, text: "De trÃ¨s belles productions Ã©crites et des interventions pertinentes, mais freinÃ©es par le manque de confiance.", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 145, text: "Des moments d'implication encourageants, mais qui manquent encore de rÃ©gularitÃ©. Il faut maintenir cet Ã©lan.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 146, text: "L'Ã©lÃ¨ve se dÃ©courage trop facilement, alors que les progrÃ¨s sont rÃ©els. Il faut s'accrocher : le potentiel est lÃ  !", profiles: ["DÃ©faitiste", "Encouragements"], classes: ALL, trimesters: ALL },

  // â•â• TRIMESTRE 1 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 147, text: "TrÃ¨s bons dÃ©buts en anglais. Un premier trimestre remarquable qui augure une belle annÃ©e.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T1 },
  { id: 148, text: "Premier trimestre excellent. Le niveau et l'investissement sont d'emblÃ©e au rendez-vous.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T1 },
  { id: 149, text: "Bon dÃ©marrage en anglais. Les bases sont solides dÃ¨s ce premier trimestre.", profiles: ["Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 150, text: "Premier trimestre satisfaisant. Les acquis sont bien lÃ  et le travail sÃ©rieux.", profiles: ["Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 151, text: "DÃ©marrage timide. Des efforts dÃ¨s maintenant permettraient d'aborder le reste de l'annÃ©e dans de meilleures conditions.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },
  { id: 152, text: "DÃ©but d'annÃ©e poussif. Les capacitÃ©s sont lÃ , mais l'implication doit s'intensifier sans attendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },
  { id: 153, text: "Des difficultÃ©s dÃ¨s ce premier trimestre qui nÃ©cessitent une prise en charge rapide pour ne pas creuser les lacunes.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T1 },
  { id: 154, text: "Bonne entrÃ©e dans l'annÃ©e : l'investissement est sÃ©rieux dÃ¨s ce premier trimestre.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T1 },
  { id: 155, text: "Premiers rÃ©sultats encourageants. Il faut maintenir cette dynamique tout au long de l'annÃ©e.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 156, text: "Premier trimestre prometteur. La motivation perÃ§ue doit se confirmer dans la durÃ©e.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 157, text: "Un manque d'implication dÃ¨s ce premier trimestre qui risque de pÃ©naliser la progression sur toute l'annÃ©e.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: T1 },
  { id: 158, text: "EntrÃ©e dans l'annÃ©e trÃ¨s dynamique. L'Ã©lÃ¨ve s'impose d'emblÃ©e comme unÂ·e moteurÂ·rice de la classe.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: T1 },
  { id: 159, text: "DÃ¨s ce premier trimestre, l'attitude en classe pose problÃ¨me. Un cadre clair doit Ãªtre posÃ© sans tarder.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: T1 },
  { id: 160, text: "Un premier trimestre en dents de scie. La rÃ©gularitÃ© est Ã  travailler dÃ¨s Ã  prÃ©sent pour ne pas compromettre l'annÃ©e.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: T1 },

  // â•â• TRIMESTRE 2 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 161, text: "Le trÃ¨s bon niveau du premier trimestre se confirme. Beau second trimestre en anglais.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T2 },
  { id: 162, text: "Le bon niveau du premier trimestre se maintient ce second trimestre. Les acquis sont solides.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 163, text: "RÃ©gulierÂ·Ã¨re et sÃ©rieuxÂ·se, l'Ã©lÃ¨ve confirme son bon niveau en ce milieu d'annÃ©e.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 164, text: "Peu d'amÃ©lioration par rapport au premier trimestre. Un vÃ©ritable sursaut est nÃ©cessaire avant la fin de l'annÃ©e.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 165, text: "Les difficultÃ©s du premier trimestre persistent. Un travail de fond est indispensable pour ne pas compromettre la fin d'annÃ©e.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T2 },
  { id: 166, text: "Par rapport au premier trimestre, une vraie progression est visible. Ces efforts doivent se confirmer au troisiÃ¨me trimestre.", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 167, text: "L'investissement constant depuis le dÃ©but de l'annÃ©e se reflÃ¨te dans de bons rÃ©sultats. Continuez !", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T2 },
  { id: 168, text: "Les rÃ©sultats restent inÃ©gaux en ce milieu d'annÃ©e. Il est encore temps de trouver la rÃ©gularitÃ© nÃ©cessaire.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: T2 },
  { id: 169, text: "L'attitude dÃ©faitiste persiste en ce second trimestre. Il faut impÃ©rativement s'accrocher pour finir l'annÃ©e convenablement.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: T2 },
  { id: 170, text: "La passivitÃ© du premier trimestre se confirme malheureusement. Il est encore temps de rÃ©agir avant la fin de l'annÃ©e.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: T2 },
  { id: 171, text: "L'enthousiasme et l'implication du premier trimestre se confirment. Beau second trimestre.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: T2 },

  // â•â• TRIMESTRE 3 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 172, text: "Belle fin d'annÃ©e en anglais. Une progression constante qui se conclut par un bilan excellent.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T3 },
  { id: 173, text: "Termine l'annÃ©e sur une note remarquable. Un trÃ¨s haut niveau maintenu tout au long de l'annÃ©e.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T3 },
  { id: 174, text: "Bilan de fin d'annÃ©e satisfaisant. L'Ã©lÃ¨ve termine avec un bon niveau bien consolidÃ©.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 175, text: "Fin d'annÃ©e positive. Le niveau est solide et les acquis bien en place pour la suite.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 176, text: "Fin d'annÃ©e en deÃ§Ã  des possibilitÃ©s. L'an prochain, un engagement plus soutenu dÃ¨s le dÃ©part est attendu.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T3 },
  { id: 177, text: "Bilan de fin d'annÃ©e prÃ©occupant. Il faudra aborder la rentrÃ©e avec plus de dÃ©termination et un travail rÃ©gulier.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T3 },
  { id: 178, text: "Fin d'annÃ©e difficile malgrÃ© les efforts. Un travail de remise Ã  niveau pendant les vacances serait trÃ¨s bÃ©nÃ©fique.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T3 },
  { id: 179, text: "Une belle fin d'annÃ©e qui rÃ©compense un travail constant tout au long de l'annÃ©e. Bravo !", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T3 },
  { id: 180, text: "Termine l'annÃ©e comme ilÂ·elle l'a commencÃ©e : avec sÃ©rieux et rÃ©gularitÃ©. FÃ©licitations !", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T3 },
  { id: 181, text: "Termine l'annÃ©e sur une note encourageante. La progression constatÃ©e donne de bonnes bases pour la rentrÃ©e.", profiles: ["Encouragements"], classes: ALL, trimesters: T3 },
  { id: 182, text: "Fin d'annÃ©e trop passive qui pÃ¨se sur le bilan. L'an prochain, il faudra s'impliquer davantage dÃ¨s le dÃ©part.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: T3 },
  { id: 183, text: "Termine l'annÃ©e en beautÃ© avec le mÃªme enthousiasme et la mÃªme implication qu'au premier jour.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: T3 },
  { id: 184, text: "Fin d'annÃ©e marquÃ©e par trop de rÃ©signation. L'an prochain, il faudra aborder les difficultÃ©s avec plus de dÃ©termination.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: T3 },
  { id: 185, text: "Fin d'annÃ©e marquÃ©e par des problÃ¨mes de comportement persistants. Un bilan dÃ©cevant qui doit servir de leÃ§on pour l'an prochain.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: T3 },
  { id: 186, text: "Belle fin d'annÃ©e Ã  l'Ã©crit : les derniÃ¨res productions confirment une maÃ®trise solide et bien acquise.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: T3 },
  { id: 187, text: "Termine l'annÃ©e avec une rÃ©elle aisance Ã  l'oral. Les progrÃ¨s accomplis depuis septembre sont remarquables.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: T3 },

  // â•â• SPÃ‰CIFIQUE COLLÃˆGE (6Ã¨meâ€“3Ã¨me) â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 188, text: "Un niveau excellent pour ce niveau de collÃ¨ge. FÃ©licitations pour ce trÃ¨s beau trimestre.", profiles: ["ExcellentÂ·e"], classes: COLLEGE, trimesters: ALL },
  { id: 189, text: "De bonnes bases acquises au collÃ¨ge qui permettent d'envisager sereinement la suite du cursus.", profiles: ["Bon niveau"], classes: COLLEGE, trimesters: ALL },
  { id: 190, text: "Des efforts Ã  intensifier pour ne pas aborder le lycÃ©e avec des lacunes.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: ALL },
  { id: 191, text: "Des lacunes importantes Ã  combler dÃ¨s maintenant pour ne pas compromettre la suite de la scolaritÃ©.", profiles: ["En difficultÃ©"], classes: COLLEGE, trimesters: ALL },

  // â•â• SPÃ‰CIFIQUE 6Ã¨meâ€“5Ã¨me â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 192, text: "TrÃ¨s belle entrÃ©e dans l'apprentissage de l'anglais. Un niveau remarquable et prometteur pour la suite du cursus.", profiles: ["ExcellentÂ·e"], classes: EARLY, trimesters: ALL },
  { id: 193, text: "Un bon dÃ©but dans l'apprentissage de l'anglais. Les bases se mettent bien en place.", profiles: ["Bon niveau"], classes: EARLY, trimesters: ALL },
  { id: 194, text: "Des bases Ã  consolider rapidement pour ne pas prendre de retard dÃ¨s ce dÃ©but de cursus en anglais.", profiles: ["En difficultÃ©"], classes: EARLY, trimesters: ALL },
  { id: 195, text: "De bons dÃ©buts dans l'apprentissage de l'anglais. La curiositÃ© et l'enthousiasme sont lÃ  : il faut les entretenir.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
  { id: 196, text: "Un trÃ¨s bon investissement pour cette entrÃ©e en anglais. Le sÃ©rieux affichÃ© dÃ¨s Ã  prÃ©sent est de bon augure.", profiles: ["TravailleurÂ·se"], classes: EARLY, trimesters: ALL },
  { id: 197, text: "TrÃ¨s belle premiÃ¨re annÃ©e d'anglais. L'Ã©lÃ¨ve prend goÃ»t Ã  la langue et dynamise les Ã©changes.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: EARLY, trimesters: ALL },
  { id: 198, text: "Une timiditÃ© comprÃ©hensible en dÃ©but de cursus, mais qu'il faut dÃ©passer pour progresser vraiment Ã  l'oral.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: EARLY, trimesters: ALL },

  // â•â• SPÃ‰CIFIQUE LYCÃ‰E (2ndeâ€“1Ã¨reâ€“Terminale) â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 199, text: "Un excellent niveau qui rÃ©pond pleinement aux exigences du lycÃ©e.", profiles: ["ExcellentÂ·e"], classes: LYCEE, trimesters: ALL },
  { id: 200, text: "Un bon niveau qui permet d'aborder sereinement les exigences croissantes du lycÃ©e.", profiles: ["Bon niveau"], classes: LYCEE, trimesters: ALL },
  { id: 201, text: "Les exigences du lycÃ©e demandent un investissement plus soutenu. Il est important de se mobiliser sans tarder.", profiles: ["Peut mieux faire"], classes: LYCEE, trimesters: ALL },
  { id: 202, text: "Les lacunes constatÃ©es sont prÃ©occupantes au regard des exigences du lycÃ©e. Un travail ciblÃ© est indispensable.", profiles: ["En difficultÃ©"], classes: LYCEE, trimesters: ALL },
  { id: 203, text: "L'investissement rÃ©gulier dont fait preuve l'Ã©lÃ¨ve est particuliÃ¨rement apprÃ©ciable au niveau lycÃ©e.", profiles: ["TravailleurÂ·se"], classes: LYCEE, trimesters: ALL },

  // â•â• SPÃ‰CIFIQUE TERMINALE â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 204, text: "Un niveau remarquable Ã  l'approche du baccalaurÃ©at. La maÃ®trise de l'anglais est pleinement au rendez-vous.", profiles: ["ExcellentÂ·e"], classes: TERM, trimesters: ALL },
  { id: 205, text: "Excellent niveau en cette annÃ©e dÃ©cisive. L'Ã©lÃ¨ve aborde l'Ã©preuve du baccalaurÃ©at avec de solides atouts.", profiles: ["ExcellentÂ·e"], classes: TERM, trimesters: ALL },
  { id: 206, text: "Un bon niveau en cette annÃ©e de terminale. Les compÃ©tences sont bien acquises pour aborder le baccalaurÃ©at sereinement.", profiles: ["Bon niveau"], classes: TERM, trimesters: ALL },
  { id: 207, text: "En cette annÃ©e dÃ©cisive, l'implication doit s'intensifier pour aborder le baccalaurÃ©at dans les meilleures conditions.", profiles: ["Peut mieux faire"], classes: TERM, trimesters: ALL },
  { id: 208, text: "Les lacunes constatÃ©es sont prÃ©occupantes Ã  l'approche du baccalaurÃ©at. Un travail intensif et rÃ©gulier est indispensable.", profiles: ["En difficultÃ©"], classes: TERM, trimesters: ALL },
  { id: 209, text: "Le sÃ©rieux dont fait preuve l'Ã©lÃ¨ve en cette annÃ©e de terminale est trÃ¨s apprÃ©ciable et devrait lui permettre de rÃ©ussir l'Ã©preuve.", profiles: ["TravailleurÂ·se"], classes: TERM, trimesters: ALL },
  { id: 210, text: "L'attitude en classe est prÃ©occupante en cette annÃ©e du baccalaurÃ©at. Un changement est impÃ©ratif.", profiles: ["ProblÃ©matique"], classes: TERM, trimesters: ALL },

  // â•â• TERMINALE + TRIMESTRE 1 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 211, text: "Premier trimestre de terminale trÃ¨s encourageant. Cette dynamique doit se maintenir tout au long de cette annÃ©e dÃ©cisive.", profiles: ["Encouragements"], classes: TERM, trimesters: T1 },
  { id: 212, text: "Excellent premier trimestre de terminale. Le niveau est au rendez-vous pour cette annÃ©e du baccalaurÃ©at.", profiles: ["ExcellentÂ·e"], classes: TERM, trimesters: T1 },
  { id: 213, text: "DÃ©but de terminale difficile. Il est urgent de rÃ©agir pour ne pas compromettre les chances au baccalaurÃ©at.", profiles: ["En difficultÃ©"], classes: TERM, trimesters: T1 },

  // â•â• TERMINALE + TRIMESTRE 3 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 214, text: "Fin de lycÃ©e et fin d'annÃ©e remarquables. L'Ã©lÃ¨ve aborde le baccalaurÃ©at avec un niveau et une maÃ®trise exemplaires.", profiles: ["ExcellentÂ·e"], classes: TERM, trimesters: T3 },
  { id: 215, text: "Un bilan final positif Ã  l'aube du baccalaurÃ©at. Le niveau est solide et les acquis bien en place.", profiles: ["Bon niveau"], classes: TERM, trimesters: T3 },
  { id: 216, text: "Un bilan final prÃ©occupant Ã  l'aube du baccalaurÃ©at. Une rÃ©vision intensive est plus que jamais nÃ©cessaire.", profiles: ["En difficultÃ©"], classes: TERM, trimesters: T3 },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // NOUVELLES APPRÃ‰CIATIONS â€” IDs 217 Ã  316
  // 50 mono-profil + 50 multi-profils, rÃ©partis classes/trimestres/profils
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // â”€â”€ ExcellentÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 217, text: "Une maÃ®trise de l'anglais tout Ã  fait remarquable. La richesse du vocabulaire et la fluiditÃ© de l'expression tÃ©moignent d'un travail approfondi.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 218, text: "L'Ã©lÃ¨ve se distingue par une aisance linguistique impressionnante. Les productions orales et Ã©crites sont toujours d'une grande qualitÃ©.", profiles: ["ExcellentÂ·e"], classes: LYCEE, trimesters: ALL },
  { id: 219, text: "Un premier trimestre Ã©blouissant. La maÃ®trise de la langue est sans faille et les ambitions sont Ã  la hauteur du talent.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T1 },
  { id: 220, text: "Fin d'annÃ©e magistrale. L'Ã©lÃ¨ve aura progressÃ© tout au long de l'annÃ©e pour atteindre un niveau vÃ©ritablement exceptionnel.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T3 },
  { id: 221, text: "Un deuxiÃ¨me trimestre remarquable. La constance et la rigueur font de cetÂ·te Ã©lÃ¨ve unÂ·e vÃ©ritable modÃ¨le dans la classe.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T2 },
  { id: 222, text: "L'excellence dont fait preuve l'Ã©lÃ¨ve dans toutes les activitÃ©s de classe â€” comprÃ©hension, expression, interaction â€” est trÃ¨s apprÃ©ciable.", profiles: ["ExcellentÂ·e"], classes: COLLEGE, trimesters: ALL },

  // â”€â”€ Bon niveau â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 223, text: "Des bases bien Ã©tablies et une progression rÃ©guliÃ¨re. Il ne manque qu'un peu d'audace pour franchir le palier suivant.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 224, text: "Un deuxiÃ¨me trimestre solide qui confirme la dynamique du dÃ©but d'annÃ©e. Les acquis se consolident Ã  un bon rythme.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 225, text: "Bon niveau d'ensemble Ã  l'entrÃ©e au lycÃ©e. Les exigences croissantes seront abordÃ©es avec de solides atouts.", profiles: ["Bon niveau"], classes: ["2nde"], trimesters: T1 },
  { id: 226, text: "Les rÃ©sultats de fin d'annÃ©e reflÃ¨tent un travail sÃ©rieux et des compÃ©tences bien ancrÃ©es. Bonne continuation !", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },

  // â”€â”€ Peut mieux faire â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 227, text: "L'Ã©lÃ¨ve navigue en dessous de ses capacitÃ©s rÃ©elles. Un regain d'investissement changerait radicalement la donne.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 228, text: "DeuxiÃ¨me trimestre dÃ©cevant au regard du potentiel affichÃ© en dÃ©but d'annÃ©e. Il est encore temps de se reprendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 229, text: "Fin d'annÃ©e en deÃ§Ã  des attentes. L'an prochain, une implication sÃ©rieuse dÃ¨s les premiÃ¨res semaines est indispensable.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: T3 },
  { id: 230, text: "Des efforts ponctuels mais insuffisants pour s'inscrire dans une rÃ©elle progression. La rÃ©gularitÃ© reste le dÃ©fi principal.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },

  // â”€â”€ En difficultÃ© â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 231, text: "Les bases grammaticales et lexicales prÃ©sentent des lacunes importantes. Un travail ciblÃ© et rÃ©gulier est indispensable.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 232, text: "MalgrÃ© les difficultÃ©s, une attitude sÃ©rieuse est perceptible. Cet Ã©tat d'esprit est la premiÃ¨re condition pour progresser.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T2 },
  { id: 233, text: "Les lacunes s'accumulent depuis le dÃ©but de l'annÃ©e. Un travail de fond pendant les vacances scolaires est fortement conseillÃ©.", profiles: ["En difficultÃ©"], classes: COLLEGE, trimesters: T3 },
  { id: 234, text: "Des rÃ©sultats prÃ©occupants dÃ¨s ce premier trimestre. Il est essentiel d'identifier les blocages et de solliciter un accompagnement sans tarder.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T1 },
  { id: 235, text: "En grande difficultÃ© face aux exigences de la classe. La mise en place d'un soutien adaptÃ© est vivement recommandÃ©e.", profiles: ["En difficultÃ©"], classes: LYCEE, trimesters: ALL },

  // â”€â”€ TravailleurÂ·se â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 236, text: "Un sÃ©rieux et une ponctualitÃ© dans le travail qui forcent le respect. Ces qualitÃ©s sont les meilleurs atouts pour progresser.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 237, text: "L'application dont fait preuve l'Ã©lÃ¨ve Ã  chaque sÃ©ance est exemplaire. Les efforts fournis sont pleinement justifiÃ©s.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T2 },
  { id: 238, text: "Fin d'annÃ©e couronnÃ©e par des rÃ©sultats mÃ©ritÃ©s. La rÃ©gularitÃ© dans le travail aura Ã©tÃ© la clÃ© du succÃ¨s.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T3 },
  { id: 239, text: "Un investissement immÃ©diat et soutenu dÃ¨s la rentrÃ©e. Ce niveau de rigueur est rare et trÃ¨s apprÃ©ciable.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: T1 },

  // â”€â”€ Ã€ l'oral â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 240, text: "L'Ã©lÃ¨ve prend la parole avec une confiance et une fluiditÃ© qui enrichissent considÃ©rablement les Ã©changes en classe.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 241, text: "Des progrÃ¨s trÃ¨s nets Ã  l'oral en ce deuxiÃ¨me trimestre. La prise de risque linguistique est encourageante.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: T2 },
  { id: 242, text: "L'aisance orale est le point fort de l'Ã©lÃ¨ve. Il faut maintenant transposer cette Ã©nergie dans les productions Ã©crites.", profiles: ["Ã€ l'oral"], classes: LYCEE, trimesters: ALL },

  // â”€â”€ Ã€ l'Ã©crit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 243, text: "Les travaux Ã©crits sont remarquables par leur clartÃ© et leur richesse linguistique. Un vrai plaisir Ã  lire et Ã  corriger.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 244, text: "L'expression Ã©crite gagne en prÃ©cision et en fluiditÃ©. Ces progrÃ¨s sont le fruit d'un travail rÃ©gulier et mÃ©thodique.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: T2 },
  { id: 245, text: "Des productions Ã©crites de trÃ¨s bonne facture en fin d'annÃ©e. La maÃ®trise des structures syntaxiques est nettement amÃ©liorÃ©e.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: T3 },

  // â”€â”€ PassifÂ·ve â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 246, text: "Une trop grande passivitÃ© prive l'Ã©lÃ¨ve de progresser Ã  l'oral. Lever la main, mÃªme avec hÃ©sitation, est le premier pas.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 247, text: "La passivitÃ© observÃ©e dÃ¨s le premier trimestre persiste. Attendre passivement ne suffit pas pour progresser en langue vivante.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: T2 },
  { id: 248, text: "Fin d'annÃ©e trop en retrait. La prochaine rentrÃ©e devra s'ouvrir sur une rÃ©elle volontÃ© de participer activement.", profiles: ["PassifÂ·ve"], classes: COLLEGE, trimesters: T3 },

  // â”€â”€ Encouragements â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 249, text: "Une progression notable et constante qui mÃ©rite toutes les fÃ©licitations. Gardez ce cap avec dÃ©termination !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 250, text: "De vrais signaux positifs en ce second trimestre. La mobilisation perÃ§ue laisse prÃ©sager une belle fin d'annÃ©e.", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 251, text: "Une fin d'annÃ©e qui reflÃ¨te un effort soutenu et sincÃ¨re. Ces progrÃ¨s sont le signe d'une belle maturitÃ© scolaire.", profiles: ["Encouragements"], classes: LYCEE, trimesters: T3 },
  { id: 252, text: "DÃ¨s ce premier trimestre, une progression encourageante. Cette dynamique doit absolument se confirmer dans les trimestres Ã  venir.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },

  // â”€â”€ ProblÃ©matique â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 253, text: "L'attitude de l'Ã©lÃ¨ve en classe demeure prÃ©occupante. Des mesures ont Ã©tÃ© prises ; des efforts significatifs sont attendus.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 254, text: "Les perturbations rÃ©pÃ©tÃ©es nuisent Ã  l'ensemble du groupe. Il est impÃ©ratif que l'Ã©lÃ¨ve intÃ¨gre les rÃ¨gles du vivre-ensemble scolaire.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: T2 },
  { id: 255, text: "Un deuxiÃ¨me trimestre encore marquÃ© par des difficultÃ©s comportementales. L'implication des familles est sollicitÃ©e.", profiles: ["ProblÃ©matique"], classes: COLLEGE, trimesters: T2 },

  // â”€â”€ DiscretÂ·e mais sÃ©rieuxÂ·se â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 256, text: "Une rÃ©serve naturelle qui cache un travail sÃ©rieux et de qualitÃ©. Les rÃ©sultats parlent pour l'Ã©lÃ¨ve.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 257, text: "Sans s'imposer, l'Ã©lÃ¨ve rÃ©alise un travail rÃ©gulier et mÃ©thodique dont les rÃ©sultats sont trÃ¨s satisfaisants.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: T2 },

  // â”€â”€ DÃ©faitiste â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 258, text: "L'Ã©lÃ¨ve renonce trop souvent avant mÃªme d'essayer. Oser se tromper est une Ã©tape essentielle dans l'apprentissage d'une langue.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 259, text: "Le dÃ©couragement observÃ© en dÃ©but d'annÃ©e laisse peu Ã  peu place Ã  davantage d'engagement. Il faut poursuivre dans cette voie.", profiles: ["DÃ©faitiste"], classes: ALL, trimesters: T2 },

  // â”€â”€ MoteurÂ·rice et impliquÃ©Â·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 260, text: "L'Ã©lÃ¨ve est une vÃ©ritable ressource pour la classe. Son investissement et son enthousiasme crÃ©ent une dynamique positive et stimulante.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: ALL },
  { id: 261, text: "DÃ¨s ce premier trimestre, l'Ã©lÃ¨ve s'impose comme unÂ·e moteurÂ·rice de la classe. Un enthousiasme communicatif et bienveillant.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e"], classes: ALL, trimesters: T1 },

  // â”€â”€ Participation rÃ©guliÃ¨re et pertinente â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 262, text: "Une participation exemplaire en termes de rÃ©gularitÃ© et de qualitÃ©. Les interventions Ã©lÃ¨vent le niveau des Ã©changes.", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: ALL },
  { id: 263, text: "Des interventions frÃ©quentes, toujours mesurÃ©es et pertinentes. L'Ã©lÃ¨ve enrichit considÃ©rablement la dynamique de groupe.", profiles: ["Participation rÃ©guliÃ¨re et pertinente"], classes: LYCEE, trimesters: ALL },

  // â”€â”€ Bon niveau, participation Ã  parfaire â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 264, text: "Le niveau est indÃ©niable, mais trop peu visible en classe. Il est temps de valoriser ces acquis en s'exprimant davantage.", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 265, text: "Des compÃ©tences bien rÃ©elles qui mÃ©ritent de s'exprimer davantage. Un peu plus de participation transformerait ce bon trimestre en excellent trimestre.", profiles: ["Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: T2 },

  // â”€â”€ ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 266, text: "Des semaines de belle implication suivies de pÃ©riodes d'effacement. Trouver la constance dans l'engagement est l'objectif prioritaire.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: ALL },
  { id: 267, text: "L'irrÃ©gularitÃ© est le principal frein Ã  la progression. Des habitudes de travail plus stables produiraient de bien meilleurs rÃ©sultats.", profiles: ["ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: LYCEE, trimesters: ALL },

  // â”€â”€ MoteurÂ·rice mais parfois impatientÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 268, text: "Une Ã©nergie et un dynamisme prÃ©cieux pour la classe. Travailler sur l'Ã©coute active des autres enrichirait encore davantage les Ã©changes.", profiles: ["MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 269, text: "L'implication est totale et trÃ¨s apprÃ©ciable. Permettre davantage aux autres de s'exprimer renforcerait la richesse collective des Ã©changes.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 270, text: "Un enthousiasme que rien n'arrÃªte. L'enjeu est maintenant d'apprendre Ã  crÃ©er des espaces de parole pour les autres.", profiles: ["TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: COLLEGE, trimesters: ALL },

  // â”€â”€ ParticipatifÂ·ve mais parfois trop discretÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 271, text: "Une prÃ©sence bienveillante et studieuse, mais dont les interventions restent trop rares. Gagnez en confiance : vos idÃ©es mÃ©ritent d'Ãªtre partagÃ©es !", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },
  { id: 272, text: "TroisiÃ¨me trimestre encourageant en termes de participation. La timiditÃ© recule et les Ã©changes gagnent en qualitÃ©.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: T3 },

  // â”€â”€ EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 273, text: "L'Ã©crit rÃ©vÃ¨le une vraie maÃ®trise de la langue. Le prochain dÃ©fi â€” relever la tÃªte et s'exprimer Ã  voix haute â€” est Ã  la portÃ©e de l'Ã©lÃ¨ve.", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },

  // â”€â”€ Participe bien mais manque de confiance â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 274, text: "Les rÃ©ponses et interventions de l'Ã©lÃ¨ve sont souvent trÃ¨s justes. Il faut apprendre Ã  s'appuyer sur ces rÃ©ussites pour gagner en assurance.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 275, text: "Une participation hÃ©sitante mais de qualitÃ©. La confiance en soi est en construction : c'est un trÃ¨s bon signe pour la suite.", profiles: ["Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: T2 },

  // â”€â”€ MoteurÂ·rice, Ã  progresser sur la prÃ©cision â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 276, text: "Un moteurÂ·rice enthousiaste dont la communication est efficace. Affiner la prÃ©cision grammaticale et lexicale est le prochain objectif.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 277, text: "Un niveau excellent alliÃ© Ã  une vraie discrÃ©tion. Le travail de qualitÃ© parle de lui-mÃªme et mÃ©rite d'Ãªtre davantage mis en avant.", profiles: ["ExcellentÂ·e", "DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 278, text: "Un niveau excellent mais qui gagnerait Ã  s'accompagner d'une gestion plus posÃ©e de la prise de parole pour que chacun puisse s'exprimer.", profiles: ["ExcellentÂ·e", "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 279, text: "Une maÃ®trise de l'anglais impressionnante, encore trop peu visible en classe. Participer davantage valoriserait pleinement ce trÃ¨s bon niveau.", profiles: ["ExcellentÂ·e", "Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 280, text: "Un excellent niveau, particuliÃ¨rement Ã  l'Ã©crit, et une aisance Ã  l'oral qui demande encore Ã  s'affirmer. Un beau profil Ã  Ã©quilibrer.", profiles: ["ExcellentÂ·e", "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: ALL },
  { id: 281, text: "TrÃ¨s bon travail et sÃ©rieux exemplaire. Le bon niveau obtenu est la consÃ©quence logique d'un investissement constant et rigoureux.", profiles: ["Bon niveau", "TravailleurÂ·se"], classes: COLLEGE, trimesters: ALL },
  { id: 282, text: "Un bon niveau qui se confirme d'un trimestre Ã  l'autre. La participation rÃ©guliÃ¨re et pertinente contribue largement Ã  cette belle progression.", profiles: ["Bon niveau", "Participation rÃ©guliÃ¨re et pertinente"], classes: ALL, trimesters: T2 },
  { id: 283, text: "Un bon niveau global mais une participation trop irrÃ©guliÃ¨re pour en tirer pleinement profit. La constance dans l'engagement est Ã  travailler.", profiles: ["Bon niveau", "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: LYCEE, trimesters: ALL },
  { id: 284, text: "Un profil encourageant : du travail, de la bonne volontÃ© et un niveau qui progresse. Il faut maintenir et amplifier cet effort.", profiles: ["Bon niveau", "Encouragements"], classes: ALL, trimesters: T1 },
  { id: 285, text: "Un bon niveau indÃ©niable dont la participation trop timide ne reflÃ¨te pas la rÃ©alitÃ©. Oser s'exprimer davantage serait trÃ¨s bÃ©nÃ©fique.", profiles: ["Bon niveau, participation Ã  parfaire", "ParticipatifÂ·ve mais parfois trop discretÂ·e"], classes: ALL, trimesters: ALL },
  { id: 286, text: "Du potentiel, du sÃ©rieux, mais une irrÃ©gularitÃ© prÃ©judiciable. Des efforts plus constants permettraient d'aller bien au-delÃ .", profiles: ["Peut mieux faire", "ActifÂ·ve mais irrÃ©gulierÂ·Ã¨re"], classes: ALL, trimesters: T2 },
  { id: 287, text: "Les capacitÃ©s sont rÃ©elles mais le dÃ©couragement empÃªche de les exploiter. Il faut absolument dÃ©passer cette rÃ©signation pour progresser.", profiles: ["Peut mieux faire", "DÃ©faitiste"], classes: ALL, trimesters: ALL },
  { id: 288, text: "Des progrÃ¨s visibles malgrÃ© les difficultÃ©s persistantes. Cet Ã©tat d'esprit combatif est la bonne attitude : il faut le maintenir.", profiles: ["En difficultÃ©", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 289, text: "Les difficultÃ©s rencontrÃ©es n'entament pas la motivation de l'Ã©lÃ¨ve. Ce sÃ©rieux dans l'effort finira par payer.", profiles: ["En difficultÃ©", "TravailleurÂ·se"], classes: COLLEGE, trimesters: T2 },
  { id: 290, text: "MalgrÃ© les difficultÃ©s, une attitude bienveillante et studieuse. Cet engagement discret mais sincÃ¨re est trÃ¨s apprÃ©ciable.", profiles: ["En difficultÃ©", "DiscretÂ·e mais sÃ©rieuxÂ·se"], classes: ALL, trimesters: ALL },
  { id: 291, text: "La difficultÃ© ne justifie pas l'abandon. PersÃ©vÃ©rer avec mÃ©thode et solliciter de l'aide sont les premiÃ¨res Ã©tapes vers la rÃ©ussite.", profiles: ["En difficultÃ©", "DÃ©faitiste"], classes: ALL, trimesters: T3 },
  { id: 292, text: "TroisiÃ¨me trimestre dÃ©cisif : malgrÃ© les lacunes persistantes, l'implication est au rendez-vous. Bonne continuation pour la rentrÃ©e.", profiles: ["En difficultÃ©", "TravailleurÂ·se"], classes: ALL, trimesters: T3 },
  { id: 293, text: "Du sÃ©rieux et de la rÃ©gularitÃ©, mais un manque de confiance qui freine l'expression orale. Croire en ses moyens est essentiel.", profiles: ["TravailleurÂ·se", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 294, text: "Un travail admirable et une vraie aisance Ã  l'oral. L'Ã©lÃ¨ve rayonne par sa maÃ®trise et son engagement.", profiles: ["TravailleurÂ·se", "Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 295, text: "SÃ©rieuxÂ·se et impliquÃ©Â·e, avec un beau sens de la rÃ©daction. L'Ã©crit est un vrai point fort Ã  continuer de dÃ©velopper.", profiles: ["TravailleurÂ·se", "Ã€ l'Ã©crit"], classes: LYCEE, trimesters: ALL },
  { id: 296, text: "Un moteurÂ·rice de la classe qui fait preuve d'un sÃ©rieux remarquable. Participer tout en Ã©coutant les autres sera le prochain palier.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: ALL, trimesters: T1 },
  { id: 297, text: "TrÃ¨s actifÂ·ve et dynamique, l'Ã©lÃ¨ve donne le ton mais doit apprendre Ã  respecter le rythme de ses camarades.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "MoteurÂ·rice mais parfois impatientÂ·e"], classes: COLLEGE, trimesters: ALL },
  { id: 298, text: "Un profil moteurÂ·rice avec un beau potentiel Ã  l'oral. Travailler la prÃ©cision linguistique permettrait d'atteindre un niveau encore plus solide.", profiles: ["MoteurÂ·rice et impliquÃ©Â·e", "Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 299, text: "L'aisance Ã  l'oral est indÃ©niable mais doit se doubler d'une rigueur Ã  l'Ã©crit encore insuffisante. Un rÃ©Ã©quilibrage est nÃ©cessaire.", profiles: ["Ã€ l'oral", "EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral"], classes: ALL, trimesters: T2 },
  { id: 300, text: "TrÃ¨s Ã  l'aise Ã  l'oral mais parfois envahissantÂ·e. Les connaissances et l'enthousiasme sont lÃ  : il faut les canaliser davantage.", profiles: ["Ã€ l'oral", "BavardÂ·e mais compÃ©tentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 301, text: "Des productions Ã©crites de qualitÃ© et une vraie implication en cours. Ce beau profil mÃ©rite d'Ãªtre maintenu avec rÃ©gularitÃ©.", profiles: ["Ã€ l'Ã©crit", "Participation rÃ©guliÃ¨re et pertinente"], classes: LYCEE, trimesters: ALL },
  { id: 302, text: "Les progrÃ¨s Ã  l'Ã©crit sont notables et la participation progresse Ã©galement. Un beau trimestre de transition pour cetÂ·te Ã©lÃ¨ve.", profiles: ["Ã€ l'Ã©crit", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 303, text: "La passivitÃ© rÃ©currente aggrave des difficultÃ©s dÃ©jÃ  prÃ©sentes. Une implication active en cours est la premiÃ¨re condition pour progresser.", profiles: ["PassifÂ·ve", "En difficultÃ©"], classes: ALL, trimesters: T1 },
  { id: 304, text: "Trop de passivitÃ© pour un Ã©lÃ¨ve de ce niveau. Des compÃ©tences rÃ©elles qui ne demandent qu'Ã  s'exprimer davantage.", profiles: ["PassifÂ·ve", "Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 305, text: "Des difficultÃ©s comportementales qui s'ajoutent Ã  des lacunes acadÃ©miques. Un sursaut dans les deux domaines est attendu.", profiles: ["ProblÃ©matique", "En difficultÃ©"], classes: ALL, trimesters: T2 },
  { id: 306, text: "Un comportement qui nuit Ã  des rÃ©sultats qui pourraient Ãªtre meilleurs. Des changements sont attendus sur les deux plans.", profiles: ["ProblÃ©matique", "Peut mieux faire"], classes: LYCEE, trimesters: ALL },
  { id: 307, text: "Des acquis solides, mais une discrÃ©tion excessive qui empÃªche de les valoriser Ã  l'oral. Les Ã©changes en classe ont besoin de cette voix !", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se", "Bon niveau, participation Ã  parfaire"], classes: ALL, trimesters: ALL },
  { id: 308, text: "Un profil discret mais sÃ©rieux, avec de belles compÃ©tences Ã  l'Ã©crit. Oser davantage s'exprimer serait un vrai plus.", profiles: ["DiscretÂ·e mais sÃ©rieuxÂ·se", "Ã€ l'Ã©crit"], classes: ALL, trimesters: T2 },
  { id: 309, text: "Participe de maniÃ¨re pertinente mais encore hÃ©sitante. Avec un peu plus de confiance, les interventions pourraient Ãªtre encore plus riches.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e", "Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: ALL },
  { id: 310, text: "Des Ã©clairs de participation bienvenue, mais trop espacÃ©s. Gagner en rÃ©gularitÃ© permettrait de pleinement valoriser ce bon niveau.", profiles: ["ParticipatifÂ·ve mais parfois trop discretÂ·e", "Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 311, text: "L'enthousiasme de l'Ã©lÃ¨ve est communicatif mais l'impatience nuit parfois Ã  la qualitÃ© des Ã©changes. Apprendre Ã  Ã©couter est une compÃ©tence Ã  part entiÃ¨re.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e", "MoteurÂ·rice mais parfois impatientÂ·e"], classes: ALL, trimesters: ALL },
  { id: 312, text: "Des compÃ©tences rÃ©elles et une Ã©nergie positive, mais qui tendent Ã  prendre trop de place. Un peu de modÃ©ration enrichirait encore les sÃ©ances.", profiles: ["BavardÂ·e mais compÃ©tentÂ·e", "TrÃ¨s impliquÃ©Â·e, tend Ã  monopoliser la parole"], classes: LYCEE, trimesters: T2 },
  { id: 313, text: "La dynamique est lÃ , mais la prÃ©cision linguistique doit progresser pour que cette implication se traduise en rÃ©sultats encore meilleurs.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 314, text: "MoteurÂ·rice indÃ©niable, l'Ã©lÃ¨ve enrichit les Ã©changes. Travailler la rigueur Ã  l'Ã©crit permettrait de complÃ©ter ce beau profil.", profiles: ["MoteurÂ·rice, Ã  progresser sur la prÃ©cision", "Ã€ l'Ã©crit"], classes: ALL, trimesters: T3 },
  { id: 315, text: "UnÂ·e Ã©lÃ¨ve sÃ©rieuxÂ·se, Ã  l'aise Ã  l'Ã©crit et progressant bien Ã  l'oral. La confiance en soi gagne du terrain : bonne nouvelle pour la suite !", profiles: ["EngagÃ©Â·e Ã  l'Ã©crit, rÃ©servÃ©Â·e Ã  l'oral", "Participe bien mais manque de confiance"], classes: ALL, trimesters: T3 },
  { id: 316, text: "Une belle progression visible en ce troisiÃ¨me trimestre. PartiÂ·e d'une position difficile, l'Ã©lÃ¨ve termine l'annÃ©e avec de vrais acquis et un Ã©tat d'esprit positif.", profiles: ["Encouragements", "En difficultÃ©"], classes: ALL, trimesters: T3 },
];

export const BILANS: Bilan[] = [
  // â”€â”€ Tous â€” gÃ©nÃ©riques â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 1,  text: "La classe fait preuve d'une bonne dynamique de groupe. Les rÃ©sultats sont globalement satisfaisants ce trimestre.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "Trimestre encourageant pour la majoritÃ© des Ã©lÃ¨ves. La progression est notable et les efforts sont Ã  souligner.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Classe hÃ©tÃ©rogÃ¨ne mais impliquÃ©e dans l'ensemble. Les rÃ©sultats reflÃ¨tent l'investissement de chacun.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Un bon trimestre dans l'ensemble, avec des niveaux trÃ¨s variÃ©s. L'entraide entre Ã©lÃ¨ves est Ã  encourager.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "Classe sÃ©rieuse et appliquÃ©e. Le niveau gÃ©nÃ©ral est satisfaisant et globalement en progression.", profiles: ["Tous"], classes: ALL, trimesters: ALL },

  // â”€â”€ ExcellentÂ·e â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 6,  text: "Quelques Ã©lÃ¨ves se distinguent par leur excellence et tirent le niveau de la classe vers le haut.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Le groupe de tÃªte affiche d'excellents rÃ©sultats et participe activement Ã  la dynamique positive de classe.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Les meilleurs Ã©lÃ©ments de la classe font preuve d'une maÃ®trise remarquable de l'anglais, Ã  l'oral comme Ã  l'Ã©crit.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Les Ã©lÃ¨ves les plus avancÃ©s continuent de progresser et reprÃ©sentent une source d'inspiration pour leurs camarades.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: ALL },

  // â”€â”€ Bon niveau â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 10, text: "Un groupe solide tire la classe vers le haut par ses rÃ©sultats rÃ©guliers et sa participation active.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 11, text: "La majoritÃ© des Ã©lÃ¨ves prÃ©sente un bon niveau d'ensemble. Les bases sont solides et les acquis bien consolidÃ©s.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Les Ã©lÃ¨ves de bon niveau contribuent positivement Ã  la dynamique de classe et Ã  la richesse des Ã©changes.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 13, text: "Un niveau satisfaisant pour la majeure partie de la classe, avec des rÃ©sultats rÃ©guliers.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  // â”€â”€ Peut mieux faire â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 14, text: "Un certain nombre d'Ã©lÃ¨ves pourraient amÃ©liorer leurs rÃ©sultats avec plus d'implication et de rÃ©gularitÃ©.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Les capacitÃ©s sont lÃ , mais l'investissement devrait Ãªtre plus soutenu pour plusieurs Ã©lÃ¨ves.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 16, text: "Quelques Ã©lÃ¨ves n'exploitent pas pleinement leur potentiel. Des efforts supplÃ©mentaires sont attendus.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 17, text: "Des rÃ©sultats en demi-teinte pour une partie de la classe. La rÃ©gularitÃ© du travail ferait la diffÃ©rence.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  // â”€â”€ En difficultÃ© â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 18, text: "Plusieurs Ã©lÃ¨ves sont en difficultÃ© et nÃ©cessitent un soutien accru. Un travail de remÃ©diation est mis en place.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 19, text: "Un groupe d'Ã©lÃ¨ves peine Ã  suivre le rythme. Il est important d'identifier les lacunes pour y remÃ©dier rapidement.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 20, text: "Des difficultÃ©s persistantes pour certains Ã©lÃ¨ves. La persÃ©vÃ©rance et le soutien familial sont essentiels.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 21, text: "Le groupe des Ã©lÃ¨ves en difficultÃ© nÃ©cessite une attention particuliÃ¨re. Des aides et un accompagnement sont proposÃ©s.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: ALL },

  // â”€â”€ TravailleurÂ·se â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 22, text: "Le sÃ©rieux et l'investissement d'une grande partie de la classe sont trÃ¨s apprÃ©ciables.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "La classe fait preuve d'un travail rÃ©gulier et consciencieux qui se reflÃ¨te positivement dans les rÃ©sultats.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'implication des Ã©lÃ¨ves est globalement bonne. Le travail fourni est sÃ©rieux et rÃ©gulier.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "Une classe travailleuse dans l'ensemble. Les efforts fournis sont visibles et les rÃ©sultats Ã  la hauteur.", profiles: ["TravailleurÂ·se"], classes: ALL, trimesters: ALL },

  // â”€â”€ Ã€ l'oral â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 26, text: "La classe s'exprime avec de plus en plus d'aisance Ã  l'oral. Les progrÃ¨s sont encourageants.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "L'expression orale progresse globalement bien. Les Ã©changes sont de plus en plus fluides et pertinents.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "De belles avancÃ©es Ã  l'oral pour l'ensemble de la classe. Il convient de maintenir cet effort.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "L'oral reste un point Ã  travailler pour une partie de la classe. Des exercices rÃ©guliers sont proposÃ©s.", profiles: ["Ã€ l'oral"], classes: ALL, trimesters: ALL },

  // â”€â”€ Ã€ l'Ã©crit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 30, text: "L'expression Ã©crite progresse globalement de maniÃ¨re satisfaisante pour la majoritÃ© des Ã©lÃ¨ves.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 31, text: "Les productions Ã©crites tÃ©moignent d'un effort de structuration et de prÃ©cision encourageant.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'Ã©crit demande encore un travail de consolidation pour une partie de la classe.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "Des progrÃ¨s notables Ã  l'Ã©crit pour la majoritÃ© des Ã©lÃ¨ves ce trimestre.", profiles: ["Ã€ l'Ã©crit"], classes: ALL, trimesters: ALL },

  // â”€â”€ PassifÂ·ve â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 34, text: "La passivitÃ© de certains Ã©lÃ¨ves est un frein aux apprentissages. Une participation plus active est attendue.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Trop d'Ã©lÃ¨ves restent en retrait. Il est essentiel de s'impliquer davantage pour progresser en anglais.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 36, text: "Un manque d'implication gÃ©nÃ©ral est Ã  noter. Les Ã©lÃ¨ves doivent s'investir plus activement en cours.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "Certains Ã©lÃ¨ves restent trop passifs et ne profitent pas pleinement des Ã©changes en classe.", profiles: ["PassifÂ·ve"], classes: ALL, trimesters: ALL },

  // â”€â”€ Encouragements â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 38, text: "Des progrÃ¨s rÃ©els qui mÃ©ritent d'Ãªtre encouragÃ©s. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Une progression perceptible pour plusieurs Ã©lÃ¨ves. Ces efforts doivent Ãªtre maintenus et amplifiÃ©s.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 40, text: "La classe avance dans le bon sens. Ces encouragements doivent motiver chacun Ã  persÃ©vÃ©rer.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 41, text: "De bonnes intentions et des efforts rÃ©els. Il faut continuer Ã  s'investir pour confirmer ces progrÃ¨s.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  // â”€â”€ ProblÃ©matique â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: 42, text: "Le comportement de certains Ã©lÃ¨ves perturbe le bon dÃ©roulement des sÃ©ances. Une remise au point collective a Ã©tÃ© nÃ©cessaire.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 43, text: "Des problÃ¨mes de comportement rÃ©currents nuisent Ã  l'ambiance de travail. Un avertissement a Ã©tÃ© donnÃ©.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 44, text: "L'attitude en classe de quelques Ã©lÃ¨ves est prÃ©occupante et pÃ©nalise l'ensemble du groupe.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Des tensions perturbent le bon fonctionnement de la classe. Un travail sur le respect mutuel est en cours.", profiles: ["ProblÃ©matique"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â€” gÃ©nÃ©riques â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 46, text: "La classe dans son ensemble fait preuve de bonne volontÃ©. Des progrÃ¨s visibles mÃ©ritent d'Ãªtre encouragÃ©s.", profiles: ["Tous", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 47, text: "La classe affiche un bon niveau gÃ©nÃ©ral, soutenu par un travail rÃ©gulier et sÃ©rieux.", profiles: ["Bon niveau", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 48, text: "Un bon niveau gÃ©nÃ©ral, particuliÃ¨rement visible Ã  l'oral oÃ¹ les Ã©changes sont de plus en plus riches.", profiles: ["Bon niveau", "Ã€ l'oral"], classes: ALL, trimesters: ALL },
  { id: 49, text: "Le niveau gÃ©nÃ©ral est bon, mais la participation reste insuffisante. Il faut oser prendre la parole.", profiles: ["Bon niveau", "PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 50, text: "Une partie de la classe dispose des ressources pour mieux faire, mais le manque d'implication plombe les rÃ©sultats.", profiles: ["Peut mieux faire", "PassifÂ·ve"], classes: ALL, trimesters: ALL },
  { id: 51, text: "Trimestre difficile pour une partie des Ã©lÃ¨ves, mais la volontÃ© de progresser est perceptible. Ces efforts mÃ©ritent d'Ãªtre soutenus.", profiles: ["En difficultÃ©", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 52, text: "MalgrÃ© les difficultÃ©s que rencontrent certains Ã©lÃ¨ves, le travail fourni est sÃ©rieux. Un accompagnement ciblÃ© permettrait de les dÃ©bloquer.", profiles: ["En difficultÃ©", "TravailleurÂ·se"], classes: ALL, trimesters: ALL },
  { id: 53, text: "La classe prÃ©sente un niveau global Ã©levÃ©, avec un groupe de tÃªte solide et une majoritÃ© d'Ã©lÃ¨ves de bon niveau.", profiles: ["ExcellentÂ·e", "Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 54, text: "Les difficultÃ©s de certains Ã©lÃ¨ves sont aggravÃ©es par un manque d'implication. S'engager davantage est la premiÃ¨re condition du progrÃ¨s.", profiles: ["PassifÂ·ve", "En difficultÃ©"], classes: ALL, trimesters: ALL },
  { id: 55, text: "Des comportements problÃ©matiques pÃ¨sent sur le climat et tirent les rÃ©sultats vers le bas. Un changement d'attitude collectif est nÃ©cessaire.", profiles: ["ProblÃ©matique", "Peut mieux faire"], classes: ALL, trimesters: ALL },

  // â•â• TRIMESTRE 1 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 56, text: "Bonne entrÃ©e dans l'annÃ©e pour la classe. Le premier trimestre est globalement satisfaisant et donne de bonnes bases.", profiles: ["Tous"], classes: ALL, trimesters: T1 },
  { id: 57, text: "Premier trimestre encourageant. Les Ã©lÃ¨ves se sont bien mis au travail dÃ¨s le dÃ©but de l'annÃ©e.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 58, text: "DÃ¨s ce premier trimestre, des difficultÃ©s sont Ã  signaler. Il est important d'agir rapidement.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T1 },
  { id: 59, text: "Le groupe de tÃªte s'illustre dÃ¨s ce premier trimestre. Un niveau excellent qui donne le ton pour l'annÃ©e.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T1 },

  // â•â• TRIMESTRE 2 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 60, text: "En ce milieu d'annÃ©e, la classe confirme la dynamique du premier trimestre. Le niveau est stable et les rÃ©sultats satisfaisants.", profiles: ["Tous"], classes: ALL, trimesters: T2 },
  { id: 61, text: "Par rapport au premier trimestre, une progression collective est perceptible. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 62, text: "Les difficultÃ©s du premier trimestre persistent pour plusieurs Ã©lÃ¨ves. Un travail de remÃ©diation est en cours.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T2 },
  { id: 63, text: "Le niveau excellent du premier trimestre se confirme en ce second trimestre. TrÃ¨s beau bilan Ã  mi-annÃ©e.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T2 },

  // â•â• TRIMESTRE 3 â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 64, text: "Belle fin d'annÃ©e pour la classe. Le bilan est globalement positif et la progression est au rendez-vous.", profiles: ["Tous"], classes: ALL, trimesters: T3 },
  { id: 65, text: "La classe termine l'annÃ©e sur une note encourageante. Les progrÃ¨s accomplis depuis septembre sont visibles.", profiles: ["Encouragements"], classes: ALL, trimesters: T3 },
  { id: 66, text: "Fin d'annÃ©e difficile pour plusieurs Ã©lÃ¨ves. Un travail de remise Ã  niveau pendant les vacances serait bÃ©nÃ©fique.", profiles: ["En difficultÃ©"], classes: ALL, trimesters: T3 },
  { id: 67, text: "La classe termine l'annÃ©e en beautÃ©. Le groupe de tÃªte maintient un niveau remarquable jusqu'au bout.", profiles: ["ExcellentÂ·e"], classes: ALL, trimesters: T3 },
  { id: 68, text: "Un bilan de fin d'annÃ©e dÃ©cevant pour une partie de la classe. L'an prochain devra dÃ©marrer sur de meilleures bases.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T3 },

  // â•â• TERMINALE â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 69, text: "La classe de terminale affiche un niveau solide Ã  l'approche du baccalaurÃ©at. La maÃ®trise de l'anglais est globalement bien acquise.", profiles: ["Tous"], classes: TERM, trimesters: ALL },
  { id: 70, text: "Des lacunes prÃ©occupantes pour une partie de la classe Ã  l'approche du baccalaurÃ©at. Un travail intensif est indispensable.", profiles: ["En difficultÃ©"], classes: TERM, trimesters: ALL },
  { id: 71, text: "Le groupe de tÃªte de cette terminale aborde le baccalaurÃ©at avec un excellent niveau et de solides atouts.", profiles: ["ExcellentÂ·e"], classes: TERM, trimesters: ALL },

  // â•â• 6Ã¨meâ€“5Ã¨me â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  { id: 72, text: "Bonne entrÃ©e dans l'apprentissage de l'anglais pour la classe. L'enthousiasme est au rendez-vous.", profiles: ["Tous"], classes: EARLY, trimesters: ALL },
  { id: 73, text: "La classe montre un bel enthousiasme pour l'anglais. Cette curiositÃ© est Ã  entretenir et Ã  encourager.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
];
