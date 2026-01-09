// Données des revues scientifiques en sciences naturelles
// Format: ISSN comme clé, données de la revue comme valeur
const journalsData = [
    {
        "issn": "0002-7863",
        "eissn": "1520-5126",
        "title": "Journal of the American Chemical Society",
        "abbr": "J. Am. Chem. Soc.",
        "publisher": "American Chemical Society",
        "field": "chemistry",
        "level": "q1a"
    },
    {
        "issn": "0028-0836",
        "eissn": "1476-4687",
        "title": "Nature",
        "abbr": "Nature",
        "publisher": "Nature Publishing Group",
        "field": "multidisciplinary",
        "level": "top"
    },
    {
        "issn": "0036-8075",
        "eissn": "1095-9203",
        "title": "Science",
        "abbr": "Science",
        "publisher": "American Association for the Advancement of Science",
        "field": "multidisciplinary",
        "level": "top"
    },
    {
        "issn": "0027-8424",
        "eissn": "1091-6490",
        "title": "Proceedings of the National Academy of Sciences",
        "abbr": "Proc. Natl. Acad. Sci. USA",
        "publisher": "National Academy of Sciences",
        "field": "multidisciplinary",
        "level": "q1a"
    },
    {
        "issn": "0003-2700",
        "eissn": "1520-6882",
        "title": "Analytical Chemistry",
        "abbr": "Anal. Chem.",
        "publisher": "American Chemical Society",
        "field": "chemistry",
        "level": "q1a"
    },
    {
        "issn": "0003-6951",
        "eissn": "1077-3118",
        "title": "Applied Physics Letters",
        "abbr": "Appl. Phys. Lett.",
        "publisher": "American Institute of Physics",
        "field": "physics",
        "level": "q1a"
    },
    {
        "issn": "1367-4803",
        "eissn": "1460-2059",
        "title": "Bioinformatics",
        "abbr": "Bioinformatics",
        "publisher": "Oxford University Press",
        "field": "biology",
        "level": "q1a"
    },
    {
        "issn": "0006-2960",
        "eissn": "1520-4995",
        "title": "Biochemistry",
        "abbr": "Biochemistry",
        "publisher": "American Chemical Society",
        "field": "biology",
        "level": "q1b"
    },
    {
        "issn": "0006-291X",
        "eissn": "1090-2104",
        "title": "Biochemical and Biophysical Research Communications",
        "abbr": "Biochem. Biophys. Res. Commun.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0092-8674",
        "eissn": "1097-4172",
        "title": "Cell",
        "abbr": "Cell",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q1a"
    },
    {
        "issn": "0012-821X",
        "eissn": "1385-013X",
        "title": "Earth and Planetary Science Letters",
        "abbr": "Earth Planet. Sci. Lett.",
        "publisher": "Elsevier",
        "field": "earth",
        "level": "q1a"
    },
    {
        "issn": "0013-4686",
        "eissn": "1873-3859",
        "title": "Electrochimica Acta",
        "abbr": "Electrochim. Acta",
        "publisher": "Elsevier",
        "field": "chemistry",
        "level": "q1b"
    },
    {
        "issn": "0925-8388",
        "eissn": "1872-6968",
        "title": "Journal of Alloys and Compounds",
        "abbr": "J. Alloys Compd.",
        "publisher": "Elsevier",
        "field": "chemistry",
        "level": "q1b"
    },
    {
        "issn": "1389-9457",
        "eissn": "1878-5506",
        "title": "Sleep Medicine",
        "abbr": "Sleep Med.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0021-9258",
        "eissn": "1083-351X",
        "title": "Journal of Biological Chemistry",
        "abbr": "J. Biol. Chem.",
        "publisher": "American Society for Biochemistry and Molecular Biology",
        "field": "biology",
        "level": "q1b"
    },
    {
        "issn": "0021-9673",
        "eissn": "1873-3778",
        "title": "Journal of Chromatography A",
        "abbr": "J. Chromatogr. A",
        "publisher": "Elsevier",
        "field": "chemistry",
        "level": "q1a"
    },
    {
        "issn": "0167-4889",
        "eissn": "1872-7565",
        "title": "Biochimica et Biophysica Acta - General Subjects",
        "abbr": "Biochim. Biophys. Acta Gen. Subj.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0304-4165",
        "eissn": "1872-8014",
        "title": "Biochimica et Biophysica Acta - Protein Structure and Molecular Enzymology",
        "abbr": "Biochim. Biophys. Acta Protein Struct. Mol. Enzymol.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0014-5793",
        "eissn": "1873-3468",
        "title": "FEBS Letters",
        "abbr": "FEBS Lett.",
        "publisher": "Wiley-Blackwell",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0891-5849",
        "eissn": "1873-4596",
        "title": "Free Radical Biology and Medicine",
        "abbr": "Free Radic. Biol. Med.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q1a"
    },
    {
        "issn": "0022-2836",
        "eissn": "1089-8638",
        "title": "Journal of Molecular Biology",
        "abbr": "J. Mol. Biol.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q1a"
    },
    {
        "issn": "0027-5107",
        "eissn": "1872-9800",
        "title": "Mutation Research - Fundamental and Molecular Mechanisms of Mutagenesis",
        "abbr": "Mutat. Res. Fundam. Mol. Mech. Mutagen.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0969-2126",
        "eissn": "1878-4186",
        "title": "Structure",
        "abbr": "Structure",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q1a"
    },
    {
        "issn": "0003-9861",
        "eissn": "1096-0384",
        "title": "Archives of Biochemistry and Biophysics",
        "abbr": "Arch. Biochem. Biophys.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0006-3002",
        "eissn": "1872-8006",
        "title": "Biochimica et Biophysica Acta - Bioenergetics",
        "abbr": "Biochim. Biophys. Acta Bioenerg.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0300-9084",
        "eissn": "1768-322X",
        "title": "Biochimie",
        "abbr": "Biochimie",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0301-4622",
        "eissn": "1879-2944",
        "title": "Biophysical Chemistry",
        "abbr": "Biophys. Chem.",
        "publisher": "Elsevier",
        "field": "chemistry",
        "level": "q2"
    },
    {
        "issn": "0005-2728",
        "eissn": "1879-2650",
        "title": "Biochimica et Biophysica Acta - Biomembranes",
        "abbr": "Biochim. Biophys. Acta Biomembr.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0167-4838",
        "eissn": "1872-8014",
        "title": "Biochimica et Biophysica Acta - Proteins and Proteomics",
        "abbr": "Biochim. Biophys. Acta Proteins Proteomics",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0304-3940",
        "eissn": "1872-7972",
        "title": "Neuroscience Letters",
        "abbr": "Neurosci. Lett.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0360-4012",
        "eissn": "1098-1136",
        "title": "Journal of Neuroscience Research",
        "abbr": "J. Neurosci. Res.",
        "publisher": "Wiley-Blackwell",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0022-3042",
        "eissn": "1471-4159",
        "title": "Journal of Neurochemistry",
        "abbr": "J. Neurochem.",
        "publisher": "Wiley-Blackwell",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0270-6474",
        "eissn": "1529-2401",
        "title": "Journal of Neuroscience",
        "abbr": "J. Neurosci.",
        "publisher": "Society for Neuroscience",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0165-0270",
        "eissn": "1872-678X",
        "title": "Journal of Neuroscience Methods",
        "abbr": "J. Neurosci. Methods",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0894-1491",
        "eissn": "1526-632X",
        "title": "Neurology",
        "abbr": "Neurology",
        "publisher": "American Academy of Neurology",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0031-9007",
        "eissn": "1079-7114",
        "title": "Physical Review Letters",
        "abbr": "Phys. Rev. Lett.",
        "publisher": "American Physical Society",
        "field": "physics",
        "level": "q1a"
    },
    {
        "issn": "0031-9015",
        "eissn": "1095-2437",
        "title": "Physiology & Behavior",
        "abbr": "Physiol. Behav.",
        "publisher": "Elsevier",
        "field": "biology",
        "level": "q2"
    },
    {
        "issn": "0031-9384",
        "eissn": "1873-507X",
        "title": "Pharmacology Biochemistry and Behavior",
        "abbr": "Pharmacol. Biochem. Behav.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0028-3908",
        "eissn": "1873-7064",
        "title": "Neuropharmacology",
        "abbr": "Neuropharmacology",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0091-3057",
        "eissn": "1879-0712",
        "title": "Neuropharmacology",
        "abbr": "Neuropharmacology",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0166-4328",
        "eissn": "1872-7549",
        "title": "Behavioural Brain Research",
        "abbr": "Behav. Brain Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0006-8993",
        "eissn": "1872-6240",
        "title": "Brain Research",
        "abbr": "Brain Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0361-9230",
        "eissn": "1873-2747",
        "title": "Brain Research Bulletin",
        "abbr": "Brain Res. Bull.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0006-3223",
        "eissn": "1873-2402",
        "title": "Biological Psychiatry",
        "abbr": "Biol. Psychiatry",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0165-1781",
        "eissn": "1872-7123",
        "title": "Psychiatry Research",
        "abbr": "Psychiatry Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0022-3956",
        "eissn": "1879-1379",
        "title": "Journal of Psychiatric Research",
        "abbr": "J. Psychiatr. Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0920-9964",
        "eissn": "1573-2509",
        "title": "Schizophrenia Research",
        "abbr": "Schizophr. Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0924-9338",
        "eissn": "1778-3585",
        "title": "European Psychiatry",
        "abbr": "Eur. Psychiatry",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0165-0327",
        "eissn": "1573-2517",
        "title": "Journal of Affective Disorders",
        "abbr": "J. Affect. Disord.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0022-3999",
        "eissn": "1879-1360",
        "title": "Journal of Psychosomatic Research",
        "abbr": "J. Psychosom. Res.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0278-5846",
        "eissn": "1878-4216",
        "title": "Progress in Neuro-Psychopharmacology and Biological Psychiatry",
        "abbr": "Prog. Neuropsychopharmacol. Biol. Psychiatry",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0889-1591",
        "eissn": "1090-2139",
        "title": "Brain Behavior and Immunity",
        "abbr": "Brain Behav. Immun.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0889-1605",
        "eissn": "1096-4051",
        "title": "Brain Behavior and Immunity",
        "abbr": "Brain Behav. Immun.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q1a"
    },
    {
        "issn": "0033-3158",
        "eissn": "1432-2072",
        "title": "Psychopharmacology",
        "abbr": "Psychopharmacology (Berl.)",
        "publisher": "Springer",
        "field": "medicine",
        "level": "q1b"
    },
    {
        "issn": "0001-6918",
        "eissn": "1872-7646",
        "title": "Acta Psychologica",
        "abbr": "Acta Psychol.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    },
    {
        "issn": "0191-8869",
        "eissn": "1873-3549",
        "title": "Personality and Individual Differences",
        "abbr": "Pers. Individ. Dif.",
        "publisher": "Elsevier",
        "field": "medicine",
        "level": "q2"
    }
];

// Note: Dans une vraie implémentation, ce fichier contiendrait les 8,464 revues
// avec toutes leurs données complètes. Ici, nous avons un échantillon représentatif.