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
  //  Excellent·e â” génériques 
  { id: 1,  text: "Élève remarquable qui maîtrise parfaitement les compétences attendues en anglais. Excellent trimestre.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "Très beau niveau en anglais. Les productions écrites et orales témoignent d'une grande maîtrise de la langue.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Excellents résultats ce trimestre. L'élève fait preuve d'une aisance remarquable à l'écrit comme à l'oral.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Niveau excellent. Les interventions sont toujours pertinentes et les écrits d'une grande qualité.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "Très beau trimestre. La maîtrise de l'anglais est impressionnante, tant à l'oral qu'à l'écrit. Continuez ainsi !", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },

  //  Bon niveau â” génériques 
  { id: 6,  text: "Bon trimestre en anglais. Les acquis sont solides et les résultats satisfaisants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Bon niveau général en anglais. Les compétences sont bien maîtrisées et le travail régulier.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Bons résultats ce trimestre. L'élève s'engage sérieusement dans les apprentissages.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Niveau satisfaisant en anglais. Les bases sont solides et les résultats encourageants.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 10, text: "Bon travail ce trimestre. Les efforts fournis se reflètent positivement dans les résultats.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  //  Peut mieux faire â” génériques 
  { id: 11, text: "Des capacités certaines qui ne sont pas encore pleinement exploitées. Des efforts supplémentaires permettraient d'obtenir de meilleurs résultats.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Le niveau pourrait être meilleur avec plus d'implication. Il convient de se montrer plus régulier·ère dans le travail.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 13, text: "Résultats en demi-teinte. Les capacités sont là mais le travail manque de régularité.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 14, text: "Trimestre moyen. Un investissement plus soutenu est attendu pour le prochain trimestre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Des acquis fragiles qui demandent à être consolidés. Un travail plus régulier est nécessaire.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  //  En difficulté â” génériques 
  { id: 16, text: "Trimestre difficile en anglais. Il est important de consolider les bases et de solliciter davantage l'aide du professeur.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 17, text: "L'élève rencontre des difficultés persistantes en anglais. Un travail régulier à la maison est indispensable.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 18, text: "Des lacunes importantes sont à combler. Je reste disponible pour accompagner l'élève dans ses progrès.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 19, text: "La situation est préoccupante. Un soutien et un investissement plus importants sont nécessaires pour progresser.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 20, text: "Malgré des difficultés réelles, il faut persévérer. Chaque effort compte et les progrès sont possibles.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },

  //  Travailleur·se â” génériques 
  { id: 21, text: "Élève sérieux·se et travailleur·se. L'investissement régulier finit toujours par payer. Continuez ainsi !", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 22, text: "Je salue le sérieux et la persévérance dont fait preuve l'élève tout au long de ce trimestre.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "Un travail régulier et consciencieux qui mérite d'être encouragé. Beau trimestre.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'application et la rigueur dont fait preuve l'élève sont exemplaires et pleinement récompensées.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "Très bon trimestre sur le plan du travail. L'engagement est constant et très appréciable.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },

  //  À l'oral â” génériques 
  { id: 26, text: "De belles qualités à l'oral. L'élève s'exprime avec aisance et pertinence en anglais.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "Très à l'aise à l'oral, les interventions sont riches, bien construites et spontanées.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "L'expression orale est le point fort de l'élève. Il convient maintenant de travailler davantage à l'écrit pour équilibrer les compétences.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "Belle maîtrise de l'expression orale. La prise de parole est spontanée et bien articulée.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 30, text: "Les progrès à l'oral sont notables ce trimestre. La confiance et la fluidité sont au rendez-vous.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },

  //  À l'écrit â” génériques 
  { id: 31, text: "De belles qualités à l'écrit. Les productions sont soignées, structurées et linguistiquement riches.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'expression écrite est le point fort de l'élève. Les travaux écrits sont de très bonne facture.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "Très bon travail à l'écrit. Il serait bénéfique d'oser davantage s'exprimer à l'oral.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 34, text: "Les productions écrites témoignent d'une bonne maîtrise de la langue. Bel effort de précision.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Bonne maîtrise à l'écrit ce trimestre. Les efforts de rédaction sont visibles et très appréciés.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },

  //  Passif·ve â” génériques 
  { id: 36, text: "Une participation trop effacée qui pénalise la progression. Il est important de s'impliquer davantage en cours.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "L'élève reste trop en retrait. Une prise d'initiative plus fréquente serait bénéfique pour progresser.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 38, text: "Le manque de participation est préjudiciable. Il faut oser prendre la parole et s'engager davantage.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Trimestre trop passif·ve. Les compétences existent mais restent inexploitées faute d'engagement suffisant.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 40, text: "Il est dommage de constater une telle passivité. S'impliquer davantage permettrait à l'élève de progresser significativement.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },

  //  Encouragements â” génériques 
  { id: 41, text: "Des efforts encourageants ce trimestre. Il faut continuer dans cette voie pour consolider les acquis.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 42, text: "Je perçois une progression réelle. Ces encouragements doivent motiver l'élève à poursuivre ses efforts.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 43, text: "On sent la volonté de progresser, c'est très positif. Gardons cette dynamique pour le prochain trimestre !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 44, text: "Bon courage pour la suite ! Les efforts fournis commencent à porter leurs fruits.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Une progression perceptible qui mérite d'être soulignée. Continuez avec le même investissement !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  //  Problématique â” génériques 
  { id: 46, text: "Le comportement en classe perturbe le bon déroulement des cours. Un changement d'attitude est indispensable.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 47, text: "Des difficultés de comportement qui nuisent aux apprentissages. Il est urgent de remédier à cette situation.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 48, text: "L'attitude en classe est problématique et pénalise l'élève ainsi que ses camarades. Des efforts sont attendus.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 49, text: "Malgré les mises en garde répétées, le comportement reste inadapté au cadre scolaire.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 50, text: "La situation nécessite une remise au point. L'attitude en classe doit impérativement changer.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },

  //  Discret·e mais sérieux·se 
  { id: 51, text: "Élève discret·e mais dont le sérieux et l'investissement ne font aucun doute. Beau travail ce trimestre.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 52, text: "Une participation discrète mais un travail rigoureux et des résultats solides. Bravo !", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 53, text: "Sans être très bavard·e, l'élève travaille sérieusement et produit un travail de qualité constante.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 54, text: "La discrétion ne doit pas faire oublier la qualité du travail fourni. Félicitations pour ce trimestre.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },

  //  Bavard·e mais compétent·e 
  { id: 55, text: "Un enthousiasme parfois envahissant mais une vraie maîtrise de l'anglais. Il faut apprendre à canaliser son énergie.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 56, text: "Très bavard·e mais les connaissances sont là. Mieux gérer sa prise de parole serait bénéfique pour tous.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 57, text: "De l'entrain et de la compétence ! Il s'agit maintenant de savoir s'exprimer au bon moment.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 58, text: "La vivacité de l'élève doit être canalisée : les compétences sont indéniables, mais il faut savoir s'imposer des limites.", profiles: ["Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },

  //  Défaitiste 
  { id: 59, text: "L'élève se décourage trop facilement. Il faut croire davantage en ses capacités pour progresser.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 60, text: "L'attitude défaitiste freine la progression. Les capacités sont réelles, il faut apprendre à se faire confiance.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 61, text: "Trop de négativité face aux difficultés. Persévérer est la clé du succès en langue étrangère.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 62, text: "Il est dommage de baisser les bras si facilement. Avec de la persévérance, les progrès viendraient sûrement.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },

  //  Moteur·rice et impliqué·e 
  { id: 63, text: "Véritable moteur·rice de la classe. L'implication et l'enthousiasme de l'élève sont exemplaires.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 64, text: "Très impliqué·e, l'élève entraîne la classe dans une dynamique positive. Excellent trimestre.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 65, text: "Une participation active et stimulante. L'élève est un·e atout pour la dynamique de classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 66, text: "L'investissement et l'enthousiasme de l'élève sont communicatifs. C'est un plaisir de travailler en classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 67, text: "Moteur·rice en cours, l'élève dynamise les échanges et contribue à l'ambiance studieuse de la classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },

  //  Participation régulière et pertinente 
  { id: 68, text: "Une participation régulière et de qualité. Les interventions sont toujours pertinentes et enrichissent le cours.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 69, text: "Très belle participation ce trimestre. L'élève s'implique régulièrement et avec beaucoup d'à-propos.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 70, text: "La participation est un modèle de régularité et de pertinence. Félicitations pour ce beau trimestre !", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 71, text: "Interventions fréquentes et toujours bien construites. Un vrai plaisir à avoir en classe.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },

  //  Bon niveau, participation à parfaire 
  { id: 72, text: "Bon niveau en anglais mais la participation en classe reste insuffisante. Il faut oser davantage s'exprimer.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 73, text: "De bonnes bases qui méritent d'être mises en valeur par une participation plus active en cours.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 74, text: "Les compétences sont là mais elles peinent à se manifester à l'oral. Il faut lever la main plus souvent !", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 75, text: "Bon travail à l'écrit, mais la participation orale est encore trop rare. Osez prendre la parole !", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },

  //  Actif·ve mais irrégulier·ère 
  { id: 76, text: "De bonnes journées alternent avec des périodes plus creuses. Une participation plus constante est attendue.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 77, text: "Actif·ve par intermittence. Il faudrait maintenir ce niveau d'engagement tout au long du trimestre.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 78, text: "La participation est variable. Un engagement plus régulier permettrait d'obtenir de meilleurs résultats.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 79, text: "On sent que l'élève peut donner bien plus. L'irrégularité de l'engagement est le principal frein à la progression.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },

  //  Moteur·rice mais parfois impatient·e 
  { id: 80, text: "Très impliqué·e en cours, l'élève doit néanmoins apprendre à laisser davantage de place aux autres.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 81, text: "Un enthousiasme réel qui se transforme parfois en impatience. Il faut veiller à respecter le rythme de chacun.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 82, text: "Excellent engagement mais l'impatience prend parfois le dessus. Un peu de retenue serait bénéfique.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 83, text: "Moteur·rice de la classe mais parfois emporté·e par l'enthousiasme. Travailler sur l'écoute serait très profitable.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },

  //  Très impliqué·e, tend à monopoliser la parole 
  { id: 84, text: "Un investissement remarquable, mais l'élève doit veiller à laisser plus de place à ses camarades.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 85, text: "L'implication est totale, ce qui est très appréciable. Il faudrait néanmoins ne pas monopoliser la parole.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 86, text: "Très volontaire et impliqué·e. Il serait bénéfique de canaliser cet enthousiasme pour favoriser la participation de toute la classe.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 87, text: "Participation enthousiaste et de qualité, mais qui gagnerait à se modérer pour favoriser un tour de parole équitable.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },

  //  Participatif·ve mais parfois trop discret·e 
  { id: 88, text: "Participation présente mais encore trop timide. L'élève a toutes les ressources pour s'exprimer davantage.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 89, text: "On perçoit la volonté de participer, mais la timidité freine encore trop souvent l'expression orale.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 90, text: "Des interventions intéressantes mais trop rares. Gagnez en confiance et osez prendre la parole plus souvent !", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 91, text: "Participatif·ve mais encore trop discret·e. Il ne faut pas hésiter à se lancer : les idées sont là !", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },

  //  Engagé·e à l'écrit, réservé·e à l'oral 
  { id: 92, text: "De très bonnes productions écrites mais une timidité à l'oral qui freine la progression. Il faut oser !", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 93, text: "L'aisance à l'écrit est remarquable. Il est maintenant temps de transposer cette maîtrise à l'expression orale.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 94, text: "Très bon·ne à l'écrit, plus réservé·e à l'oral. Un rééquilibrage des compétences est à travailler.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 95, text: "Les écrits sont excellents. L'oral reste le prochain défi à relever avec confiance et persévérance.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },

  //  Participe bien mais manque de confiance 
  { id: 96,  text: "Une participation de qualité malgré un manque de confiance visible. Il faut croire davantage en ses capacités !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 97,  text: "L'élève participe avec sérieux mais semble douter de lui·elle. Pourtant, les réponses sont souvent très justes !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 98,  text: "Bon niveau mais manque de confiance en soi. Se faire confiance permettrait d'exploiter pleinement son potentiel.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 99,  text: "Les interventions sont pertinentes mais hésitantes. Il faut oser s'affirmer davantage : les connaissances sont là !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },

  //  Moteur·rice, à progresser sur la précision 
  { id: 100, text: "Très impliqué·e et stimulant·e pour la classe. Il faut maintenant travailler la précision de la langue pour aller encore plus loin.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 101, text: "Bel enthousiasme et belle implication. Le prochain objectif est de gagner en précision linguistique.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 102, text: "Moteur·rice en classe, l'élève doit maintenant soigner la rigueur de ses productions pour progresser davantage.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },
  { id: 103, text: "Une participation dynamique et engagée. La progression passe désormais par un travail plus fin sur la précision.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â” génériques 

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

  // â•â• TRIMESTRE 1 

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

  // â•â• TRIMESTRE 2 

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

  // â•â• TRIMESTRE 3 

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

  // â•â• SPÉCIFIQUE COLLÈGE (6èmeâ“3ème) â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 188, text: "Un niveau excellent pour ce niveau de collège. Félicitations pour ce très beau trimestre.", profiles: ["Excellent·e"], classes: COLLEGE, trimesters: ALL },
  { id: 189, text: "De bonnes bases acquises au collège qui permettent d'envisager sereinement la suite du cursus.", profiles: ["Bon niveau"], classes: COLLEGE, trimesters: ALL },
  { id: 190, text: "Des efforts à intensifier pour ne pas aborder le lycée avec des lacunes.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: ALL },
  { id: 191, text: "Des lacunes importantes à combler dès maintenant pour ne pas compromettre la suite de la scolarité.", profiles: ["En difficulté"], classes: COLLEGE, trimesters: ALL },

  // â•â• SPÉCIFIQUE 6èmeâ“5ème â•â•â•â•â•â•

  { id: 192, text: "Très belle entrée dans l'apprentissage de l'anglais. Un niveau remarquable et prometteur pour la suite du cursus.", profiles: ["Excellent·e"], classes: EARLY, trimesters: ALL },
  { id: 193, text: "Un bon début dans l'apprentissage de l'anglais. Les bases se mettent bien en place.", profiles: ["Bon niveau"], classes: EARLY, trimesters: ALL },
  { id: 194, text: "Des bases à consolider rapidement pour ne pas prendre de retard dès ce début de cursus en anglais.", profiles: ["En difficulté"], classes: EARLY, trimesters: ALL },
  { id: 195, text: "De bons débuts dans l'apprentissage de l'anglais. La curiosité et l'enthousiasme sont là : il faut les entretenir.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
  { id: 196, text: "Un très bon investissement pour cette entrée en anglais. Le sérieux affiché dès à présent est de bon augure.", profiles: ["Travailleur·se"], classes: EARLY, trimesters: ALL },
  { id: 197, text: "Très belle première année d'anglais. L'élève prend goût à la langue et dynamise les échanges.", profiles: ["Moteur·rice et impliqué·e"], classes: EARLY, trimesters: ALL },
  { id: 198, text: "Une timidité compréhensible en début de cursus, mais qu'il faut dépasser pour progresser vraiment à l'oral.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: EARLY, trimesters: ALL },

  // â•â• SPÉCIFIQUE LYCÉE (2ndeâ“1èreâ“Terminale) â•â•â•â•â•

  { id: 199, text: "Un excellent niveau qui répond pleinement aux exigences du lycée.", profiles: ["Excellent·e"], classes: LYCEE, trimesters: ALL },
  { id: 200, text: "Un bon niveau qui permet d'aborder sereinement les exigences croissantes du lycée.", profiles: ["Bon niveau"], classes: LYCEE, trimesters: ALL },
  { id: 201, text: "Les exigences du lycée demandent un investissement plus soutenu. Il est important de se mobiliser sans tarder.", profiles: ["Peut mieux faire"], classes: LYCEE, trimesters: ALL },
  { id: 202, text: "Les lacunes constatées sont préoccupantes au regard des exigences du lycée. Un travail ciblé est indispensable.", profiles: ["En difficulté"], classes: LYCEE, trimesters: ALL },
  { id: 203, text: "L'investissement régulier dont fait preuve l'élève est particulièrement appréciable au niveau lycée.", profiles: ["Travailleur·se"], classes: LYCEE, trimesters: ALL },

  // â•â• SPÉCIFIQUE TERMINALE â•â•â•â•â•â•â•

  { id: 204, text: "Un niveau remarquable à l'approche du baccalauréat. La maîtrise de l'anglais est pleinement au rendez-vous.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },
  { id: 205, text: "Excellent niveau en cette année décisive. L'élève aborde l'épreuve du baccalauréat avec de solides atouts.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },
  { id: 206, text: "Un bon niveau en cette année de terminale. Les compétences sont bien acquises pour aborder le baccalauréat sereinement.", profiles: ["Bon niveau"], classes: TERM, trimesters: ALL },
  { id: 207, text: "En cette année décisive, l'implication doit s'intensifier pour aborder le baccalauréat dans les meilleures conditions.", profiles: ["Peut mieux faire"], classes: TERM, trimesters: ALL },
  { id: 208, text: "Les lacunes constatées sont préoccupantes à l'approche du baccalauréat. Un travail intensif et régulier est indispensable.", profiles: ["En difficulté"], classes: TERM, trimesters: ALL },
  { id: 209, text: "Le sérieux dont fait preuve l'élève en cette année de terminale est très appréciable et devrait lui permettre de réussir l'épreuve.", profiles: ["Travailleur·se"], classes: TERM, trimesters: ALL },
  { id: 210, text: "L'attitude en classe est préoccupante en cette année du baccalauréat. Un changement est impératif.", profiles: ["Problématique"], classes: TERM, trimesters: ALL },

  // â•â• TERMINALE + TRIMESTRE 1 â•â•â•â•

  { id: 211, text: "Premier trimestre de terminale très encourageant. Cette dynamique doit se maintenir tout au long de cette année décisive.", profiles: ["Encouragements"], classes: TERM, trimesters: T1 },
  { id: 212, text: "Excellent premier trimestre de terminale. Le niveau est au rendez-vous pour cette année du baccalauréat.", profiles: ["Excellent·e"], classes: TERM, trimesters: T1 },
  { id: 213, text: "Début de terminale difficile. Il est urgent de réagir pour ne pas compromettre les chances au baccalauréat.", profiles: ["En difficulté"], classes: TERM, trimesters: T1 },

  // â•â• TERMINALE + TRIMESTRE 3 â•â•â•â•

  { id: 214, text: "Fin de lycée et fin d'année remarquables. L'élève aborde le baccalauréat avec un niveau et une maîtrise exemplaires.", profiles: ["Excellent·e"], classes: TERM, trimesters: T3 },
  { id: 215, text: "Un bilan final positif à l'aube du baccalauréat. Le niveau est solide et les acquis bien en place.", profiles: ["Bon niveau"], classes: TERM, trimesters: T3 },
  { id: 216, text: "Un bilan final préoccupant à l'aube du baccalauréat. Une révision intensive est plus que jamais nécessaire.", profiles: ["En difficulté"], classes: TERM, trimesters: T3 },

  // â•
  // NOUVELLES APPRÉCIATIONS â” IDs 217 à 316
  // 50 mono-profil + 50 multi-profils, répartis classes/trimestres/profils
  // â•

  //  Excellent·e 
  { id: 217, text: "Une maîtrise de l'anglais tout à fait remarquable. La richesse du vocabulaire et la fluidité de l'expression témoignent d'un travail approfondi.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 218, text: "L'élève se distingue par une aisance linguistique impressionnante. Les productions orales et écrites sont toujours d'une grande qualité.", profiles: ["Excellent·e"], classes: LYCEE, trimesters: ALL },
  { id: 219, text: "Un premier trimestre éblouissant. La maîtrise de la langue est sans faille et les ambitions sont à la hauteur du talent.", profiles: ["Excellent·e"], classes: ALL, trimesters: T1 },
  { id: 220, text: "Fin d'année magistrale. L'élève aura progressé tout au long de l'année pour atteindre un niveau véritablement exceptionnel.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 221, text: "Un deuxième trimestre remarquable. La constance et la rigueur font de cet·te élève un·e véritable modèle dans la classe.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },
  { id: 222, text: "L'excellence dont fait preuve l'élève dans toutes les activités de classe â” compréhension, expression, interaction â” est très appréciable.", profiles: ["Excellent·e"], classes: COLLEGE, trimesters: ALL },

  //  Bon niveau 
  { id: 223, text: "Des bases bien établies et une progression régulière. Il ne manque qu'un peu d'audace pour franchir le palier suivant.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 224, text: "Un deuxième trimestre solide qui confirme la dynamique du début d'année. Les acquis se consolident à un bon rythme.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 225, text: "Bon niveau d'ensemble à l'entrée au lycée. Les exigences croissantes seront abordées avec de solides atouts.", profiles: ["Bon niveau"], classes: ["2nde"], trimesters: T1 },
  { id: 226, text: "Les résultats de fin d'année reflètent un travail sérieux et des compétences bien ancrées. Bonne continuation !", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },

  //  Peut mieux faire 
  { id: 227, text: "L'élève navigue en dessous de ses capacités réelles. Un regain d'investissement changerait radicalement la donne.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 228, text: "Deuxième trimestre décevant au regard du potentiel affiché en début d'année. Il est encore temps de se reprendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 229, text: "Fin d'année en deçà des attentes. L'an prochain, une implication sérieuse dès les premières semaines est indispensable.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: T3 },
  { id: 230, text: "Des efforts ponctuels mais insuffisants pour s'inscrire dans une réelle progression. La régularité reste le défi principal.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },

  //  En difficulté 
  { id: 231, text: "Les bases grammaticales et lexicales présentent des lacunes importantes. Un travail ciblé et régulier est indispensable.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 232, text: "Malgré les difficultés, une attitude sérieuse est perceptible. Cet état d'esprit est la première condition pour progresser.", profiles: ["En difficulté"], classes: ALL, trimesters: T2 },
  { id: 233, text: "Les lacunes s'accumulent depuis le début de l'année. Un travail de fond pendant les vacances scolaires est fortement conseillé.", profiles: ["En difficulté"], classes: COLLEGE, trimesters: T3 },
  { id: 234, text: "Des résultats préoccupants dès ce premier trimestre. Il est essentiel d'identifier les blocages et de solliciter un accompagnement sans tarder.", profiles: ["En difficulté"], classes: ALL, trimesters: T1 },
  { id: 235, text: "En grande difficulté face aux exigences de la classe. La mise en place d'un soutien adapté est vivement recommandée.", profiles: ["En difficulté"], classes: LYCEE, trimesters: ALL },

  //  Travailleur·se 
  { id: 236, text: "Un sérieux et une ponctualité dans le travail qui forcent le respect. Ces qualités sont les meilleurs atouts pour progresser.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 237, text: "L'application dont fait preuve l'élève à chaque séance est exemplaire. Les efforts fournis sont pleinement justifiés.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 238, text: "Fin d'année couronnée par des résultats mérités. La régularité dans le travail aura été la clé du succès.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T3 },
  { id: 239, text: "Un investissement immédiat et soutenu dès la rentrée. Ce niveau de rigueur est rare et très appréciable.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T1 },

  //  À l'oral 
  { id: 240, text: "L'élève prend la parole avec une confiance et une fluidité qui enrichissent considérablement les échanges en classe.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 241, text: "Des progrès très nets à l'oral en ce deuxième trimestre. La prise de risque linguistique est encourageante.", profiles: ["À l'oral"], classes: ALL, trimesters: T2 },
  { id: 242, text: "L'aisance orale est le point fort de l'élève. Il faut maintenant transposer cette énergie dans les productions écrites.", profiles: ["À l'oral"], classes: LYCEE, trimesters: ALL },

  //  À l'écrit 
  { id: 243, text: "Les travaux écrits sont remarquables par leur clarté et leur richesse linguistique. Un vrai plaisir à lire et à corriger.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 244, text: "L'expression écrite gagne en précision et en fluidité. Ces progrès sont le fruit d'un travail régulier et méthodique.", profiles: ["À l'écrit"], classes: ALL, trimesters: T2 },
  { id: 245, text: "Des productions écrites de très bonne facture en fin d'année. La maîtrise des structures syntaxiques est nettement améliorée.", profiles: ["À l'écrit"], classes: ALL, trimesters: T3 },

  //  Passif·ve 
  { id: 246, text: "Une trop grande passivité prive l'élève de progresser à l'oral. Lever la main, même avec hésitation, est le premier pas.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 247, text: "La passivité observée dès le premier trimestre persiste. Attendre passivement ne suffit pas pour progresser en langue vivante.", profiles: ["Passif·ve"], classes: ALL, trimesters: T2 },
  { id: 248, text: "Fin d'année trop en retrait. La prochaine rentrée devra s'ouvrir sur une réelle volonté de participer activement.", profiles: ["Passif·ve"], classes: COLLEGE, trimesters: T3 },

  //  Encouragements 
  { id: 249, text: "Une progression notable et constante qui mérite toutes les félicitations. Gardez ce cap avec détermination !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 250, text: "De vrais signaux positifs en ce second trimestre. La mobilisation perçue laisse présager une belle fin d'année.", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 251, text: "Une fin d'année qui reflète un effort soutenu et sincère. Ces progrès sont le signe d'une belle maturité scolaire.", profiles: ["Encouragements"], classes: LYCEE, trimesters: T3 },
  { id: 252, text: "Dès ce premier trimestre, une progression encourageante. Cette dynamique doit absolument se confirmer dans les trimestres à venir.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },

  //  Problématique 
  { id: 253, text: "L'attitude de l'élève en classe demeure préoccupante. Des mesures ont été prises ; des efforts significatifs sont attendus.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 254, text: "Les perturbations répétées nuisent à l'ensemble du groupe. Il est impératif que l'élève intègre les règles du vivre-ensemble scolaire.", profiles: ["Problématique"], classes: ALL, trimesters: T2 },
  { id: 255, text: "Un deuxième trimestre encore marqué par des difficultés comportementales. L'implication des familles est sollicitée.", profiles: ["Problématique"], classes: COLLEGE, trimesters: T2 },

  //  Discret·e mais sérieux·se 
  { id: 256, text: "Une réserve naturelle qui cache un travail sérieux et de qualité. Les résultats parlent pour l'élève.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 257, text: "Sans s'imposer, l'élève réalise un travail régulier et méthodique dont les résultats sont très satisfaisants.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: T2 },

  //  Défaitiste 
  { id: 258, text: "L'élève renonce trop souvent avant même d'essayer. Oser se tromper est une étape essentielle dans l'apprentissage d'une langue.", profiles: ["Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 259, text: "Le découragement observé en début d'année laisse peu à peu place à davantage d'engagement. Il faut poursuivre dans cette voie.", profiles: ["Défaitiste"], classes: ALL, trimesters: T2 },

  //  Moteur·rice et impliqué·e 
  { id: 260, text: "L'élève est une véritable ressource pour la classe. Son investissement et son enthousiasme créent une dynamique positive et stimulante.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: ALL },
  { id: 261, text: "Dès ce premier trimestre, l'élève s'impose comme un·e moteur·rice de la classe. Un enthousiasme communicatif et bienveillant.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },

  //  Participation régulière et pertinente 
  { id: 262, text: "Une participation exemplaire en termes de régularité et de qualité. Les interventions élèvent le niveau des échanges.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: ALL },
  { id: 263, text: "Des interventions fréquentes, toujours mesurées et pertinentes. L'élève enrichit considérablement la dynamique de groupe.", profiles: ["Participation régulière et pertinente"], classes: LYCEE, trimesters: ALL },

  //  Bon niveau, participation à parfaire 
  { id: 264, text: "Le niveau est indéniable, mais trop peu visible en classe. Il est temps de valoriser ces acquis en s'exprimant davantage.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 265, text: "Des compétences bien réelles qui méritent de s'exprimer davantage. Un peu plus de participation transformerait ce bon trimestre en excellent trimestre.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: T2 },

  //  Actif·ve mais irrégulier·ère 
  { id: 266, text: "Des semaines de belle implication suivies de périodes d'effacement. Trouver la constance dans l'engagement est l'objectif prioritaire.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: ALL },
  { id: 267, text: "L'irrégularité est le principal frein à la progression. Des habitudes de travail plus stables produiraient de bien meilleurs résultats.", profiles: ["Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: ALL },

  //  Moteur·rice mais parfois impatient·e 
  { id: 268, text: "Une énergie et un dynamisme précieux pour la classe. Travailler sur l'écoute active des autres enrichirait encore davantage les échanges.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },

  //  Très impliqué·e, tend à monopoliser la parole 
  { id: 269, text: "L'implication est totale et très appréciable. Permettre davantage aux autres de s'exprimer renforcerait la richesse collective des échanges.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 270, text: "Un enthousiasme que rien n'arrête. L'enjeu est maintenant d'apprendre à créer des espaces de parole pour les autres.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: COLLEGE, trimesters: ALL },

  //  Participatif·ve mais parfois trop discret·e 
  { id: 271, text: "Une présence bienveillante et studieuse, mais dont les interventions restent trop rares. Gagnez en confiance : vos idées méritent d'être partagées !", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 272, text: "Troisième trimestre encourageant en termes de participation. La timidité recule et les échanges gagnent en qualité.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: T3 },

  //  Engagé·e à l'écrit, réservé·e à l'oral 
  { id: 273, text: "L'écrit révèle une vraie maîtrise de la langue. Le prochain défi â” relever la tête et s'exprimer à voix haute â” est à la portée de l'élève.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },

  //  Participe bien mais manque de confiance 
  { id: 274, text: "Les réponses et interventions de l'élève sont souvent très justes. Il faut apprendre à s'appuyer sur ces réussites pour gagner en assurance.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 275, text: "Une participation hésitante mais de qualité. La confiance en soi est en construction : c'est un très bon signe pour la suite.", profiles: ["Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: T2 },

  //  Moteur·rice, à progresser sur la précision 
  { id: 276, text: "Un moteur·rice enthousiaste dont la communication est efficace. Affiner la précision grammaticale et lexicale est le prochain objectif.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â•â•â•â•â•â•â•â•â•â•â•â•â•

  { id: 277, text: "Un niveau excellent allié à une vraie discrétion. Le travail de qualité parle de lui-même et mérite d'être davantage mis en avant.", profiles: ["Excellent·e", "Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 278, text: "Un niveau excellent mais qui gagnerait à s'accompagner d'une gestion plus posée de la prise de parole pour que chacun puisse s'exprimer.", profiles: ["Excellent·e", "Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: ALL },
  { id: 279, text: "Une maîtrise de l'anglais impressionnante, encore trop peu visible en classe. Participer davantage valoriserait pleinement ce très bon niveau.", profiles: ["Excellent·e", "Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 280, text: "Un excellent niveau, particulièrement à l'écrit, et une aisance à l'oral qui demande encore à s'affirmer. Un beau profil à équilibrer.", profiles: ["Excellent·e", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: ALL },
  { id: 281, text: "Très bon travail et sérieux exemplaire. Le bon niveau obtenu est la conséquence logique d'un investissement constant et rigoureux.", profiles: ["Bon niveau", "Travailleur·se"], classes: COLLEGE, trimesters: ALL },
  { id: 282, text: "Un bon niveau qui se confirme d'un trimestre à l'autre. La participation régulière et pertinente contribue largement à cette belle progression.", profiles: ["Bon niveau", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 283, text: "Un bon niveau global mais une participation trop irrégulière pour en tirer pleinement profit. La constance dans l'engagement est à travailler.", profiles: ["Bon niveau", "Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: ALL },
  { id: 284, text: "Un profil encourageant : du travail, de la bonne volonté et un niveau qui progresse. Il faut maintenir et amplifier cet effort.", profiles: ["Bon niveau", "Encouragements"], classes: ALL, trimesters: T1 },
  { id: 285, text: "Un bon niveau indéniable dont la participation trop timide ne reflète pas la réalité. Oser s'exprimer davantage serait très bénéfique.", profiles: ["Bon niveau, participation à parfaire", "Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: ALL },
  { id: 286, text: "Du potentiel, du sérieux, mais une irrégularité préjudiciable. Des efforts plus constants permettraient d'aller bien au-delà.", profiles: ["Peut mieux faire", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T2 },
  { id: 287, text: "Les capacités sont réelles mais le découragement empêche de les exploiter. Il faut absolument dépasser cette résignation pour progresser.", profiles: ["Peut mieux faire", "Défaitiste"], classes: ALL, trimesters: ALL },
  { id: 288, text: "Des progrès visibles malgré les difficultés persistantes. Cet état d'esprit combatif est la bonne attitude : il faut le maintenir.", profiles: ["En difficulté", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 289, text: "Les difficultés rencontrées n'entament pas la motivation de l'élève. Ce sérieux dans l'effort finira par payer.", profiles: ["En difficulté", "Travailleur·se"], classes: COLLEGE, trimesters: T2 },
  { id: 290, text: "Malgré les difficultés, une attitude bienveillante et studieuse. Cet engagement discret mais sincère est très appréciable.", profiles: ["En difficulté", "Discret·e mais sérieux·se"], classes: ALL, trimesters: ALL },
  { id: 291, text: "La difficulté ne justifie pas l'abandon. Persévérer avec méthode et solliciter de l'aide sont les premières étapes vers la réussite.", profiles: ["En difficulté", "Défaitiste"], classes: ALL, trimesters: T3 },
  { id: 292, text: "Troisième trimestre décisif : malgré les lacunes persistantes, l'implication est au rendez-vous. Bonne continuation pour la rentrée.", profiles: ["En difficulté", "Travailleur·se"], classes: ALL, trimesters: T3 },
  { id: 293, text: "Du sérieux et de la régularité, mais un manque de confiance qui freine l'expression orale. Croire en ses moyens est essentiel.", profiles: ["Travailleur·se", "Participe bien mais manque de confiance"], classes: ALL, trimesters: ALL },
  { id: 294, text: "Un travail admirable et une vraie aisance à l'oral. L'élève rayonne par sa maîtrise et son engagement.", profiles: ["Travailleur·se", "À l'oral"], classes: ALL, trimesters: ALL },
  { id: 295, text: "Sérieux·se et impliqué·e, avec un beau sens de la rédaction. L'écrit est un vrai point fort à continuer de développer.", profiles: ["Travailleur·se", "À l'écrit"], classes: LYCEE, trimesters: ALL },
  { id: 296, text: "Un moteur·rice de la classe qui fait preuve d'un sérieux remarquable. Participer tout en écoutant les autres sera le prochain palier.", profiles: ["Moteur·rice et impliqué·e", "Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: T1 },
  { id: 297, text: "Très actif·ve et dynamique, l'élève donne le ton mais doit apprendre à respecter le rythme de ses camarades.", profiles: ["Moteur·rice et impliqué·e", "Moteur·rice mais parfois impatient·e"], classes: COLLEGE, trimesters: ALL },
  { id: 298, text: "Un profil moteur·rice avec un beau potentiel à l'oral. Travailler la précision linguistique permettrait d'atteindre un niveau encore plus solide.", profiles: ["Moteur·rice et impliqué·e", "À l'oral"], classes: ALL, trimesters: ALL },
  { id: 299, text: "L'aisance à l'oral est indéniable mais doit se doubler d'une rigueur à l'écrit encore insuffisante. Un rééquilibrage est nécessaire.", profiles: ["À l'oral", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: T2 },
  { id: 300, text: "Très à l'aise à l'oral mais parfois envahissant·e. Les connaissances et l'enthousiasme sont là : il faut les canaliser davantage.", profiles: ["À l'oral", "Bavard·e mais compétent·e"], classes: ALL, trimesters: ALL },
  { id: 301, text: "Des productions écrites de qualité et une vraie implication en cours. Ce beau profil mérite d'être maintenu avec régularité.", profiles: ["À l'écrit", "Participation régulière et pertinente"], classes: LYCEE, trimesters: ALL },
  { id: 302, text: "Les progrès à l'écrit sont notables et la participation progresse également. Un beau trimestre de transition pour cet·te élève.", profiles: ["À l'écrit", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 303, text: "La passivité récurrente aggrave des difficultés déjà présentes. Une implication active en cours est la première condition pour progresser.", profiles: ["Passif·ve", "En difficulté"], classes: ALL, trimesters: T1 },
  { id: 304, text: "Trop de passivité pour un élève de ce niveau. Des compétences réelles qui ne demandent qu'à s'exprimer davantage.", profiles: ["Passif·ve", "Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 305, text: "Des difficultés comportementales qui s'ajoutent à des lacunes académiques. Un sursaut dans les deux domaines est attendu.", profiles: ["Problématique", "En difficulté"], classes: ALL, trimesters: T2 },
  { id: 306, text: "Un comportement qui nuit à des résultats qui pourraient être meilleurs. Des changements sont attendus sur les deux plans.", profiles: ["Problématique", "Peut mieux faire"], classes: LYCEE, trimesters: ALL },
  { id: 307, text: "Des acquis solides, mais une discrétion excessive qui empêche de les valoriser à l'oral. Les échanges en classe ont besoin de cette voix !", profiles: ["Discret·e mais sérieux·se", "Bon niveau, participation à parfaire"], classes: ALL, trimesters: ALL },
  { id: 308, text: "Un profil discret mais sérieux, avec de belles compétences à l'écrit. Oser davantage s'exprimer serait un vrai plus.", profiles: ["Discret·e mais sérieux·se", "À l'écrit"], classes: ALL, trimesters: T2 },
  { id: 309, text: "Participe de manière pertinente mais encore hésitante. Avec un peu plus de confiance, les interventions pourraient être encore plus riches.", profiles: ["Participatif·ve mais parfois trop discret·e", "Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: ALL },
  { id: 310, text: "Des éclairs de participation bienvenue, mais trop espacés. Gagner en régularité permettrait de pleinement valoriser ce bon niveau.", profiles: ["Participatif·ve mais parfois trop discret·e", "Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 311, text: "L'enthousiasme de l'élève est communicatif mais l'impatience nuit parfois à la qualité des échanges. Apprendre à écouter est une compétence à part entière.", profiles: ["Bavard·e mais compétent·e", "Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: ALL },
  { id: 312, text: "Des compétences réelles et une énergie positive, mais qui tendent à prendre trop de place. Un peu de modération enrichirait encore les séances.", profiles: ["Bavard·e mais compétent·e", "Très impliqué·e, tend à monopoliser la parole"], classes: LYCEE, trimesters: T2 },
  { id: 313, text: "La dynamique est là, mais la précision linguistique doit progresser pour que cette implication se traduise en résultats encore meilleurs.", profiles: ["Moteur·rice, à progresser sur la précision", "Encouragements"], classes: ALL, trimesters: ALL },
  { id: 314, text: "Moteur·rice indéniable, l'élève enrichit les échanges. Travailler la rigueur à l'écrit permettrait de compléter ce beau profil.", profiles: ["Moteur·rice, à progresser sur la précision", "À l'écrit"], classes: ALL, trimesters: T3 },
  { id: 315, text: "Un·e élève sérieux·se, à l'aise à l'écrit et progressant bien à l'oral. La confiance en soi gagne du terrain : bonne nouvelle pour la suite !", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Participe bien mais manque de confiance"], classes: ALL, trimesters: T3 },
  { id: 316, text: "Une belle progression visible en ce troisième trimestre. Parti·e d'une position difficile, l'élève termine l'année avec de vrais acquis et un état d'esprit positif.", profiles: ["Encouragements", "En difficulté"], classes: ALL, trimesters: T3 },

  // ══ MONO-PROFILS — IDs 317–366 ══════════════════════════════════════════════

  // ── Excellent·e ──────────────────────────────────────────────────────────────
  { id: 317, text: "Dès le premier trimestre de lycée, l'élève affiche un niveau d'anglais remarquable. La transition du collège est parfaitement réussie.", profiles: ["Excellent·e"], classes: LYCEE, trimesters: T1 },
  { id: 318, text: "Ce deuxième trimestre confirme un niveau tout à fait exceptionnel. La maîtrise de la grammaire, du vocabulaire et de la syntaxe est impressionnante.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },
  { id: 319, text: "Un bilan de 3ème brillant. L'élève aborde le lycée avec un niveau d'anglais et des atouts indéniables.", profiles: ["Excellent·e"], classes: ["3ème"], trimesters: T3 },

  // ── Bon niveau ───────────────────────────────────────────────────────────────
  { id: 320, text: "Bonne entrée dans l'année au collège. L'élève dispose de bases solides et d'une réelle volonté de progresser.", profiles: ["Bon niveau"], classes: COLLEGE, trimesters: T1 },
  { id: 321, text: "En première, l'élève maintient un bon niveau d'anglais. Les exigences du cycle terminal sont abordées avec sérieux.", profiles: ["Bon niveau"], classes: ["1ère"], trimesters: ALL },
  { id: 322, text: "Bilan de fin d'année positif. Les compétences sont bien ancrées et les résultats réguliers confirment un niveau tout à fait satisfaisant.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },

  // ── Peut mieux faire ─────────────────────────────────────────────────────────
  { id: 323, text: "Début d'année décevant au lycée. Les exigences du cycle sont plus élevées et un investissement plus important est désormais indispensable.", profiles: ["Peut mieux faire"], classes: LYCEE, trimesters: T1 },
  { id: 324, text: "Le deuxième trimestre ne traduit toujours pas les réelles capacités de l'élève. Un sursaut est encore possible : il ne faut plus attendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 325, text: "En 6ème, les bases sont à consolider rapidement. Sans un travail plus régulier, les lacunes risquent de s'installer durablement.", profiles: ["Peut mieux faire"], classes: ["6ème"], trimesters: ALL },

  // ── En difficulté ────────────────────────────────────────────────────────────
  { id: 326, text: "Les difficultés se confirment en 4ème. Un travail de remédiation ciblé, notamment sur la grammaire et le vocabulaire, est indispensable.", profiles: ["En difficulté"], classes: ["4ème"], trimesters: T2 },
  { id: 327, text: "Fin d'année difficile pour cet·te élève de lycée. Un travail intensif de révision pendant l'été est fortement conseillé.", profiles: ["En difficulté"], classes: LYCEE, trimesters: T3 },
  { id: 328, text: "Dès ce premier trimestre, des difficultés importantes sont identifiées. Il faut réagir sans attendre pour ne pas accumuler les lacunes.", profiles: ["En difficulté"], classes: ALL, trimesters: T1 },

  // ── Travailleur·se ────────────────────────────────────────────────────────────
  { id: 329, text: "En 5ème, l'élève fait preuve d'un sérieux exemplaire. Ce travail régulier construit des bases solides pour la suite du collège.", profiles: ["Travailleur·se"], classes: ["5ème"], trimesters: ALL },
  { id: 330, text: "Le deuxième trimestre confirme un investissement sans faille. La persévérance de cet·te élève est une vraie qualité à saluer.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 331, text: "Fin de terminale couronnée par un travail acharné. L'élève aborde le baccalauréat avec la sérénité que mérite cet engagement.", profiles: ["Travailleur·se"], classes: TERM, trimesters: T3 },

  // ── À l'oral ──────────────────────────────────────────────────────────────────
  { id: 332, text: "En 4ème, l'aisance orale de l'élève est déjà remarquable pour le niveau. Les échanges en anglais sont spontanés et fluides.", profiles: ["À l'oral"], classes: ["4ème"], trimesters: ALL },
  { id: 333, text: "Fin de lycée brillante à l'oral. L'élève s'exprime avec une fluidité et une assurance qui témoignent d'un travail de fond sur la langue.", profiles: ["À l'oral"], classes: LYCEE, trimesters: T3 },

  // ── À l'écrit ─────────────────────────────────────────────────────────────────
  { id: 334, text: "À l'approche du brevet, les productions écrites de l'élève sont de très bonne qualité. Un vrai atout pour les épreuves à venir.", profiles: ["À l'écrit"], classes: ["3ème"], trimesters: T3 },
  { id: 335, text: "Dès le premier trimestre, la qualité des écrits se distingue. L'élève soigne ses productions avec une rigueur exemplaire.", profiles: ["À l'écrit"], classes: ALL, trimesters: T1 },

  // ── Passif·ve ─────────────────────────────────────────────────────────────────
  { id: 336, text: "L'entrée au lycée demande une implication plus active. La passivité observée en 2nde risque de peser lourd sur les résultats à venir.", profiles: ["Passif·ve"], classes: ["2nde"], trimesters: T1 },
  { id: 337, text: "Une année trop passive qui se conclut sur un bilan décevant. La prochaine rentrée devra s'ouvrir sur un engagement radicalement différent.", profiles: ["Passif·ve"], classes: ALL, trimesters: T3 },

  // ── Encouragements ───────────────────────────────────────────────────────────
  { id: 338, text: "En 6ème, les progrès du second trimestre sont très encourageants. L'élève prend confiance et commence à s'exprimer plus librement.", profiles: ["Encouragements"], classes: ["6ème"], trimesters: T2 },
  { id: 339, text: "Belle fin de parcours. Les efforts fournis tout au long de l'année ont porté leurs fruits. Bonne chance pour le baccalauréat !", profiles: ["Encouragements"], classes: TERM, trimesters: T3 },

  // ── Problématique ────────────────────────────────────────────────────────────
  { id: 340, text: "Dès ce premier trimestre de 4ème, des comportements perturbateurs sont à signaler. Un cadre ferme a été posé pour la suite de l'année.", profiles: ["Problématique"], classes: ["4ème"], trimesters: T1 },
  { id: 341, text: "Le comportement perturbateur de l'élève persiste au second trimestre. Sans changement rapide, des mesures supplémentaires seront nécessaires.", profiles: ["Problématique"], classes: LYCEE, trimesters: T2 },

  // ── Discret·e mais sérieux·se ────────────────────────────────────────────────
  { id: 342, text: "Au collège, ce profil discret mais appliqué est rassurant. Le travail régulier et sérieux finit toujours par porter ses fruits.", profiles: ["Discret·e mais sérieux·se"], classes: COLLEGE, trimesters: ALL },
  { id: 343, text: "Au second trimestre de lycée, la discrétion de l'élève masque un travail sérieux et constant. Les résultats en témoignent.", profiles: ["Discret·e mais sérieux·se"], classes: LYCEE, trimesters: T2 },

  // ── Bavard·e mais compétent·e ────────────────────────────────────────────────
  { id: 344, text: "Dès le début de l'année au collège, l'aisance est évidente mais la retenue est à travailler. L'anglais est là : il faut canaliser cette énergie.", profiles: ["Bavard·e mais compétent·e"], classes: COLLEGE, trimesters: T1 },
  { id: 345, text: "En première, les compétences en anglais sont indéniables. Il faut apprendre à intervenir au bon moment pour enrichir les échanges sans les monopoliser.", profiles: ["Bavard·e mais compétent·e"], classes: ["1ère"], trimesters: ALL },

  // ── Défaitiste ────────────────────────────────────────────────────────────────
  { id: 346, text: "Dès ce premier trimestre en 5ème, l'attitude défaitiste de l'élève est préoccupante. Oser essayer est la première étape vers la progression.", profiles: ["Défaitiste"], classes: ["5ème"], trimesters: T1 },
  { id: 347, text: "Une fin d'année marquée par trop de résignation. L'élève a des ressources : il faut y croire et ne pas baisser les bras.", profiles: ["Défaitiste"], classes: ALL, trimesters: T3 },

  // ── Moteur·rice et impliqué·e ────────────────────────────────────────────────
  { id: 348, text: "En 6ème, l'enthousiasme de l'élève est communicatif et très précieux pour la classe. Un·e élève moteur·rice qui donne le ton dès la première année.", profiles: ["Moteur·rice et impliqué·e"], classes: ["6ème"], trimesters: ALL },
  { id: 349, text: "Au second trimestre de lycée, l'implication de l'élève reste exemplaire. Cette énergie est un vrai moteur pour l'ensemble du groupe.", profiles: ["Moteur·rice et impliqué·e"], classes: LYCEE, trimesters: T2 },

  // ── Participation régulière et pertinente ────────────────────────────────────
  { id: 350, text: "Au collège, la participation régulière et de qualité de l'élève enrichit chaque séance. Les interventions sont toujours mesurées et pertinentes.", profiles: ["Participation régulière et pertinente"], classes: COLLEGE, trimesters: ALL },
  { id: 351, text: "Fin d'année marquée par une participation exemplaire du début à la fin. L'élève aura animé les cours avec constance et intelligence.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: T3 },

  // ── Bon niveau, participation à parfaire ─────────────────────────────────────
  { id: 352, text: "Dès le début du lycée, le bon niveau est là. Il manque juste un peu d'audace pour s'exprimer davantage et valoriser ces acquis.", profiles: ["Bon niveau, participation à parfaire"], classes: LYCEE, trimesters: T1 },
  { id: 353, text: "Le niveau est confirmé au second trimestre. Mais les rares interventions orales ne reflètent pas encore la réalité des compétences de l'élève.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: T2 },

  // ── Actif·ve mais irrégulier·ère ─────────────────────────────────────────────
  { id: 354, text: "En 3ème, l'irrégularité de l'élève est un frein réel à la progression. La constance dans l'effort est l'objectif prioritaire de la fin d'année.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ["3ème"], trimesters: ALL },
  { id: 355, text: "Premier trimestre en dents de scie. L'élève montre des pics de motivation mais aussi des creux préoccupants. La régularité est à travailler d'urgence.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T1 },

  // ── Moteur·rice mais parfois impatient·e ─────────────────────────────────────
  { id: 356, text: "Au second trimestre, l'enthousiasme de l'élève reste intact mais l'impatience nuit aux échanges. Travailler l'écoute active sera déterminant.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: COLLEGE, trimesters: T2 },
  { id: 357, text: "Fin d'année dynamique mais marquée par quelques écarts liés à l'impatience. Un élément moteur qui gagnera à canaliser son énergie.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: T3 },

  // ── Très impliqué·e, tend à monopoliser la parole ────────────────────────────
  { id: 358, text: "Dès la 2nde, l'élève s'impose comme un·e participant·e très actif·ve. La maîtrise du tour de parole sera le prochain défi à relever.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ["2nde"], trimesters: T1 },
  { id: 359, text: "L'implication est totale mais prend parfois trop de place. Il faut apprendre à créer des espaces pour que les autres puissent s'exprimer.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: T2 },

  // ── Participatif·ve mais parfois trop discret·e ──────────────────────────────
  { id: 360, text: "En 6ème, la timidité recule peu à peu. L'élève ose davantage s'exprimer au second trimestre : une belle évolution à encourager.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ["6ème"], trimesters: T2 },
  { id: 361, text: "Au lycée, la participation existe mais reste trop effacée. Les idées de l'élève méritent d'être partagées plus librement avec le groupe.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: LYCEE, trimesters: ALL },

  // ── Engagé·e à l'écrit, réservé·e à l'oral ──────────────────────────────────
  { id: 362, text: "En 4ème, les productions écrites sont solides. L'oral est le prochain défi : un peu de confiance permettrait de libérer cette expression retenue.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ["4ème"], trimesters: T2 },
  { id: 363, text: "En terminale, la maîtrise à l'écrit est un vrai atout pour le baccalauréat. Développer l'oral permettrait de valoriser l'ensemble des compétences.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: TERM, trimesters: T3 },

  // ── Participe bien mais manque de confiance ──────────────────────────────────
  { id: 364, text: "Au collège, les premières participations témoignent d'un bon niveau mais d'un manque de confiance évident. Il faut s'appuyer sur ses réussites.", profiles: ["Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: T1 },
  { id: 365, text: "Au second trimestre, la confiance progresse légèrement. Les interventions se font plus fréquentes : il faut continuer sur cette lancée.", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: T2 },

  // ── Moteur·rice, à progresser sur la précision ───────────────────────────────
  { id: 366, text: "Fin de lycée dynamique et engagée. Il ne manque plus qu'un travail fin sur la précision linguistique pour atteindre un niveau encore plus abouti.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: LYCEE, trimesters: T3 },

  // ══ MULTI-PROFILS — IDs 367–416 ══════════════════════════════════════════════

  { id: 367, text: "Un bilan de 3ème exemplaire. L'excellence atteinte est le fruit d'un travail sérieux et régulier sur toute l'année. Félicitations !", profiles: ["Excellent·e", "Travailleur·se"], classes: ["3ème"], trimesters: T3 },
  { id: 368, text: "Au lycée, l'élève conjugue excellence et participation active. Chaque intervention élève le niveau de la classe et enrichit les échanges.", profiles: ["Excellent·e", "Participation régulière et pertinente"], classes: LYCEE, trimesters: ALL },
  { id: 369, text: "Dès le premier trimestre, l'élève s'impose comme un élément d'exception : excellent·e et moteur·rice pour toute la classe.", profiles: ["Excellent·e", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 370, text: "En 5ème, le bon niveau est la juste récompense d'un travail régulier. L'élève construit ses compétences avec méthode et persévérance.", profiles: ["Bon niveau", "Travailleur·se"], classes: ["5ème"], trimesters: ALL },
  { id: 371, text: "Le second trimestre marque une belle progression. Le bon niveau se confirme et les efforts supplémentaires commencent à porter leurs fruits.", profiles: ["Bon niveau", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 372, text: "Fin de lycée satisfaisante. Le bon niveau de l'élève est le résultat d'un travail discret mais constant. Un profil fiable et solide.", profiles: ["Bon niveau", "Discret·e mais sérieux·se"], classes: LYCEE, trimesters: T3 },
  { id: 373, text: "Premier trimestre en dessous des attentes. Les capacités sont là mais la passivité empêche leur expression. Un engagement plus actif est urgent.", profiles: ["Peut mieux faire", "Passif·ve"], classes: ALL, trimesters: T1 },
  { id: 374, text: "En 4ème, l'irrégularité combinée à un manque d'investissement nuit clairement aux résultats. Une organisation plus rigoureuse s'impose.", profiles: ["Peut mieux faire", "Actif·ve mais irrégulier·ère"], classes: ["4ème"], trimesters: ALL },
  { id: 375, text: "Le deuxième trimestre confirme une attitude résignée qui empêche de progresser. Il faut se battre contre ce découragement et croire en ses capacités.", profiles: ["Peut mieux faire", "Défaitiste"], classes: ALL, trimesters: T2 },
  { id: 376, text: "En 6ème, malgré les difficultés, l'élève ne lâche pas. Ces efforts méritent d'être encouragés et accompagnés avec bienveillance.", profiles: ["En difficulté", "Encouragements"], classes: ["6ème"], trimesters: T2 },
  { id: 377, text: "Dès le début du lycée, des difficultés se manifestent. Mais le sérieux avec lequel l'élève les affronte est très rassurant pour la suite.", profiles: ["En difficulté", "Travailleur·se"], classes: LYCEE, trimesters: T1 },
  { id: 378, text: "Fin d'année difficile sur le plan académique et motivationnel. Il faut impérativement retrouver confiance et détermination avant la rentrée prochaine.", profiles: ["En difficulté", "Défaitiste"], classes: ALL, trimesters: T3 },
  { id: 379, text: "En 2nde, le sérieux de l'élève se double d'une vraie aisance orale. Un profil très solide et rassurant pour la suite du lycée.", profiles: ["Travailleur·se", "À l'oral"], classes: ["2nde"], trimesters: ALL },
  { id: 380, text: "Au second trimestre, le travail régulier au collège porte ses fruits. Le bon niveau obtenu est pleinement mérité.", profiles: ["Travailleur·se", "Bon niveau"], classes: COLLEGE, trimesters: T2 },
  { id: 381, text: "Fin d'année couronnée par des efforts sincères et une belle progression. L'élève a su travailler avec régularité jusqu'au bout de l'année.", profiles: ["Travailleur·se", "Encouragements"], classes: ALL, trimesters: T3 },
  { id: 382, text: "Dès le premier trimestre, l'élève brille par son aisance orale et sa participation constante. Un·e élève précieux·se pour la dynamique de classe.", profiles: ["À l'oral", "Participation régulière et pertinente"], classes: ALL, trimesters: T1 },
  { id: 383, text: "Au lycée, l'élève est un·e véritable animateur·rice grâce à son aisance orale et son implication. Les cours s'en trouvent enrichis.", profiles: ["À l'oral", "Moteur·rice et impliqué·e"], classes: LYCEE, trimesters: ALL },
  { id: 384, text: "En 3ème, l'élève est un·e expert·e de l'écrit. L'oral reste le défi de la rentrée prochaine, avec de solides bases rédactionnelles en atout.", profiles: ["À l'écrit", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ["3ème"], trimesters: T3 },
  { id: 385, text: "Les productions écrites sont exemplaires, le tout dans une discrétion totale. Un profil sérieux et appliqué qui mérite d'être davantage valorisé.", profiles: ["À l'écrit", "Discret·e mais sérieux·se"], classes: ALL, trimesters: T2 },
  { id: 386, text: "Au second trimestre de lycée, la passivité et le manque d'effort forment un duo préoccupant. Un changement radical d'attitude est attendu.", profiles: ["Passif·ve", "Peut mieux faire"], classes: LYCEE, trimesters: T2 },
  { id: 387, text: "En 4ème, le bon niveau de l'élève peine à se traduire en participation. Cette discrétion involontaire est dommage : les connaissances sont là.", profiles: ["Passif·ve", "Bon niveau"], classes: ["4ème"], trimesters: ALL },
  { id: 388, text: "Dès le premier trimestre en 5ème, la progression est perceptible. Le travail fourni commence à payer : il faut continuer sur cette lancée.", profiles: ["Encouragements", "Travailleur·se"], classes: ["5ème"], trimesters: T1 },
  { id: 389, text: "Malgré les difficultés du second trimestre, la progression est encourageante. Cet état d'esprit positif est la clé pour redresser la situation.", profiles: ["Encouragements", "En difficulté"], classes: ALL, trimesters: T2 },
  { id: 390, text: "En première, le profil discret mais compétent de l'élève est remarquable. Le bon niveau et le sérieux forment une combinaison très appréciable.", profiles: ["Discret·e mais sérieux·se", "Bon niveau"], classes: ["1ère"], trimesters: ALL },
  { id: 391, text: "Dès le premier trimestre, l'élève se distingue par un travail écrit soigné et une discrétion de bon aloi. Un profil sérieux et efficace.", profiles: ["Discret·e mais sérieux·se", "À l'écrit"], classes: ALL, trimesters: T1 },
  { id: 392, text: "Au second trimestre, l'aisance et l'enthousiasme de l'élève débordent parfois. Un peu de modération permettrait à tous de profiter des échanges.", profiles: ["Bavard·e mais compétent·e", "Très impliqué·e, tend à monopoliser la parole"], classes: COLLEGE, trimesters: T2 },
  { id: 393, text: "Fin d'année animée. L'aisance et la motivation de l'élève sont de vrais atouts, mais l'impatience reste un point à travailler pour l'an prochain.", profiles: ["Bavard·e mais compétent·e", "Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: T3 },
  { id: 394, text: "En 4ème, l'attitude défaitiste de l'élève l'empêche de progresser. Les capacités sont là : il faut les exploiter avec détermination et persévérance.", profiles: ["Défaitiste", "Peut mieux faire"], classes: ["4ème"], trimesters: T2 },
  { id: 395, text: "La fin d'année montre des signes encourageants de dépassement de la résignation. Il faut continuer à y croire pour bien démarrer l'an prochain.", profiles: ["Défaitiste", "Encouragements"], classes: ALL, trimesters: T3 },
  { id: 396, text: "Milieu d'année brillant. L'élève est un·e moteur·rice qui participe avec régularité et pertinence. Un profil précieux pour la dynamique de classe.", profiles: ["Moteur·rice et impliqué·e", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 397, text: "En terminale, l'élève est un·e élément·e remarquable : excellence et implication au service du groupe jusqu'à l'épreuve du baccalauréat.", profiles: ["Moteur·rice et impliqué·e", "Excellent·e"], classes: TERM, trimesters: ALL },
  { id: 398, text: "Fin d'année marquée par une participation exemplaire et un bon niveau constant. Un profil rassurant qui termine l'année sur une très belle note.", profiles: ["Participation régulière et pertinente", "Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 399, text: "Premier trimestre prometteur à l'écrit. Il faut maintenant oser s'exprimer à l'oral pour que le niveau réel se manifeste pleinement en classe.", profiles: ["Bon niveau, participation à parfaire", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: T1 },
  { id: 400, text: "Au lycée, le bon niveau de l'élève ne se voit guère en classe. La discrétion est appréciable, mais une participation plus visible valoriserait ces acquis.", profiles: ["Bon niveau, participation à parfaire", "Discret·e mais sérieux·se"], classes: LYCEE, trimesters: ALL },
  { id: 401, text: "Des signes de progrès encourageants au second trimestre. Si l'élève trouve la constance dans l'effort, les résultats seront au rendez-vous.", profiles: ["Actif·ve mais irrégulier·ère", "Encouragements"], classes: ALL, trimesters: T2 },
  { id: 402, text: "Fin de 3ème décevante. L'irrégularité aura été le principal obstacle à une meilleure réussite. Une vraie régularité s'impose dès l'entrée au lycée.", profiles: ["Actif·ve mais irrégulier·ère", "Peut mieux faire"], classes: ["3ème"], trimesters: T3 },
  { id: 403, text: "Dès le premier trimestre, l'élève dynamise la classe. L'enjeu est d'apprendre à canaliser cet élan pour que les échanges profitent à tous.", profiles: ["Moteur·rice mais parfois impatient·e", "Participation régulière et pertinente"], classes: ALL, trimesters: T1 },
  { id: 404, text: "L'aisance à l'oral est indéniable et l'implication réelle. Apprendre à écouter les autres enrichirait encore la qualité des interactions en classe.", profiles: ["Moteur·rice mais parfois impatient·e", "À l'oral"], classes: LYCEE, trimesters: T2 },
  { id: 405, text: "En 2nde, l'élève est omniprésent·e et très impliqué·e. Créer davantage d'espace pour les autres serait un signe de maturité supplémentaire.", profiles: ["Très impliqué·e, tend à monopoliser la parole", "Moteur·rice et impliqué·e"], classes: ["2nde"], trimesters: ALL },
  { id: 406, text: "Le bon niveau se traduit progressivement en participation. Le second trimestre montre des progrès dans la prise de parole : il faut persévérer.", profiles: ["Participatif·ve mais parfois trop discret·e", "Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 407, text: "Fin de collège encourageante. La timidité recule et la confiance grandit. Un profil qui s'améliore et se libère progressivement au fil des mois.", profiles: ["Participatif·ve mais parfois trop discret·e", "Participe bien mais manque de confiance"], classes: COLLEGE, trimesters: T3 },
  { id: 408, text: "En première, le sérieux de l'élève à l'écrit est impressionnant. L'oral reste le défi, mais le travail fourni laisse présager un progrès prochain.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Travailleur·se"], classes: ["1ère"], trimesters: T2 },
  { id: 409, text: "Très bonne année à l'écrit. Le bon niveau global et les solides compétences rédactionnelles sont de vrais atouts pour la suite du parcours.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 410, text: "En 6ème, la confiance en soi est en construction. Les progrès sont encourageants et les participations, rares mais pertinentes, méritent d'être valorisées.", profiles: ["Participe bien mais manque de confiance", "Encouragements"], classes: ["6ème"], trimesters: ALL },
  { id: 411, text: "Premier trimestre sérieux et appliqué. Malgré le manque de confiance, l'élève participe avec courage et travaille avec une régularité exemplaire.", profiles: ["Participe bien mais manque de confiance", "Travailleur·se"], classes: ALL, trimesters: T1 },
  { id: 412, text: "L'implication et la participation sont exemplaires. Il reste à affiner la précision linguistique pour atteindre le niveau que cette motivation mérite.", profiles: ["Moteur·rice, à progresser sur la précision", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 413, text: "Fin de lycée engagée et travaillée. La prochaine étape : soigner la précision de la langue pour hisser les productions au niveau du dynamisme affiché.", profiles: ["Moteur·rice, à progresser sur la précision", "Travailleur·se"], classes: LYCEE, trimesters: T3 },
  { id: 414, text: "À mi-parcours de première, l'élève est clairement dans le haut du niveau. Les acquis sont solides et la progression régulière et encourageante.", profiles: ["Excellent·e", "Bon niveau"], classes: ["1ère"], trimesters: T2 },
  { id: 415, text: "Premier trimestre satisfaisant à l'écrit. Le bon niveau général se traduit par des productions bien structurées et linguistiquement soignées.", profiles: ["Bon niveau", "À l'écrit"], classes: ALL, trimesters: T1 },
  { id: 416, text: "Un niveau excellent, particulièrement visible à l'écrit. Oser davantage s'exprimer à l'oral permettrait de révéler pleinement cette maîtrise de la langue.", profiles: ["Excellent·e", "Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: T2 },

  // ══ MONO-PROFILS — IDs 417–466 ══════════════════════════════════════════════

  { id: 417, text: "En 6ème-5ème, ce niveau d'anglais est tout à fait exceptionnel. L'élève surpasse largement les attentes et progresse à un rythme impressionnant.", profiles: ["Excellent·e"], classes: EARLY, trimesters: T2 },
  { id: 418, text: "Une année scolaire brillante qui s'achève sur une note excellente. L'élève a confirmé trimestre après trimestre sa maîtrise exemplaire de la langue.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 419, text: "À mi-parcours de terminale, l'élève affiche un niveau remarquable. Le baccalauréat s'annonce très bien pour cet·te élève talentueux·se et rigoureux·se.", profiles: ["Excellent·e"], classes: TERM, trimesters: T2 },
  { id: 420, text: "Bonne entrée en 4ème. Les acquis de 5ème sont bien consolidés et les nouvelles notions sont assimilées avec efficacité et régularité.", profiles: ["Bon niveau"], classes: ["4ème"], trimesters: T1 },
  { id: 421, text: "Le bon niveau se maintient au second trimestre. L'élève progresse régulièrement et les évaluations reflètent un travail sérieux et constant.", profiles: ["Bon niveau"], classes: ALL, trimesters: T2 },
  { id: 422, text: "Belle fin d'année au lycée. Le niveau satisfaisant et les acquis solides constituent une bonne base pour la suite du parcours.", profiles: ["Bon niveau"], classes: LYCEE, trimesters: T3 },
  { id: 423, text: "En 5ème, le second trimestre déçoit. Les capacités sont pourtant bien là. Un manque de travail régulier explique ces résultats insuffisants.", profiles: ["Peut mieux faire"], classes: ["5ème"], trimesters: T2 },
  { id: 424, text: "Fin de collège en deçà du potentiel. Des efforts plus soutenus auraient permis d'obtenir de bien meilleurs résultats tout au long de l'année.", profiles: ["Peut mieux faire"], classes: COLLEGE, trimesters: T3 },
  { id: 425, text: "Premiers résultats décevants dès ce T1. Il est encore temps de redresser la barre : il faut s'y mettre sans plus attendre.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T1 },
  { id: 426, text: "L'entrée en seconde révèle des lacunes importantes héritées du collège. Un accompagnement ciblé et un travail intense sont nécessaires dès maintenant.", profiles: ["En difficulté"], classes: ["2nde"], trimesters: T1 },
  { id: 427, text: "Au second trimestre, les difficultés persistent malgré les efforts. Un travail de remise à niveau approfondi est plus que jamais nécessaire.", profiles: ["En difficulté"], classes: COLLEGE, trimesters: T2 },
  { id: 428, text: "Fin d'année très difficile. Les bases restent fragiles et nécessiteront un travail soutenu pendant les vacances pour aborder la rentrée sereinement.", profiles: ["En difficulté"], classes: ALL, trimesters: T3 },
  { id: 429, text: "En 4ème dès le premier trimestre, l'élève montre un sérieux remarquable. Ce travail constant pose de solides fondations pour toute l'année.", profiles: ["Travailleur·se"], classes: ["4ème"], trimesters: T1 },
  { id: 430, text: "Au lycée, l'investissement de l'élève ne faiblit pas. Le second trimestre confirme une rigueur exemplaire qui mérite d'être sincèrement saluée.", profiles: ["Travailleur·se"], classes: LYCEE, trimesters: T2 },
  { id: 431, text: "Belle fin d'année en 6ème-5ème. La régularité du travail est un atout majeur qui permettra à l'élève de progresser sereinement dans la suite de sa scolarité.", profiles: ["Travailleur·se"], classes: EARLY, trimesters: T3 },
  { id: 432, text: "Dès la 6ème, l'élève prend la parole avec une assurance étonnante. Cette aisance orale précoce est un vrai atout pour l'ensemble de la scolarité.", profiles: ["À l'oral"], classes: ["6ème"], trimesters: T1 },
  { id: 433, text: "L'expression orale progresse de façon remarquable au second trimestre. L'élève gagne en fluidité et en spontanéité à chaque séance.", profiles: ["À l'oral"], classes: ALL, trimesters: T2 },
  { id: 434, text: "En terminale, l'aisance orale de l'élève est un atout décisif pour les épreuves du baccalauréat. Une compétence solidement maîtrisée.", profiles: ["À l'oral"], classes: TERM, trimesters: ALL },
  { id: 435, text: "En seconde, les productions écrites témoignent d'une belle maturité. L'élève maîtrise les codes de l'expression écrite avec une rigueur très appréciable.", profiles: ["À l'écrit"], classes: ["2nde"], trimesters: T2 },
  { id: 436, text: "Au collège, la qualité constante des écrits est remarquable. L'élève soigne chaque production avec une attention exemplaire pour le niveau.", profiles: ["À l'écrit"], classes: COLLEGE, trimesters: ALL },
  { id: 437, text: "Très belles productions écrites en fin d'année. L'élève termine avec des rédactions riches et précises qui témoignent d'un vrai travail de fond.", profiles: ["À l'écrit"], classes: ALL, trimesters: T3 },
  { id: 438, text: "En 5ème, la passivité de l'élève est préjudiciable à ses apprentissages. S'impliquer davantage est la première condition pour progresser en anglais.", profiles: ["Passif·ve"], classes: ["5ème"], trimesters: ALL },
  { id: 439, text: "La passivité persiste au second trimestre malgré les rappels. L'élève doit comprendre que la participation active est indispensable en langue vivante.", profiles: ["Passif·ve"], classes: ALL, trimesters: T2 },
  { id: 440, text: "Premier trimestre de 4ème encourageant. L'élève aborde cette année charnière avec une belle volonté de bien faire et de progresser.", profiles: ["Encouragements"], classes: ["4ème"], trimesters: T1 },
  { id: 441, text: "Au lycée, le second trimestre montre une belle progression. Ces avancées sont le signe d'un investissement plus sérieux. Continuez sur cette lancée !", profiles: ["Encouragements"], classes: LYCEE, trimesters: T2 },
  { id: 442, text: "En 3ème, le comportement de l'élève est source de perturbations récurrentes. Cette attitude nuit à sa propre progression et à celle de ses camarades.", profiles: ["Problématique"], classes: ["3ème"], trimesters: ALL },
  { id: 443, text: "Fin d'année marquée par des comportements problématiques qui n'ont pas évolué. La rentrée prochaine devra marquer une rupture nette et immédiate.", profiles: ["Problématique"], classes: ALL, trimesters: T3 },
  { id: 444, text: "Dès le début de la scolarité en 6ème-5ème, l'élève fait preuve d'une discrétion et d'un sérieux exemplaires. Un profil rassurant et très efficace.", profiles: ["Discret·e mais sérieux·se"], classes: EARLY, trimesters: T1 },
  { id: 445, text: "Fin d'année dans la même veine que les trimestres précédents : discrète mais appliquée, la régularité du travail se reflète pleinement dans les résultats.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: T3 },
  { id: 446, text: "Fin de lycée animée. La maîtrise de l'anglais est indéniable, mais la tendance à occuper trop de place dans les échanges reste encore à corriger.", profiles: ["Bavard·e mais compétent·e"], classes: LYCEE, trimesters: T3 },
  { id: 447, text: "En 4ème, l'aisance en anglais est visible mais parfois trop envahissante. Canaliser cette énergie permettrait à tous de progresser ensemble.", profiles: ["Bavard·e mais compétent·e"], classes: ["4ème"], trimesters: T2 },
  { id: 448, text: "Dès le premier trimestre au collège, l'élève montre une tendance au découragement. Il faut apprendre à persévérer face aux difficultés inévitables.", profiles: ["Défaitiste"], classes: COLLEGE, trimesters: T1 },
  { id: 449, text: "L'attitude défaitiste persiste au second trimestre. Accepter de se tromper est une condition essentielle pour apprendre et progresser en langue vivante.", profiles: ["Défaitiste"], classes: ALL, trimesters: T2 },
  { id: 450, text: "En 3ème, l'implication de l'élève au second trimestre est exemplaire. Cette énergie positive dynamise la classe et bénéficie à tous.", profiles: ["Moteur·rice et impliqué·e"], classes: ["3ème"], trimesters: T2 },
  { id: 451, text: "Fin d'année brillante en termes d'implication. L'élève aura été un·e moteur·rice constant·e, enrichissant chaque séance jusqu'au dernier cours.", profiles: ["Moteur·rice et impliqué·e"], classes: LYCEE, trimesters: T3 },
  { id: 452, text: "En 5ème, la participation de l'élève est un modèle de régularité et de qualité. Chaque intervention est pensée, pertinente et enrichissante.", profiles: ["Participation régulière et pertinente"], classes: ["5ème"], trimesters: ALL },
  { id: 453, text: "Premier trimestre marqué par une participation remarquable. L'élève prend la parole avec aisance et élève le niveau de chaque échange en classe.", profiles: ["Participation régulière et pertinente"], classes: ALL, trimesters: T1 },
  { id: 454, text: "Fin de collège satisfaisante en termes de niveau. Il reste à travailler la participation en classe pour valoriser les acquis évidents de l'élève.", profiles: ["Bon niveau, participation à parfaire"], classes: COLLEGE, trimesters: T3 },
  { id: 455, text: "En seconde, le bon niveau est confirmé mais les interventions en classe restent trop rares. Un peu plus de prise de risque à l'oral serait très bénéfique.", profiles: ["Bon niveau, participation à parfaire"], classes: ["2nde"], trimesters: T2 },
  { id: 456, text: "En 6ème, l'irrégularité est déjà perceptible. L'élève doit apprendre dès maintenant à maintenir un effort constant pour bien progresser en anglais.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ["6ème"], trimesters: ALL },
  { id: 457, text: "L'irrégularité aura malheureusement marqué toute cette année. Il faudra s'imposer un rythme plus stable et régulier dès la rentrée prochaine.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T3 },
  { id: 458, text: "En première dès le premier trimestre, l'élève dynamise le groupe. Travailler l'écoute des autres permettrait d'affiner encore ce beau profil.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ["1ère"], trimesters: T1 },
  { id: 459, text: "L'enthousiasme est communicatif mais l'impatience nuit parfois à la qualité des échanges. Un effort de patience enrichirait toute la classe.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: T2 },
  { id: 460, text: "Fin de collège très animée. L'implication de l'élève est réelle mais il faut apprendre à partager davantage la parole avec ses camarades.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: COLLEGE, trimesters: T3 },
  { id: 461, text: "Fin de 5ème encourageante. L'élève commence à s'affirmer davantage en cours. Cette évolution positive doit se confirmer et s'amplifier l'an prochain.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ["5ème"], trimesters: T3 },
  { id: 462, text: "Dès le premier trimestre, l'aisance à l'écrit contraste avec la réserve à l'oral. Il faut oser s'exprimer : les bases sont solidement là pour le faire.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ALL, trimesters: T1 },
  { id: 463, text: "Dès le début du lycée, les interventions de l'élève sont pertinentes mais hésitantes. Plus de confiance en soi changerait vraiment la donne à l'oral.", profiles: ["Participe bien mais manque de confiance"], classes: LYCEE, trimesters: T1 },
  { id: 464, text: "L'implication et le dynamisme sont constants. Un travail sur la précision grammaticale et lexicale permettrait de tirer pleinement profit de cet engagement.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: T2 },
  { id: 465, text: "En 3ème au second trimestre, le bon niveau se maintient. Les compétences s'affinent et les perspectives pour le brevet sont encourageantes.", profiles: ["Bon niveau"], classes: ["3ème"], trimesters: T2 },
  { id: 466, text: "Au collège, l'élève se distingue par un niveau d'anglais bien supérieur aux attentes. Un talent précoce à cultiver avec enthousiasme et régularité.", profiles: ["Excellent·e"], classes: COLLEGE, trimesters: ALL },

  // ══ MULTI-PROFILS — IDs 467–516 ══════════════════════════════════════════════

  { id: 467, text: "Premier trimestre remarquable au collège. L'excellence portée par un sérieux discret mais constant impressionne dès le début de l'année.", profiles: ["Excellent·e", "Discret·e mais sérieux·se"], classes: COLLEGE, trimesters: T1 },
  { id: 468, text: "Niveau excellent et dynamisme très appréciable. Il ne manque plus qu'un travail ciblé sur la précision pour atteindre un niveau encore plus abouti.", profiles: ["Excellent·e", "Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: T2 },
  { id: 469, text: "Très beau niveau en fin d'année au lycée. L'élève, encore parfois trop discret·e malgré ses compétences, gagnerait à s'exprimer encore plus librement.", profiles: ["Excellent·e", "Participatif·ve mais parfois trop discret·e"], classes: LYCEE, trimesters: T3 },
  { id: 470, text: "En 3ème, le bon niveau est là mais la passivité ne permet pas de l'exploiter pleinement. Une participation plus active est attendue dès maintenant.", profiles: ["Bon niveau", "Passif·ve"], classes: ["3ème"], trimesters: T1 },
  { id: 471, text: "Belle fin d'année. Le bon niveau et l'enthousiasme sont des atouts réels. Apprendre la patience permettrait d'aller encore plus loin ensemble.", profiles: ["Bon niveau", "Moteur·rice mais parfois impatient·e"], classes: ALL, trimesters: T3 },
  { id: 472, text: "En 5ème, le bon niveau réel de l'élève est gâché par une attitude défaitiste. Il faut croire en ses capacités et les exploiter sans complexe.", profiles: ["Bon niveau", "Défaitiste"], classes: ["5ème"], trimesters: T2 },
  { id: 473, text: "Le premier trimestre révèle un écart entre les efforts fournis et les résultats obtenus. Revoir la méthode de travail permettrait de progresser plus efficacement.", profiles: ["Peut mieux faire", "Travailleur·se"], classes: ALL, trimesters: T1 },
  { id: 474, text: "L'implication est réelle mais les résultats ne suivent pas encore. Un travail plus méthodique permettrait de transformer cet enthousiasme en vraie réussite.", profiles: ["Peut mieux faire", "Moteur·rice et impliqué·e"], classes: LYCEE, trimesters: T2 },
  { id: 475, text: "La participation est un vrai point fort. Dommage que les résultats ne reflètent pas ce niveau d'engagement. Un travail de fond en dehors du cours reste à faire.", profiles: ["Peut mieux faire", "Participation régulière et pertinente"], classes: ["4ème"], trimesters: T3 },
  { id: 476, text: "Dès le premier trimestre au collège, les difficultés académiques se doublent d'un manque d'implication. Une double prise de conscience est urgente.", profiles: ["En difficulté", "Passif·ve"], classes: COLLEGE, trimesters: T1 },
  { id: 477, text: "Les efforts sont là par moments, mais l'irrégularité empêche de combler les lacunes. Une constance dans le travail est absolument indispensable.", profiles: ["En difficulté", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T2 },
  { id: 478, text: "Fin de 3ème difficile. Malgré un niveau qui pourrait être satisfaisant, les lacunes accumulées et le manque de participation ont pesé lourd cette année.", profiles: ["En difficulté", "Bon niveau, participation à parfaire"], classes: ["3ème"], trimesters: T3 },
  { id: 479, text: "Dès le premier trimestre, un profil doublement engageant : sérieux dans le travail personnel et dynamique en classe. Un exemple précieux pour le groupe.", profiles: ["Travailleur·se", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 480, text: "En première, fin d'année exemplaire. Le travail régulier et la participation constante forment un duo gagnant pour aborder la terminale avec sérénité.", profiles: ["Travailleur·se", "Participation régulière et pertinente"], classes: ["1ère"], trimesters: T3 },
  { id: 481, text: "En 6ème-5ème, un profil discret et appliqué qui rassure. Le travail régulier dans l'ombre produit des résultats solides et constants.", profiles: ["Travailleur·se", "Discret·e mais sérieux·se"], classes: EARLY, trimesters: ALL },
  { id: 482, text: "Les compétences orales sont là mais restent encore sous-exploitées. Un peu plus d'audace permettrait de vraiment briller et de s'affirmer en classe.", profiles: ["À l'oral", "Participatif·ve mais parfois trop discret·e"], classes: ALL, trimesters: T2 },
  { id: 483, text: "En 2nde dès le premier trimestre, l'aisance orale associée à un bon niveau général constitue une très belle base pour la suite du lycée.", profiles: ["À l'oral", "Bon niveau"], classes: ["2nde"], trimesters: T1 },
  { id: 484, text: "En terminale, les productions écrites sont le reflet d'un travail acharné et rigoureux. Un point fort décisif et bien maîtrisé pour le baccalauréat.", profiles: ["À l'écrit", "Travailleur·se"], classes: TERM, trimesters: ALL },
  { id: 485, text: "Les écrits témoignent d'une maîtrise certaine, mais les résultats globaux restent décevants. Un investissement plus large dans toutes les compétences est attendu.", profiles: ["À l'écrit", "Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 486, text: "Le premier trimestre révèle un profil très effacé. Une passivité qui cache peut-être un travail sérieux, mais qui ne se manifeste pas assez en classe.", profiles: ["Passif·ve", "Discret·e mais sérieux·se"], classes: ALL, trimesters: T1 },
  { id: 487, text: "Fin de 4ème décevante. L'implication trop irrégulière et la passivité globale ont freiné une progression qui aurait pu être bien meilleure.", profiles: ["Passif·ve", "Actif·ve mais irrégulier·ère"], classes: ["4ème"], trimesters: T3 },
  { id: 488, text: "Belle fin de collège. Le bon niveau atteint est très encourageant et augure bien de l'entrée au lycée. Un bilan qui mérite d'être célébré !", profiles: ["Encouragements", "Bon niveau"], classes: COLLEGE, trimesters: T3 },
  { id: 489, text: "Les progrès du premier trimestre sont encourageants. L'élève doit maintenant trouver la régularité pour confirmer cette belle dynamique dans la durée.", profiles: ["Encouragements", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T1 },
  { id: 490, text: "Dès le début du lycée, un profil exemplaire : discret, sérieux, régulier. Ce type d'engagement constant est le plus fiable et le plus précieux sur la durée.", profiles: ["Discret·e mais sérieux·se", "Travailleur·se"], classes: LYCEE, trimesters: T1 },
  { id: 491, text: "Fin de 5ème rassurante. Le sérieux discret de l'élève porte ses fruits et les progrès sont là pour en témoigner de façon très satisfaisante.", profiles: ["Discret·e mais sérieux·se", "Encouragements"], classes: ["5ème"], trimesters: T3 },
  { id: 492, text: "Fin d'année vivante. L'aisance et la participation fréquente de l'élève animent les cours, même si la modération reste encore un point à travailler.", profiles: ["Bavard·e mais compétent·e", "Participation régulière et pertinente"], classes: ALL, trimesters: T3 },
  { id: 493, text: "Au lycée, un niveau excellent qui s'exprime parfois trop librement. Canaliser cette maîtrise enrichirait encore davantage les échanges de la classe.", profiles: ["Bavard·e mais compétent·e", "Excellent·e"], classes: LYCEE, trimesters: T2 },
  { id: 494, text: "Le premier trimestre révèle une combinaison préoccupante : découragement et passivité. Il faut agir sur ces deux fronts simultanément, sans attendre.", profiles: ["Défaitiste", "Passif·ve"], classes: ALL, trimesters: T1 },
  { id: 495, text: "Le sérieux de l'élève est réel mais le découragement l'empêche d'avancer. Il faut apprendre à s'appuyer sur ce travail pour reprendre confiance.", profiles: ["Défaitiste", "Discret·e mais sérieux·se"], classes: ["4ème"], trimesters: T2 },
  { id: 496, text: "En 3ème dès le premier trimestre, un profil doublement précieux : moteur·rice pour le groupe et rigoureux·se dans le travail personnel. Félicitations.", profiles: ["Moteur·rice et impliqué·e", "Travailleur·se"], classes: ["3ème"], trimesters: T1 },
  { id: 497, text: "Fin de 6ème avec un profil très positif. Le bon niveau et l'implication de l'élève sont une excellente base pour la suite du collège.", profiles: ["Moteur·rice et impliqué·e", "Bon niveau"], classes: ["6ème"], trimesters: T3 },
  { id: 498, text: "En première dès le premier trimestre, l'élève impressionne par son excellence et sa participation régulière et pertinente. Un début d'année remarquable.", profiles: ["Participation régulière et pertinente", "Excellent·e"], classes: ["1ère"], trimesters: T1 },
  { id: 499, text: "Le sérieux du travail est indéniable. Dommage que la participation ne reflète pas cet investissement. Un peu plus de visibilité en classe serait très bénéfique.", profiles: ["Bon niveau, participation à parfaire", "Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 500, text: "Premier trimestre encourageant au collège. Le bon niveau est là et les quelques interventions montrent que l'élève a tout ce qu'il faut pour participer davantage.", profiles: ["Bon niveau, participation à parfaire", "Encouragements"], classes: COLLEGE, trimesters: T1 },
  { id: 501, text: "L'investissement est présent mais trop irrégulier au lycée. Trouver un rythme de travail stable permettrait de pleinement confirmer ce potentiel évident.", profiles: ["Actif·ve mais irrégulier·ère", "Travailleur·se"], classes: LYCEE, trimesters: T1 },
  { id: 502, text: "Fin de 5ème en demi-teinte. Le bon niveau de l'élève est régulièrement gâché par des semaines d'absence d'effort. La régularité est vraiment la clé.", profiles: ["Actif·ve mais irrégulier·ère", "Bon niveau"], classes: ["5ème"], trimesters: T3 },
  { id: 503, text: "Fin d'année excellente et dynamique. Le niveau exceptionnel et l'enthousiasme de l'élève font de lui·elle un·e atout précieux et stimulant pour la classe.", profiles: ["Moteur·rice mais parfois impatient·e", "Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 504, text: "Au collège, l'élève est engagé·e et travailleur·se. L'impatience est le seul bémol : apprendre à écouter enrichirait encore ce beau profil.", profiles: ["Moteur·rice mais parfois impatient·e", "Travailleur·se"], classes: COLLEGE, trimesters: ALL },
  { id: 505, text: "Fin de première brillante. L'élève excellent·e et très impliqué·e doit maintenant apprendre à mieux partager la parole pour bien préparer la terminale.", profiles: ["Très impliqué·e, tend à monopoliser la parole", "Excellent·e"], classes: ["1ère"], trimesters: T3 },
  { id: 506, text: "Premier trimestre actif et de bon niveau. L'énergie est appréciable mais il faut d'emblée veiller à laisser la place aux autres élèves dans les échanges.", profiles: ["Très impliqué·e, tend à monopoliser la parole", "Bon niveau"], classes: ALL, trimesters: T1 },
  { id: 507, text: "En 3ème, le sérieux du travail est admirable. L'élève doit maintenant trouver le courage de participer davantage pour valoriser pleinement ses compétences.", profiles: ["Participatif·ve mais parfois trop discret·e", "Travailleur·se"], classes: ["3ème"], trimesters: T2 },
  { id: 508, text: "Belle fin d'année au lycée. La participation, encore timide mais en progrès, témoigne d'une confiance grandissante. Il faut absolument continuer dans cette voie.", profiles: ["Participatif·ve mais parfois trop discret·e", "Encouragements"], classes: LYCEE, trimesters: T3 },
  { id: 509, text: "Le sérieux du travail écrit est exemplaire. Le prochain défi est d'investir la même énergie dans l'expression orale pour atteindre un profil plus complet.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 510, text: "En terminale, les écrits sont d'un niveau remarquable. Libérer cette excellence à l'oral sera le défi final décisif avant les épreuves du baccalauréat.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Excellent·e"], classes: TERM, trimesters: T1 },
  { id: 511, text: "En 4ème, le bon niveau et les participations de qualité méritent plus de confiance. Les réponses sont souvent très justes : il faut vraiment y croire !", profiles: ["Participe bien mais manque de confiance", "Bon niveau"], classes: ["4ème"], trimesters: ALL },
  { id: 512, text: "Fin d'année encourageante. La confiance en soi a gagné du terrain et les participations sont de plus en plus affirmées et pertinentes. Bravo pour cette évolution !", profiles: ["Participe bien mais manque de confiance", "Encouragements"], classes: ALL, trimesters: T3 },
  { id: 513, text: "En seconde, l'élève excellent·e et moteur·rice doit maintenant soigner la précision linguistique pour atteindre un niveau encore plus abouti et maîtrisé.", profiles: ["Moteur·rice, à progresser sur la précision", "Excellent·e"], classes: ["2nde"], trimesters: T2 },
  { id: 514, text: "Premier trimestre dynamique. L'élève est doublement moteur·rice par son implication et son enthousiasme. La précision linguistique sera le prochain objectif.", profiles: ["Moteur·rice, à progresser sur la précision", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 515, text: "Magnifique fin de terminale. L'excellence et la participation exemplaire de l'élève ont enrichi les cours jusqu'au dernier jour. Bon courage pour le baccalauréat !", profiles: ["Excellent·e", "Participation régulière et pertinente"], classes: TERM, trimesters: T3 },
  { id: 516, text: "En 6ème au second trimestre, le bon niveau général se double d'une belle aisance orale en progression constante. Un profil très prometteur pour la suite.", profiles: ["Bon niveau", "À l'oral"], classes: ["6ème"], trimesters: T2 },

  // ══ MONO-PROFILS — IDs 517–566 ══════════════════════════════════════════════

  { id: 517, text: "Dès la première, l'élève s'illustre par un niveau d'anglais exceptionnel. Cette maîtrise précoce du cycle terminal est un atout tout à fait remarquable.", profiles: ["Excellent·e"], classes: ["1ère"], trimesters: T1 },
  { id: 518, text: "Deuxième trimestre d'excellence. Chaque compétence — compréhension, expression, interaction — est maîtrisée avec une aisance vraiment impressionnante.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },
  { id: 519, text: "Fin de collège brillante. L'élève quitte le cycle 4 avec un niveau d'anglais remarquable et de belles perspectives pour le lycée.", profiles: ["Excellent·e"], classes: COLLEGE, trimesters: T3 },
  { id: 520, text: "Très bonne prise en main de l'anglais dès la 6ème. Le niveau affiché dès ce premier trimestre est rassurant et prometteur pour toute la scolarité.", profiles: ["Bon niveau"], classes: ["6ème"], trimesters: T1 },
  { id: 521, text: "Un parcours solide qui se conclut sur un bilan satisfaisant. Les compétences en anglais sont bien ancrées et les résultats constants tout au long de l'année.", profiles: ["Bon niveau"], classes: ALL, trimesters: T3 },
  { id: 522, text: "Bonne entrée dans l'année au lycée. Le niveau est satisfaisant et les premières évaluations montrent une maîtrise correcte des compétences attendues.", profiles: ["Bon niveau"], classes: LYCEE, trimesters: T1 },
  { id: 523, text: "Début d'année insuffisant pour un·e élève de 3ème. Les exigences croissantes de cette année charnière nécessitent un investissement bien plus soutenu.", profiles: ["Peut mieux faire"], classes: ["3ème"], trimesters: T1 },
  { id: 524, text: "Fin d'année décevante pour un niveau qui méritait mieux. Il faudra tirer les leçons de cette année pour repartir sur de meilleures bases à la rentrée.", profiles: ["Peut mieux faire"], classes: LYCEE, trimesters: T3 },
  { id: 525, text: "À mi-parcours, les résultats ne correspondent toujours pas aux capacités réelles de l'élève. Un travail plus sérieux est indispensable pour redresser la trajectoire.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T2 },
  { id: 526, text: "Les premières semaines de 5ème révèlent des lacunes préoccupantes. Il est essentiel d'identifier les blocages et d'y remédier sans tarder.", profiles: ["En difficulté"], classes: ["5ème"], trimesters: T1 },
  { id: 527, text: "Au second trimestre du lycée, les difficultés persistent. L'élève doit s'appuyer sur tous les dispositifs d'aide disponibles pour avancer efficacement.", profiles: ["En difficulté"], classes: LYCEE, trimesters: T2 },
  { id: 528, text: "Début de terminale alarmant. Des lacunes fondamentales compromettent la préparation au baccalauréat. Un travail intensif et immédiat est impératif.", profiles: ["En difficulté"], classes: TERM, trimesters: T1 },
  { id: 529, text: "Dès la 2nde, l'élève impose un rythme de travail exemplaire. Cette rigueur dès le début du lycée est un gage de réussite pour toute la suite du parcours.", profiles: ["Travailleur·se"], classes: ["2nde"], trimesters: T1 },
  { id: 530, text: "Au second trimestre au collège, le travail sérieux de l'élève ne faiblit pas. La constance de l'investissement mérite d'être pleinement saluée.", profiles: ["Travailleur·se"], classes: COLLEGE, trimesters: T2 },
  { id: 531, text: "Une année entière placée sous le signe du travail rigoureux. Ce bilan positif est la juste récompense d'une persévérance sans faille du début à la fin.", profiles: ["Travailleur·se"], classes: ALL, trimesters: T3 },
  { id: 532, text: "En 5ème au second trimestre, la progression à l'oral est frappante. L'élève prend la parole avec de plus en plus de naturel et d'assurance.", profiles: ["À l'oral"], classes: ["5ème"], trimesters: T2 },
  { id: 533, text: "Au collège, l'aisance orale de l'élève est un atout précieux. Les échanges en anglais sont fluides et témoignent d'un vrai travail régulier sur la langue.", profiles: ["À l'oral"], classes: COLLEGE, trimesters: ALL },
  { id: 534, text: "Dès le premier trimestre, l'élève se distingue par une aisance à l'oral remarquable. La prise de parole est spontanée, naturelle et toujours pertinente.", profiles: ["À l'oral"], classes: ALL, trimesters: T1 },
  { id: 535, text: "En première dès le début de l'année, les productions écrites impressionnent. La maîtrise des structures complexes et du vocabulaire est déjà bien établie.", profiles: ["À l'écrit"], classes: ["1ère"], trimesters: T1 },
  { id: 536, text: "Le second trimestre confirme une progression constante à l'écrit. Les rédactions gagnent en richesse et en précision à chaque nouvelle évaluation.", profiles: ["À l'écrit"], classes: ALL, trimesters: T2 },
  { id: 537, text: "En 6ème-5ème, les écrits témoignent d'une maîtrise déjà solide pour le niveau. L'élève pose de belles bases rédactionnelles pour toute la suite.", profiles: ["À l'écrit"], classes: EARLY, trimesters: ALL },
  { id: 538, text: "En première, la passivité de l'élève est particulièrement préjudiciable. À ce niveau du lycée, la participation active est une compétence à part entière.", profiles: ["Passif·ve"], classes: ["1ère"], trimesters: T2 },
  { id: 539, text: "Dès le premier trimestre au collège, le manque d'engagement est notable. Une implication plus active est nécessaire pour progresser en langue vivante.", profiles: ["Passif·ve"], classes: COLLEGE, trimesters: T1 },
  { id: 540, text: "En 3ème, le second trimestre marque une belle progression. L'élève prend conscience des enjeux de cette année importante et s'investit davantage.", profiles: ["Encouragements"], classes: ["3ème"], trimesters: T2 },
  { id: 541, text: "Très belle entrée dans l'année. Les premiers résultats sont encourageants et témoignent d'une bonne disposition pour apprendre et progresser en anglais.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 542, text: "Dès le premier trimestre de lycée, des problèmes de comportement apparaissent. Un recadrage a été effectué ; des efforts immédiats sont attendus.", profiles: ["Problématique"], classes: LYCEE, trimesters: T1 },
  { id: 543, text: "En 5ème, le comportement de l'élève est une source de tension récurrente. Une attitude plus respectueuse est indispensable pour le bon fonctionnement de la classe.", profiles: ["Problématique"], classes: ["5ème"], trimesters: ALL },
  { id: 544, text: "Dès la 2nde, l'élève adopte un profil discret mais efficace. Le travail fourni, sans se faire remarquer, est d'une qualité constante et appréciable.", profiles: ["Discret·e mais sérieux·se"], classes: ["2nde"], trimesters: T1 },
  { id: 545, text: "Le second trimestre confirme un profil fiable et régulier. La discrétion de l'élève n'enlève rien à la qualité d'un travail toujours sérieux et appliqué.", profiles: ["Discret·e mais sérieux·se"], classes: ALL, trimesters: T2 },
  { id: 546, text: "Fin de 3ème animée. L'élève maîtrise l'anglais avec aisance mais doit apprendre à s'imposer des limites pour ne pas déséquilibrer les échanges.", profiles: ["Bavard·e mais compétent·e"], classes: ["3ème"], trimesters: T3 },
  { id: 547, text: "Dès le lycée, la compétence est évidente mais l'excès de prise de parole est à corriger rapidement pour ne pas pénaliser le reste de la classe.", profiles: ["Bavard·e mais compétent·e"], classes: LYCEE, trimesters: T1 },
  { id: 548, text: "En seconde, la résignation de l'élève face aux difficultés est préoccupante. La transition vers le lycée demande de la persévérance, pas de l'abandon.", profiles: ["Défaitiste"], classes: ["2nde"], trimesters: T2 },
  { id: 549, text: "Fin d'année marquée par une attitude résignée difficile à faire évoluer. Un travail sur la confiance en soi sera absolument prioritaire à la rentrée prochaine.", profiles: ["Défaitiste"], classes: COLLEGE, trimesters: T3 },
  { id: 550, text: "Fin de 4ème très dynamique. L'élève a animé la classe avec constance et enthousiasme tout au long du trimestre. Un vrai moteur pour le groupe.", profiles: ["Moteur·rice et impliqué·e"], classes: ["4ème"], trimesters: T3 },
  { id: 551, text: "Dès le premier trimestre, l'élève dynamise le groupe par son implication et son entrain communicatif. Une énergie positive et stimulante pour toute la classe.", profiles: ["Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 552, text: "Au lycée au second trimestre, la participation de l'élève reste exemplaire. La qualité des interventions enrichit considérablement les échanges en classe.", profiles: ["Participation régulière et pertinente"], classes: LYCEE, trimesters: T2 },
  { id: 553, text: "En 4ème, l'élève participe avec une régularité et une pertinence remarquables. Les interventions sont toujours bien construites, réfléchies et enrichissantes.", profiles: ["Participation régulière et pertinente"], classes: ["4ème"], trimesters: ALL },
  { id: 554, text: "En 6ème-5ème, le bon niveau est bien réel mais peine à se manifester en classe. Oser prendre la parole davantage permettrait de véritablement briller.", profiles: ["Bon niveau, participation à parfaire"], classes: EARLY, trimesters: T2 },
  { id: 555, text: "Fin d'année satisfaisante en termes de résultats. Dommage que la participation n'ait pas suivi : le niveau réel méritait de s'exprimer plus librement.", profiles: ["Bon niveau, participation à parfaire"], classes: ALL, trimesters: T3 },
  { id: 556, text: "Au lycée, l'irrégularité est toujours présente au second trimestre. Des semaines excellentes succèdent à des semaines d'absence d'effort. La constance est le défi.", profiles: ["Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: T2 },
  { id: 557, text: "En 4ème dès le premier trimestre, l'irrégularité est préoccupante. L'élève doit trouver un rythme stable pour progresser efficacement en anglais.", profiles: ["Actif·ve mais irrégulier·ère"], classes: ["4ème"], trimesters: T1 },
  { id: 558, text: "Fin d'année positive en termes d'implication. L'impatience observée tout au long de l'année a légèrement diminué : une évolution à encourager pour la rentrée.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: COLLEGE, trimesters: T3 },
  { id: 559, text: "Dès le lycée, l'enthousiasme de l'élève est précieux pour la classe. Travailler l'écoute des autres dès maintenant est un enjeu important pour la suite.", profiles: ["Moteur·rice mais parfois impatient·e"], classes: LYCEE, trimesters: T1 },
  { id: 560, text: "En 4ème au second trimestre, l'implication est toujours totale. Il faut maintenant travailler davantage la gestion équitable du temps de parole en classe.", profiles: ["Très impliqué·e, tend à monopoliser la parole"], classes: ["4ème"], trimesters: T2 },
  { id: 561, text: "En 3ème dès le premier trimestre, quelques interventions pertinentes laissent entrevoir un réel potentiel. Il faut oser prendre la parole plus souvent.", profiles: ["Participatif·ve mais parfois trop discret·e"], classes: ["3ème"], trimesters: T1 },
  { id: 562, text: "En seconde, les écrits sont déjà de très bonne qualité. L'oral reste le point à travailler en priorité : s'y engager davantage serait très bénéfique.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: ["2nde"], trimesters: T1 },
  { id: 563, text: "Fin de collège avec un beau bilan à l'écrit. L'oral est le prochain objectif au lycée : les bases sont solides, il faut maintenant oser s'exprimer.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral"], classes: COLLEGE, trimesters: T3 },
  { id: 564, text: "En 6ème dès le début, les participations montrent un potentiel certain. Le manque de confiance est le seul frein : il faut s'appuyer sur les réussites.", profiles: ["Participe bien mais manque de confiance"], classes: ["6ème"], trimesters: T1 },
  { id: 565, text: "Fin d'année avec des progrès réels en termes de confiance. Les participations sont plus fréquentes et plus affirmées qu'en début d'année. Bravo pour cette évolution !", profiles: ["Participe bien mais manque de confiance"], classes: ALL, trimesters: T3 },
  { id: 566, text: "Dès le premier trimestre au collège, l'élève est un·e moteur·rice enthousiaste. La précision linguistique sera le principal objectif à travailler dès maintenant.", profiles: ["Moteur·rice, à progresser sur la précision"], classes: COLLEGE, trimesters: T1 },

  // ══ MULTI-PROFILS — IDs 567–616 ══════════════════════════════════════════════

  { id: 567, text: "En 3ème, l'excellence de l'élève s'exprime parfois avec trop d'enthousiasme. Apprendre à mesurer ses interventions valoriserait encore davantage ce beau niveau.", profiles: ["Excellent·e", "Bavard·e mais compétent·e"], classes: ["3ème"], trimesters: ALL },
  { id: 568, text: "Premier trimestre prometteur. Un niveau excellent mais un manque de confiance surprenant. Il faut s'appuyer sur ces résultats pour oser davantage en classe.", profiles: ["Excellent·e", "Participe bien mais manque de confiance"], classes: ALL, trimesters: T1 },
  { id: 569, text: "Au lycée, l'excellence est là mais l'irrégularité nuit à la constance des résultats. Un investissement plus régulier confirmerait pleinement ce très haut niveau.", profiles: ["Excellent·e", "Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: T2 },
  { id: 570, text: "Dès le premier trimestre, un profil doublement positif : bon niveau et implication réelle. Un·e élève qui contribue activement à la dynamique de classe.", profiles: ["Bon niveau", "Moteur·rice et impliqué·e"], classes: ALL, trimesters: T1 },
  { id: 571, text: "En 4ème, le bon niveau général s'accompagne d'une aisance à l'oral très appréciable. Un profil équilibré et vraiment prometteur pour la suite du collège.", profiles: ["Bon niveau", "À l'oral"], classes: ["4ème"], trimesters: T2 },
  { id: 572, text: "Fin de collège satisfaisante en termes de niveau, mais l'irrégularité a clairement pesé sur les résultats. La régularité sera le défi prioritaire au lycée.", profiles: ["Bon niveau", "Actif·ve mais irrégulier·ère"], classes: COLLEGE, trimesters: T3 },
  { id: 573, text: "Le premier trimestre révèle deux problèmes à traiter simultanément : des résultats insuffisants et un comportement à améliorer. Un changement s'impose rapidement.", profiles: ["Peut mieux faire", "Problématique"], classes: ALL, trimesters: T1 },
  { id: 574, text: "Fin de 6ème avec quelques progrès encourageants. L'élève commence à prendre conscience de son potentiel. Il faut amplifier cet élan dès la rentrée.", profiles: ["Peut mieux faire", "Encouragements"], classes: ["6ème"], trimesters: T3 },
  { id: 575, text: "L'implication est réelle mais mal canalisée et les résultats décevants. Participer mieux — pas seulement plus — changerait vraiment la donne en anglais.", profiles: ["Peut mieux faire", "Très impliqué·e, tend à monopoliser la parole"], classes: ALL, trimesters: T2 },
  { id: 576, text: "Malgré les difficultés dès le premier trimestre de 4ème, l'élève s'implique avec courage. Cet engagement précieux doit être soutenu et encouragé.", profiles: ["En difficulté", "Moteur·rice et impliqué·e"], classes: ["4ème"], trimesters: T1 },
  { id: 577, text: "L'élève participe avec régularité malgré les difficultés. Cet effort oral mérite d'être salué et doit servir de levier pour progresser également à l'écrit.", profiles: ["En difficulté", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 578, text: "Fin de lycée difficile, avec des moments d'effort mais beaucoup d'irrégularité. Cette instabilité a malheureusement aggravé les difficultés existantes.", profiles: ["En difficulté", "Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: T3 },
  { id: 579, text: "En 5ème, le sérieux est indéniable mais la méthode de travail est à revoir. Travailler autrement, pas seulement plus, permettra de franchir le palier suivant.", profiles: ["Travailleur·se", "Peut mieux faire"], classes: ["5ème"], trimesters: T2 },
  { id: 580, text: "L'élève travaille avec sérieux mais se décourage trop facilement face aux obstacles. Conjuguer effort et persévérance est la clé pour surmonter les difficultés.", profiles: ["Travailleur·se", "Défaitiste"], classes: ALL, trimesters: T1 },
  { id: 581, text: "Au lycée, le travail est présent mais pas suffisamment constant. Un rythme régulier remplacerait avantageusement ces efforts trop souvent en dents de scie.", profiles: ["Travailleur·se", "Actif·ve mais irrégulier·ère"], classes: LYCEE, trimesters: T2 },
  { id: 582, text: "L'aisance orale est réelle mais le découragement à l'écrit pèse sur le bilan. Il faut transposer la confiance développée à l'oral vers les productions écrites.", profiles: ["À l'oral", "Défaitiste"], classes: ALL, trimesters: T3 },
  { id: 583, text: "En 3ème, l'élève brille à l'oral par intermittence. Quand il·elle s'implique, les échanges sont riches. Il faut rendre cette implication permanente.", profiles: ["À l'oral", "Actif·ve mais irrégulier·ère"], classes: ["3ème"], trimesters: T2 },
  { id: 584, text: "Fin de première brillante à l'écrit. L'excellence atteinte dans les productions écrites place cet·te élève parmi les meilleurs du niveau lycée.", profiles: ["À l'écrit", "Excellent·e"], classes: ["1ère"], trimesters: T3 },
  { id: 585, text: "Premier trimestre encourageant à l'écrit au collège. Les premiers travaux montrent une belle progression et de réelles promesses pour la suite de l'année.", profiles: ["À l'écrit", "Encouragements"], classes: COLLEGE, trimesters: T1 },
  { id: 586, text: "Au second trimestre, passivité et comportement problématique forment une combinaison très préoccupante. Des mesures fermes ont été prises pour y remédier.", profiles: ["Passif·ve", "Problématique"], classes: ALL, trimesters: T2 },
  { id: 587, text: "En 6ème, la passivité domine mais de petits signes de participation encourageants apparaissent. Il faut les amplifier et les accompagner avec bienveillance.", profiles: ["Passif·ve", "Encouragements"], classes: ["6ème"], trimesters: T1 },
  { id: 588, text: "Les progrès sont là, discrets mais réels. Le sérieux de l'élève finit toujours par payer. Ces avancées méritent d'être célébrées et amplifiées.", profiles: ["Encouragements", "Discret·e mais sérieux·se"], classes: ALL, trimesters: T2 },
  { id: 589, text: "Premier trimestre de 5ème avec de belles promesses. L'implication et les progrès visibles de l'élève sont très encourageants pour la suite de l'année.", profiles: ["Encouragements", "Moteur·rice et impliqué·e"], classes: ["5ème"], trimesters: T1 },
  { id: 590, text: "Au lycée, l'élève est discret·e mais participe avec une régularité et une pertinence très appréciables. Un profil rare et précieux pour l'ensemble de la classe.", profiles: ["Discret·e mais sérieux·se", "Participation régulière et pertinente"], classes: LYCEE, trimesters: T2 },
  { id: 591, text: "Fin d'année avec un profil discret mais dynamique. Le prochain défi est de soigner la précision linguistique pour valoriser pleinement cet engagement sincère.", profiles: ["Discret·e mais sérieux·se", "Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: T3 },
  { id: 592, text: "En 5ème, la compétence et la loquacité vont de pair. L'élève devra apprendre à s'exprimer au bon moment pour que ses interventions soient encore plus utiles.", profiles: ["Bavard·e mais compétent·e", "Bon niveau"], classes: ["5ème"], trimesters: T1 },
  { id: 593, text: "Fin de collège positive. La maîtrise de l'anglais est là et l'enthousiasme intact. Il faut canaliser cette énergie pour progresser encore davantage au lycée.", profiles: ["Bavard·e mais compétent·e", "Encouragements"], classes: COLLEGE, trimesters: T3 },
  { id: 594, text: "L'élève participe régulièrement mais se décourage dès que les réponses ne sont pas parfaites. La langue s'apprend aussi par l'erreur : il faut l'accepter.", profiles: ["Défaitiste", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 595, text: "Fin d'année avec un effort sérieux mais une confiance encore fragile. Le travail fourni est de qualité : il faut maintenant apprendre à croire en ses résultats.", profiles: ["Défaitiste", "Travailleur·se"], classes: LYCEE, trimesters: T3 },
  { id: 596, text: "En seconde, l'élève allie implication et discrétion de façon remarquable. Ce profil équilibré est une vraie force pour aborder sereinement la suite du lycée.", profiles: ["Moteur·rice et impliqué·e", "Discret·e mais sérieux·se"], classes: ["2nde"], trimesters: T2 },
  { id: 597, text: "L'implication est forte mais irrégulière dès le premier trimestre. Maintenir ce niveau d'engagement de façon constante sera le défi principal de l'année.", profiles: ["Moteur·rice et impliqué·e", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T1 },
  { id: 598, text: "En 6ème-5ème, l'élève conjugue participation exemplaire et travail régulier. Un profil idéal qui pose de belles bases solides pour toute la scolarité.", profiles: ["Participation régulière et pertinente", "Travailleur·se"], classes: EARLY, trimesters: ALL },
  { id: 599, text: "Fin d'année avec un bon niveau mais une participation trop irrégulière. La prochaine rentrée devra voir une implication plus stable et plus visible en classe.", profiles: ["Bon niveau, participation à parfaire", "Actif·ve mais irrégulier·ère"], classes: ALL, trimesters: T3 },
  { id: 600, text: "Au lycée, le bon niveau existe mais l'expression orale est parasitée par l'impatience. Plus de sérénité dans les échanges permettrait de vraiment briller.", profiles: ["Bon niveau, participation à parfaire", "Moteur·rice mais parfois impatient·e"], classes: LYCEE, trimesters: T2 },
  { id: 601, text: "En 3ème, l'élève alterne des phases de grande discrétion avec des moments d'engagement. Trouver un équilibre permanent entre les deux serait très bénéfique.", profiles: ["Actif·ve mais irrégulier·ère", "Discret·e mais sérieux·se"], classes: ["3ème"], trimesters: ALL },
  { id: 602, text: "Le second trimestre montre des efforts de régularité dans la participation. Cette évolution positive doit se confirmer et se consolider jusqu'à la fin de l'année.", profiles: ["Actif·ve mais irrégulier·ère", "Participation régulière et pertinente"], classes: ALL, trimesters: T2 },
  { id: 603, text: "Fin d'année avec un profil contrasté : très actif·ve par moments, plus en retrait en d'autres. Trouver la constance dans l'effort sera l'objectif de l'an prochain.", profiles: ["Moteur·rice mais parfois impatient·e", "Discret·e mais sérieux·se"], classes: ALL, trimesters: T3 },
  { id: 604, text: "L'enthousiasme et le découragement alternent au second trimestre. L'élève doit apprendre à maintenir une attitude positive et persévérante face aux obstacles.", profiles: ["Moteur·rice mais parfois impatient·e", "Défaitiste"], classes: COLLEGE, trimesters: T2 },
  { id: 605, text: "L'investissement est total et le travail sérieux. Il faut maintenant apprendre à laisser s'exprimer les autres pour que le cours profite pleinement à tous.", profiles: ["Très impliqué·e, tend à monopoliser la parole", "Travailleur·se"], classes: ALL, trimesters: T2 },
  { id: 606, text: "Fin de 5ème animée. Les progrès sont encourageants et l'implication admirable. Il reste à travailler la gestion de la prise de parole collective en classe.", profiles: ["Très impliqué·e, tend à monopoliser la parole", "Encouragements"], classes: ["5ème"], trimesters: T3 },
  { id: 607, text: "En première, le bon niveau est évident mais la participation reste trop rare. Un peu plus de confiance permettrait de valoriser pleinement ces compétences.", profiles: ["Participatif·ve mais parfois trop discret·e", "Bon niveau"], classes: ["1ère"], trimesters: T2 },
  { id: 608, text: "Fin d'année encourageante. La participation progresse et l'enthousiasme est là. Il faut désormais travailler la précision pour un profil vraiment complet.", profiles: ["Participatif·ve mais parfois trop discret·e", "Moteur·rice, à progresser sur la précision"], classes: ALL, trimesters: T3 },
  { id: 609, text: "Les écrits sont de qualité mais la participation orale est quasi absente. Un vrai déséquilibre à corriger pour une progression harmonieuse en anglais.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Passif·ve"], classes: COLLEGE, trimesters: T2 },
  { id: 610, text: "Premier trimestre positif à l'écrit. Les progrès sont là et la volonté de progresser est perceptible. Il faut maintenant oser s'exprimer davantage à l'oral.", profiles: ["Engagé·e à l'écrit, réservé·e à l'oral", "Encouragements"], classes: ALL, trimesters: T1 },
  { id: 611, text: "En 4ème, les participations sont pertinentes quand elles ont lieu, mais trop rares et trop irrégulières. Il faut oser prendre la parole plus souvent et plus librement.", profiles: ["Participe bien mais manque de confiance", "Actif·ve mais irrégulier·ère"], classes: ["4ème"], trimesters: T2 },
  { id: 612, text: "Fin de lycée positive. Le sérieux discret et les participations de qualité forment un profil solide, même si la confiance reste encore à pleinement consolider.", profiles: ["Participe bien mais manque de confiance", "Discret·e mais sérieux·se"], classes: LYCEE, trimesters: T3 },
  { id: 613, text: "En 3ème dès le premier trimestre, l'élève anime la classe avec un bon niveau. La précision linguistique sera le point de travail clé pour progresser encore.", profiles: ["Moteur·rice, à progresser sur la précision", "Bon niveau"], classes: ["3ème"], trimesters: T1 },
  { id: 614, text: "L'élève s'implique avec enthousiasme mais doute de lui·elle-même. Gagner en confiance et en précision sont les deux objectifs à poursuivre ensemble.", profiles: ["Moteur·rice, à progresser sur la précision", "Participe bien mais manque de confiance"], classes: ALL, trimesters: T2 },
  { id: 615, text: "Dès le premier trimestre de terminale, l'excellence et le sérieux sont pleinement au rendez-vous. Un profil très rassurant pour cette année décisive.", profiles: ["Excellent·e", "Travailleur·se"], classes: TERM, trimesters: T1 },
  { id: 616, text: "Fin de 5ème positive. Le bon niveau et la participation régulière de l'élève constituent un socle solide pour aborder la 4ème et la suite du collège.", profiles: ["Bon niveau", "Participation régulière et pertinente"], classes: ["5ème"], trimesters: T3 },
];

export const BILANS: Bilan[] = [
  //  Tous â” génériques 
  { id: 1,  text: "La classe fait preuve d'une bonne dynamique de groupe. Les résultats sont globalement satisfaisants ce trimestre.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 2,  text: "Trimestre encourageant pour la majorité des élèves. La progression est notable et les efforts sont à souligner.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 3,  text: "Classe hétérogène mais impliquée dans l'ensemble. Les résultats reflètent l'investissement de chacun.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 4,  text: "Un bon trimestre dans l'ensemble, avec des niveaux très variés. L'entraide entre élèves est à encourager.", profiles: ["Tous"], classes: ALL, trimesters: ALL },
  { id: 5,  text: "Classe sérieuse et appliquée. Le niveau général est satisfaisant et globalement en progression.", profiles: ["Tous"], classes: ALL, trimesters: ALL },

  //  Excellent·e 
  { id: 6,  text: "Quelques élèves se distinguent par leur excellence et tirent le niveau de la classe vers le haut.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 7,  text: "Le groupe de tête affiche d'excellents résultats et participe activement à la dynamique positive de classe.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 8,  text: "Les meilleurs éléments de la classe font preuve d'une maîtrise remarquable de l'anglais, à l'oral comme à l'écrit.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },
  { id: 9,  text: "Les élèves les plus avancés continuent de progresser et représentent une source d'inspiration pour leurs camarades.", profiles: ["Excellent·e"], classes: ALL, trimesters: ALL },

  //  Bon niveau 
  { id: 10, text: "Un groupe solide tire la classe vers le haut par ses résultats réguliers et sa participation active.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 11, text: "La majorité des élèves présente un bon niveau d'ensemble. Les bases sont solides et les acquis bien consolidés.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 12, text: "Les élèves de bon niveau contribuent positivement à la dynamique de classe et à la richesse des échanges.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },
  { id: 13, text: "Un niveau satisfaisant pour la majeure partie de la classe, avec des résultats réguliers.", profiles: ["Bon niveau"], classes: ALL, trimesters: ALL },

  //  Peut mieux faire 
  { id: 14, text: "Un certain nombre d'élèves pourraient améliorer leurs résultats avec plus d'implication et de régularité.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 15, text: "Les capacités sont là, mais l'investissement devrait être plus soutenu pour plusieurs élèves.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 16, text: "Quelques élèves n'exploitent pas pleinement leur potentiel. Des efforts supplémentaires sont attendus.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },
  { id: 17, text: "Des résultats en demi-teinte pour une partie de la classe. La régularité du travail ferait la différence.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: ALL },

  //  En difficulté 
  { id: 18, text: "Plusieurs élèves sont en difficulté et nécessitent un soutien accru. Un travail de remédiation est mis en place.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 19, text: "Un groupe d'élèves peine à suivre le rythme. Il est important d'identifier les lacunes pour y remédier rapidement.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 20, text: "Des difficultés persistantes pour certains élèves. La persévérance et le soutien familial sont essentiels.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },
  { id: 21, text: "Le groupe des élèves en difficulté nécessite une attention particulière. Des aides et un accompagnement sont proposés.", profiles: ["En difficulté"], classes: ALL, trimesters: ALL },

  //  Travailleur·se 
  { id: 22, text: "Le sérieux et l'investissement d'une grande partie de la classe sont très appréciables.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 23, text: "La classe fait preuve d'un travail régulier et consciencieux qui se reflète positivement dans les résultats.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 24, text: "L'implication des élèves est globalement bonne. Le travail fourni est sérieux et régulier.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },
  { id: 25, text: "Une classe travailleuse dans l'ensemble. Les efforts fournis sont visibles et les résultats à la hauteur.", profiles: ["Travailleur·se"], classes: ALL, trimesters: ALL },

  //  À l'oral 
  { id: 26, text: "La classe s'exprime avec de plus en plus d'aisance à l'oral. Les progrès sont encourageants.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 27, text: "L'expression orale progresse globalement bien. Les échanges sont de plus en plus fluides et pertinents.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 28, text: "De belles avancées à l'oral pour l'ensemble de la classe. Il convient de maintenir cet effort.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },
  { id: 29, text: "L'oral reste un point à travailler pour une partie de la classe. Des exercices réguliers sont proposés.", profiles: ["À l'oral"], classes: ALL, trimesters: ALL },

  //  À l'écrit 
  { id: 30, text: "L'expression écrite progresse globalement de manière satisfaisante pour la majorité des élèves.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 31, text: "Les productions écrites témoignent d'un effort de structuration et de précision encourageant.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 32, text: "L'écrit demande encore un travail de consolidation pour une partie de la classe.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },
  { id: 33, text: "Des progrès notables à l'écrit pour la majorité des élèves ce trimestre.", profiles: ["À l'écrit"], classes: ALL, trimesters: ALL },

  //  Passif·ve 
  { id: 34, text: "La passivité de certains élèves est un frein aux apprentissages. Une participation plus active est attendue.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 35, text: "Trop d'élèves restent en retrait. Il est essentiel de s'impliquer davantage pour progresser en anglais.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 36, text: "Un manque d'implication général est à noter. Les élèves doivent s'investir plus activement en cours.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },
  { id: 37, text: "Certains élèves restent trop passifs et ne profitent pas pleinement des échanges en classe.", profiles: ["Passif·ve"], classes: ALL, trimesters: ALL },

  //  Encouragements 
  { id: 38, text: "Des progrès réels qui méritent d'être encouragés. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 39, text: "Une progression perceptible pour plusieurs élèves. Ces efforts doivent être maintenus et amplifiés.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 40, text: "La classe avance dans le bon sens. Ces encouragements doivent motiver chacun à persévérer.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },
  { id: 41, text: "De bonnes intentions et des efforts réels. Il faut continuer à s'investir pour confirmer ces progrès.", profiles: ["Encouragements"], classes: ALL, trimesters: ALL },

  //  Problématique 
  { id: 42, text: "Le comportement de certains élèves perturbe le bon déroulement des séances. Une remise au point collective a été nécessaire.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 43, text: "Des problèmes de comportement récurrents nuisent à l'ambiance de travail. Un avertissement a été donné.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 44, text: "L'attitude en classe de quelques élèves est préoccupante et pénalise l'ensemble du groupe.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },
  { id: 45, text: "Des tensions perturbent le bon fonctionnement de la classe. Un travail sur le respect mutuel est en cours.", profiles: ["Problématique"], classes: ALL, trimesters: ALL },

  // â•â• MULTI-PROFILS â” génériques â•
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

  // â•â• TRIMESTRE 1 
  { id: 56, text: "Bonne entrée dans l'année pour la classe. Le premier trimestre est globalement satisfaisant et donne de bonnes bases.", profiles: ["Tous"], classes: ALL, trimesters: T1 },
  { id: 57, text: "Premier trimestre encourageant. Les élèves se sont bien mis au travail dès le début de l'année.", profiles: ["Encouragements"], classes: ALL, trimesters: T1 },
  { id: 58, text: "Dès ce premier trimestre, des difficultés sont à signaler. Il est important d'agir rapidement.", profiles: ["En difficulté"], classes: ALL, trimesters: T1 },
  { id: 59, text: "Le groupe de tête s'illustre dès ce premier trimestre. Un niveau excellent qui donne le ton pour l'année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T1 },

  // â•â• TRIMESTRE 2 
  { id: 60, text: "En ce milieu d'année, la classe confirme la dynamique du premier trimestre. Le niveau est stable et les résultats satisfaisants.", profiles: ["Tous"], classes: ALL, trimesters: T2 },
  { id: 61, text: "Par rapport au premier trimestre, une progression collective est perceptible. Continuons dans cette direction !", profiles: ["Encouragements"], classes: ALL, trimesters: T2 },
  { id: 62, text: "Les difficultés du premier trimestre persistent pour plusieurs élèves. Un travail de remédiation est en cours.", profiles: ["En difficulté"], classes: ALL, trimesters: T2 },
  { id: 63, text: "Le niveau excellent du premier trimestre se confirme en ce second trimestre. Très beau bilan à mi-année.", profiles: ["Excellent·e"], classes: ALL, trimesters: T2 },

  // â•â• TRIMESTRE 3 
  { id: 64, text: "Belle fin d'année pour la classe. Le bilan est globalement positif et la progression est au rendez-vous.", profiles: ["Tous"], classes: ALL, trimesters: T3 },
  { id: 65, text: "La classe termine l'année sur une note encourageante. Les progrès accomplis depuis septembre sont visibles.", profiles: ["Encouragements"], classes: ALL, trimesters: T3 },
  { id: 66, text: "Fin d'année difficile pour plusieurs élèves. Un travail de remise à niveau pendant les vacances serait bénéfique.", profiles: ["En difficulté"], classes: ALL, trimesters: T3 },
  { id: 67, text: "La classe termine l'année en beauté. Le groupe de tête maintient un niveau remarquable jusqu'au bout.", profiles: ["Excellent·e"], classes: ALL, trimesters: T3 },
  { id: 68, text: "Un bilan de fin d'année décevant pour une partie de la classe. L'an prochain devra démarrer sur de meilleures bases.", profiles: ["Peut mieux faire"], classes: ALL, trimesters: T3 },

  // â•â• TERMINALE â•â•
  { id: 69, text: "La classe de terminale affiche un niveau solide à l'approche du baccalauréat. La maîtrise de l'anglais est globalement bien acquise.", profiles: ["Tous"], classes: TERM, trimesters: ALL },
  { id: 70, text: "Des lacunes préoccupantes pour une partie de la classe à l'approche du baccalauréat. Un travail intensif est indispensable.", profiles: ["En difficulté"], classes: TERM, trimesters: ALL },
  { id: 71, text: "Le groupe de tête de cette terminale aborde le baccalauréat avec un excellent niveau et de solides atouts.", profiles: ["Excellent·e"], classes: TERM, trimesters: ALL },

  // â•â• 6èmeâ“5ème â•â•
  { id: 72, text: "Bonne entrée dans l'apprentissage de l'anglais pour la classe. L'enthousiasme est au rendez-vous.", profiles: ["Tous"], classes: EARLY, trimesters: ALL },
  { id: 73, text: "La classe montre un bel enthousiasme pour l'anglais. Cette curiosité est à entretenir et à encourager.", profiles: ["Encouragements"], classes: EARLY, trimesters: ALL },
];
