// Classification des domaines de recherche avec labels en français
// Format: clé technique -> données du domaine
const researchFields = {
    // Sciences naturelles
    "medicine": {
        "label": "Médecine et Santé",
        "icon": "🏥",
        "keywords": [
            "medicine", "health", "medical", "clinical", "therapy", "disease",
            "patient", "treatment", "diagnosis", "surgery", "pharmacy", "nursing",
            "epidemiology", "public health", "biomedical", "physiology", "anatomy",
            "pathology", "radiology", "oncology", "cardiology", "neurology",
            "psychiatry", "dermatology", "pediatrics", "geriatrics", "immunology"
        ]
    },
    "biology": {
        "label": "Biologie et Sciences de la Vie",
        "icon": "🧬",
        "keywords": [
            "biology", "biochemistry", "molecular", "cell", "cellular", "genetics",
            "genomic", "microbiology", "virology", "bacteriology", "mycology",
            "parasitology", "botany", "zoology", "ecology", "evolution", "developmental",
            "physiology", "anatomy", "neuroscience", "immunology", "endocrinology",
            "toxicology", "pharmacology", "biophysics", "bioinformatics", "biotechnology"
        ]
    },
    "chemistry": {
        "label": "Chimie",
        "icon": "⚗️",
        "keywords": [
            "chemistry", "chemical", "organic", "inorganic", "physical", "analytical",
            "biochemistry", "medicinal", "polymer", "colloid", "electrochemistry",
            "photochemistry", "thermodynamics", "kinetics", "spectroscopy", "crystallography",
            "catalysis", "synthesis", "materials", "nanochemistry", "supramolecular"
        ]
    },
    "physics": {
        "label": "Physique et Astronomie",
        "icon": "⚛️",
        "keywords": [
            "physics", "physical", "mechanics", "optics", "electromagnetism", "thermodynamics",
            "quantum", "nuclear", "particle", "astrophysics", "astronomy", "cosmology",
            "plasma", "condensed matter", "solid state", "fluid", "acoustics", "biophysics",
            "geophysics", "atmospheric", "oceanography", "meteorology", "climatology"
        ]
    },
    "mathematics": {
        "label": "Mathématiques et Informatique",
        "icon": "📐",
        "keywords": [
            "mathematics", "math", "algebra", "geometry", "topology", "analysis",
            "statistics", "probability", "computational", "computer science", "informatics",
            "algorithm", "programming", "software", "artificial intelligence", "machine learning",
            "data science", "cryptography", "optimization", "numerical", "discrete",
            "logic", "theory", "complexity", "database", "network", "security"
        ]
    },
    "earth": {
        "label": "Sciences de la Terre et Environnement",
        "icon": "🌍",
        "keywords": [
            "earth", "geology", "geophysics", "geochemistry", "paleontology", "mineralogy",
            "petrology", "sedimentology", "tectonics", "seismology", "volcanology",
            "hydrology", "oceanography", "atmospheric", "meteorology", "climatology",
            "environmental", "ecology", "conservation", "sustainability", "pollution",
            "remote sensing", "gis", "cartography", "soil science", "forestry"
        ]
    },
    "engineering": {
        "label": "Ingénierie et Technologie",
        "icon": "⚙️",
        "keywords": [
            "engineering", "technology", "mechanical", "electrical", "electronic", "civil",
            "chemical", "aerospace", "biomedical", "environmental", "materials", "manufacturing",
            "control", "robotics", "automation", "energy", "renewable", "sustainable",
            "transportation", "construction", "architecture", "industrial", "systems",
            "reliability", "quality", "maintenance", "design", "innovation"
        ]
    },
    "agriculture": {
        "label": "Agriculture et Sciences Alimentaires",
        "icon": "🌾",
        "keywords": [
            "agriculture", "agricultural", "crop", "plant", "soil", "fertilizer", "pesticide",
            "irrigation", "breeding", "genetics", "biotechnology", "food science", "nutrition",
            "processing", "preservation", "safety", "quality", "microbiology", "chemistry",
            "engineering", "economics", "policy", "sustainability", "organic", "horticulture",
            "forestry", "fisheries", "aquaculture", "animal science", "veterinary"
        ]
    },

    // Sciences humaines et sociales
    "social": {
        "label": "Sciences Humaines et Sociales",
        "icon": "📖",
        "keywords": [
            "sociology", "social", "anthropology", "ethnography", "demography", "social theory",
            "urban studies", "rural studies", "community", "social work", "criminology",
            "deviance", "social stratification", "inequality", "poverty", "welfare", "policy",
            "political science", "politics", "government", "international relations",
            "public administration", "political theory", "comparative politics", "elections",
            "democracy", "authoritarianism", "conflict", "peace", "security"
        ]
    },
    "arts": {
        "label": "Arts et Design",
        "icon": "🎨",
        "keywords": [
            "art", "arts", "design", "visual", "performing", "music", "theater", "dance",
            "film", "cinema", "media", "communication", "journalism", "publishing",
            "literature", "poetry", "fiction", "drama", "criticism", "aesthetics",
            "cultural studies", "popular culture", "digital media", "new media",
            "graphic design", "industrial design", "fashion", "architecture", "urban design",
            "photography", "sculpture", "painting", "drawing", "printmaking"
        ]
    },
    "psychology": {
        "label": "Psychologie",
        "icon": "🧠",
        "keywords": [
            "psychology", "psychological", "cognitive", "developmental", "social psychology",
            "clinical", "counseling", "educational", "industrial", "organizational", "forensic",
            "health", "sports", "neuropsychology", "behavioral", "experimental", "personality",
            "motivation", "emotion", "perception", "attention", "memory", "learning",
            "intelligence", "assessment", "therapy", "counseling", "psychoanalysis", "behaviorism"
        ]
    },
    "education": {
        "label": "Éducation",
        "icon": "🎓",
        "keywords": [
            "education", "educational", "teaching", "learning", "pedagogy", "curriculum",
            "assessment", "evaluation", "school", "university", "higher education", "adult education",
            "special education", "early childhood", "teacher education", "educational technology",
            "distance learning", "online learning", "educational psychology", "classroom",
            "instruction", "student", "academic achievement", "literacy", "numeracy",
            "educational policy", "reform", "equity", "inclusion", "diversity"
        ]
    },
    "economics": {
        "label": "Économie et Gestion",
        "icon": "💰",
        "keywords": [
            "economics", "economic", "macroeconomics", "microeconomics", "development",
            "international", "finance", "monetary", "fiscal", "labor", "trade", "growth",
            "management", "business", "marketing", "accounting", "finance", "strategy",
            "organizational", "leadership", "entrepreneurship", "innovation", "operations",
            "human resources", "corporate", "governance", "sustainability", "ethics",
            "consumer behavior", "market research", "branding", "supply chain"
        ]
    },
    "law": {
        "label": "Droit",
        "icon": "⚖️",
        "keywords": [
            "law", "legal", "jurisprudence", "legislation", "regulation", "constitutional",
            "criminal", "civil", "international law", "human rights", "justice", "courts",
            "litigation", "arbitration", "intellectual property", "contract", "tort",
            "property", "family law", "labor law", "environmental law", "tax law",
            "corporate law", "administrative law", "legal theory", "philosophy of law"
        ]
    },
    "history": {
        "label": "Histoire",
        "icon": "📜",
        "keywords": [
            "history", "historical", "ancient", "medieval", "modern", "contemporary",
            "world history", "european", "american", "asian", "african", "latin american",
            "archaeology", "archival", "oral history", "cultural history", "social history",
            "political history", "economic history", "military history", "intellectual history",
            "women's history", "colonialism", "imperialism", "revolution", "war", "peace",
            "diplomacy", "migration", "urbanization", "industrialization"
        ]
    },

    // Domaine générique
    "other": {
        "label": "Autres",
        "icon": "📚",
        "keywords": [
            "interdisciplinary", "multidisciplinary", "general", "miscellaneous", "other",
            "transdisciplinary", "cross-cultural", "comparative", "methodology", "theory"
        ]
    },

    // Domaines spécialisés (pour classification avancée)
    "multidisciplinary": {
        "label": "Multidisciplinaire",
        "icon": "🔬",
        "keywords": [
            "nature", "science", "proceedings", "advances", "reports", "letters",
            "communications", "research", "studies", "international", "national",
            "academy", "society", "association", "foundation", "institute"
        ]
    }
};

// Fonction utilitaire pour obtenir le domaine principal d'une revue
function getResearchField(title, abstract = "") {
    const text = (title + " " + abstract).toLowerCase();

    for (const [key, field] of Object.entries(researchFields)) {
        for (const keyword of field.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                return key;
            }
        }
    }

    return "other"; // Domaine par défaut
}

// Fonction pour obtenir tous les domaines correspondant à un texte
function getMatchingFields(text) {
    const matches = [];
    const lowerText = text.toLowerCase();

    for (const [key, field] of Object.entries(researchFields)) {
        for (const keyword of field.keywords) {
            if (lowerText.includes(keyword.toLowerCase())) {
                if (!matches.includes(key)) {
                    matches.push(key);
                }
                break; // Un seul match par domaine
            }
        }
    }

    return matches.length > 0 ? matches : ["other"];
}

// Exporter les fonctions utilitaires
window.getResearchField = getResearchField;
window.getMatchingFields = getMatchingFields;