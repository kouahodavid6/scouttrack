import { ArrowDown, Shield } from 'lucide-react';
import { heroStats } from '../../../data/data';

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return(
        <header 
            id="accueil"
            className="relative bg-white text-black min-h-screen flex items-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-purple-50"></div>

            <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Partie texte - centrée sur mobile */}
                    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                        {/* Badge ASCCI */}
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white px-4 py-2 rounded-full mb-6 mx-auto lg:mx-0">
                            <Shield size={18} />
                            <span className="text-sm font-medium">Plateforme Officielle ASCCI</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            <span className="text-purple-800">ScoutTrack</span> :{' '}
                            <span className="text-black">La Révolution Numérique</span>{' '}
                            <span className="text-purple-800">du Scoutisme Ivoirien</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            Gérez, Suivez, Communiquez • Toute votre organisation dans une seule plateforme
                        </p>

                        {/* <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            ScoutTrack est la solution complète de digitalisation de l'Association
                            des Scouts Catholiques de Côte d'Ivoire, conçue pour moderniser la
                            gestion, le suivi et la communication à tous les niveaux hiérarchiques.
                        </p> */}

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                            <button
                                onClick={() => scrollToSection('#apropos')}
                                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white px-8 py-3 sm:py-4 rounded-lg hover:from-purple-800 hover:to-purple-950 transition-all font-medium text-base sm:text-lg shadow-lg hover:shadow-xl"
                            >
                                <span>Découvrir ScoutTrack</span>
                                <ArrowDown size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Partie téléphone - centrée sur mobile */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-[3rem] p-4 shadow-2xl shadow-purple-600/30 transform hover:scale-105 transition-transform duration-500 mx-auto">
                            <div className="bg-white h-full rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden border-4 border-white">
                                {/* Encoche du téléphone - style moderne */}
                                <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-white flex items-center justify-center">
                                    <div className="w-24 sm:w-28 h-5 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                        <div className="w-6 h-1.5 bg-purple-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Contenu du téléphone */}
                                <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                                    {/* Badge supérieur */}
                                    <div className="absolute top-12 left-4 right-4 flex justify-center">
                                        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                                            Connecté • ASCCI
                                        </div>
                                    </div>

                                    {/* Logo principal */}
                                    <div className="relative group mt-8">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40"></div>
                                        <img 
                                            src="/LogoScoutTrack1.png" 
                                            alt="Logo ScoutTrack"
                                            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl object-cover transform group-hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-white"
                                        />
                                    </div>

                                    {/* Texte sous le logo */}
                                    <div className="text-center space-y-3 sm:space-y-4 mt-6">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-purple-900">
                                            Scout<span className="text-purple-700">Track</span>
                                        </h3>
                                        <div className="space-y-2">
                                            <p className="text-gray-800 text-sm sm:text-base font-medium">
                                                Digitalisation du Scoutisme
                                            </p>
                                            <p className="text-gray-600 text-xs sm:text-sm max-w-xs">
                                                <span className="block text-purple-700 font-semibold">
                                                    Gestion • Suivi • Communication
                                                </span>
                                                Une plateforme unifiée pour toute l'ASCCI
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Barre de navigation basse - style moderne */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-purple-100">
                                    <div className="flex justify-between items-center px-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-6 h-1 bg-purple-700 rounded-full mb-1"></div>
                                            <span className="text-xs text-purple-800 font-medium">Accueil</span>
                                        </div>
                                        <div className="relative">
                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-lg -mt-4">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-6 h-1 bg-purple-300 rounded-full mb-1"></div>
                                            <span className="text-xs text-gray-500">Profil</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Effet de lumière d'arrière-plan */}
                        <div className="absolute -z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Stats en bas */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {heroStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-purple-50 hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-2">
                                    <IconComponent className={`${stat.color} w-8 h-8`} />
                                </div>
                                <p className="font-bold text-2xl sm:text-3xl text-purple-900 mb-1">
                                    {stat.number}
                                </p>
                                <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Hero;