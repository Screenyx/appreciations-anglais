export type Profile =
  | "Excellent·e"
  | "Bon niveau"
  | "Peut mieux faire"
  | "En difficulté"
  | "Travailleur·se"
  | "À l'oral"
  | "À l'écrit"
  | "Passif·ve"
  | "Encouragements"
  | "Problématique"
  | "Discret·e mais sérieux·se"
  | "Bavard·e mais compétent·e"
  | "Défaitiste"
  | "Moteur·rice et impliqué·e"
  | "Participation régulière et pertinente"
  | "Bon niveau, participation à parfaire"
  | "Actif·ve mais irrégulier·ère"
  | "Moteur·rice mais parfois impatient·e"
  | "Très impliqué·e, tend à monopoliser la parole"
  | "Participatif·ve mais parfois trop discret·e"
  | "Engagé·e à l'écrit, réservé·e à l'oral"
  | "Participe bien mais manque de confiance"
  | "Moteur·rice, à progresser sur la précision";

export type BilanProfile =
  | "Tous"
  | "Excellent·e"
  | "Bon niveau"
  | "Peut mieux faire"
  | "En difficulté"
  | "Travailleur·se"
  | "À l'oral"
  | "À l'écrit"
  | "Passif·ve"
  | "Encouragements"
  | "Problématique";

export const PROFILES: Profile[] = [
  "Excellent·e", "Bon niveau", "Peut mieux faire", "En difficulté",
  "Travailleur·se", "À l'oral", "À l'écrit", "Passif·ve",
  "Encouragements", "Problématique", "Discret·e mais sérieux·se",
  "Bavard·e mais compétent·e", "Défaitiste", "Moteur·rice et impliqué·e",
  "Participation régulière et pertinente", "Bon niveau, participation à parfaire",
  "Actif·ve mais irrégulier·ère", "Moteur·rice mais parfois impatient·e",
  "Très impliqué·e, tend à monopoliser la parole",
  "Participatif·ve mais parfois trop discret·e",
  "Engagé·e à l'écrit, réservé·e à l'oral",
  "Participe bien mais manque de confiance",
  "Moteur·rice, à progresser sur la précision",
];

export const BILAN_PROFILES: BilanProfile[] = [
  "Tous", "Excellent·e", "Bon niveau", "Peut mieux faire", "En difficulté",
  "Travailleur·se", "À l'oral", "À l'écrit", "Passif·ve", "Encouragements", "Problématique",
];

export const CLASSES = ["6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];
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

// Raccourcis pour la lisibilité
const ALL: string[] = [];
const T1 = ["Trimestre 1"];
const T2 = ["Trimestre 2"];
const T3 = ["Trimestre 3"];
const COLLEGE = ["6ème", "5ème", "4ème", "3ème"];
const LYCEE = ["2nde", "1ère", "Terminale"];
const EARLY = ["6ème", "5ème"];
const TERM = ["Terminale"];

export const APPRECIATIONS: Appreciation[] = [
  // ── Excellent·e — génériques ─────────────────────────────────────────────────
  { id: 1,  text: "Élève remarquable qui maîtrise parfaitement les compétences attendues en anglais. Excellent trimestre.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "Très beau niveau en anglais. Les productions écrites et orales témoignent d'une grande maîtrise de la langue.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Excellents résultats ce trimestre. L'élève fait preuve d'une aisance remarquable à l'écrit comme à l'oral.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Niveau excellent. Les interventions sont toujours pertinentes et les écrits d'une grande qualité.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "Très beau trimestre. La maîtrise de l'anglais est impressionnante, tant à l'oral qu'à l'écrit. Continuez ainsi !", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },

  // ── Bon niveau — génériques ───────────────────────────────────────────────────
  { id: 6,  text: "Bon trimestre en anglais. Les acquis sont solides et les résultats satisfaisants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Bon niveau général en anglais. Les compétences sont bien maîtrisées et le travail régulier.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Bons résultats ce trimestre. L'élève s'engage sérieusement dans les apprentissages.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Niveau satisfaisant en anglais. Les bases sont solides et les résultats encourageants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 10, text: "Bon travail ce trimestre. Les efforts fournis se reflètent positivement dans les résultats.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  // ── Peut mieux faire — génériques ────────────────────────────────────────────
  { id: 11, text: "Des capacités certaines qui ne sont pas encore pleinement exploitées. Des efforts supplémentaires permettraient d'obtenir de meilleurs résultats.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Le niveau pourrait être meilleur avec plus d'implication. Il convient de se montrer plus régulier·ère dans le travail.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 13, text: "Résultats en demi-teinte. Les capacités sont là mais le travail manque de régularité.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 14, text: "Trimestre moyen. Un investissement plus soutenu est attendu pour le prochain trimestre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Des acquis fragiles qui demandent à être consolidés. Un travail plus régulier est nécessaire.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  // ── En difficulté — génériques ────────────────────────────────────────────────
  { id: 16, text: "Trimestre difficile en anglais. Il est important de consolider les bases et de solliciter davantage l'aide du professeur.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 17, text: "L'élève rencontre des difficultés persistantes en anglais. Un travail régulier à la maison est indispensable.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 18, text: "Des lacunes importantes sont à combler. Je reste disponible pour accompagner l'élève dans ses progrès.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 19, text: "La situation est préoccupante. Un soutien et un investissement plus importants sont nécessaires pour progresser.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 20, text: "Malgré des difficultés réelles, il faut persévérer. Chaque effort compte et les progrès sont possibles.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },

  // ── Travailleur·se — génériques ───────────────────────────────────────────────
  { id: 21, text: "Élève sérieux·se et travailleur·se. L'investissement régulier finit toujours par payer. Continuez ainsi !", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 22, text: "Je salue le sérieux et la persévérance dont fait preuve l'élève tout au long de ce trimestre.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "Un travail régulier et consciencieux qui mérite d'être encouragé. Beau trimestre.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'application et la rigueur dont fait preuve l'élève sont exemplaires et pleinement récompensées.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "Très bon trimestre sur le plan du travail. L'engagement est constant et très appréciable.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },

  // ── À l'oral — génériques ─────────────────────────────────────────────────────
  { id: 26, text: "De belles qualités à l'oral. L'élève s'exprime avec aisance et pertinence en anglais.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "Très à l'aise à l'oral, les interventions sont riches, bien construites et spontanées.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "L'expression orale est le point fort de l'élève. Il convient maintenant de travailler davantage à l'écrit pour équilibrer les compétences.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "Belle maîtrise de l'expression orale. La prise de parole est spontanée et bien articulée.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 30, text: "Les progrès à l'oral sont notables ce trimestre. La confiance et la fluidité sont au rendez-vous.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },

  // ── À l'écrit — génériques ────────────────────────────────────────────────────
  { id: 31, text: "De belles qualités à l'écrit. Les productions sont soignées, structurées et linguistiquement riches.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'expression écrite est le point fort de l'élève. Les travaux écrits sont de très bonne facture.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "Très bon travail à l'écrit. Il serait bénéfique d'oser davantage s'exprimer à l'oral.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 34, text: "Les productions écrites témoignent d'une bonne maîtrise de la langue. Bel effort de précision.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Bonne maîtrise à l'écrit ce trimestre. Les efforts de rédaction sont visibles et très appréciés.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },

  // ── Passif·ve — génériques ────────────────────────────────────────────────────
  { id: 36, text: "Une participation trop effacée qui pénalise la progression. Il est important de s'impliquer davantage en cours.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "L'élève reste trop en retrait. Une prise d'initiative plus fréquente serait bénéfique pour progresser.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 38, text: "Le manque de participation est préjudiciable. Il faut oser prendre la parole et s'engager davantage.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Trimestre trop passif·ve. Les compétences existent mais restent inexploitées faute d'engagement suffisant.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 40, text: "Il est dommage de constater une telle passivité. S'impliquer davantage permettrait à l'élève de progresser significativement.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },

  // ── Encouragements — génériques ───────────────────────────────────────────────
  { id: 41, text: "Des efforts encourageants ce trimestre. Il faut continuer dans cette voie pour consolider les acquis.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 42, text: "Je perçois une progression réelle. Ces encouragements doivent motiver l'élève à poursuivre ses efforts.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 43, text: "On sent la volonté de progresser, c'est très positif. Gardons cette dynamique pour le prochain trimestre !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 44, text: "Bon courage pour la suite ! Les efforts fournis commencent à porter leurs fruits.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Une progression perceptible qui mérite d'être soulignée. Continuez avec le même investissement !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  // ── Problématique — génériques ────────────────────────────────────────────────
  { id: 46, text: "Le comportement en classe perturbe le bon déroulement des cours. Un changement d'attitude est indispensable.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 47, text: "Des difficultés de comportement qui nuisent aux apprentissages. Il est urgent de remédier à cette situation.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 48, text: "L'attitude en classe est problématique et pénalise l'élève ainsi que ses camarades. Des efforts sont attendus.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 49, text: "Malgré les mises en garde répétées, le comportement reste inadapté au cadre scolaire.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 50, text: "La situation nécessite une remise au point. L'attitude en classe doit impérativement changer.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },

  // ── Discret·e mais sérieux·se ────────────────────────────────────────────────
  { id: 51, text: "Élève discret·e mais dont le sérieux et l'investissement ne font aucun doute. Beau travail ce trimestre.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 52, text: "Une participation discrète mais un travail rigoureux et des résultats solides. Bravo !", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 53, text: "Sans être très bavard·e, l'élève travaille sérieusement et produit un travail de qualité constante.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 54, text: "La discrétion ne doit pas faire oublier la qualité du travail fourni. Félicitations pour ce trimestre.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },

  // ── Bavard·e mais compétent·e ────────────────────────────────────────────────
  { id: 55, text: "Un enthousiasme parfois envahissant mais une vraie maîtrise de l'anglais. Il faut apprendre à canaliser son énergie.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 56, text: "Très bavard·e mais les connaissances sont là. Mieux gérer sa prise de parole serait bénéfique pour tous.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 57, text: "De l'entrain et de la compétence ! Il s'agit maintenant de savoir s'exprimer au bon moment.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 58, text: "La vivacité de l'élève doit être canalisée : les compétences sont indéniables, mais il faut savoir s'imposer des limites.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },

  // ── Défaitiste ───────────────────────────────────────────────────────────────
  { id: 59, text: "L'élève se décourage trop facilement. Il faut croire davantage en ses capacités pour progresser.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 60, text: "L'attitude défaitiste freine la progression. Les capacités sont réelles, il faut apprendre à se faire confiance.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 61, text: "Trop de négativité face aux difficultés. Persévérer est la clé du succès en langue étrangère.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 62, text: "Il est dommage de baisser les bras si facilement. Avec de la persévérance, les progrès viendraient sûrement.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },

  // ── Moteur·rice et impliqué·e ────────────────────────────────────────────────
  { id: 63, text: "Véritable moteur·rice de la classe. L'implication et l'enthousiasme de l'élève sont exemplaires.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 64, text: "Très impliqué·e, l'élève entraîne la classe dans une dynamique positive. Excellent trimestre.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 65, text: "Une participation active et stimulante. L'élève est un·e atout pour la dynamique de classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 66, text: "L'investissement et l'enthousiasme de l'élève sont communicatifs. C'est un plaisir de travailler en classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 67, text: "Moteur·rice en cours, l'élève dynamise les échanges et contribue à l'ambiance studieuse de la classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },

  // ── Participation régulière et pertinente ────────────────────────────────────
  { id: 68, text: "Une participation régulière et de qualité. Les interventions sont toujours pertinentes et enrichissent le cours.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 69, text: "Très belle participation ce trimestre. L'élève s'implique régulièrement et avec beaucoup d'à-propos.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 70, text: "La participation est un modèle de régularité et de pertinence. Félicitations pour ce beau trimestre !", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 71, text: "Interventions fréquentes et toujours bien construites. Un vrai plaisir à avoir en classe.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },

  // ── Bon niveau, participation à parfaire ─────────────────────────────────────
  { id: 72, text: "Bon niveau en anglais mais la participation en classe reste insuffisante. Il faut oser davantage s'exprimer.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 73, text: "De bonnes bases qui méritent d'être mises en valeur par une participation plus active en cours.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 74, text: "Les compétences sont là mais elles peinent à se manifester à l'oral. Il faut lever la main plus souvent !", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 75, text: "Bon travail à l'écrit, mais la participation orale est encore trop rare. Osez prendre la parole !", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },

  // ── Actif·ve mais irrégulier·ère ─────────────────────────────────────────────
  { id: 76, text: "De bonnes journées alternent avec des périodes plus creuses. Une participation plus constante est attendue.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 77, text: "Actif·ve par intermittence. Il faudrait maintenir ce niveau d'engagement tout au long du trimestre.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 78, text: "La participation est variable. Un engagement plus régulier permettrait d'obtenir de meilleurs résultats.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 79, text: "On sent que l'élève peut donner bien plus. L'irrégularité de l'engagement est le principal frein à la progression.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },

  // ── Moteur·rice mais parfois impatient·e ─────────────────────────────────────
  { id: 80, text: "Très impliqué·e en cours, l'élève doit néanmoins apprendre à laisser davantage de place aux autres.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 81, text: "Un enthousiasme réel qui se transforme parfois en impatience. Il faut veiller à respecter le rythme de chacun.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 82, text: "Excellent engagement mais l'impatience prend parfois le dessus. Un peu de retenue serait bénéfique.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 83, text: "Moteur·rice de la classe mais parfois emporté·e par l'enthousiasme. Travailler sur l'écoute serait très profitable.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },

  // ── Très impliqué·e, tend à monopoliser la parole ────────────────────────────
  { id: 84, text: "Un investissement remarquable, mais l'élève doit veiller à laisser plus de place à ses camarades.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 85, text: "L'implication est totale, ce qui est très appréciable. Il faudrait néanmoins ne pas monopoliser la parole.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 86, text: "Très volontaire et impliqué·e. Il serait bénéfique de canaliser cet enthousiasme pour favoriser la participation de toute la classe.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 87, text: "Participation enthousiaste et de qualité, mais qui gagnerait à se modérer pour favoriser un tour de parole équitable.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },

  // ── Participatif·ve mais parfois trop discret·e ──────────────────────────────
  { id: 88, text: "Participation présente mais encore trop timide. L'élève a toutes les ressources pour s'exprimer davantage.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 89, text: "On perçoit la volonté de participer, mais la timidité freine encore trop souvent l'expression orale.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 90, text: "Des interventions intéressantes mais trop rares. Gagnez en confiance et osez prendre la parole plus souvent !", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 91, text: "Participatif·ve mais encore trop discret·e. Il ne faut pas hésiter à se lancer : les idées sont là !", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },

  // ── Engagé·e à l'écrit, réservé·e à l'oral ──────────────────────────────────
  { id: 92, text: "De très bonnes productions écrites mais une timidité à l'oral qui freine la progression. Il faut oser !", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 93, text: "L'aisance à l'écrit est remarquable. Il est maintenant temps de transposer cette maîtrise à l'expression orale.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 94, text: "Très bon·ne à l'écrit, plus réservé·e à l'oral. Un rééquilibrage des compétences est à travailler.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 95, text: "Les écrits sont excellents. L'oral reste le prochain défi à relever avec confiance et persévérance.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },

  // ── Participe bien mais manque de confiance ──────────────────────────────────
  { id: 96,  text: "Une participation de qualité malgré un manque de confiance visible. Il faut croire davantage en ses capacités !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 97,  text: "L'élève participe avec sérieux mais semble douter de lui·elle. Pourtant, les réponses sont souvent très justes !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 98,  text: "Bon niveau mais manque de confiance en soi. Se faire confiance permettrait d'exploiter pleinement son potentiel.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 99,  text: "Les interventions sont pertinentes mais hésitantes. Il faut oser s'affirmer davantage : les connaissances sont là !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },

  // ── Moteur·rice, à progresser sur la précision ───────────────────────────────
  { id: 100, text: "Très impliqué·e et stimulant·e pour la classe. Il faut maintenant travailler la précision de la langue pour aller encore plus loin.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 101, text: "Bel enthousiasme et belle implication. Le prochain objectif est de gagner en précision linguistique.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 102, text: "Moteur·rice en classe, l'élève doit maintenant soigner la rigueur de ses productions pour progresser davantage.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 103, text: "Une participation dynamique et engagée. La progression passe désormais par un travail plus fin sur la précision.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },

  // ══ MULTI-PROFILS — génériques ═══════════════════════════════════════════════

  { id: 104, text: "Un travail sérieux et constant qui se reflète dans d'excellents résultats. Trimestre exemplaire.", profiles: ["Excellent·e", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 105, text: "La rigueur et l'investissement de l'élève expliquent amplement ce niveau excellent.", profiles: ["Excellent·e", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 106, text: "Excellence et participation se conjuguent admirablement. Les interventions enrichissent le cours et témoignent d'une maîtrise remarquable.", profiles: ["Excellent·e", "Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 107, text: "Un niveau excellent porté par une participation régulière et toujours pertinente. Un modèle pour la classe.", profiles: ["Excellent·e", "Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 108, text: "Élève brillant·e qui dynamise l'ensemble de la classe par son implication et son enthousiasme.", profiles: ["Excellent·e", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 109, text: "L'excellence se conjugue avec un investissement exemplaire. L'élève est une vraie force pour la classe.", profiles: ["Excellent·e", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 110, text: "Niveau excellent, particulièrement perceptible à l'oral. Les échanges sont riches et témoignent d'une vraie maîtrise.", profiles: ["Excellent·e", "À l'oral"], classes: ALL, trimesters: ALL },
  { id: 111, text: "Un niveau excellent qui éclate dans les productions écrites : précision, richesse lexicale et structuration au rendez-vous.", profiles: ["Excellent·e", "À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 112, text: "Un niveau excellent à l'écrit qui ne demande qu'à s'exprimer davantage à l'oral. Les bases sont là : il faut oser !", profiles: ["Excellent·e", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 113, text: "Très impliqué·e et d'excellent niveau. Travailler la précision linguistique permettrait d'atteindre un niveau encore plus remarquable.", profiles: ["Excellent·e", "Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 114, text: "Un travail sérieux et régulier qui porte ses fruits. Le bon niveau en anglais est la juste récompense de cet investissement.", profiles: ["Bon niveau", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 115, text: "Un bon niveau en anglais qui peine à se manifester en cours. Une participation plus active confirmerait pleinement ces acquis.", profiles: ["Bon niveau", "Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 116, text: "Les acquis sont solides mais l'engagement en classe manque de constance. Un investissement plus régulier permettrait d'exploiter pleinement ce bon niveau.", profiles: ["Bon niveau", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 117, text: "Discret·e mais sérieux·se, l'élève maintient un bon niveau constant. La qualité du travail parle d'elle-même.", profiles: ["Bon niveau", "Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 118, text: "Bon niveau et participation régulière font de cet·te élève un élément positif de la classe.", profiles: ["Bon niveau", "Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 119, text: "Un bon niveau global, avec une aisance particulière à l'écrit. S'investir davantage à l'oral équilibrerait les compétences.", profiles: ["Bon niveau", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 120, text: "Un bon niveau bien réel, que le manque de confiance empêche d'exprimer pleinement. Il faut s'affirmer davantage !", profiles: ["Bon niveau", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 121, text: "Un bon niveau et un sérieux indéniable, mais une participation encore trop discrète. Les connaissances sont là : il faut oser !", profiles: ["Bon niveau, participation à parfaire", "Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 122, text: "Le niveau est bon et les rares interventions sont pertinentes. La confiance en soi est la clé pour participer plus librement.", profiles: ["Bon niveau, participation à parfaire", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 123, text: "Des capacités certaines que la passivité en cours empêche d'exploiter. Un engagement plus actif serait déterminant.", profiles: ["Peut mieux faire", "Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 124, text: "Des ressources inexploitées par manque de confiance et de persévérance. Il faut dépasser cette attitude défaitiste.", profiles: ["Peut mieux faire", "Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 125, text: "Des éclairs de bonne volonté mais trop irréguliers pour progresser réellement. La constance dans l'effort est la clé.", profiles: ["Peut mieux faire", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 126, text: "De la bonne volonté et du travail, mais les méthodes sont à consolider. Un effort ciblé permettrait de progresser plus vite.", profiles: ["Peut mieux faire", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 127, text: "Quelques progrès perceptibles ce trimestre, mais les efforts doivent être amplifiés. Le potentiel est là !", profiles: ["Peut mieux faire", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 128, text: "Malgré les efforts fournis, les lacunes persistent. Il est important de cibler les points faibles et de demander de l'aide.", profiles: ["En difficulté", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 129, text: "Les difficultés engendrent un découragement qui aggrave la situation. Il est essentiel de persévérer.", profiles: ["En difficulté", "Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 130, text: "Un trimestre difficile, mais la volonté de progresser est là. Ces efforts doivent être maintenus et amplifiés.", profiles: ["En difficulté", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 131, text: "Les difficultés sont accentuées par un manque de participation. S'impliquer davantage est une première étape indispensable.", profiles: ["En difficulté", "Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 132, text: "L'investissement régulier est très appréciable et commence à porter ses fruits. Il faut poursuivre dans cette voie.", profiles: ["Travailleur·se", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 133, text: "Très à l'aise à l'oral et véritable moteur·rice des échanges. Une participation enthousiaste et de qualité.", profiles: ["À l'oral", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 134, text: "Une aisance à l'oral remarquable, mise au service d'une participation régulière et toujours pertinente.", profiles: ["À l'oral", "Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 135, text: "Une vraie aisance à l'oral et des connaissances solides. Il faut apprendre à s'exprimer au bon moment.", profiles: ["À l'oral", "Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 136, text: "D'excellentes productions écrites qui témoignent d'une vraie maîtrise. L'enjeu est de transposer cette aisance à l'oral.", profiles: ["À l'écrit", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 137, text: "Un enthousiasme et une implication remarquables. Il serait bénéfique de canaliser cet élan pour favoriser un tour de parole équitable.", profiles: ["Moteur·rice et impliqué·e", "Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 138, text: "Véritable moteur·rice de la classe, mais l'impatience nuit parfois à la dynamique. Apprendre à écouter serait un vrai atout.", profiles: ["Moteur·rice et impliqué·e", "Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 139, text: "Un investissement exemplaire. La précision linguistique est le dernier palier à franchir pour aller encore plus loin.", profiles: ["Moteur·rice et impliqué·e", "Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 140, text: "Des interventions intéressantes mais encore trop rares. Le manque de confiance freine une participation qui pourrait être bien plus riche.", profiles: ["Participatif·ve mais parfois trop discret·e", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 141, text: "Beaucoup d'enthousiasme et de vraies compétences, mais l'impatience et le bavardage perturbent parfois le cours.", profiles: ["Bavard·e mais compétent·e", "Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 142, text: "L'attitude en classe nuit à des résultats qui pourraient être bien meilleurs. Un changement de comportement est indispensable.", profiles: ["Problématique", "Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 143, text: "Des difficultés réelles auxquelles s'ajoute un comportement problématique. Il est urgent de remédier aux deux.", profiles: ["Problématique", "En difficulté"], classes: ALL, trimesters: ALL },
  { id: 144, text: "De très belles productions écrites et des interventions pertinentes, mais freinées par le manque de confiance.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 145, text: "Des moments d'implication encourageants, mais qui manquent encore de régularité. Il faut maintenir cet élan.", profiles: ["Actif·ve mais irrégulier·ère", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 146, text: "L'élève se décourage trop facilement, alors que les progrès sont réels. Il faut s'accrocher : le potentiel est là !", profiles: ["Défaitiste", "Encouragements"], classes: ALL, trimesters: ALL },

  // ══ TRIMESTRE 1 ══════════════════════════════════════════════════════════════

  { id: 147, text: "Très bons débuts en anglais. Un premier trimestre remarquable qui augure une belle année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T1 },
  { id: 148, text: "Premier trimestre excellent. Le niveau et l'investissement sont d'emblée au rendez-vous.", profiles: ["Excellent·e"], classes: ALL, trimesters: T1 },
  { id: 149, text: "Bon démarrage en anglais. Les bases sont solides dès ce premier trimestre.", profiles: ["Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 150, text: "Premier trimestre satisfaisant. Les acquis sont bien là et le travail sérieux.", profiles: ["Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 151, text: "Démarrage timide. Des efforts dès maintenant permettraient d'aborder le reste de l'année dans de meilleures conditions.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },
  { id: 152, text: "Début d'année poussif. Les capacités sont là, mais l'implication doit s'intensifier sans attendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },
  { id: 153, text: "Des difficultés dès ce premier trimestre qui nécessitent une prise en charge rapide pour ne pas creuser les lacunes.", profiles: ["En difficulté"], classes: ALL, trimesters: T1 },
  { id: 154, text: "Bonne entrée dans l'année : l'investissement est sérieux dès ce premier trimestre.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T1 },
  { id: 155, text: "Premiers résultats encourageants. Il faut maintenir cette dynamique tout au long de l'année.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 156, text: "Premier trimestre prometteur. La motivation perçue doit se confirmer dans la durée.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 157, text: "Un manque d'implication dès ce premier trimestre qui risque de pénaliser la progression sur toute l'année.", profiles: ["Passif·ve"], classes: ALL, trimesters: T1 },
  { id: 158, text: "Entrée dans l'année très dynamique. L'élève s'impose d'emblée comme un·e moteur·rice de la classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 159, text: "Dès ce premier trimestre, l'attitude en classe pose problème. Un cadre clair doit être posé sans tarder.", profiles: ["Problématique"], classes: ALL, trimesters: T1 },
  { id: 160, text: "Un premier trimestre en dents de scie. La régularité est à travailler dès à présent pour ne pas compromettre l'année.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T1 },

  // ══ TRIMESTRE 2 ══════════════════════════════════════════════════════════════

  { id: 161, text: "Le très bon niveau du premier trimestre se confirme. Beau second trimestre en anglais.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },
  { id: 162, text: "Le bon niveau du premier trimestre se maintient ce second trimestre. Les acquis sont solides.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 163, text: "Régulier·ère et sérieux·se, l'élève confirme son bon niveau en ce milieu d'année.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 164, text: "Peu d'amélioration par rapport au premier trimestre. Un véritable sursaut est nécessaire avant la fin de l'année.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 165, text: "Les difficultés du premier trimestre persistent. Un travail de fond est indispensable pour ne pas compromettre la fin d'année.", profiles: ["En difficulté"], classes: ALL, trimesters: T2 },
  { id: 166, text: "Par rapport au premier trimestre, une vraie progression est visible. Ces efforts doivent se confirmer au troisième trimestre.", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 167, text: "L'investissement constant depuis le début de l'année se reflète dans de bons résultats. Continuez !", profiles: ["Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 168, text: "Les résultats restent inégaux en ce milieu d'année. Il est encore temps de trouver la régularité nécessaire.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T2 },
  { id: 169, text: "L'attitude défaitiste persiste en ce second trimestre. Il faut impérativement s'accrocher pour finir l'année convenablement.", profiles: ["Défaitiste"], classes: ALL, trimesters: T2 },
  { id: 170, text: "La passivité du premier trimestre se confirme malheureusement. Il est encore temps de réagir avant la fin de l'année.", profiles: ["Passif·ve"], classes: ALL, trimesters: T2 },
  { id: 171, text: "L'enthousiasme et l'implication du premier trimestre se confirment. Beau second trimestre.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: T2 },

  // ══ TRIMESTRE 3 ══════════════════════════════════════════════════════════════

  { id: 172, text: "Belle fin d'année en anglais. Une progression constante qui se conclut par un bilan excellent.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 173, text: "Termine l'année sur une note remarquable. Un très haut niveau maintenu tout au long de l'année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 174, text: "Bilan de fin d'année satisfaisant. L'élève termine avec un bon niveau bien consolidé.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 175, text: "Fin d'année positive. Le niveau est solide et les acquis bien en place pour la suite.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 176, text: "Fin d'année en deçà des possibilités. L'an prochain, un engagement plus soutenu dès le départ est attendu.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T3 },
  { id: 177, text: "Bilan de fin d'année préoccupant. Il faudra aborder la rentrée avec plus de détermination et un travail régulier.", profiles: ["En difficulté"], classes: ALL, trimesters: T3 },
  { id: 178, text: "Fin d'année difficile malgré les efforts. Un travail de remise à niveau pendant les vacances serait très bénéfique.", profiles: ["En difficulté"], classes: ALL, trimesters: T3 },
  { id: 179, text: "Une belle fin d'année qui récompense un travail constant tout au long de l'année. Bravo !", profiles: ["Travailleur·se"], classes: ALL, trimesters: T3 },
  { id: 180, text: "Termine l'année comme il·elle l'a commencée : avec sérieux et régularité. Félicitations !", profiles: ["Travailleur·se"], classes: ALL, trimesters: T3 },
  { id: 181, text: "Termine l'année sur une note encourageante. La progression constatée donne de bonnes bases pour la rentrée.", profiles: ["Encouragements"], classes: ALL, trimesters: T3 },
  { id: 182, text: "Fin d'année trop passive qui pèse sur le bilan. L'an prochain, il faudra s'impliquer davantage dès le départ.", profiles: ["Passif·ve"], classes: ALL, trimesters: T3 },
  { id: 183, text: "Termine l'année en beauté avec le même enthousiasme et la même implication qu'au premier jour.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: T3 },
  { id: 184, text: "Fin d'année marquée par trop de résignation. L'an prochain, il faudra aborder les difficultés avec plus de détermination.", profiles: ["Défaitiste"], classes: ALL, trimesters: T3 },
  { id: 185, text: "Fin d'année marquée par des problèmes de comportement persistants. Un bilan décevant qui doit servir de leçon pour l'an prochain.", profiles: ["Problématique"], classes: ALL, trimesters: T3 },
  { id: 186, text: "Belle fin d'année à l'écrit : les dernières productions confirment une maîtrise solide et bien acquise.", profiles: ["À l'écrit"], classes: ALL, trimesters: T3 },
  { id: 187, text: "Termine l'année avec une réelle aisance à l'oral. Les progrès accomplis depuis septembre sont remarquables.", profiles: ["À l'oral"], classes: ALL, trimesters: T3 },

  // ══ SPÉCIFIQUE COLLÈGE (6ème–3ème) ══════════════════════════════════════════

  { id: 188, text: "Un niveau excellent pour ce niveau de collège. Félicitations pour ce très beau trimestre.", profiles: ["Excellent·e"], classes: COLLEGE, trimesters: ALL },
  { id: 189, text: "De bonnes bases acquises au collège qui permettent d'envisager sereinement la suite du cursus.", profiles: ["Bon niveau"], classes: COLLEGE, trimesters: ALL },
  { id: 190, text: "Des efforts à intensifier pour ne pas aborder le lycée avec des lacunes.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: ALL },
  { id: 191, text: "Des lacunes importantes à combler dès maintenant pour ne pas compromettre la suite de la scolarité.", profiles: ["En difficulté"], classes: COLLEGE, trimesters: ALL },

  // ══ SPÉCIFIQUE 6ème–5ème ═════════════════════════════════════════════════════

  { id: 192, text: "Très belle entrée dans l'apprentissage de l'anglais. Un niveau remarquable et prometteur pour la suite du cursus.", profiles: ["Excellent·e"], classes: EARLY, trimesters: ALL },
  { id: 193, text: "Un bon début dans l'apprentissage de l'anglais. Les bases se mettent bien en place.", profiles: ["Bon niveau"], classes: EARLY, trimesters: ALL },
  { id: 194, text: "Des bases à consolider rapidement pour ne pas prendre de retard dès ce début de cursus en anglais.", profiles: ["En difficulté"], classes: EARLY, trimesters: ALL },
  { id: 195, text: "De bons débuts dans l'apprentissage de l'anglais. La curiosité et l'enthousiasme sont là : il faut les entretenir.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
  { id: 196, text: "Un très bon investissement pour cette entrée en anglais. Le sérieux affiché dès à présent est de bon augure.", profiles: ["Travailleur·se"], classes: EARLY, trimesters: ALL },
  { id: 197, text: "Très belle première année d'anglais. L'élève prend goût à la langue et dynamise les échanges.", profiles: ["Moteur·rice et impliqué·e"], classes: EARLY, trimesters: ALL },
  { id: 198, text: "Une timidité compréhensible en début de cursus, mais qu'il faut dépasser pour progresser vraiment à l'oral.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: EARLY, trimesters: ALL },

  // ══ SPÉCIFIQUE LYCÉE (2nde–1ère–Terminale) ═══════════════════════════════════

  { id: 199, text: "Un excellent niveau qui répond pleinement aux exigences du lycée.", profiles: ["Excellent·e"], classes: LYCEE, trimesters: ALL },
  { id: 200, text: "Un bon niveau qui permet d'aborder sereinement les exigences croissantes du lycée.", profiles: ["Bon niveau"], classes: LYCEE, trimesters: ALL },
  { id: 201, text: "Les exigences du lycée demandent un investissement plus soutenu. Il est important de se mobiliser sans tarder.", profiles: ["Peut mieux faire"], classes: LYCEE, trimesters: ALL },
  { id: 202, text: "Les lacunes constatées sont préoccupantes au regard des exigences du lycée. Un travail ciblé est indispensable.", profiles: ["En difficulté"], classes: LYCEE, trimesters: ALL },
  { id: 203, text: "L'investissement régulier dont fait preuve l'élève est particulièrement appréciable au niveau lycée.", profiles: ["Travailleur·se"], classes: LYCEE, trimesters: ALL },

  // ══ SPÉCIFIQUE TERMINALE ══════════════════════════════════════════════════════

  { id: 204, text: "Un niveau remarquable à l'approche du baccalauréat. La maîtrise de l'anglais est pleinement au rendez-vous.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },
  { id: 205, text: "Excellent niveau en cette année décisive. L'élève aborde l'épreuve du baccalauréat avec de solides atouts.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },
  { id: 206, text: "Un bon niveau en cette année de terminale. Les compétences sont bien acquises pour aborder le baccalauréat sereinement.", profiles: ["Bon niveau"], classes: TERM, trimesters: ALL },
  { id: 207, text: "En cette année décisive, l'implication doit s'intensifier pour aborder le baccalauréat dans les meilleures conditions.", profiles: ["Peut mieux faire"], classes: TERM, trimesters: ALL },
  { id: 208, text: "Les lacunes constatées sont préoccupantes à l'approche du baccalauréat. Un travail intensif et régulier est indispensable.", profiles: ["En difficulté"], classes: TERM, trimesters: ALL },
  { id: 209, text: "Le sérieux dont fait preuve l'élève en cette année de terminale est très appréciable et devrait lui permettre de réussir l'épreuve.", profiles: ["Travailleur·se"], classes: TERM, trimesters: ALL },
  { id: 210, text: "L'attitude en classe est préoccupante en cette année du baccalauréat. Un changement est impératif.", profiles: ["Problématique"], classes: TERM, trimesters: ALL },

  // ══ TERMINALE + TRIMESTRE 1 ═══════════════════════════════════════════════════

  { id: 211, text: "Premier trimestre de terminale très encourageant. Cette dynamique doit se maintenir tout au long de cette année décisive.", profiles: ["Encouragements"], classes: TERM, trimesters: T1 },
  { id: 212, text: "Excellent premier trimestre de terminale. Le niveau est au rendez-vous pour cette année du baccalauréat.", profiles: ["Excellent·e"], classes: TERM, trimesters: T1 },
  { id: 213, text: "Début de terminale difficile. Il est urgent de réagir pour ne pas compromettre les chances au baccalauréat.", profiles: ["En difficulté"], classes: TERM, trimesters: T1 },

  // ══ TERMINALE + TRIMESTRE 3 ═══════════════════════════════════════════════════

  { id: 214, text: "Fin de lycée et fin d'année remarquables. L'élève aborde le baccalauréat avec un niveau et une maîtrise exemplaires.", profiles: ["Excellent·e"], classes: TERM, trimesters: T3 },
  { id: 215, text: "Un bilan final positif à l'aube du baccalauréat. Le niveau est solide et les acquis bien en place.", profiles: ["Bon niveau"], classes: TERM, trimesters: T3 },
  { id: 216, text: "Un bilan final préoccupant à l'aube du baccalauréat. Une révision intensive est plus que jamais nécessaire.", profiles: ["En difficulté"], classes: TERM, trimesters: T3 },
];

export const BILANS: Bilan[] = [
  // ── Tous — génériques ─────────────────────────────────────────────────────────
  { id: 1,  text: "La classe fait preuve d'une bonne dynamique de groupe. Les résultats sont globalement satisfaisants ce trimestre.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "Trimestre encourageant pour la majorité des élèves. La progression est notable et les efforts sont à souligner.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Classe hétérogène mais impliquée dans l'ensemble. Les résultats reflètent l'investissement de chacun.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Un bon trimestre dans l'ensemble, avec des niveaux très variés. L'entraide entre élèves est à encourager.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "Classe sérieuse et appliquée. Le niveau général est satisfaisant et globalement en progression.", profiles: ["Tous"], classes: ALL, trimesters: ALL },

  // ── Excellent·e ───────────────────────────────────────────────────────────────
  { id: 6,  text: "Quelques élèves se distinguent par leur excellence et tirent le niveau de la classe vers le haut.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Le groupe de tête affiche d'excellents résultats et participe activement à la dynamique positive de classe.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Les meilleurs éléments de la classe font preuve d'une maîtrise remarquable de l'anglais, à l'oral comme à l'écrit.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Les élèves les plus avancés continuent de progresser et représentent une source d'inspiration pour leurs camarades.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },

  // ── Bon niveau ────────────────────────────────────────────────────────────────
  { id: 10, text: "Un groupe solide tire la classe vers le haut par ses résultats réguliers et sa participation active.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 11, text: "La majorité des élèves présente un bon niveau d'ensemble. Les bases sont solides et les acquis bien consolidés.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Les élèves de bon niveau contribuent positivement à la dynamique de classe et à la richesse des échanges.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 13, text: "Un niveau satisfaisant pour la majeure partie de la classe, avec des résultats réguliers.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  // ── Peut mieux faire ──────────────────────────────────────────────────────────
  { id: 14, text: "Un certain nombre d'élèves pourraient améliorer leurs résultats avec plus d'implication et de régularité.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Les capacités sont là, mais l'investissement devrait être plus soutenu pour plusieurs élèves.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 16, text: "Quelques élèves n'exploitent pas pleinement leur potentiel. Des efforts supplémentaires sont attendus.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 17, text: "Des résultats en demi-teinte pour une partie de la classe. La régularité du travail ferait la différence.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  // ── En difficulté ─────────────────────────────────────────────────────────────
  { id: 18, text: "Plusieurs élèves sont en difficulté et nécessitent un soutien accru. Un travail de remédiation est mis en place.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 19, text: "Un groupe d'élèves peine à suivre le rythme. Il est important d'identifier les lacunes pour y remédier rapidement.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 20, text: "Des difficultés persistantes pour certains élèves. La persévérance et le soutien familial sont essentiels.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 21, text: "Le groupe des élèves en difficulté nécessite une attention particulière. Des aides et un accompagnement sont proposés.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },

  // ── Travailleur·se ────────────────────────────────────────────────────────────
  { id: 22, text: "Le sérieux et l'investissement d'une grande partie de la classe sont très appréciables.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "La classe fait preuve d'un travail régulier et consciencieux qui se reflète positivement dans les résultats.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'implication des élèves est globalement bonne. Le travail fourni est sérieux et régulier.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "Une classe travailleuse dans l'ensemble. Les efforts fournis sont visibles et les résultats à la hauteur.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },

  // ── À l'oral ──────────────────────────────────────────────────────────────────
  { id: 26, text: "La classe s'exprime avec de plus en plus d'aisance à l'oral. Les progrès sont encourageants.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "L'expression orale progresse globalement bien. Les échanges sont de plus en plus fluides et pertinents.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "De belles avancées à l'oral pour l'ensemble de la classe. Il convient de maintenir cet effort.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "L'oral reste un point à travailler pour une partie de la classe. Des exercices réguliers sont proposés.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },

  // ── À l'écrit ─────────────────────────────────────────────────────────────────
  { id: 30, text: "L'expression écrite progresse globalement de manière satisfaisante pour la majorité des élèves.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 31, text: "Les productions écrites témoignent d'un effort de structuration et de précision encourageant.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'écrit demande encore un travail de consolidation pour une partie de la classe.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "Des progrès notables à l'écrit pour la majorité des élèves ce trimestre.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },

  // ── Passif·ve ─────────────────────────────────────────────────────────────────
  { id: 34, text: "La passivité de certains élèves est un frein aux apprentissages. Une participation plus active est attendue.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Trop d'élèves restent en retrait. Il est essentiel de s'impliquer davantage pour progresser en anglais.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 36, text: "Un manque d'implication général est à noter. Les élèves doivent s'investir plus activement en cours.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "Certains élèves restent trop passifs et ne profitent pas pleinement des échanges en classe.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },

  // ── Encouragements ────────────────────────────────────────────────────────────
  { id: 38, text: "Des progrès réels qui méritent d'être encouragés. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Une progression perceptible pour plusieurs élèves. Ces efforts doivent être maintenus et amplifiés.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 40, text: "La classe avance dans le bon sens. Ces encouragements doivent motiver chacun à persévérer.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 41, text: "De bonnes intentions et des efforts réels. Il faut continuer à s'investir pour confirmer ces progrès.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  // ── Problématique ─────────────────────────────────────────────────────────────
  { id: 42, text: "Le comportement de certains élèves perturbe le bon déroulement des séances. Une remise au point collective a été nécessaire.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 43, text: "Des problèmes de comportement récurrents nuisent à l'ambiance de travail. Un avertissement a été donné.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 44, text: "L'attitude en classe de quelques élèves est préoccupante et pénalise l'ensemble du groupe.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Des tensions perturbent le bon fonctionnement de la classe. Un travail sur le respect mutuel est en cours.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },

  // ══ MULTI-PROFILS — génériques ════════════════════════════════════════════════
  { id: 46, text: "La classe dans son ensemble fait preuve de bonne volonté. Des progrès visibles méritent d'être encouragés.", profiles: ["Tous", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 47, text: "La classe affiche un bon niveau général, soutenu par un travail régulier et sérieux.", profiles: ["Bon niveau", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 48, text: "Un bon niveau général, particulièrement visible à l'oral où les échanges sont de plus en plus riches.", profiles: ["Bon niveau", "À l'oral"], classes: ALL, trimesters: ALL },
  { id: 49, text: "Le niveau général est bon, mais la participation reste insuffisante. Il faut oser prendre la parole.", profiles: ["Bon niveau", "Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 50, text: "Une partie de la classe dispose des ressources pour mieux faire, mais le manque d'implication plombe les résultats.", profiles: ["Peut mieux faire", "Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 51, text: "Trimestre difficile pour une partie des élèves, mais la volonté de progresser est perceptible. Ces efforts méritent d'être soutenus.", profiles: ["En difficulté", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 52, text: "Malgré les difficultés que rencontrent certains élèves, le travail fourni est sérieux. Un accompagnement ciblé permettrait de les débloquer.", profiles: ["En difficulté", "Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 53, text: "La classe présente un niveau global élevé, avec un groupe de tête solide et une majorité d'élèves de bon niveau.", profiles: ["Excellent·e", "Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 54, text: "Les difficultés de certains élèves sont aggravées par un manque d'implication. S'engager davantage est la première condition du progrès.", profiles: ["Passif·ve", "En difficulté"], classes: ALL, trimesters: ALL },
  { id: 55, text: "Des comportements problématiques pèsent sur le climat et tirent les résultats vers le bas. Un changement d'attitude collectif est nécessaire.", profiles: ["Problématique", "Peut mieux faire"], classes: ALL, trimesters: ALL },

  // ══ TRIMESTRE 1 ══════════════════════════════════════════════════════════════
  { id: 56, text: "Bonne entrée dans l'année pour la classe. Le premier trimestre est globalement satisfaisant et donne de bonnes bases.", profiles: ["Tous"], classes: ALL, trimesters: T1 },
  { id: 57, text: "Premier trimestre encourageant. Les élèves se sont bien mis au travail dès le début de l'année.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 58, text: "Dès ce premier trimestre, des difficultés sont à signaler. Il est important d'agir rapidement.", profiles: ["En difficulté"], classes: ALL, trimesters: T1 },
  { id: 59, text: "Le groupe de tête s'illustre dès ce premier trimestre. Un niveau excellent qui donne le ton pour l'année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T1 },

  // ══ TRIMESTRE 2 ══════════════════════════════════════════════════════════════
  { id: 60, text: "En ce milieu d'année, la classe confirme la dynamique du premier trimestre. Le niveau est stable et les résultats satisfaisants.", profiles: ["Tous"], classes: ALL, trimesters: T2 },
  { id: 61, text: "Par rapport au premier trimestre, une progression collective est perceptible. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 62, text: "Les difficultés du premier trimestre persistent pour plusieurs élèves. Un travail de remédiation est en cours.", profiles: ["En difficulté"], classes: ALL, trimesters: T2 },
  { id: 63, text: "Le niveau excellent du premier trimestre se confirme en ce second trimestre. Très beau bilan à mi-année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },

  // ══ TRIMESTRE 3 ══════════════════════════════════════════════════════════════
  { id: 64, text: "Belle fin d'année pour la classe. Le bilan est globalement positif et la progression est au rendez-vous.", profiles: ["Tous"], classes: ALL, trimesters: T3 },
  { id: 65, text: "La classe termine l'année sur une note encourageante. Les progrès accomplis depuis septembre sont visibles.", profiles: ["Encouragements"], classes: ALL, trimesters: T3 },
  { id: 66, text: "Fin d'année difficile pour plusieurs élèves. Un travail de remise à niveau pendant les vacances serait bénéfique.", profiles: ["En difficulté"], classes: ALL, trimesters: T3 },
  { id: 67, text: "La classe termine l'année en beauté. Le groupe de tête maintient un niveau remarquable jusqu'au bout.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 68, text: "Un bilan de fin d'année décevant pour une partie de la classe. L'an prochain devra démarrer sur de meilleures bases.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T3 },

  // ══ TERMINALE ════════════════════════════════════════════════════════════════
  { id: 69, text: "La classe de terminale affiche un niveau solide à l'approche du baccalauréat. La maîtrise de l'anglais est globalement bien acquise.", profiles: ["Tous"], classes: TERM, trimesters: ALL },
  { id: 70, text: "Des lacunes préoccupantes pour une partie de la classe à l'approche du baccalauréat. Un travail intensif est indispensable.", profiles: ["En difficulté"], classes: TERM, trimesters: ALL },
  { id: 71, text: "Le groupe de tête de cette terminale aborde le baccalauréat avec un excellent niveau et de solides atouts.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },

  // ══ 6ème–5ème ════════════════════════════════════════════════════════════════
  { id: 72, text: "Bonne entrée dans l'apprentissage de l'anglais pour la classe. L'enthousiasme est au rendez-vous.", profiles: ["Tous"], classes: EARLY, trimesters: ALL },
  { id: 73, text: "La classe montre un bel enthousiasme pour l'anglais. Cette curiosité est à entretenir et à encourager.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
];
