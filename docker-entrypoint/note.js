db = db.getSiblingDB('note');

db.createCollection('note');

db.notes.insertMany(
    [
        {
            "patientId": 1,
            "note": "Le patient déclare qu'il « se sent très bien »\nPoids égal ou inférieur au poids recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 1,
            "note": "Le patient déclare qu'il se sent fatigué pendant la journée\nIl se plaint également de douleurs musculaires\nTests de laboratoire indiquant une microalbumine élevée" ,
            "date": "2023-04-07"
        },
        {
            "patientId": 1,
            "note": "Le patient déclare qu'il ne se sent pas si fatigué que ça\nFumeur, il a arrêté dans les 12 mois précédents\nTests de laboratoire indiquant que les anticorps sont élevés",
            "date": "2023-04-07"
        },
        {
            "patientId": 2,
            "note":"Le patient déclare qu'il ressent beaucoup de stress au travail\nIl se plaint également que son audition est anormale dernièrement",
            "date": "2023-04-07"
        },
        {
            "patientId": 2,
            "note": "Le patient déclare avoir fait une réaction aux médicaments au cours des 3 derniers mois\nIl remarque également que son audition continue d'être anormale",
            "date": "2023-04-07"
        },
        {
            "patientId": 2,
            "note": "Tests de laboratoire indiquant une microalbumine élevée",
            "date": "2023-04-07"
        },
        {
            "patientId": 2,
            "note": "Le patient déclare que tout semble aller bien\nLe laboratoire rapporte que l'hémoglobine A1C dépasse le niveau recommandé\nLe patient déclare qu’il fume depuis longtemps",
            "date": "2023-04-07"
        },
        {
            "patientId": 3,
            "note": "Le patient déclare qu'il fume depuis peu",
            "date": "2023-04-07"
        },
        {
            "patientId": 3,
            "note": "Tests de laboratoire indiquant une microalbumine élevée",
            "date": "2023-04-07"
        },
        {
            "patientId": 3,
            "note": "Le patient déclare qu'il est fumeur et qu'il a cessé de fumer l'année dernière\nIl se plaint également de crises d’apnée respiratoire anormales\nTests de laboratoire indiquant un taux de cholestérol LDL élevé",
            "date": "2023-04-07"
        },
        {
            "patientId": 3,
            "note": "Tests de laboratoire indiquant un taux de cholestérol LDL élevé",
            "date": "2023-04-07"
        },
        {
            "patientId": 4,
            "note": "Le patient déclare qu'il lui est devenu difficile de monter les escaliers\nIl se plaint également d’être essoufflé\nTests de laboratoire indiquant que les anticorps sont élevés\nRéaction aux médicaments",
            "date": "2023-04-07"
        },
        {
            "patientId": 4,
            "note": "Le patient déclare qu'il a mal au dos lorsqu'il reste assis pendant longtemps",
            "date": "2023-04-07"
        },
        {
            "patientId": 4,
            "note": "Le patient déclare avoir commencé à fumer depuis peu\nHémoglobine A1C supérieure au niveau recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 5,
            "note": "Le patient déclare avoir des douleurs au cou occasionnellement\nLe patient remarque également que certains aliments ont un goût différent\nRéaction apparente aux médicaments\nPoids corporel supérieur au poids recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 5,
            "note": "Le patient déclare avoir eu plusieurs épisodes de vertige depuis la dernière visite.\nTaille incluse dans la fourchette concernée",
            "date": "2023-04-07"
        },
        {
            "patientId": 5,
            "note": "Le patient déclare qu'il souffre encore de douleurs cervicales occasionnelles\nTests de laboratoire indiquant une microalbumine élevée\nFumeur, il a arrêté dans les 12 mois précédents",
            "date": "2023-04-07"
        },
        {
            "patientId": 5,
            "note": "Le patient déclare avoir eu plusieurs épisodes de vertige depuis la dernière visite.\nTests de laboratoire indiquant que les anticorps sont élevés",
            "date": "2023-04-07"
        },
        {
            "patientId": 6,
            "note": "Le patient déclare qu'il se sent bien\nPoids corporel supérieur au poids recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 6,
            "note": "Le patient déclare qu'il se sent bien",
            "date": "2023-04-07"
        },
        {
            "patientId": 7,
            "note": "Le patient déclare qu'il se réveille souvent avec une raideur articulaire\nIl se plaint également de difficultés pour s’endormir\nPoids corporel supérieur au poids recommandé\nTests de laboratoire indiquant un taux de cholestérol LDL élevé",
            "date": "2023-04-07"
        },
        {
            "patientId": 8,
            "note": "Les tests de laboratoire indiquent que les anticorps sont élevés\nHémoglobine A1C supérieure au niveau recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 9,
            "note": "Le patient déclare avoir de la difficulté à se concentrer sur ses devoirs scolaires\nHémoglobine A1C supérieure au niveau recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 9,
            "note": "Le patient déclare qu'il s’impatiente facilement en cas d’attente prolongée\nIl signale également que les produits du distributeur automatique ne sont pas bons\nTests de laboratoire signalant des taux anormaux de cellules sanguines",
            "date": "2023-04-07"
        },
        {
            "patientId": 9,
            "note": "Le patient signale qu'il est facilement irrité par des broutilles\nIl déclare également que l'aspirateur des voisins fait trop de bruit\nTests de laboratoire indiquant que les anticorps sont élevés",
            "date": "2023-04-07"
        },
        {
            "patientId": 10,
            "note": "Le patient déclare qu'il n'a aucun problème",
            "date": "2023-04-07"
        },
        {
            "patientId": 10,
            "note": "Le patient déclare qu'il n'a aucun problème\nTaille incluse dans la fourchette concernée\nHémoglobine A1C supérieure au niveau recommandé",
            "date": "2023-04-07"
        },
        {
            "patientId": 10,
            "note": "Le patient déclare qu'il n'a aucun problème\nPoids corporel supérieur au poids recommandé\nLe patient a signalé plusieurs épisodes de vertige depuis sa dernière visite",
            "date": "2023-04-07"
        },
        {
            "patientId": 10,

            "note": "Le patient déclare qu'il n'a aucun problème\nTests de laboratoire indiquant une microalbumine élevée",
            "date": "2023-04-07"
        }
    ]
);