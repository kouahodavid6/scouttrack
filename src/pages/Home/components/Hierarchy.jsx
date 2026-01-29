import { ChevronDown, MapPin, Network } from 'lucide-react';
import { hierarchyLevels, regions } from '../../../data/data';

const Hierarchy = () => {
    return (
        <section id="hierarchie" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Network className="w-4 h-4" />
                        Hiérarchie
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                        L'Organisation <span className="text-purple-800">Hiérarchique</span> de l'ASCCI
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Une structure nationale complète qui assure la cohérence et l'efficacité
                        du mouvement scout à tous les niveaux
                    </p>
                </div>

                {/* Structure Hiérarchique - Design Élégant */}
                <div className="mb-16">
                    {/* Version Desktop */}
                    <div className="hidden lg:block">
                        <div className="space-y-8">
                            {/* Rangée 1 */}
                            <div className="grid grid-cols-3 gap-6">
                                {hierarchyLevels.slice(0, 3).map((level, index) => {
                                    const IconComponent = level.icon;
                                    const isPurpleCard = index % 2 === 0;
                                    
                                    return (
                                        <div key={index} className="relative">
                                            {/* Carte de niveau */}
                                            <div className={`h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${
                                                isPurpleCard 
                                                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-700' 
                                                    : 'bg-white text-black border-purple-200'
                                            }`}>
                                                <div className="flex flex-col h-full">
                                                    {/* En-tête avec icône et titre */}
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            isPurpleCard 
                                                                ? 'bg-white/20' 
                                                                : 'bg-purple-100'
                                                        }`}>
                                                            <IconComponent className={`w-6 h-6 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-700'
                                                            }`} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className={`font-bold text-lg mb-1 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-900'
                                                            }`}>
                                                                {level.level}
                                                            </h3>
                                                            <p className={`text-sm ${
                                                                isPurpleCard ? 'opacity-90' : 'text-gray-600'
                                                            }`}>
                                                                {level.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Description */}
                                                    <div className="flex-1">
                                                        <p className={`text-sm leading-relaxed ${
                                                            isPurpleCard ? 'opacity-90' : 'text-gray-700'
                                                        }`}>
                                                            {level.details}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Numéro de niveau */}
                                                    <div className={`mt-4 pt-4 ${
                                                        isPurpleCard ? 'border-t border-white/20' : 'border-t border-purple-100'
                                                    }`}>
                                                        <span className={`text-sm font-medium ${
                                                            isPurpleCard ? 'opacity-90' : 'text-purple-700'
                                                        }`}>
                                                            Niveau {index + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Flèche vers la droite */}
                                            {index < 2 && (
                                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                                    <ChevronDown className="text-purple-400 rotate-90" size={20} />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            
                            {/* Flèche descendante entre les rangées */}
                            <div className="flex justify-center">
                                <ChevronDown className="text-purple-400" size={24} />
                            </div>
                            
                            {/* Rangée 2 */}
                            <div className="grid grid-cols-3 gap-6">
                                {hierarchyLevels.slice(3, 6).map((level, index) => {
                                    const IconComponent = level.icon;
                                    const isPurpleCard = (index + 3) % 2 === 0;
                                    
                                    return (
                                        <div key={index + 3} className="relative">
                                            {/* Carte de niveau */}
                                            <div className={`h-full p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${
                                                isPurpleCard 
                                                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-700' 
                                                    : 'bg-white text-black border-purple-200'
                                            }`}>
                                                <div className="flex flex-col h-full">
                                                    {/* En-tête avec icône et titre */}
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            isPurpleCard 
                                                                ? 'bg-white/20' 
                                                                : 'bg-purple-100'
                                                        }`}>
                                                            <IconComponent className={`w-6 h-6 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-700'
                                                            }`} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className={`font-bold text-lg mb-1 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-900'
                                                            }`}>
                                                                {level.level}
                                                            </h3>
                                                            <p className={`text-sm ${
                                                                isPurpleCard ? 'opacity-90' : 'text-gray-600'
                                                            }`}>
                                                                {level.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Description */}
                                                    <div className="flex-1">
                                                        <p className={`text-sm leading-relaxed ${
                                                            isPurpleCard ? 'opacity-90' : 'text-gray-700'
                                                        }`}>
                                                            {level.details}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Numéro de niveau */}
                                                    <div className={`mt-4 pt-4 ${
                                                        isPurpleCard ? 'border-t border-white/20' : 'border-t border-purple-100'
                                                    }`}>
                                                        <span className={`text-sm font-medium ${
                                                            isPurpleCard ? 'opacity-90' : 'text-purple-700'
                                                        }`}>
                                                            Niveau {index + 4}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Flèche vers la droite */}
                                            {index < 2 && (
                                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                                    <ChevronDown className="text-purple-400 rotate-90" size={20} />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    
                    {/* Version Tablet */}
                    <div className="hidden md:block lg:hidden">
                        <div className="space-y-8">
                            {hierarchyLevels.slice(0, 2).map((level, index) => {
                                const IconComponent = level.icon;
                                const isPurpleCard = index % 2 === 0;
                                
                                return (
                                    <div key={index} className="grid grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className={`h-full p-6 rounded-2xl shadow-lg border ${
                                                isPurpleCard 
                                                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-700' 
                                                    : 'bg-white text-black border-purple-200'
                                            }`}>
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            isPurpleCard 
                                                                ? 'bg-white/20' 
                                                                : 'bg-purple-100'
                                                        }`}>
                                                            <IconComponent className={`w-6 h-6 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-700'
                                                            }`} />
                                                        </div>
                                                        <div>
                                                            <h3 className={`font-bold text-lg mb-1 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-900'
                                                            }`}>
                                                                {level.level}
                                                            </h3>
                                                            <p className={`text-sm ${
                                                                isPurpleCard ? 'opacity-90' : 'text-gray-600'
                                                            }`}>
                                                                {level.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className={`text-sm leading-relaxed flex-1 ${
                                                        isPurpleCard ? 'opacity-90' : 'text-gray-700'
                                                    }`}>
                                                        {level.details}
                                                    </p>
                                                    <div className={`mt-4 pt-4 ${
                                                        isPurpleCard ? 'border-t border-white/20' : 'border-t border-purple-100'
                                                    }`}>
                                                        <span className={`text-sm font-medium ${
                                                            isPurpleCard ? 'opacity-90' : 'text-purple-700'
                                                        }`}>
                                                            Niveau {index + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {index < 1 && (
                                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                                    <ChevronDown className="text-purple-400 rotate-90" size={20} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            
                            <div className="flex justify-center">
                                <ChevronDown className="text-purple-400" size={24} />
                            </div>
                            
                            {hierarchyLevels.slice(2, 4).map((level, index) => {
                                const IconComponent = level.icon;
                                const isPurpleCard = (index + 2) % 2 === 0;
                                
                                return (
                                    <div key={index + 2} className="grid grid-cols-2 gap-6">
                                        <div className="relative">
                                            <div className={`h-full p-6 rounded-2xl shadow-lg border ${
                                                isPurpleCard 
                                                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-700' 
                                                    : 'bg-white text-black border-purple-200'
                                            }`}>
                                                <div className="flex flex-col h-full">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                                            isPurpleCard 
                                                                ? 'bg-white/20' 
                                                                : 'bg-purple-100'
                                                        }`}>
                                                            <IconComponent className={`w-6 h-6 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-700'
                                                            }`} />
                                                        </div>
                                                        <div>
                                                            <h3 className={`font-bold text-lg mb-1 ${
                                                                isPurpleCard ? 'text-white' : 'text-purple-900'
                                                            }`}>
                                                                {level.level}
                                                            </h3>
                                                            <p className={`text-sm ${
                                                                isPurpleCard ? 'opacity-90' : 'text-gray-600'
                                                            }`}>
                                                                {level.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className={`text-sm leading-relaxed flex-1 ${
                                                        isPurpleCard ? 'opacity-90' : 'text-gray-700'
                                                    }`}>
                                                        {level.details}
                                                    </p>
                                                    <div className={`mt-4 pt-4 ${
                                                        isPurpleCard ? 'border-t border-white/20' : 'border-t border-purple-100'
                                                    }`}>
                                                        <span className={`text-sm font-medium ${
                                                            isPurpleCard ? 'opacity-90' : 'text-purple-700'
                                                        }`}>
                                                            Niveau {index + 3}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {index < 1 && (
                                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                                    <ChevronDown className="text-purple-400 rotate-90" size={20} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Version Mobile */}
                    <div className="md:hidden">
                        <div className="space-y-6">
                            {hierarchyLevels.map((level, index) => {
                                const IconComponent = level.icon;
                                const isPurpleCard = index % 2 === 0;
                                
                                return (
                                    <div key={index} className="relative">
                                        <div className={`p-6 rounded-2xl shadow-lg border ${
                                            isPurpleCard 
                                                ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-700' 
                                                : 'bg-white text-black border-purple-200'
                                        }`}>
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                                                    isPurpleCard 
                                                        ? 'bg-white/20' 
                                                        : 'bg-purple-100'
                                                }`}>
                                                    <IconComponent className={`w-5 h-5 ${
                                                        isPurpleCard ? 'text-white' : 'text-purple-700'
                                                    }`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className={`font-bold text-lg mb-1 ${
                                                        isPurpleCard ? 'text-white' : 'text-purple-900'
                                                    }`}>
                                                        {level.level}
                                                    </h3>
                                                    <p className={`text-sm mb-3 ${
                                                        isPurpleCard ? 'opacity-90' : 'text-gray-600'
                                                    }`}>
                                                        {level.description}
                                                    </p>
                                                    <p className={`text-sm leading-relaxed ${
                                                        isPurpleCard ? 'opacity-90' : 'text-gray-700'
                                                    }`}>
                                                        {level.details}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`mt-4 pt-4 ${
                                                isPurpleCard ? 'border-t border-white/20' : 'border-t border-purple-100'
                                            }`}>
                                                <span className={`text-sm font-medium ${
                                                    isPurpleCard ? 'opacity-90' : 'text-purple-700'
                                                }`}>
                                                    Niveau {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Flèche descendante */}
                                        {index < hierarchyLevels.length - 1 && (
                                            <div className="flex justify-center mt-3">
                                                <ChevronDown className="text-purple-400" size={20} />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Section des Régions */}
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-lg mb-12">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full mb-4">
                            <MapPin size={18} />
                            <span className="font-medium">15 Régions de l'ASCCI</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-purple-900 mb-4">
                            Répartition Territoriale
                        </h3>
                    </div>

                    {/* Grille des régions */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                        {regions.map((region, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs font-bold text-purple-700">{index + 1}</span>
                                </div>
                                <span className="font-medium text-gray-800 text-sm">{region}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistiques résumées */}
                <div className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                    <div className="text-center">
                        <h4 className="text-lg font-bold text-purple-900 mb-4">En Résumé</h4>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-800 mb-1">15</div>
                                <div className="text-sm text-gray-600">Régions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-800 mb-1">50+</div>
                                <div className="text-sm text-gray-600">Districts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-800 mb-1">500+</div>
                                <div className="text-sm text-gray-600">Groupes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-800 mb-1">35.000+</div>
                                <div className="text-sm text-gray-600">Jeunes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hierarchy;