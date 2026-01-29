// data.js
import { 
    Users,
    Target,
    MapPin,
    Star,
    Building2,
    Flag,
    Layers,
    Building,
    Users as UsersIcon,
    Bird,
    Trees,
    Database,
    Phone,
    DollarSign,
    Cloud,
    MessageSquare,
    BarChart,
    Shield,
    UserCheck,
    BarChart3,
    Sparkles,
    Smartphone,
    Clock,
    TrendingUp,
    MessageCircle,
    Award,
    Heart,
    GraduationCap,
    Shield as ShieldIcon,
    Users as FamilyIcon,
    Briefcase,
    Zap,
    CreditCard,
    UserCog,
    UserCheck as ParentIcon,
    Crown,
    Trophy
} from "lucide-react";
import { FaWolfPackBattalion, FaBusinessTime } from "react-icons/fa";
import { GiDjembe } from "react-icons/gi";

// -----------------------------Données pour la navbar-----------------------------
export const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'hierarchie', label: 'Hiérarchie' },
    { id: 'unites', label: 'Unités' },
    { id: 'problemes', label: 'Problèmes' },
    { id: 'fonctionnalites', label: 'Fonctionnalités' },
    { id: 'avantages', label: 'Avantages' },
    { id: 'temoignages', label: 'Témoignages' },
    { id: 'faq', label: 'FAQ' }
];

// -----------------------------Données pour la section hero-----------------------------
export const heroStats = [
    { number: '35.000+', label: 'Membres Actifs', icon: Users, color: 'text-purple-600' },
    { number: '15', label: 'Régions', icon: MapPin, color: 'text-purple-600' },
    { number: '500+', label: 'Groupes Scouts', icon: Target, color: 'text-purple-600' },
    { number: '98%', label: 'Satisfaction', icon: Star, color: 'text-purple-600' },
];

// -----------------------------Données pour la section hiérarchie-----------------------------
export const hierarchyLevels = [
    {
        level: 'NATIONAL',
        description: 'Siège : Abidjan, Plateau',
        details: 'Stratégie nationale, formation, relations internationales. Bureau national avec Président, Secrétaire Général, Trésorier',
        icon: Building2,
        color: 'from-purple-900 to-purple-800',
    },
    {
        level: 'RÉGIONS',
        description: '15 régions à travers la Côte d\'Ivoire',
        details: 'Coordination régionale, supervision des districts, déploiement de la stratégie nationale',
        icon: MapPin,
        color: 'from-purple-800 to-purple-700',
    },
    {
        level: 'DISTRICTS',
        description: '50+ districts dans tout le pays',
        details: 'Supervision des groupes, coordination locale, animation territoriale',
        icon: Flag,
        color: 'from-purple-700 to-purple-600',
    },
    {
        level: 'GROUPES',
        description: '500+ groupes scouts',
        details: '4 à 5 unités par groupe, gestion administrative locale, Chef de Groupe responsable',
        icon: Building,
        color: 'from-purple-600 to-purple-500',
    },
    {
        level: 'UNITÉS',
        description: 'Oisillons, Louveteaux, Éclaireurs, Cheminots, Routiers',
        details: 'Animation directe des jeunes, progression pédagogique, activités hebdomadaires',
        icon: Layers,
        color: 'from-purple-500 to-purple-400',
    },
    {
        level: 'JEUNES',
        description: '35.000+ membres de 6 à 21 ans',
        details: 'Bénéficiaires du programme éducatif, progression personnelle, vie de groupe',
        icon: UsersIcon,
        color: 'from-purple-400 to-purple-300',
    },
];

export const regions = [
    'Abengourou',
    'Abidjan',
    'Agboville',
    'Bondoukou',
    'Bouaké',
    'Daloa',
    'Gagnoa',
    'Grand-Bassam',
    'Katiola',
    'Korhogo',
    'Man',
    'Odienné',
    'San Pedro',
    'Yamoussoukro',
    'Yopougon' 
];

// -----------------------------Données pour la section unités-----------------------------
export const youthUnits = [
    {
        name: 'Oisillons',
        creation: '1990',
        arrival: '1990',
        age: '6-8 ans',
        size: '3-5 par nid',
        icon: Bird,
        color: 'from-pink-400 to-pink-600',
        mainColor: 'rose',
        interest: 'jeux et découverte',
        creator: 'Aké Théophile',
        progression: 'Nids (1er, 2e, 3e nid)',
        motto: 'De notre mieux',
        uniform: 'Chemise bleu roi + culotte kaki + foulard rose',
        description: 'Première découverte du scoutisme par le jeu et la nature. Les oisillons apprennent à vivre ensemble dans la joie et la simplicité.',
        groupName: 'La volière',
        keyFeatures: [
            'Jeux coopératifs et éducatifs',
            'Découverte de la nature',
            'Premières responsabilités adaptées',
            'Apprentissage des valeurs scoutes par le jeu'
        ]
    },
    {
        name: 'Louveteaux',
        creation: '1916',
        arrival: '1937',
        age: '8-12 ans',
        size: '6 par sizaine',
        icon: FaWolfPackBattalion,
        color: 'from-yellow-500 to-yellow-700',
        mainColor: 'jaune',
        interest: 'Le Livre de la Jungle',
        creator: 'Robert Baden-Powell',
        progression: 'Patte tendre → Patte dure',
        motto: 'De notre mieux',
        uniform: 'Chemise bleu roi + culotte kaki + foulard jaune',
        description: 'Basé sur "Le Livre de la Jungle" de Rudyard Kipling. Les louveteaux découvrent l\'aventure, l\'amitié et l\'entraide à travers les histoires de la jungle.',
        groupName: 'La meute',
        keyFeatures: [
            'Histoires et jeux de la jungle',
            'Premiers camps en nature',
            'Apprentissage de l\'autonomie',
            'Développement de l\'esprit d\'équipe'
        ]
    },
    {
        name: 'Éclaireurs',
        creation: '1907',
        arrival: '1937',
        age: '12-15 ans',
        size: '4-6 par patrouille',
        icon: Trees,
        color: 'from-green-500 to-green-700',
        mainColor: 'verte',
        interest: 'Nature et aventure',
        creator: 'Robert Baden-Powell',
        progression: 'Djamians → Tcholos → Djémous → Katatchés',
        motto: 'Toujours prêt',
        uniform: 'Chemise bleu roi + culotte kaki + foulard vert',
        description: 'Adaptation des rites traditionnels ivoiriens au scoutisme. Les éclaireurs vivent l\'aventure en pleine nature et développent leurs compétences techniques.',
        groupName: 'La troupe',
        keyFeatures: [
            'Techniques de campisme avancées',
            'Projets d\'équipe et explorations',
            'Premières responsabilités de leadership',
            'Découverte des traditions ivoiriennes'
        ]
    },
    {
        name: 'Cheminots',
        creation: '1997',
        arrival: '1997',
        age: '15-18 ans',
        size: '3-5 par catégorie',
        icon: GiDjembe,
        color: 'from-orange-500 to-orange-700',
        mainColor: 'orange',
        interest: 'Tradition africaine',
        creator: 'Aké Théophile',
        progression: 'Djoni → Agban → Togba → Djéhou',
        motto: 'Bâtir',
        uniform: 'Chemise bleu roi + culotte kaki + foulard orange',
        description: 'Construction de projets communautaires concrets ancrés dans la tradition ivoirienne. Les cheminots apprennent à bâtir leur communauté.',
        groupName: 'La génération',
        keyFeatures: [
            'Projets communautaires concrets',
            'Développement du leadership',
            'Engagement social local',
            'Valorisation des traditions africaines'
        ]
    },
    {
        name: 'Routiers',
        creation: '1918',
        arrival: '1937',
        age: '18-21 ans',
        size: '3-5 par équipe',
        icon: FaBusinessTime,
        color: 'from-red-500 to-red-700',
        mainColor: 'rouge',
        interest: 'L\'entreprise et le développement',
        creator: 'Robert Baden-Powell',
        progression: 'Noviciat → Apprentissage → Compagnongnage → Service',
        motto: 'Le service',
        uniform: 'Chemise bleu roi + Pantalon kaki + foulard rouge',
        description: 'Service communautaire et développement personnel. Les routiers s\'engagent dans des projets d\'envergure et préparent leur avenir professionnel.',
        groupName: 'La communauté',
        keyFeatures: [
            'Service communautaire',
            'Projets entrepreneuriaux',
            'Mentorat des plus jeunes unités',
            'Préparation à la vie adulte professionnelle'
        ]
    }
];

// -----------------------------Données pour la section problèmes-----------------------------
export const problemsData = [
    {
        icon: Database,
        title: 'Données dispersées et non centralisées',
        items: [
            'Carnets papier individuels',
            'Fichiers Excel éparpillés',
            'Risque de perte d\'information',
            'Absence de base de données unique'
        ],
        color: 'from-red-500 to-red-700',
        gradient: 'bg-gradient-to-br from-red-500 to-red-700',
        stat: '60% du temps perdu en recherche d\'info'
    },
    {
        icon: Phone,
        title: 'Communication fragmentée et inefficace',
        items: [
            'Multiples canaux (WhatsApp, SMS, appels)',
            'Pas de traçabilité des échanges',
            'Information qui ne remonte pas',
            'Manque de coordination'
        ],
        color: 'from-orange-500 to-orange-700',
        gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
        stat: '8 canaux différents en moyenne'
    },
    {
        icon: Target,
        title: 'Suivi manuel des progressions',
        items: [
            'Badges physiques perdus',
            'Historique non traçable',
            'Démotivation des jeunes',
            'Évaluation subjective'
        ],
        color: 'from-yellow-500 to-yellow-700',
        gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
        stat: '30% des badges non attribués'
    },
    {
        icon: DollarSign,
        title: 'Gestion financière opaque',
        items: [
            'Cotisations en retard',
            'Suivi manuel fastidieux',
            'Manque de transparence pour parents',
            'Erreurs de comptabilité fréquentes'
        ],
        color: 'from-blue-500 to-blue-700',
        gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
        stat: '45 jours de retard moyen'
    },
    {
        icon: Users,
        title: 'Déconnexion parents-association',
        items: [
            'Parents peu informés',
            'Difficulté paiement cotisations',
            'Manque d\'implication',
            'Communication unidirectionnelle'
        ],
        color: 'from-purple-500 to-purple-700',
        gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
        stat: 'Seulement 15% des parents impliqués'
    }
];

export const solutionsData = [
    {
        icon: Cloud,
        title: 'Centralisation totale des données',
        description: 'Une seule plateforme pour toutes vos informations',
        color: 'bg-red-100 text-red-700'
    },
    {
        icon: MessageSquare,
        title: 'Communication hiérarchique intégrée',
        description: 'Messagerie interne avec traçabilité complète',
        color: 'bg-orange-100 text-orange-700'
    },
    {
        icon: BarChart,
        title: 'Suivi numérique des progressions',
        description: 'Badges numériques et historique permanent',
        color: 'bg-yellow-100 text-yellow-700'
    },
    {
        icon: Shield,
        title: 'Paiement en ligne sécurisé',
        description: 'Transactions sécurisées avec reçus automatiques',
        color: 'bg-blue-100 text-blue-700'
    },
    {
        icon: UserCheck,
        title: 'Interface parents dédiée',
        description: 'Accès direct aux infos et paiements simplifiés',
        color: 'bg-purple-100 text-purple-700'
    }
];

export const problemsStats = {
    study: {
        percentage: '89%',
        text: 'des chefs scouts demandent un outil numérique',
        source: 'Étude ASCCI 2023'
    },
    groups: '500+',
    transition: 'En transition vers ScoutTrack'
};

// -----------------------------Données pour la section fonctionnalités-----------------------------
export const featuresData = [
    {
        icon: Building2,
        title: 'Gestion Hiérarchique',
        items: [
            'Inscriptions contrôlées N→R→D→G→U→J',
            'Droits d\'accès par niveau (7 niveaux)',
            'Organigramme interactif',
        ],
        color: 'from-purple-500 to-purple-700',
        gradient: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
        icon: Target,
        title: 'Suivi des Progressions',
        items: [
            'Badges numériques par unité',
            'Arbres de progression spécifiques',
            'Validation en un clic par Chef d\'Unité',
        ],
        color: 'from-blue-500 to-blue-700',
        gradient: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
        icon: MapPin,
        title: 'Pointage de Présence',
        items: [
            'QR Code pour réunions',
            'Statistiques d\'assiduité',
            'Alertes absences répétées',
        ],
        color: 'from-green-500 to-green-700',
        gradient: 'bg-gradient-to-br from-green-500 to-green-700'
    },
    {
        icon: MessageSquare,
        title: 'Communication Intégrée',
        items: [
            'Messagerie hiérarchique',
            'Forums par niveau',
            'Annonces ciblées',
            'Notifications multi-canaux',
        ],
        color: 'from-pink-500 to-pink-700',
        gradient: 'bg-gradient-to-br from-pink-500 to-pink-700'
    },
    {
        icon: DollarSign,
        title: 'Gestion des Cotisations',
        items: [
            'Paiement en ligne (Orange Money, MTN)',
            'Suivi automatique',
            'Génération de reçus',
            'Rapports financiers',
        ],
        color: 'from-yellow-500 to-yellow-700',
        gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-700'
    },
    {
        icon: BarChart3,
        title: 'Reporting et Statistiques',
        items: [
            'Tableaux de bord par rôle',
            'Indicateurs de performance',
            'Export PDF/Excel',
            'Analyses comparatives',
        ],
        color: 'from-indigo-500 to-indigo-700',
        gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700'
    },
    {
        icon: UsersIcon,
        title: 'Interface Parents',
        items: [
            'Consultation progression enfants',
            'Paiement cotisations',
            'Communication avec responsables',
            'Accès sécurisé',
        ],
        color: 'from-red-500 to-red-700',
        gradient: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
        icon: Sparkles,
        title: 'Recommandations IA',
        items: [
            'Suggestions d\'activités',
            'Détection talents',
            'Analyse progression',
            'Personnalisation parcours',
        ],
        color: 'from-teal-500 to-teal-700',
        gradient: 'bg-gradient-to-br from-teal-500 to-teal-700'
    },
    {
        icon: Smartphone,
        title: 'Application Mobile',
        items: [
            'Android et iOS',
            'Notifications push',
            'Fonctions hors-ligne',
            'Synchronisation cloud',
        ],
        color: 'from-orange-500 to-orange-700',
        gradient: 'bg-gradient-to-br from-orange-500 to-orange-700'
    }
];

// -----------------------------Données pour la section avantages-----------------------------
export const benefitsData = [
    {
        title: 'Pour les Responsables',
        icon: Briefcase,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        items: [
            { 
                icon: Clock, 
                text: 'Gain de temps', 
                detail: '-70% de tâches administratives'
            },
            { 
                icon: TrendingUp, 
                text: 'Meilleure décision', 
                detail: 'Données en temps réel'
            },
            { 
                icon: MessageSquare, 
                text: 'Communication', 
                detail: 'Centralisée et tracée'
            },
            { 
                icon: GraduationCap, 
                text: 'Formation', 
                detail: 'Automatisée et standardisée'
            },
            { 
                icon: ShieldIcon, 
                text: 'Transparence', 
                detail: 'Gestion financière claire'
            },
        ]
    },
    {
        title: 'Pour les Jeunes',
        icon: Users,
        color: 'green',
        gradient: 'from-green-500 to-green-700',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        items: [
            { 
                icon: Award, 
                text: 'Motivation', 
                detail: 'Badges numériques visibles'
            },
            { 
                icon: TrendingUp, 
                text: 'Progression', 
                detail: 'Claire et suivie'
            },
            { 
                icon: MessageCircle, 
                text: 'Communication', 
                detail: 'Avec chefs et pairs'
            },
            { 
                icon: Heart, 
                text: 'Appartenance', 
                detail: 'Historique complet'
            },
            { 
                icon: Zap, 
                text: 'Modernité', 
                detail: 'Outil adapté à leur génération'
            },
        ]
    },
    {
        title: 'Pour les Parents',
        icon: FamilyIcon,
        color: 'blue',
        gradient: 'from-blue-500 to-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        items: [
            { 
                icon: Shield, 
                text: 'Transparence', 
                detail: 'Suivi progression enfants'
            },
            { 
                icon: CreditCard, 
                text: 'Paiement', 
                detail: 'Facile et sécurisé'
            },
            { 
                icon: MessageCircle, 
                text: 'Communication', 
                detail: 'Directe avec responsables'
            },
            { 
                icon: Heart, 
                text: 'Confiance', 
                detail: 'Association modernisée'
            },
            { 
                icon: UsersIcon, 
                text: 'Implication', 
                detail: 'Dans parcours éducatif'
            },
        ]
    }
];

export const globalImpactStats = [
    { number: '500+', text: 'heures administratives économisées/mois', icon: Clock },
    { number: '+30%', text: 'd\'augmentation du paiement des cotisations', icon: TrendingUp },
    { number: '+40%', text: 'd\'engagement accru des jeunes', icon: Users },
    { number: '98%', text: 'de satisfaction utilisateurs', icon: Star },
];

// -----------------------------Données pour la section témoignages-----------------------------
export const testimonialsData = [
    {
        name: 'Jean Koffi',
        role: 'Chef National ASCCI',
        position: 'Responsable Formation Nationale',
        quote: 'ScoutTrack a transformé notre manière de gérer le mouvement. La digitalisation était nécessaire et cette plateforme répond parfaitement à nos besoins hiérarchiques complexes.',
        rating: 5,
        icon: Crown,
        color: 'from-purple-500 to-purple-700',
        bgColor: 'bg-purple-100'
    },
    {
        name: 'Marie Akissi',
        role: 'Chef de Groupe',
        position: 'Groupe Saint Michel de Yopougon',
        quote: 'Je gagne au moins 10 heures par semaine en gestion administrative. La communication avec mes chefs d\'unité est désormais fluide et le suivi des jeunes est un vrai plaisir.',
        rating: 5,
        icon: UserCog,
        color: 'from-blue-500 to-blue-700',
        bgColor: 'bg-blue-100'
    },
    {
        name: 'Kouamé Yéo',
        role: 'Chef d\'Unité Éclaireurs',
        position: 'Éclaireurs Djembè',
        quote: 'Mes jeunes adorent le système de badges numériques. Ils sont plus motivés que jamais et les parents peuvent suivre leur progression en temps réel. Une révolution !',
        rating: 5,
        icon: Trophy,
        color: 'from-green-500 to-green-700',
        bgColor: 'bg-green-100'
    },
    {
        name: 'Aminata Diarra',
        role: 'Parent',
        position: 'Mère de 2 scouts',
        quote: 'Enfin je peux suivre le parcours de mes enfants et payer les cotisations en ligne sans me déplacer. L\'interface est simple et sécurisée.',
        rating: 5,
        icon: ParentIcon,
        color: 'from-orange-500 to-orange-700',
        bgColor: 'bg-orange-100'
    },
];

export const testimonialsStats = {
    averageRating: '4.9/5',
    totalReviews: '250+',
    activeUsers: '500+',
    satisfaction: '98%'
};

// -----------------------------Données pour la section faq-----------------------------
export const faqs = [
    {
        question: 'Comment fonctionne ScoutTrack ?',
        answer: 'ScoutTrack est une plateforme de digitalisation complète qui permet de gérer les membres, les groupes, les activités et la communication au sein de l\'ASCCI via une interface web et mobile.',
    },
    {
        question: 'Qui peut utiliser ScoutTrack ?',
        answer: 'Tous les membres de l\'ASCCI : jeunes scouts, chefs de groupe, responsables régionaux, et l\'administration nationale peuvent utiliser ScoutTrack selon leurs permissions spécifiques.',
    },
    {
        question: 'Comment les données sont-elles sécurisées ?',
        answer: 'Nous utilisons un chiffrement de bout en bout, des sauvegardes régulières et respectons strictement les lois sur la protection des données personnelles.',
    },
    {
        question: 'Y a-t-il une formation pour utiliser la plateforme ?',
        answer: 'Oui, nous proposons des formations en ligne, des tutoriels vidéo et un support technique dédié pour tous les utilisateurs.',
    },
    {
        question: 'ScoutTrack remplace-t-il notre structure actuelle ?',
        answer: 'Non, il la digitalise et l’optimise. La hiérarchie et les processus restent identiques, mais deviennent plus efficaces grâce au numérique.',
    },
];

export default {
    navItems,
    heroStats,
    hierarchyLevels,
    regions,
    youthUnits,
    problemsData,
    solutionsData,
    problemsStats,
    featuresData,
    benefitsData,
    globalImpactStats,
    testimonialsData,
    testimonialsStats,
    faqs
};