import { 
    Calendar, 
    Target, 
    Users, 
    Trophy,
    Church,
    History,
    Sparkles,
    Globe,
    UsersIcon,
    ArrowRight,
    MapPin,
    Flag,
    Network,
    Building,
    Earth,
    Link,
    Book,
    GraduationCap,
    Star,
    Shield,
    Zap,
    Cloud,
    Smartphone,
    CheckCircle
} from 'lucide-react';

const About = () => {
    return(
        <section
            id="apropos"
            className="py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                        À Propos de <span className="text-purple-800">ScoutTrack</span> et l'<span className="text-purple-800">ASCCI</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez la plateforme numérique qui modernise le scoutisme catholique ivoirien
                        et l'association qui porte ces valeurs depuis plus de 85 ans
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Carte ScoutTrack */}
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-2 mb-6">
                            <img 
                                src="/LogoScoutTrack1.png" 
                                alt="Logo ScoutTrack"
                                className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-white"
                            />
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-black text-purple-900">
                                    ScoutTrack
                                </h3>
                                <p className="text-lg font-medium text-purple-700">
                                    La Plateforme Numérique
                                </p>
                            </div>
                        </div>

                        {/* Badge Création */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full mb-6">
                            <Calendar size={18} />
                            <span className="font-medium">Créé en 2026</span>
                        </div>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Développé en collaboration avec l'ASCCI pour répondre aux besoins
                            spécifiques du mouvement scout catholique ivoirien, ScoutTrack représente
                            l'innovation au service de la tradition.
                        </p>

                        {/* Objectif */}
                        <div className="flex items-start space-x-4 mb-4 p-4 bg-white rounded-lg border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">
                                    Objectif Principal
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Digitaliser complètement la gestion du mouvement scout catholique ivoirien
                                    pour améliorer l'efficacité opérationnelle, la transparence et
                                    l'expérience éducative des jeunes.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="flex items-start space-x-4 mb-4 p-4 bg-white rounded-lg border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">
                                    Mission
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Fournir un outil moderne qui respecte la riche tradition scoute
                                    tout en embrassant les technologies du 21ème siècle pour
                                    faciliter la gestion et la communication à tous les niveaux.
                                </p>
                            </div>
                        </div>

                        {/* Nouvelles Informations Pertinentes */}
                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-black mb-2">
                                    Innovation Clé
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    Première plateforme intégrée de gestion scoute en Côte d'Ivoire,
                                    combinant gestion hiérarchique, suivi des activités, communication
                                    unifiée et analytics en temps réel spécifiquement conçue pour les
                                    réalités du scoutisme africain.
                                </p>
                            </div>
                        </div>

                        {/* Points Forts - Grille */}
                        <div className="mt-6">
                            <h4 className="font-bold text-lg text-black mb-4 pl-2">Points Forts</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-start space-x-2 p-3 bg-purple-50 rounded-lg">
                                    <Shield className="w-4 h-4 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs font-medium text-gray-800">Sécurité des données</span>
                                </div>
                                <div className="flex items-start space-x-2 p-3 bg-purple-50 rounded-lg">
                                    <Cloud className="w-4 h-4 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs font-medium text-gray-800">Cloud synchronisé</span>
                                </div>
                                <div className="flex items-start space-x-2 p-3 bg-purple-50 rounded-lg">
                                    <Smartphone className="w-4 h-4 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs font-medium text-gray-800">Multi-plateforme</span>
                                </div>
                                <div className="flex items-start space-x-2 p-3 bg-purple-50 rounded-lg">
                                    <CheckCircle className="w-4 h-4 text-purple-700 mt-0.5 flex-shrink-0" />
                                    <span className="text-xs font-medium text-gray-800">Validation ASCCI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carte ASCCI */}
                    <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {/* Logo ASCCI */}
                        <div className="flex flex-col items-center mb-6">
                            <img 
                                src="/logo_ascci.png" 
                                alt="Logo ScoutTrack"
                                className="relative w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-white"
                            />
                            <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-black text-purple-900">
                                    ASCCI
                                </h3>
                                <p className="text-lg font-medium text-purple-700">
                                    Association des Scouts Catholiques de Côte d'Ivoire
                                </p>
                            </div>
                        </div>

                        {/* Badge Fondation */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full mb-4 mx-auto">
                            <History size={18} />
                            <span className="font-medium">Fondée en 1937 à Treichville</span>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed text-center">
                            L'Association des Scouts Catholiques de Côte d'Ivoire est née en 1937 et 
                            porte les valeurs du scoutisme depuis plus de 85 ans, formant des générations 
                            de jeunes citoyens responsables.
                        </p>

                        {/* Affiliation Mondiale */}
                        <div className="bg-white p-4 rounded-lg border border-purple-50 mb-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Earth className="w-4 h-4 text-purple-700" />
                                </div>
                                <h4 className="font-bold text-lg text-black">
                                    Affiliation Mondiale
                                </h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-11">
                                Membre de la <span className="font-semibold">Fédération Ivoirienne du Scoutisme (FIS)</span>, 
                                affiliée à l'<span className="font-semibold">Organisation Mondiale du Mouvement Scout (OMMS)</span> {' '}
                                basée à Genève, regroupant 216 pays et 28 millions de scouts dans le monde.
                            </p>
                        </div>

                        {/* Structure Régionale */}
                        <div className="bg-white p-4 rounded-lg border border-purple-50 mb-4">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-purple-700" />
                                </div>
                                <h4 className="font-bold text-lg text-black">
                                    Structure Régionale
                                </h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-11">
                                L'ASCCI appartient à la <span className="font-semibold">région africaine du scoutisme</span> 
                                et travaille en étroite collaboration avec le <span className="font-semibold">Centre Opérationnel de Dakar (COD)</span> 
                                au Sénégal, qui coordonne les activités de l'Afrique de l'Ouest.
                            </p>
                        </div>

                        {/* Effectif ASCCI */}
                        <div className="bg-white p-4 rounded-lg border border-purple-50">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <UsersIcon className="w-4 h-4 text-purple-700" />
                                </div>
                                <h4 className="font-bold text-lg text-black">
                                    Effectif & Répartition
                                </h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed pl-11">
                                Plus de <span className="font-semibold">35.000 membres actifs</span> à travers le pays, 
                                répartis dans <span className="font-semibold">15 régions</span> et plus de 
                                <span className="font-semibold"> 500 groupes scouts</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Nouvelle Section : Structure Internationale */}
                <div className="mt-16 bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-lg">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full mb-4">
                            <Network size={18} />
                            <span className="font-medium">Réseau International</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-purple-900 mb-4">
                            Structure Organisationnelle
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            L'ASCCI s'inscrit dans un réseau scout mondial structuré et reconnu
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Niveau Mondial */}
                        <div className="bg-white p-6 rounded-xl border border-purple-100 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-lg text-black mb-2">Niveau Mondial</h4>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold">OMMS - Genève</span>
                            </p>
                            <div className="text-xs text-gray-500">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <Flag className="w-3 h-3" />
                                    <span>216 pays et territoires</span>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <Users className="w-3 h-3" />
                                    <span>28 millions de scouts</span>
                                </div>
                            </div>
                        </div>

                        {/* Niveau Régional */}
                        <div className="bg-white p-6 rounded-xl border border-purple-100 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-lg text-black mb-2">Niveau Régional</h4>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold">COD - Dakar</span>
                            </p>
                            <div className="text-xs text-gray-500">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <Building className="w-3 h-3" />
                                    <span>Centre Opérationnel Afrique de l'Ouest</span>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <Link className="w-3 h-3" />
                                    <span>Coordination des activités</span>
                                </div>
                            </div>
                        </div>

                        {/* Niveau National */}
                        <div className="bg-white p-6 rounded-xl border border-purple-100 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Flag className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-bold text-lg text-black mb-2">Niveau National</h4>
                            <p className="text-sm text-gray-600 mb-3">
                                <span className="font-semibold">FIS - Côte d'Ivoire</span>
                            </p>
                            <div className="text-xs text-gray-500">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <Book className="w-3 h-3" />
                                    <span>Fédération Ivoirienne du Scoutisme</span>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <GraduationCap className="w-3 h-3" />
                                    <span>Éducation et formation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline / Bannière */}
                <div className="mt-16 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 sm:p-8 rounded-2xl text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Année 1937 */}
                        <div className="text-center mb-6 md:mb-0 md:text-left">
                            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <History className="w-6 h-6" />
                                </div>
                                <div className="text-3xl sm:text-4xl font-black">1937</div>
                            </div>
                            <p className="text-sm sm:text-base opacity-90">Fondation de l'ASCCI</p>
                        </div>

                        {/* Flèches et texte central */}
                        <div className="flex items-center space-x-4 mb-6 md:mb-0">
                            <div className="hidden md:block">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <Trophy className="w-6 h-6 mr-2" />
                                    <span className="text-lg sm:text-xl font-bold">Plus de 85 ans d'éducation scoute</span>
                                </div>
                                <p className="text-sm opacity-90">Tradition • Innovation • Excellence</p>
                            </div>
                            <div className="hidden md:block">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                        </div>

                        {/* Année 2026 */}
                        <div className="text-center md:text-right">
                            <div className="flex items-center justify-center md:justify-end space-x-3 mb-3">
                                <div className="text-3xl sm:text-4xl font-black">2026</div>
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                            </div>
                            <p className="text-sm sm:text-base opacity-90">Lancement de ScoutTrack</p>
                        </div>
                    </div>

                    {/* Statistiques mondiales */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                                <Earth className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold mb-1">216</span>
                            <span className="text-xs opacity-90">Pays membres OMMS</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                                <Users className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold mb-1">28M</span>
                            <span className="text-xs opacity-90">Scouts mondiaux</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold mb-1">35K</span>
                            <span className="text-xs opacity-90">Membres ASCCI</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                                <Star className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold mb-1">85+</span>
                            <span className="text-xs opacity-90">Ans d'existence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;