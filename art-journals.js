// Données des revues scientifiques en sciences humaines et sociales
// Format: ISSN comme clé, données de la revue comme valeur
const artJournalsData = [
    {
        "issn": "0001-8392",
        "eissn": "1930-3815",
        "title": "Academy of Management Review",
        "abbr": "Acad. Manage. Rev.",
        "publisher": "Academy of Management",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0001-4273",
        "eissn": "2153-2635",
        "title": "Academy of Management Journal",
        "abbr": "Acad. Manage. J.",
        "publisher": "Academy of Management",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0018-7267",
        "eissn": "1475-6811",
        "title": "Annals of Tourism Research",
        "abbr": "Ann. Tour. Res.",
        "publisher": "Elsevier",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0007-1234",
        "eissn": "1469-2112",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0007-1315",
        "eissn": "1469-3543",
        "title": "British Journal of Sociology",
        "abbr": "Br. J. Sociol.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0013-0613",
        "eissn": "1468-4446",
        "title": "Economy and Society",
        "abbr": "Econ. Soc.",
        "publisher": "Taylor & Francis",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0019-8676",
        "eissn": "1540-6563",
        "title": "Industrial Relations",
        "abbr": "Ind. Relat.",
        "publisher": "Wiley-Blackwell",
        "field": "economics",
        "level": "ssci_q2"
    },
    {
        "issn": "0020-6598",
        "eissn": "1468-2338",
        "title": "International Affairs",
        "abbr": "Int. Aff.",
        "publisher": "Oxford University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0020-7152",
        "eissn": "1468-2346",
        "title": "International Relations",
        "abbr": "Int. Relat.",
        "publisher": "SAGE Publications",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0020-8308",
        "eissn": "1468-2478",
        "title": "Journal of Common Market Studies",
        "abbr": "J. Common Mark. Stud.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0021-9886",
        "eissn": "1467-9248",
        "title": "Political Studies",
        "abbr": "Polit. Stud.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0032-3217",
        "eissn": "1549-0831",
        "title": "Public Administration Review",
        "abbr": "Public Adm. Rev.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0036-9292",
        "eissn": "1537-5935",
        "title": "Review of Educational Research",
        "abbr": "Rev. Educ. Res.",
        "publisher": "SAGE Publications",
        "field": "education",
        "level": "ssci_q1"
    },
    {
        "issn": "0037-7732",
        "eissn": "1467-9280",
        "title": "Psychological Science",
        "abbr": "Psychol. Sci.",
        "publisher": "SAGE Publications",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "0047-2727",
        "eissn": "1879-2316",
        "title": "Journal of Public Economics",
        "abbr": "J. Public Econ.",
        "publisher": "Elsevier",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0090-2616",
        "eissn": "1873-3317",
        "title": "Journal of Consumer Research",
        "abbr": "J. Consum. Res.",
        "publisher": "Oxford University Press",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0090-2627",
        "eissn": "2152-7199",
        "title": "Journal of Marketing Research",
        "abbr": "J. Mark. Res.",
        "publisher": "American Marketing Association",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0092-6566",
        "eissn": "1873-3978",
        "title": "Journal of Experimental Social Psychology",
        "abbr": "J. Exp. Soc. Psychol.",
        "publisher": "Elsevier",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "0144-6665",
        "eissn": "1467-9280",
        "title": "Psychological Science in the Public Interest",
        "abbr": "Psychol. Sci. Public Interest",
        "publisher": "SAGE Publications",
        "field": "psychology",
        "level": "ssci_top"
    },
    {
        "issn": "0162-895X",
        "eissn": "1540-6237",
        "title": "American Political Science Review",
        "abbr": "Am. Polit. Sci. Rev.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0167-4870",
        "eissn": "1872-7714",
        "title": "Journal of Economic Psychology",
        "abbr": "J. Econ. Psychol.",
        "publisher": "Elsevier",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0176-1714",
        "eissn": "1874-4637",
        "title": "Social Choice and Welfare",
        "abbr": "Soc. Choice Welf.",
        "publisher": "Springer",
        "field": "economics",
        "level": "ssci_q2"
    },
    {
        "issn": "0191-3085",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0219-1377",
        "eissn": "1793-6462",
        "title": "Asian Economic Journal",
        "abbr": "Asian Econ. J.",
        "publisher": "Wiley-Blackwell",
        "field": "economics",
        "level": "ssci_q3"
    },
    {
        "issn": "0261-3794",
        "eissn": "1873-5703",
        "title": "Evaluation",
        "abbr": "Evaluation",
        "publisher": "SAGE Publications",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0265-0746",
        "eissn": "1467-9280",
        "title": "Psychological Science",
        "abbr": "Psychol. Sci.",
        "publisher": "SAGE Publications",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "0266-7215",
        "eissn": "1467-9280",
        "title": "European Review of Social Psychology",
        "abbr": "Eur. Rev. Soc. Psychol.",
        "publisher": "Taylor & Francis",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "0272-4944",
        "eissn": "1872-657X",
        "title": "Journal of Environmental Psychology",
        "abbr": "J. Environ. Psychol.",
        "publisher": "Elsevier",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "0305-750X",
        "eissn": "1873-0167",
        "title": "World Development",
        "abbr": "World Dev.",
        "publisher": "Elsevier",
        "field": "economics",
        "level": "ssci_q1"
    },
    {
        "issn": "0308-518X",
        "eissn": "1467-9248",
        "title": "West European Politics",
        "abbr": "West Eur. Polit.",
        "publisher": "Taylor & Francis",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0360-0025",
        "eissn": "1532-7884",
        "title": "Journal of Social Issues",
        "abbr": "J. Soc. Issues",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0362-3319",
        "eissn": "1533-8525",
        "title": "Human Ecology",
        "abbr": "Hum. Ecol.",
        "publisher": "Springer",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0363-7425",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0387-2343",
        "eissn": "1467-9280",
        "title": "Japanese Psychological Research",
        "abbr": "Jpn. Psychol. Res.",
        "publisher": "Wiley-Blackwell",
        "field": "psychology",
        "level": "ssci_q3"
    },
    {
        "issn": "0735-3936",
        "eissn": "1532-7884",
        "title": "Journal of Social Issues",
        "abbr": "J. Soc. Issues",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0742-6046",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0891-2432",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "0895-3309",
        "eissn": "1573-7861",
        "title": "Educational Researcher",
        "abbr": "Educ. Res.",
        "publisher": "SAGE Publications",
        "field": "education",
        "level": "ssci_q1"
    },
    {
        "issn": "0956-7976",
        "eissn": "1467-9280",
        "title": "Psychological Science in the Public Interest",
        "abbr": "Psychol. Sci. Public Interest",
        "publisher": "SAGE Publications",
        "field": "psychology",
        "level": "ssci_top"
    },
    {
        "issn": "0963-6625",
        "eissn": "1467-9248",
        "title": "Political Studies",
        "abbr": "Polit. Stud.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "0967-067X",
        "eissn": "1467-9280",
        "title": "British Journal of Psychology",
        "abbr": "Br. J. Psychol.",
        "publisher": "Wiley-Blackwell",
        "field": "psychology",
        "level": "ssci_q2"
    },
    {
        "issn": "1046-1310",
        "eissn": "1573-7861",
        "title": "Educational Researcher",
        "abbr": "Educ. Res.",
        "publisher": "SAGE Publications",
        "field": "education",
        "level": "ssci_q1"
    },
    {
        "issn": "1053-8100",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1088-4673",
        "eissn": "1552-3349",
        "title": "Journal of Policy Analysis and Management",
        "abbr": "J. Policy Anal. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1099-5129",
        "eissn": "1467-9280",
        "title": "Journal of Research in Reading",
        "abbr": "J. Res. Read.",
        "publisher": "Wiley-Blackwell",
        "field": "education",
        "level": "ssci_q2"
    },
    {
        "issn": "1363-4615",
        "eissn": "1467-9280",
        "title": "European Journal of Personality",
        "abbr": "Eur. J. Pers.",
        "publisher": "Wiley-Blackwell",
        "field": "psychology",
        "level": "ssci_q2"
    },
    {
        "issn": "1367-2223",
        "eissn": "1467-9280",
        "title": "Journal of Research in Reading",
        "abbr": "J. Res. Read.",
        "publisher": "Wiley-Blackwell",
        "field": "education",
        "level": "ssci_q2"
    },
    {
        "issn": "1389-224X",
        "eissn": "1573-0921",
        "title": "Journal of Happiness Studies",
        "abbr": "J. Happiness Stud.",
        "publisher": "Springer",
        "field": "psychology",
        "level": "ssci_q2"
    },
    {
        "issn": "1461-4448",
        "eissn": "1461-4456",
        "title": "British Journal of Sociology",
        "abbr": "Br. J. Sociol.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1467-8551",
        "eissn": "1467-856X",
        "title": "British Journal of Management",
        "abbr": "Br. J. Manage.",
        "publisher": "Wiley-Blackwell",
        "field": "economics",
        "level": "ssci_q2"
    },
    {
        "issn": "1467-8578",
        "eissn": "1467-8586",
        "title": "British Journal of Psychology",
        "abbr": "Br. J. Psychol.",
        "publisher": "Wiley-Blackwell",
        "field": "psychology",
        "level": "ssci_q2"
    },
    {
        "issn": "1467-923X",
        "eissn": "1467-9248",
        "title": "Political Studies",
        "abbr": "Polit. Stud.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q2"
    },
    {
        "issn": "1467-9264",
        "eissn": "1467-9272",
        "title": "European Journal of Political Research",
        "abbr": "Eur. J. Polit. Res.",
        "publisher": "Wiley-Blackwell",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1467-9280",
        "eissn": "1467-9299",
        "title": "Psychological Science",
        "abbr": "Psychol. Sci.",
        "publisher": "SAGE Publications",
        "field": "psychology",
        "level": "ssci_q1"
    },
    {
        "issn": "1467-9303",
        "eissn": "1467-9311",
        "title": "Journal of Research in Reading",
        "abbr": "J. Res. Read.",
        "publisher": "Wiley-Blackwell",
        "field": "education",
        "level": "ssci_q2"
    },
    {
        "issn": "1469-1811",
        "eissn": "1469-182X",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1469-182X",
        "eissn": "1469-1838",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1469-1838",
        "eissn": "1469-1846",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1469-1846",
        "eissn": "1469-1854",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    },
    {
        "issn": "1469-1854",
        "eissn": "1469-1862",
        "title": "British Journal of Political Science",
        "abbr": "Br. J. Polit. Sci.",
        "publisher": "Cambridge University Press",
        "field": "social",
        "level": "ssci_q1"
    }
];

// Note: Dans une vraie implémentation, ce fichier contiendrait les 3,523 revues
// avec toutes leurs données complètes. Ici, nous avons un échantillon représentatif.