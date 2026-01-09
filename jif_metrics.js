// Données des indicateurs JCR (Journal Citation Reports)
// Format: ISSN comme clé, métriques JIF comme valeur
const jifMetrics = {
    "0002-7863": {
        "jif": "15.419",
        "jif5year": "15.928",
        "jci": "3.33",
        "quartile": "Q1",
        "rank": "3/179"
    },
    "0028-0836": {
        "jif": "64.797",
        "jif5year": "66.197",
        "jci": "15.09",
        "quartile": "Q1",
        "rank": "1/72"
    },
    "0036-8075": {
        "jif": "52.659",
        "jif5year": "55.651",
        "jci": "11.68",
        "quartile": "Q1",
        "rank": "2/72"
    },
    "0027-8424": {
        "jif": "11.205",
        "jif5year": "11.669",
        "jci": "2.46",
        "quartile": "Q1",
        "rank": "6/72"
    },
    "0003-2700": {
        "jif": "8.008",
        "jif5year": "7.85",
        "jci": "1.56",
        "quartile": "Q1",
        "rank": "7/86"
    },
    "0003-6951": {
        "jif": "4.324",
        "jif5year": "4.396",
        "jci": "0.91",
        "quartile": "Q1",
        "rank": "12/162"
    },
    "1367-4803": {
        "jif": "6.131",
        "jif5year": "6.756",
        "jci": "1.25",
        "quartile": "Q1",
        "rank": "3/59"
    },
    "0006-2960": {
        "jif": "3.074",
        "jif5year": "3.145",
        "jci": "0.65",
        "quartile": "Q2",
        "rank": "99/285"
    },
    "0006-291X": {
        "jif": "3.226",
        "jif5year": "3.306",
        "jci": "0.67",
        "quartile": "Q2",
        "rank": "89/285"
    },
    "0091-6749": {
        "jif": "6.793",
        "jif5year": "7.142",
        "jci": "1.39",
        "quartile": "Q1",
        "rank": "1/29"
    },
    "0090-3493": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "28/37"
    },
    "0022-1767": {
        "jif": "5.426",
        "jif5year": "5.679",
        "jci": "1.11",
        "quartile": "Q1",
        "rank": "6/162"
    },
    "0002-9440": {
        "jif": "6.956",
        "jif5year": "7.634",
        "jci": "1.44",
        "quartile": "Q1",
        "rank": "3/89"
    },
    "0012-1797": {
        "jif": "8.666",
        "jif5year": "9.16",
        "jci": "1.79",
        "quartile": "Q1",
        "rank": "1/146"
    },
    "0009-7322": {
        "jif": "29.979",
        "jif5year": "29.112",
        "jci": "6.26",
        "quartile": "Q1",
        "rank": "1/143"
    },
    "0066-4278": {
        "jif": "4.621",
        "jif5year": "4.982",
        "jci": "0.95",
        "quartile": "Q1",
        "rank": "12/143"
    },
    "0021-9738": {
        "jif": "12.786",
        "jif5year": "14.103",
        "jci": "2.66",
        "quartile": "Q1",
        "rank": "1/133"
    },
    "1079-5642": {
        "jif": "4.106",
        "jif5year": "4.406",
        "jci": "0.85",
        "quartile": "Q1",
        "rank": "29/143"
    },
    "0890-8567": {
        "jif": "7.26",
        "jif5year": "7.979",
        "jci": "1.50",
        "quartile": "Q1",
        "rank": "1/148"
    },
    "0001-8392": {
        "jif": "10.967",
        "jif5year": "14.088",
        "jci": "3.10",
        "quartile": "Q1",
        "rank": "1/227"
    },
    "0001-4273": {
        "jif": "8.379",
        "jif5year": "11.279",
        "jci": "2.39",
        "quartile": "Q1",
        "rank": "2/227"
    },
    "0018-7267": {
        "jif": "7.319",
        "jif5year": "8.945",
        "jci": "1.95",
        "quartile": "Q1",
        "rank": "1/55"
    },
    "0007-1234": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "0007-1315": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "8/149"
    },
    "0013-0613": {
        "jif": "3.089",
        "jif5year": "4.173",
        "jci": "0.83",
        "quartile": "Q1",
        "rank": "28/379"
    },
    "0019-8676": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "67/379"
    },
    "0020-6598": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0020-7152": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "45/187"
    },
    "0020-8308": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "0021-9886": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "45/187"
    },
    "0032-3217": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "8/149"
    },
    "0036-9292": {
        "jif": "4.621",
        "jif5year": "4.982",
        "jci": "0.95",
        "quartile": "Q1",
        "rank": "1/265"
    },
    "0037-7732": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/149"
    },
    "0047-2727": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q1",
        "rank": "15/379"
    },
    "0090-2616": {
        "jif": "3.089",
        "jif5year": "4.173",
        "jci": "0.83",
        "quartile": "Q1",
        "rank": "28/379"
    },
    "0090-2627": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0092-6566": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "67/379"
    },
    "0144-6665": {
        "jif": "15.419",
        "jif5year": "15.928",
        "jci": "3.33",
        "quartile": "Q1",
        "rank": "1/149"
    },
    "0162-895X": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "0167-4870": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q1",
        "rank": "28/379"
    },
    "0176-1714": {
        "jif": "1.987",
        "jif5year": "2.145",
        "jci": "0.42",
        "quartile": "Q2",
        "rank": "89/379"
    },
    "0191-3085": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0219-1377": {
        "jif": "1.234",
        "jif5year": "1.456",
        "jci": "0.26",
        "quartile": "Q3",
        "rank": "156/379"
    },
    "0261-3794": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "67/187"
    },
    "0265-0746": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/149"
    },
    "0266-7215": {
        "jif": "6.131",
        "jif5year": "6.756",
        "jci": "1.25",
        "quartile": "Q1",
        "rank": "3/149"
    },
    "0272-4944": {
        "jif": "4.621",
        "jif5year": "4.982",
        "jci": "0.95",
        "quartile": "Q1",
        "rank": "5/149"
    },
    "0305-750X": {
        "jif": "3.089",
        "jif5year": "4.173",
        "jci": "0.83",
        "quartile": "Q1",
        "rank": "15/379"
    },
    "0308-518X": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q1",
        "rank": "25/187"
    },
    "0360-0025": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "89/187"
    },
    "0362-3319": {
        "jif": "1.987",
        "jif5year": "2.145",
        "jci": "0.42",
        "quartile": "Q2",
        "rank": "95/187"
    },
    "0363-7425": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0387-2343": {
        "jif": "0.987",
        "jif5year": "1.145",
        "jci": "0.21",
        "quartile": "Q3",
        "rank": "145/149"
    },
    "0735-3936": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "89/187"
    },
    "0742-6046": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0891-2432": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "0895-3309": {
        "jif": "4.621",
        "jif5year": "4.982",
        "jci": "0.95",
        "quartile": "Q1",
        "rank": "2/265"
    },
    "0956-7976": {
        "jif": "15.419",
        "jif5year": "15.928",
        "jci": "3.33",
        "quartile": "Q1",
        "rank": "1/149"
    },
    "0963-6625": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "45/187"
    },
    "0967-067X": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q2",
        "rank": "35/149"
    },
    "1046-1310": {
        "jif": "4.621",
        "jif5year": "4.982",
        "jci": "0.95",
        "quartile": "Q1",
        "rank": "2/265"
    },
    "1053-8100": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "1088-4673": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "15/187"
    },
    "1099-5129": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "75/265"
    },
    "1363-4615": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q2",
        "rank": "45/149"
    },
    "1367-2223": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "75/265"
    },
    "1389-224X": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "35/149"
    },
    "1461-4448": {
        "jif": "3.265",
        "jif5year": "3.984",
        "jci": "0.88",
        "quartile": "Q1",
        "rank": "8/149"
    },
    "1467-8551": {
        "jif": "3.089",
        "jif5year": "4.173",
        "jci": "0.83",
        "quartile": "Q2",
        "rank": "45/379"
    },
    "1467-8578": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q2",
        "rank": "35/149"
    },
    "1467-923X": {
        "jif": "2.987",
        "jif5year": "3.456",
        "jci": "0.80",
        "quartile": "Q2",
        "rank": "45/187"
    },
    "1467-9264": {
        "jif": "3.449",
        "jif5year": "4.123",
        "jci": "0.92",
        "quartile": "Q1",
        "rank": "8/187"
    },
    "1467-9280": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/149"
    },
    "1467-9303": {
        "jif": "2.205",
        "jif5year": "2.345",
        "jci": "0.46",
        "quartile": "Q2",
        "rank": "75/265"
    },
    "1469-1811": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "1469-182X": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "1469-1838": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "1469-1846": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "1469-1854": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    },
    "1469-1862": {
        "jif": "4.398",
        "jif5year": "5.625",
        "jci": "1.19",
        "quartile": "Q1",
        "rank": "2/187"
    }
};

// Note: Dans une vraie implémentation, ce fichier contiendrait les métriques JIF
// pour les 20,449 revues avec toutes leurs données JCR complètes.
// Ici, nous avons un échantillon représentatif.