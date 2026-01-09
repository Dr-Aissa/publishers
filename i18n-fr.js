// Fichier de traductions françaises pour le système de recherche de revues scientifiques
const MESSAGES_FR = {
  // Messages de recherche
  search: {
    placeholder: 'Entrez le nom de la revue...',
    noResults: 'Aucune revue trouvée',
    resultsCount: '{count} revue(s) trouvée(s)',
    searching: 'Recherche en cours...',
    loading: 'Chargement des données...'
  },

  // Messages de filtrage
  filters: {
    clearAll: 'Effacer tous les filtres',
    researchField: 'Filtrage par Domaine de Recherche',
    levelClassification: 'Filtrage par Niveau de Classification',
    noFilter: 'Aucun filtre actif'
  },

  // Messages de comparaison
  comparison: {
    title: 'Rapport de Comparaison des Revues',
    selectMinimum: 'Sélectionnez au moins 2 revues pour comparer',
    selected: '{count} revue(s) sélectionnée(s)',
    compare: 'Comparer',
    clear: 'Vider',
    close: 'Fermer',
    savePDF: 'Sauvegarder PDF',
    maxSelection: 'Maximum 5 revues pour la comparaison'
  },

  // Labels des indicateurs
  indicators: {
    // Indicateurs JCR/JIF
    jif: 'Facteur d\'Impact',
    jif5year: 'Facteur d\'Impact sur 5 ans',
    jci: 'JCI',
    quartile: 'Classification',
    rank: 'Classement',
    jifWithoutSelf: 'Facteur d\'Impact sans Autocitations',
    totalCitations: 'Total des Citations',

    // Indicateurs SJR
    sjr: 'Valeur SJR',
    sjrQuartile: 'Classification SJR',
    totalDocs2024: 'Total Documents 2024',
    apc: 'Frais de Publication (APC)',

    // Autres métriques
    hIndex: 'Index H',
    eigenfactor: 'Eigenfactor',
    influenceScore: 'Score d\'Influence'
  },

  // Types d'accès ouvert
  oa: {
    full: 'Accès Libre Complet',
    hybrid: 'Accès Libre Hybride',
    traditional: 'Revue Traditionnelle',
    unknown: 'Type non défini'
  },

  // Domaines de recherche (labels d'affichage)
  researchFields: {
    medicine: 'Médecine et Santé',
    biology: 'Biologie et Sciences de la Vie',
    chemistry: 'Chimie',
    physics: 'Physique et Astronomie',
    mathematics: 'Mathématiques et Informatique',
    earth: 'Sciences de la Terre et Environnement',
    engineering: 'Ingénierie et Technologie',
    agriculture: 'Agriculture et Sciences Alimentaires',
    social: 'Sciences Humaines et Sociales',
    arts: 'Arts et Design',
    other: 'Autres'
  },

  // Niveaux de classification
  levels: {
    top: 'Revues Internationales de Premier Plan',
    q1a: 'SCI Zone Q1 Classe A',
    q1b: 'SCI Zone Q1 Classe B',
    q1c: 'SCI Zone Q1 Classe C',
    q1d: 'SCI Zone Q1 Classe D',
    q2: 'SCI Zone Q2',
    q3: 'SCI Zone Q3',
    q4: 'SCI Zone Q4',
    excellence: 'Plan d\'Action d\'Excellence',
    high_potential: 'Nouvelles Revues à Haut Potentiel',
    emerging: 'Revues Émergentes'
  },

  // Labels des éditeurs
  publishers: {
    elsevier: 'Elsevier',
    springer: 'Springer Nature',
    wiley: 'Wiley-Blackwell',
    taylor: 'Taylor & Francis',
    sage: 'SAGE Publications',
    oxford: 'Oxford University Press',
    cambridge: 'Cambridge University Press',
    nature: 'Nature Publishing Group',
    aaas: 'American Association for the Advancement of Science',
    other: 'Autre éditeur'
  },

  // Messages d'erreur
  errors: {
    dataLoadFailed: 'Erreur lors du chargement des données',
    searchFailed: 'Erreur lors de la recherche',
    comparisonFailed: 'Erreur lors de la génération du rapport de comparaison',
    pdfGenerationFailed: 'Erreur lors de la génération du PDF',
    networkError: 'Erreur de réseau - vérifiez votre connexion',
    invalidData: 'Données invalides reçues'
  },

  // Messages de succès
  success: {
    dataLoaded: 'Données chargées avec succès',
    searchCompleted: 'Recherche terminée',
    comparisonGenerated: 'Rapport de comparaison généré',
    pdfSaved: 'PDF sauvegardé avec succès',
    filtersApplied: 'Filtres appliqués'
  },

  // Messages d'aide et info-bulles
  help: {
    searchTip: 'Tapez le nom complet ou partiel de la revue, ou son ISSN',
    filterTip: 'Utilisez les filtres pour affiner vos résultats de recherche',
    comparisonTip: 'Sélectionnez plusieurs revues pour les comparer côte à côte',
    jifTip: 'Facteur d\'Impact : nombre moyen de citations par article sur 2 ans',
    sjrTip: 'SCImago Journal Rank : mesure de la prestige scientifique',
    oaTip: 'Accès Libre : modèle de publication sans barrières financières'
  },

  // Navigation et UI
  navigation: {
    home: 'Accueil',
    naturalSciences: 'Sciences Naturelles',
    socialSciences: 'Sciences Humaines et Sociales',
    about: 'À propos',
    contact: 'Contact',
    help: 'Aide'
  },

  // Statistiques et métadonnées
  stats: {
    totalJournals: 'revues au total',
    lastUpdate: 'Dernière mise à jour',
    dataSource: 'Source des données',
    version: 'Version'
  },

  // Messages de confirmation
  confirmations: {
    clearSelection: 'Êtes-vous sûr de vouloir vider la sélection ?',
    clearFilters: 'Êtes-vous sûr de vouloir effacer tous les filtres ?',
    closeComparison: 'Fermer le rapport de comparaison ?'
  },

  // Formats de date et nombre
  formats: {
    date: 'DD/MM/YYYY',
    number: 'fr-FR',
    currency: 'EUR'
  }
};

// Fonction utilitaire pour récupérer les messages traduits
function getMessage(key, params = {}) {
  const keys = key.split('.');
  let value = MESSAGES_FR;

  for (const k of keys) {
    value = value?.[k];
    if (!value) return key; // Retourner la clé si non trouvée
  }

  // Remplacer les paramètres dynamiques
  if (typeof value === 'string') {
    return value.replace(/{(\w+)}/g, (match, param) => params[param] || match);
  }

  return value || key;
}

// Fonction pour formater les nombres selon les conventions françaises
function formatNumber(num, options = {}) {
  if (num === null || num === undefined || isNaN(num)) return 'N/A';
  return new Intl.NumberFormat(MESSAGES_FR.formats.number, options).format(num);
}

// Fonction pour formater les dates
function formatDate(date, options = {}) {
  if (!date) return 'N/A';
  const d = new Date(date);
  return new Intl.DateTimeFormat(MESSAGES_FR.formats.date, options).format(d);
}

// Exposer les fonctions utilitaires globalement
window.MESSAGES_FR = MESSAGES_FR;
window.getMessage = getMessage;
window.formatNumber = formatNumber;
window.formatDate = formatDate;