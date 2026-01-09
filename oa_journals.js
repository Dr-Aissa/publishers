// Données sur l'accès ouvert (Open Access) des revues
// Format: ISSN comme clé, informations OA comme valeur
const oaJournals = {
    "0002-7863": {
        "type": "hybrid",
        "apc": "4,500",
        "license": "CC BY-NC-ND",
        "publisher_oa": "ACS"
    },
    "0028-0836": {
        "type": "hybrid",
        "apc": "11,500",
        "license": "CC BY",
        "publisher_oa": "Nature Publishing Group"
    },
    "0036-8075": {
        "type": "hybrid",
        "apc": "7,800",
        "license": "CC BY",
        "publisher_oa": "AAAS"
    },
    "0027-8424": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "National Academy of Sciences"
    },
    "0003-2700": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "ACS"
    },
    "0003-6951": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "AIP Publishing"
    },
    "1367-4803": {
        "type": "full",
        "apc": "3,850",
        "license": "CC BY",
        "publisher_oa": "Oxford University Press"
    },
    "0006-2960": {
        "type": "hybrid",
        "apc": "4,200",
        "license": "CC BY",
        "publisher_oa": "ACS"
    },
    "0006-291X": {
        "type": "hybrid",
        "apc": "2,700",
        "license": "CC BY-NC-ND",
        "publisher_oa": "Elsevier"
    },
    "0091-6749": {
        "type": "hybrid",
        "apc": "5,500",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0090-3493": {
        "type": "hybrid",
        "apc": "4,800",
        "license": "CC BY",
        "publisher_oa": "Lippincott Williams & Wilkins"
    },
    "0022-1767": {
        "type": "full",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "The American Association of Immunologists"
    },
    "0002-9440": {
        "type": "hybrid",
        "apc": "3,900",
        "license": "CC BY",
        "publisher_oa": "American Society for Investigative Pathology"
    },
    "0012-1797": {
        "type": "hybrid",
        "apc": "4,200",
        "license": "CC BY",
        "publisher_oa": "American Diabetes Association"
    },
    "0009-7322": {
        "type": "hybrid",
        "apc": "6,200",
        "license": "CC BY",
        "publisher_oa": "American Heart Association"
    },
    "0066-4278": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "American Heart Association"
    },
    "0021-9738": {
        "type": "hybrid",
        "apc": "3,800",
        "license": "CC BY",
        "publisher_oa": "American Society for Clinical Investigation"
    },
    "1079-5642": {
        "type": "hybrid",
        "apc": "4,100",
        "license": "CC BY",
        "publisher_oa": "American Heart Association"
    },
    "0890-8567": {
        "type": "hybrid",
        "apc": "4,500",
        "license": "CC BY",
        "publisher_oa": "American Academy of Child and Adolescent Psychiatry"
    },
    "0001-8392": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Academy of Management"
    },
    "0001-4273": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Academy of Management"
    },
    "0018-7267": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0007-1234": {
        "type": "full",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "0007-1315": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0013-0613": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Taylor & Francis"
    },
    "0019-8676": {
        "type": "hybrid",
        "apc": "3,800",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0020-6598": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Oxford University Press"
    },
    "0020-7152": {
        "type": "full",
        "apc": "2,200",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0020-8308": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0021-9886": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0032-3217": {
        "type": "hybrid",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0036-9292": {
        "type": "full",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0037-7732": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0047-2727": {
        "type": "hybrid",
        "apc": "4,200",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0090-2616": {
        "type": "hybrid",
        "apc": "3,800",
        "license": "CC BY",
        "publisher_oa": "Oxford University Press"
    },
    "0090-2627": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "American Marketing Association"
    },
    "0092-6566": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0144-6665": {
        "type": "full",
        "apc": "0",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0162-895X": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "0167-4870": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0176-1714": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Springer"
    },
    "0191-3085": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0219-1377": {
        "type": "hybrid",
        "apc": "2,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0261-3794": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0265-0746": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0266-7215": {
        "type": "full",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Taylor & Francis"
    },
    "0272-4944": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0305-750X": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Elsevier"
    },
    "0308-518X": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Taylor & Francis"
    },
    "0360-0025": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0362-3319": {
        "type": "hybrid",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Springer"
    },
    "0363-7425": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0387-2343": {
        "type": "full",
        "apc": "1,800",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0735-3936": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0742-6046": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0891-2432": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0895-3309": {
        "type": "full",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0956-7976": {
        "type": "full",
        "apc": "0",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "0963-6625": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "0967-067X": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1046-1310": {
        "type": "full",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "1053-8100": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1088-4673": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1099-5129": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1363-4615": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1367-2223": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1389-224X": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Springer"
    },
    "1461-4448": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1467-8551": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1467-8578": {
        "type": "hybrid",
        "apc": "3,200",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1467-923X": {
        "type": "hybrid",
        "apc": "2,800",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1467-9264": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1467-9280": {
        "type": "hybrid",
        "apc": "3,500",
        "license": "CC BY",
        "publisher_oa": "SAGE Publications"
    },
    "1467-9303": {
        "type": "full",
        "apc": "2,500",
        "license": "CC BY",
        "publisher_oa": "Wiley-Blackwell"
    },
    "1469-1811": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "1469-182X": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "1469-1838": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "1469-1846": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "1469-1854": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    },
    "1469-1862": {
        "type": "hybrid",
        "apc": "4,000",
        "license": "CC BY",
        "publisher_oa": "Cambridge University Press"
    }
};

// Note: Dans une vraie implémentation, ce fichier contiendrait les informations
// d'accès ouvert pour toutes les revues identifiées.
// Ici, nous avons un échantillon représentatif.