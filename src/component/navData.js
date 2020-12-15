const navData = [
    {
        "id": 2,
        "label": "Associations",
        "class": "Associations",
        "dropdown":[
            {"id": 1,"label": "Culturel"},
            {"id": 2,"label": "Sportive"},
            {"id": 3,"label": "Solidaire"},
            {"id": 4, "label": "Environnement"},
            {"id": 6, "label": "3ème jeunesse"}
        ]
    },
    {   
        "id": 3,
        "label": "Les services",
        "class": "services",
        "dropdown":[
            {"id": 1,"label": "Nos Services", "to": "/services"},
            {"id": 2,"label": "Demande d'adhésion", "to": "/declaration-association"},
            {"id": 3,"label": "Réservation", "to": "/reservation"},
            {"id": 4, "label": "Rendez-vous", "to": "/rendez-vous"},
            {"id": 5,"label": "Ressources", "to":"/ressource"}
        ]
    },
    {   
        "id": 4,
        "label": "Service civique",
        "class": "service-civique",
        "dropdown": [
            {"id": 1,"label": "C'est quoi ?", "to": "/c-est-quoi"},
            {"id": 2,"label": "Nos missions", "to": "/mission"},
            {"id": 3,"label": "Postuler", "to": "/postuler"}
        ]

    },
    {
        "id": 5,
        "class": 'contact',
        "label": "Contact",
        "to": "/contact"
    }
];
export default navData;