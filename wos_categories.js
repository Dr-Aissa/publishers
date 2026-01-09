// Catégories Web of Science (WoS) avec labels en français
// Format: code WoS -> données de la catégorie
const wosCategories = {
    // Sciences naturelles - Life Sciences
    "AC": {
        "label": "Acoustique",
        "field": "physics",
        "description": "Études sur les ondes sonores, vibration et acoustique"
    },
    "AG": {
        "label": "Agriculture",
        "field": "agriculture",
        "description": "Sciences agricoles, production végétale et animale"
    },
    "AL": {
        "label": "Allergologie",
        "field": "medicine",
        "description": "Études sur les allergies et réactions immunitaires"
    },
    "AN": {
        "label": "Anatomie et Morphologie",
        "field": "biology",
        "description": "Structure et forme des organismes vivants"
    },
    "BC": {
        "label": "Biochimie et Biophysique Moléculaire",
        "field": "biology",
        "description": "Processus biochimiques au niveau moléculaire"
    },
    "BE": {
        "label": "Biologie Évolutive",
        "field": "biology",
        "description": "Évolution des espèces et mécanismes évolutifs"
    },
    "BG": {
        "label": "Biologie Générale",
        "field": "biology",
        "description": "Études générales en biologie"
    },
    "BI": {
        "label": "Biotechnologie Appliquée",
        "field": "biology",
        "description": "Applications technologiques de la biologie"
    },
    "BL": {
        "label": "Biologie Moléculaire",
        "field": "biology",
        "description": "Études au niveau moléculaire des processus biologiques"
    },
    "BM": {
        "label": "Biomathématiques",
        "field": "mathematics",
        "description": "Applications mathématiques en biologie"
    },
    "BO": {
        "label": "Botanique",
        "field": "biology",
        "description": "Étude des plantes et végétation"
    },
    "BP": {
        "label": "Biophysique",
        "field": "physics",
        "description": "Applications de la physique en biologie"
    },
    "BT": {
        "label": "Biotechnologie",
        "field": "engineering",
        "description": "Technologies basées sur des processus biologiques"
    },
    "CC": {
        "label": "Chimie Organique",
        "field": "chemistry",
        "description": "Chimie des composés organiques"
    },
    "CE": {
        "label": "Chimie Environnementale",
        "field": "chemistry",
        "description": "Impact chimique sur l'environnement"
    },
    "CH": {
        "label": "Chimie",
        "field": "chemistry",
        "description": "Sciences chimiques générales"
    },
    "CI": {
        "label": "Chimie Inorganique",
        "field": "chemistry",
        "description": "Chimie des éléments et composés inorganiques"
    },
    "CL": {
        "label": "Chimie Analytique",
        "field": "chemistry",
        "description": "Méthodes d'analyse chimique"
    },
    "CM": {
        "label": "Chimie Médicinale",
        "field": "chemistry",
        "description": "Chimie appliquée au développement de médicaments"
    },
    "CN": {
        "label": "Chimie Nucléaire",
        "field": "chemistry",
        "description": "Chimie des éléments radioactifs"
    },
    "CP": {
        "label": "Chimie Physique",
        "field": "chemistry",
        "description": "Applications de la physique en chimie"
    },
    "CR": {
        "label": "Cristallographie",
        "field": "chemistry",
        "description": "Structure cristalline des matériaux"
    },
    "CS": {
        "label": "Chimie Appliquée",
        "field": "chemistry",
        "description": "Applications pratiques de la chimie"
    },
    "CY": {
        "label": "Géochimie et Cosmochimie",
        "field": "earth",
        "description": "Chimie de la Terre et de l'espace"
    },
    "DE": {
        "label": "Dermatologie",
        "field": "medicine",
        "description": "Médecine de la peau"
    },
    "ED": {
        "label": "Endocrinologie et Métabolisme",
        "field": "medicine",
        "description": "Système endocrinien et métabolisme"
    },
    "EM": {
        "label": "Électrochimie",
        "field": "chemistry",
        "description": "Chimie des phénomènes électriques"
    },
    "EN": {
        "label": "Ingénierie",
        "field": "engineering",
        "description": "Sciences de l'ingénieur"
    },
    "ES": {
        "label": "Études Environnementales",
        "field": "earth",
        "description": "Sciences de l'environnement"
    },
    "ET": {
        "label": "Éthique",
        "field": "social",
        "description": "Questions éthiques en recherche"
    },
    "EV": {
        "label": "Écologie",
        "field": "earth",
        "description": "Relations entre organismes et environnement"
    },
    "FC": {
        "label": "Mycologie",
        "field": "biology",
        "description": "Étude des champignons"
    },
    "FD": {
        "label": "Sciences Alimentaires",
        "field": "agriculture",
        "description": "Chimie et biologie des aliments"
    },
    "FG": {
        "label": "Génétique et Hérédité",
        "field": "biology",
        "description": "Transmission des caractères héréditaires"
    },
    "FI": {
        "label": "Pêche et Aquaculture",
        "field": "agriculture",
        "description": "Exploitation des ressources aquatiques"
    },
    "FO": {
        "label": "Foresterie",
        "field": "earth",
        "description": "Gestion des forêts"
    },
    "FP": {
        "label": "Parasitologie",
        "field": "biology",
        "description": "Étude des parasites"
    },
    "FS": {
        "label": "Science du Sol",
        "field": "earth",
        "description": "Étude des sols"
    },
    "FT": {
        "label": "Toxicologie",
        "field": "biology",
        "description": "Étude des substances toxiques"
    },
    "GA": {
        "label": "Génétique Animale",
        "field": "biology",
        "description": "Génétique des animaux"
    },
    "GB": {
        "label": "Biologie Marine",
        "field": "earth",
        "description": "Biologie des milieux marins"
    },
    "GC": {
        "label": "Géochimie",
        "field": "earth",
        "description": "Chimie de la Terre"
    },
    "GD": {
        "label": "Géodésie et Géophysique",
        "field": "earth",
        "description": "Étude de la forme et physique de la Terre"
    },
    "GE": {
        "label": "Génétique",
        "field": "biology",
        "description": "Sciences génétiques"
    },
    "GF": {
        "label": "Géologie",
        "field": "earth",
        "description": "Étude de la structure de la Terre"
    },
    "GG": {
        "label": "Géographie",
        "field": "earth",
        "description": "Étude de la surface terrestre"
    },
    "GH": {
        "label": "Géographie Humaine",
        "field": "social",
        "description": "Géographie des sociétés humaines"
    },
    "GI": {
        "label": "Immunologie",
        "field": "biology",
        "description": "Système immunitaire"
    },
    "GM": {
        "label": "Génomique",
        "field": "biology",
        "description": "Étude des génomes"
    },
    "GN": {
        "label": "Gynécologie",
        "field": "medicine",
        "description": "Médecine de l'appareil reproducteur féminin"
    },
    "GO": {
        "label": "Gastroentérologie",
        "field": "medicine",
        "description": "Médecine du système digestif"
    },
    "GP": {
        "label": "Génétique des Plantes",
        "field": "biology",
        "description": "Génétique végétale"
    },
    "GQ": {
        "label": "Géochimie Organique",
        "field": "chemistry",
        "description": "Chimie organique géologique"
    },
    "GR": {
        "label": "Gériatrie",
        "field": "medicine",
        "description": "Médecine des personnes âgées"
    },
    "GS": {
        "label": "Géosciences",
        "field": "earth",
        "description": "Sciences de la Terre"
    },
    "GT": {
        "label": "Génétique Médicale",
        "field": "medicine",
        "description": "Applications médicales de la génétique"
    },
    "GY": {
        "label": "Gynécologie et Obstétrique",
        "field": "medicine",
        "description": "Médecine de la reproduction"
    },
    "HE": {
        "label": "Hématologie",
        "field": "medicine",
        "description": "Médecine du sang"
    },
    "HI": {
        "label": "Histoire",
        "field": "history",
        "description": "Études historiques"
    },
    "HO": {
        "label": "Horticulture",
        "field": "agriculture",
        "description": "Culture des jardins"
    },
    "HP": {
        "label": "Physique Hospitalière",
        "field": "physics",
        "description": "Applications physiques en milieu hospitalier"
    },
    "HS": {
        "label": "Histoire des Sciences",
        "field": "history",
        "description": "Histoire du développement scientifique"
    },
    "HY": {
        "label": "Hydrologie",
        "field": "earth",
        "description": "Science de l'eau"
    },
    "IM": {
        "label": "Imagerie Médicale",
        "field": "medicine",
        "description": "Techniques d'imagerie en médecine"
    },
    "IN": {
        "label": "Informatique",
        "field": "mathematics",
        "description": "Sciences informatiques"
    },
    "IP": {
        "label": "Immunopathologie",
        "field": "medicine",
        "description": "Pathologie du système immunitaire"
    },
    "IS": {
        "label": "Informatique en Sciences",
        "field": "mathematics",
        "description": "Applications informatiques en sciences"
    },
    "IT": {
        "label": "Instruments et Instrumentation",
        "field": "engineering",
        "description": "Développement d'instruments scientifiques"
    },
    "LA": {
        "label": "Langage et Linguistique",
        "field": "social",
        "description": "Étude du langage humain"
    },
    "LE": {
        "label": "Éducation",
        "field": "education",
        "description": "Sciences de l'éducation"
    },
    "LI": {
        "label": "Sciences de l'Information",
        "field": "social",
        "description": "Gestion et traitement de l'information"
    },
    "LM": {
        "label": "Limnologie",
        "field": "earth",
        "description": "Étude des eaux continentales"
    },
    "MA": {
        "label": "Mathématiques",
        "field": "mathematics",
        "description": "Sciences mathématiques"
    },
    "MB": {
        "label": "Biochimie",
        "field": "biology",
        "description": "Chimie des processus biologiques"
    },
    "MC": {
        "label": "Médecine",
        "field": "medicine",
        "description": "Sciences médicales générales"
    },
    "MD": {
        "label": "Médecine Interne",
        "field": "medicine",
        "description": "Médecine interne générale"
    },
    "ME": {
        "label": "Médecine",
        "field": "medicine",
        "description": "Pratique médicale"
    },
    "MF": {
        "label": "Médecine Forensique",
        "field": "medicine",
        "description": "Médecine légale"
    },
    "MG": {
        "label": "Microbiologie",
        "field": "biology",
        "description": "Étude des micro-organismes"
    },
    "MI": {
        "label": "Microbiologie Appliquée",
        "field": "biology",
        "description": "Applications de la microbiologie"
    },
    "MK": {
        "label": "Océanographie Médicale",
        "field": "earth",
        "description": "Océanographie appliquée à la santé"
    },
    "ML": {
        "label": "Minéralogie",
        "field": "earth",
        "description": "Étude des minéraux"
    },
    "MN": {
        "label": "Médecine Nucléaire",
        "field": "medicine",
        "description": "Applications nucléaires en médecine"
    },
    "MO": {
        "label": "Modélisation Mathématique",
        "field": "mathematics",
        "description": "Modèles mathématiques"
    },
    "MP": {
        "label": "Métallurgie",
        "field": "engineering",
        "description": "Science des métaux"
    },
    "MR": {
        "label": "IRM et Résonance Magnétique",
        "field": "physics",
        "description": "Techniques de résonance magnétique"
    },
    "MS": {
        "label": "Matériaux",
        "field": "engineering",
        "description": "Science des matériaux"
    },
    "MT": {
        "label": "Métrologie",
        "field": "physics",
        "description": "Science des mesures"
    },
    "MV": {
        "label": "Médecine Vétérinaire",
        "field": "medicine",
        "description": "Médecine animale"
    },
    "MY": {
        "label": "Mycologie",
        "field": "biology",
        "description": "Étude des champignons"
    },
    "NC": {
        "label": "Neurosciences Cliniques",
        "field": "medicine",
        "description": "Applications cliniques des neurosciences"
    },
    "NE": {
        "label": "Neurosciences",
        "field": "biology",
        "description": "Sciences du système nerveux"
    },
    "NF": {
        "label": "Neurophysiologie",
        "field": "biology",
        "description": "Physiologie du système nerveux"
    },
    "NG": {
        "label": "Neuroimagerie",
        "field": "medicine",
        "description": "Imagerie du cerveau"
    },
    "NI": {
        "label": "Nutrition",
        "field": "medicine",
        "description": "Science de la nutrition"
    },
    "NP": {
        "label": "Neuropathologie",
        "field": "medicine",
        "description": "Pathologie du système nerveux"
    },
    "NS": {
        "label": "Neurosciences",
        "field": "biology",
        "description": "Étude du système nerveux"
    },
    "NT": {
        "label": "Neurotoxicologie",
        "field": "biology",
        "description": "Toxicologie du système nerveux"
    },
    "NU": {
        "label": "Nutrition et Diététique",
        "field": "medicine",
        "description": "Alimentation et santé"
    },
    "OB": {
        "label": "Obstétrique",
        "field": "medicine",
        "description": "Médecine de la grossesse"
    },
    "OC": {
        "label": "Océanographie",
        "field": "earth",
        "description": "Étude des océans"
    },
    "OD": {
        "label": "Odontologie",
        "field": "medicine",
        "description": "Médecine dentaire"
    },
    "OE": {
        "label": "Ophtalmologie",
        "field": "medicine",
        "description": "Médecine des yeux"
    },
    "OG": {
        "label": "Orologie",
        "field": "medicine",
        "description": "Médecine des oreilles"
    },
    "OH": {
        "label": "Santé au Travail",
        "field": "medicine",
        "description": "Médecine du travail"
    },
    "OI": {
        "label": "Oncologie",
        "field": "medicine",
        "description": "Médecine du cancer"
    },
    "OM": {
        "label": "Médecine d'Urgence",
        "field": "medicine",
        "description": "Médecine d'urgence"
    },
    "ON": {
        "label": "Oncologie",
        "field": "medicine",
        "description": "Cancerologie"
    },
    "OO": {
        "label": "Ophtalmologie",
        "field": "medicine",
        "description": "Ophtalmologie"
    },
    "OP": {
        "label": "Optique",
        "field": "physics",
        "description": "Science de la lumière"
    },
    "OR": {
        "label": "Orthopédie",
        "field": "medicine",
        "description": "Médecine des os et articulations"
    },
    "OS": {
        "label": "Ostéoporose",
        "field": "medicine",
        "description": "Pathologie osseuse"
    },
    "OT": {
        "label": "Otolaryngologie",
        "field": "medicine",
        "description": "Médecine ORL"
    },
    "PA": {
        "label": "Pédiatrie",
        "field": "medicine",
        "description": "Médecine infantile"
    },
    "PB": {
        "label": "Physiologie",
        "field": "biology",
        "description": "Fonctionnement des organismes"
    },
    "PC": {
        "label": "Pharmacologie Clinique",
        "field": "medicine",
        "description": "Pharmacologie appliquée"
    },
    "PE": {
        "label": "Psychiatrie",
        "field": "medicine",
        "description": "Médecine mentale"
    },
    "PF": {
        "label": "Physique des Fluides",
        "field": "physics",
        "description": "Physique des fluides"
    },
    "PG": {
        "label": "Pathologie",
        "field": "medicine",
        "description": "Étude des maladies"
    },
    "PH": {
        "label": "Pharmacologie",
        "field": "medicine",
        "description": "Science des médicaments"
    },
    "PI": {
        "label": "Physique",
        "field": "physics",
        "description": "Sciences physiques"
    },
    "PK": {
        "label": "Pharmacocinétique",
        "field": "medicine",
        "description": "Cinétique des médicaments"
    },
    "PL": {
        "label": "Physiologie des Plantes",
        "field": "biology",
        "description": "Fonctionnement des plantes"
    },
    "PM": {
        "label": "Médecine Préventive",
        "field": "medicine",
        "description": "Prévention des maladies"
    },
    "PN": {
        "label": "Physiologie",
        "field": "biology",
        "description": "Sciences physiologiques"
    },
    "PO": {
        "label": "Politique Scientifique",
        "field": "social",
        "description": "Politiques de recherche"
    },
    "PP": {
        "label": "Physiologie Animale",
        "field": "biology",
        "description": "Physiologie animale"
    },
    "PQ": {
        "label": "Psychologie",
        "field": "psychology",
        "description": "Sciences psychologiques"
    },
    "PR": {
        "label": "Psychiatrie",
        "field": "medicine",
        "description": "Psychiatrie"
    },
    "PS": {
        "label": "Psychologie",
        "field": "psychology",
        "description": "Étude du comportement humain"
    },
    "PT": {
        "label": "Pneumologie",
        "field": "medicine",
        "description": "Médecine respiratoire"
    },
    "PU": {
        "label": "Psychologie Appliquée",
        "field": "psychology",
        "description": "Applications de la psychologie"
    },
    "PV": {
        "label": "Pharmacologie",
        "field": "medicine",
        "description": "Pharmacologie"
    },
    "PY": {
        "label": "Physique",
        "field": "physics",
        "description": "Physique générale"
    },
    "RA": {
        "label": "Radiologie",
        "field": "medicine",
        "description": "Imagerie médicale"
    },
    "RB": {
        "label": "Réhabilitation",
        "field": "medicine",
        "description": "Médecine de réadaptation"
    },
    "RC": {
        "label": "Recherche Clinique",
        "field": "medicine",
        "description": "Méthodologie de recherche clinique"
    },
    "RD": {
        "label": "Endocrinologie de la Reproduction",
        "field": "medicine",
        "description": "Système endocrinien reproductif"
    },
    "RE": {
        "label": "Rhumatologie",
        "field": "medicine",
        "description": "Médecine des rhumatismes"
    },
    "RF": {
        "label": "Physique des Rayonnements",
        "field": "physics",
        "description": "Physique des rayonnements"
    },
    "RG": {
        "label": "Gérontologie",
        "field": "medicine",
        "description": "Étude du vieillissement"
    },
    "RH": {
        "label": "Rhumatologie",
        "field": "medicine",
        "description": "Rhumatologie"
    },
    "RI": {
        "label": "Radiologie Interventionnelle",
        "field": "medicine",
        "description": "Radiologie thérapeutique"
    },
    "RL": {
        "label": "Respiration",
        "field": "biology",
        "description": "Physiologie respiratoire"
    },
    "RM": {
        "label": "Médecine de la Reproduction",
        "field": "medicine",
        "description": "Médecine reproductive"
    },
    "RN": {
        "label": "Soins Infirmiers",
        "field": "medicine",
        "description": "Sciences infirmières"
    },
    "RO": {
        "label": "Radiothérapie",
        "field": "medicine",
        "description": "Traitement par rayonnements"
    },
    "RP": {
        "label": "Recherche en Santé Publique",
        "field": "medicine",
        "description": "Épidémiologie et santé publique"
    },
    "RR": {
        "label": "Médecine d'Urgence et de Réanimation",
        "field": "medicine",
        "description": "Réanimation médicale"
    },
    "RS": {
        "label": "Radiologie",
        "field": "medicine",
        "description": "Radiologie"
    },
    "RT": {
        "label": "Radiothérapie Oncologique",
        "field": "medicine",
        "description": "Radiothérapie anticancéreuse"
    },
    "RU": {
        "label": "Urologie",
        "field": "medicine",
        "description": "Médecine de l'appareil urinaire"
    },
    "RV": {
        "label": "Médecine Vétérinaire",
        "field": "medicine",
        "description": "Médecine vétérinaire"
    },
    "RY": {
        "label": "Télédétection",
        "field": "earth",
        "description": "Observation à distance"
    },
    "SC": {
        "label": "Sciences Sociales",
        "field": "social",
        "description": "Sciences sociales générales"
    },
    "SD": {
        "label": "Développement Durable",
        "field": "earth",
        "description": "Développement durable"
    },
    "SE": {
        "label": "Sismologie",
        "field": "earth",
        "description": "Étude des séismes"
    },
    "SF": {
        "label": "Sécurité Alimentaire",
        "field": "agriculture",
        "description": "Sécurité des aliments"
    },
    "SG": {
        "label": "Sociologie",
        "field": "social",
        "description": "Sciences sociologiques"
    },
    "SH": {
        "label": "Histoire des Sciences",
        "field": "history",
        "description": "Histoire de la science"
    },
    "SI": {
        "label": "Sociologie",
        "field": "social",
        "description": "Étude de la société"
    },
    "SJ": {
        "label": "Statistiques et Probabilités",
        "field": "mathematics",
        "description": "Mathématiques appliquées"
    },
    "SK": {
        "label": "Science des Sports",
        "field": "medicine",
        "description": "Physiologie du sport"
    },
    "SL": {
        "label": "Science du Sol",
        "field": "earth",
        "description": "Pédologie"
    },
    "SM": {
        "label": "Médecine du Sport",
        "field": "medicine",
        "description": "Médecine sportive"
    },
    "SN": {
        "label": "Neurosciences",
        "field": "biology",
        "description": "Neurosciences"
    },
    "SO": {
        "label": "Sociologie",
        "field": "social",
        "description": "Sociologie"
    },
    "SP": {
        "label": "Spectroscopie",
        "field": "chemistry",
        "description": "Techniques spectroscopiques"
    },
    "SQ": {
        "label": "Science des Équipements",
        "field": "engineering",
        "description": "Instrumentation scientifique"
    },
    "SR": {
        "label": "Recherche Sociale",
        "field": "social",
        "description": "Méthodologie de recherche sociale"
    },
    "SS": {
        "label": "Sciences Sociales",
        "field": "social",
        "description": "Sciences sociales"
    },
    "ST": {
        "label": "Statistiques",
        "field": "mathematics",
        "description": "Statistiques"
    },
    "SU": {
        "label": "Surgery",
        "field": "medicine",
        "description": "Chirurgie"
    },
    "SV": {
        "label": "Science des Vaccins",
        "field": "medicine",
        "description": "Vaccinologie"
    },
    "SY": {
        "label": "Systématique et Taxonomie",
        "field": "biology",
        "description": "Classification des organismes"
    },
    "SZ": {
        "label": "Zoologie",
        "field": "biology",
        "description": "Étude des animaux"
    },
    "TC": {
        "label": "Télécommunications",
        "field": "engineering",
        "description": "Technologies de communication"
    },
    "TD": {
        "label": "Toxicologie",
        "field": "biology",
        "description": "Toxicologie"
    },
    "TE": {
        "label": "Télédétection",
        "field": "earth",
        "description": "Télédétection"
    },
    "TF": {
        "label": "Tissue Engineering",
        "field": "engineering",
        "description": "Ingénierie tissulaire"
    },
    "TG": {
        "label": "Génétique Toxicologique",
        "field": "biology",
        "description": "Effets génétiques des toxiques"
    },
    "TH": {
        "label": "Thérapie",
        "field": "medicine",
        "description": "Méthodes thérapeutiques"
    },
    "TI": {
        "label": "Transplantation",
        "field": "medicine",
        "description": "Médecine des transplantations"
    },
    "TJ": {
        "label": "Toxicologie Industrielle",
        "field": "biology",
        "description": "Toxicologie professionnelle"
    },
    "TK": {
        "label": "Toxicologie Environnementale",
        "field": "earth",
        "description": "Toxicologie environnementale"
    },
    "TL": {
        "label": "Toxicologie Légale",
        "field": "medicine",
        "description": "Toxicologie médico-légale"
    },
    "TM": {
        "label": "Médecine Tropicale",
        "field": "medicine",
        "description": "Médecine des régions tropicales"
    },
    "TO": {
        "label": "Toxicologie",
        "field": "biology",
        "description": "Science des poisons"
    },
    "TP": {
        "label": "Physique Théorique",
        "field": "physics",
        "description": "Physique théorique"
    },
    "TQ": {
        "label": "Chimie Théorique",
        "field": "chemistry",
        "description": "Chimie théorique"
    },
    "TR": {
        "label": "Transport",
        "field": "engineering",
        "description": "Sciences des transports"
    },
    "TS": {
        "label": "Traumatologie",
        "field": "medicine",
        "description": "Médecine des traumatismes"
    },
    "TT": {
        "label": "Technologie des Textiles",
        "field": "engineering",
        "description": "Science des textiles"
    },
    "TU": {
        "label": "Urologie",
        "field": "medicine",
        "description": "Urologie"
    },
    "TV": {
        "label": "Médecine Vétérinaire",
        "field": "medicine",
        "description": "Médecine vétérinaire"
    },
    "TX": {
        "label": "Toxicologie Expérimentale",
        "field": "biology",
        "description": "Toxicologie expérimentale"
    },
    "TY": {
        "label": "Typologie",
        "field": "social",
        "description": "Classification et typologie"
    },
    "TZ": {
        "label": "Tropical Medicine",
        "field": "medicine",
        "description": "Médecine tropicale"
    },
    "UA": {
        "label": "Urbanisme",
        "field": "engineering",
        "description": "Aménagement urbain"
    },
    "UB": {
        "label": "Biologie Urbaine",
        "field": "earth",
        "description": "Écologie urbaine"
    },
    "UC": {
        "label": "Études Urbaines",
        "field": "social",
        "description": "Sociologie urbaine"
    },
    "UD": {
        "label": "Développement Urbain",
        "field": "social",
        "description": "Développement urbain"
    },
    "UE": {
        "label": "Économie Urbaine",
        "field": "economics",
        "description": "Économie urbaine"
    },
    "UF": {
        "label": "Foresterie Urbaine",
        "field": "earth",
        "description": "Gestion des espaces verts urbains"
    },
    "UG": {
        "label": "Géographie Urbaine",
        "field": "earth",
        "description": "Géographie des villes"
    },
    "UH": {
        "label": "Histoire Urbaine",
        "field": "history",
        "description": "Histoire des villes"
    },
    "UI": {
        "label": "Informatique Urbaine",
        "field": "mathematics",
        "description": "Technologies urbaines"
    },
    "UJ": {
        "label": "Justice Urbaine",
        "field": "social",
        "description": "Justice et criminalité urbaine"
    },
    "UK": {
        "label": "Culture Urbaine",
        "field": "social",
        "description": "Culture et société urbaine"
    },
    "UL": {
        "label": "Linguistique Urbaine",
        "field": "social",
        "description": "Langage en milieu urbain"
    },
    "UM": {
        "label": "Médecine Urbaine",
        "field": "medicine",
        "description": "Santé en milieu urbain"
    },
    "UN": {
        "label": "Nutrition Urbaine",
        "field": "medicine",
        "description": "Alimentation urbaine"
    },
    "UO": {
        "label": "Océanographie Urbaine",
        "field": "earth",
        "description": "Océanographie côtière urbaine"
    },
    "UP": {
        "label": "Planification Urbaine",
        "field": "engineering",
        "description": "Planification urbaine"
    },
    "UQ": {
        "label": "Qualité de Vie Urbaine",
        "field": "social",
        "description": "Qualité de vie en ville"
    },
    "UR": {
        "label": "Recherche Urbaine",
        "field": "social",
        "description": "Méthodologie de recherche urbaine"
    },
    "US": {
        "label": "Éducation Urbaine",
        "field": "education",
        "description": "Éducation en milieu urbain"
    },
    "UT": {
        "label": "Technologie Urbaine",
        "field": "engineering",
        "description": "Technologies urbaines"
    },
    "UU": {
        "label": "Études Urbaines",
        "field": "social",
        "description": "Sciences urbaines"
    },
    "UV": {
        "label": "Virologie Urbaine",
        "field": "biology",
        "description": "Virologie en milieu urbain"
    },
    "UW": {
        "label": "Travail Urbain",
        "field": "social",
        "description": "Sociologie du travail urbain"
    },
    "UX": {
        "label": "Expérience Utilisateur Urbaine",
        "field": "social",
        "description": "UX en environnement urbain"
    },
    "UY": {
        "label": "Jeunesse Urbaine",
        "field": "social",
        "description": "Sociologie de la jeunesse urbaine"
    },
    "UZ": {
        "label": "Zoologie Urbaine",
        "field": "biology",
        "description": "Faune urbaine"
    },
    "VA": {
        "label": "Virologie",
        "field": "biology",
        "description": "Étude des virus"
    },
    "VB": {
        "label": "Virologie Moléculaire",
        "field": "biology",
        "description": "Virologie au niveau moléculaire"
    },
    "VC": {
        "label": "Virologie Clinique",
        "field": "medicine",
        "description": "Applications cliniques de la virologie"
    },
    "VD": {
        "label": "Virologie Vétérinaire",
        "field": "medicine",
        "description": "Virologie animale"
    },
    "VE": {
        "label": "Virologie Environnementale",
        "field": "earth",
        "description": "Virologie environnementale"
    },
    "VF": {
        "label": "Virologie Forensique",
        "field": "medicine",
        "description": "Virologie médico-légale"
    },
    "VG": {
        "label": "Virologie Générale",
        "field": "biology",
        "description": "Virologie générale"
    },
    "VH": {
        "label": "Virologie Humaine",
        "field": "medicine",
        "description": "Virologie humaine"
    },
    "VI": {
        "label": "Virologie Industrielle",
        "field": "engineering",
        "description": "Applications industrielles de la virologie"
    },
    "VJ": {
        "label": "Virologie Juridique",
        "field": "law",
        "description": "Aspects juridiques de la virologie"
    },
    "VK": {
        "label": "Virologie Marine",
        "field": "earth",
        "description": "Virologie marine"
    },
    "VL": {
        "label": "Virologie Légale",
        "field": "law",
        "description": "Virologie légale"
    },
    "VM": {
        "label": "Virologie Médicale",
        "field": "medicine",
        "description": "Virologie médicale"
    },
    "VN": {
        "label": "Virologie Neurologique",
        "field": "medicine",
        "description": "Virologie du système nerveux"
    },
    "VO": {
        "label": "Virologie Oncologique",
        "field": "medicine",
        "description": "Virologie oncologique"
    },
    "VP": {
        "label": "Virologie des Plantes",
        "field": "biology",
        "description": "Virologie végétale"
    },
    "VQ": {
        "label": "Virologie Quantitative",
        "field": "biology",
        "description": "Méthodes quantitatives en virologie"
    },
    "VR": {
        "label": "Virologie de Recherche",
        "field": "biology",
        "description": "Recherche en virologie"
    },
    "VS": {
        "label": "Virologie Sociale",
        "field": "social",
        "description": "Impact social de la virologie"
    },
    "VT": {
        "label": "Virologie Tropicale",
        "field": "medicine",
        "description": "Virologie tropicale"
    },
    "VU": {
        "label": "Virologie Urbaine",
        "field": "biology",
        "description": "Virologie urbaine"
    },
    "VV": {
        "label": "Virologie Vétérinaire",
        "field": "medicine",
        "description": "Virologie vétérinaire"
    },
    "VW": {
        "label": "Virologie de l'Eau",
        "field": "earth",
        "description": "Virologie de l'environnement aquatique"
    },
    "VX": {
        "label": "Virologie Expérimentale",
        "field": "biology",
        "description": "Virologie expérimentale"
    },
    "VY": {
        "label": "Virologie de la Jeunesse",
        "field": "medicine",
        "description": "Virologie pédiatrique"
    },
    "VZ": {
        "label": "Virologie Zoonotique",
        "field": "medicine",
        "description": "Virologie des zoonoses"
    },
    "WA": {
        "label": "Analyse d'Eau",
        "field": "chemistry",
        "description": "Analyse chimique de l'eau"
    },
    "WB": {
        "label": "Biologie de l'Eau",
        "field": "earth",
        "description": "Biologie aquatique"
    },
    "WC": {
        "label": "Chimie de l'Eau",
        "field": "chemistry",
        "description": "Chimie aquatique"
    },
    "WD": {
        "label": "Développement Durable de l'Eau",
        "field": "earth",
        "description": "Gestion durable des ressources en eau"
    },
    "WE": {
        "label": "Écologie de l'Eau",
        "field": "earth",
        "description": "Écologie aquatique"
    },
    "WF": {
        "label": "Physique des Fluides",
        "field": "physics",
        "description": "Mécanique des fluides"
    },
    "WG": {
        "label": "Géologie de l'Eau",
        "field": "earth",
        "description": "Hydrogéologie"
    },
    "WH": {
        "label": "Histoire de l'Eau",
        "field": "history",
        "description": "Histoire des ressources en eau"
    },
    "WI": {
        "label": "Informatique de l'Eau",
        "field": "mathematics",
        "description": "Modélisation informatique des systèmes aquatiques"
    },
    "WJ": {
        "label": "Justice de l'Eau",
        "field": "law",
        "description": "Droit de l'eau"
    },
    "WK": {
        "label": "Qualité de l'Eau",
        "field": "earth",
        "description": "Contrôle qualité de l'eau"
    },
    "WL": {
        "label": "Littérature sur l'Eau",
        "field": "social",
        "description": "Études culturelles sur l'eau"
    },
    "WM": {
        "label": "Médecine de l'Eau",
        "field": "medicine",
        "description": "Santé et eau"
    },
    "WN": {
        "label": "Nutrition et Eau",
        "field": "medicine",
        "description": "Rôle de l'eau dans la nutrition"
    },
    "WO": {
        "label": "Océanographie",
        "field": "earth",
        "description": "Science des océans"
    },
    "WP": {
        "label": "Politique de l'Eau",
        "field": "social",
        "description": "Politiques de gestion de l'eau"
    },
    "WQ": {
        "label": "Qualité de l'Eau",
        "field": "earth",
        "description": "Évaluation qualité eau"
    },
    "WR": {
        "label": "Recherche sur l'Eau",
        "field": "earth",
        "description": "Recherche sur les ressources en eau"
    },
    "WS": {
        "label": "Science de l'Eau",
        "field": "earth",
        "description": "Hydrologie et sciences aquatiques"
    },
    "WT": {
        "label": "Technologie de l'Eau",
        "field": "engineering",
        "description": "Technologies de traitement de l'eau"
    },
    "WU": {
        "label": "Utilisation de l'Eau",
        "field": "earth",
        "description": "Gestion des usages de l'eau"
    },
    "WV": {
        "label": "Virologie de l'Eau",
        "field": "biology",
        "description": "Virologie aquatique"
    },
    "WW": {
        "label": "Traitement des Eaux Usées",
        "field": "engineering",
        "description": "Épuration des eaux"
    },
    "WX": {
        "label": "Économie de l'Eau",
        "field": "economics",
        "description": "Aspects économiques de l'eau"
    },
    "WY": {
        "label": "Éducation sur l'Eau",
        "field": "education",
        "description": "Éducation environnementale sur l'eau"
    },
    "WZ": {
        "label": "Zoologie Aquatique",
        "field": "biology",
        "description": "Faune aquatique"
    },
    "XA": {
        "label": "Anthropologie",
        "field": "social",
        "description": "Étude de l'homme et des sociétés"
    },
    "XB": {
        "label": "Archéologie",
        "field": "history",
        "description": "Étude des civilisations anciennes"
    },
    "XC": {
        "label": "Architecture",
        "field": "engineering",
        "description": "Science et art de construire"
    },
    "XD": {
        "label": "Art",
        "field": "arts",
        "description": "Histoire et théorie de l'art"
    },
    "XE": {
        "label": "Économie",
        "field": "economics",
        "description": "Sciences économiques"
    },
    "XF": {
        "label": "Philosophie",
        "field": "social",
        "description": "Pensée philosophique"
    },
    "XG": {
        "label": "Géographie",
        "field": "earth",
        "description": "Étude de l'espace terrestre"
    },
    "XH": {
        "label": "Histoire",
        "field": "history",
        "description": "Étude du passé humain"
    },
    "XI": {
        "label": "Informatique",
        "field": "mathematics",
        "description": "Sciences de l'information"
    },
    "XJ": {
        "label": "Droit",
        "field": "law",
        "description": "Sciences juridiques"
    },
    "XK": {
        "label": "Linguistique",
        "field": "social",
        "description": "Étude du langage"
    },
    "XL": {
        "label": "Littérature",
        "field": "arts",
        "description": "Étude littéraire"
    },
    "XM": {
        "label": "Musique",
        "field": "arts",
        "description": "Science et histoire de la musique"
    },
    "XN": {
        "label": "Sciences Politiques",
        "field": "social",
        "description": "Étude des systèmes politiques"
    },
    "XO": {
        "label": "Océanographie",
        "field": "earth",
        "description": "Étude des océans"
    },
    "XP": {
        "label": "Physique",
        "field": "physics",
        "description": "Sciences physiques"
    },
    "XQ": {
        "label": "Psychologie",
        "field": "psychology",
        "description": "Sciences psychologiques"
    },
    "XR": {
        "label": "Religion",
        "field": "social",
        "description": "Études religieuses"
    },
    "XS": {
        "label": "Sociologie",
        "field": "social",
        "description": "Étude de la société"
    },
    "XT": {
        "label": "Statistiques",
        "field": "mathematics",
        "description": "Méthodes statistiques"
    },
    "XU": {
        "label": "Études Urbaines",
        "field": "social",
        "description": "Sciences urbaines"
    },
    "XV": {
        "label": "Virologie",
        "field": "biology",
        "description": "Étude des virus"
    },
    "XW": {
        "label": "Zoologie",
        "field": "biology",
        "description": "Étude des animaux"
    },
    "XX": {
        "label": "Général",
        "field": "other",
        "description": "Catégorie générale"
    },
    "XY": {
        "label": "Multidisciplinaire",
        "field": "multidisciplinary",
        "description": "Approches multidisciplinaires"
    },
    "XZ": {
        "label": "Autre",
        "field": "other",
        "description": "Autres catégories"
    }
};

// Fonction pour obtenir une catégorie par son code
function getCategoryByCode(code) {
    return wosCategories[code] || null;
}

// Fonction pour rechercher des catégories par domaine
function getCategoriesByField(field) {
    return Object.entries(wosCategories)
        .filter(([code, category]) => category.field === field)
        .map(([code, category]) => ({ code, ...category }));
}

// Fonction pour rechercher des catégories par mot-clé dans la description
function searchCategories(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return Object.entries(wosCategories)
        .filter(([code, category]) =>
            category.label.toLowerCase().includes(lowerKeyword) ||
            category.description.toLowerCase().includes(lowerKeyword)
        )
        .map(([code, category]) => ({ code, ...category }));
}

// Exporter les fonctions utilitaires
window.getCategoryByCode = getCategoryByCode;
window.getCategoriesByField = getCategoriesByField;
window.searchCategories = searchCategories;