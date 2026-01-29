import { useState } from 'react';
import { 
    Calendar,
    Shirt,
    ChevronRight,
    Users,
    Target,
    Award,
    Sparkles,
    Users as UsersIcon,
    Book,
    MapPin,
    Heart
} from 'lucide-react';
import { youthUnits } from '../../../data/data';

const Units = () => {
    const [selectedAge, setSelectedAge] = useState('6-8 ans');
    const selectedUnit = youthUnits.find(unit => unit.age === selectedAge) || youthUnits[0];

    return (
        <section id="unites" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                        Les <span className="text-purple-800">Unités</span> de l'ASCCI
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Un parcours éducatif progressif de 6 à 21 ans, adapté à chaque étape de développement
                    </p>
                </div>

                {/* Sélecteur d'âge amélioré - Cards Centrées */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Parcours par tranche d'âge
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                            Sélectionnez une unité pour en savoir plus sur elle
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {youthUnits.map((unit) => {
                            const IconComponent = unit.icon;
                            const isSelected = selectedAge === unit.age;
                            
                            return (
                                <button
                                    key={unit.age}
                                    onClick={() => {
                                        setSelectedAge(unit.age);
                                    }}
                                    className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 h-full ${
                                        isSelected
                                            ? `bg-gradient-to-br ${unit.color} text-white border-transparent shadow-xl transform -translate-y-2`
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:shadow-lg'
                                    }`}
                                >
                                    {/* Logo Centré en Haut */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                                        isSelected ? 'bg-white/20' : 'bg-gray-100'
                                    }`}>
                                        {typeof IconComponent === 'function' ? (
                                            <IconComponent className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                        ) : (
                                            <IconComponent className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                        )}
                                    </div>
                                    
                                    {/* Nom de l'unité centré */}
                                    <h4 className={`font-bold text-lg text-center mb-2 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                                        {unit.name}
                                    </h4>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Vue détaillée de l'unité sélectionnée */}
                <div className="bg-gradient-to-br from-white to-purple-50 p-6 sm:p-8 rounded-2xl border border-purple-100 shadow-lg">
                    {/* En-tête centré pour mobile, aligné à gauche pour desktop */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                        {/* Logo et nom centrés sur mobile */}
                        <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                            <div className={`w-20 h-20 bg-gradient-to-r ${selectedUnit.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                                {typeof selectedUnit.icon === 'function' ? (
                                    <selectedUnit.icon className="w-10 h-10 text-white" />
                                ) : (
                                    <selectedUnit.icon className="w-10 h-10 text-white" />
                                )}
                            </div>
                            
                            <div className="text-center md:text-left">
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                                        {selectedUnit.name}
                                    </h3>
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                        <Users className="w-4 h-4" />
                                        {selectedUnit.groupName}
                                    </span>
                                </div>
                                
                                {/* Informations clés en grille responsive */}
                                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4 mb-6">
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                                                <UsersIcon className="w-3 h-3 text-purple-700" />
                                            </div>
                                            <span className="text-xs text-gray-500">Effectif</span>
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{selectedUnit.size}</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                                                <Calendar className="w-3 h-3 text-orange-700" />
                                            </div>
                                            <span className="text-xs text-gray-500">Création</span>
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{selectedUnit.creation}</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                                                <Target className="w-3 h-3 text-green-700" />
                                            </div>
                                            <span className="text-xs text-gray-500">Devise</span>
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{selectedUnit.motto}</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                                                <Book className="w-3 h-3 text-blue-700" />
                                            </div>
                                            <span className="text-xs text-gray-500">Centre d'intérêt</span>
                                        </div>
                                        <span className="font-medium text-sm md:text-base">{selectedUnit.interest}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {selectedUnit.description}
                        </p>
                    </div>
                    
                    {/* Contenu en colonnes pour desktop */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Section principale - Colonne gauche */}
                        <div className="flex-1">
                            {/* Caractéristiques principales */}
                            <div className="mb-8">
                                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-purple-600" />
                                    Caractéristiques principales
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedUnit.keyFeatures.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start gap-2 p-3 bg-white rounded-lg border border-purple-50"
                                        >
                                            <ChevronRight className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Progression */}
                            <div className="bg-white p-4 rounded-xl border border-purple-100 mb-4">
                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <Award className="w-4 h-4 text-purple-600" />
                                    Système de progression
                                </h4>
                                <p className="text-gray-600">{selectedUnit.progression}</p>
                            </div>

                            {/* Uniforme */}
                            <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                    <Shirt className="w-5 h-5 text-purple-600" />
                                    Uniforme
                                </h4>
                                <p className="text-gray-600">{selectedUnit.uniform}</p>
                            </div>
                        </div>
                        
                        {/* Sidebar - Colonne droite */}
                        <div className="lg:w-96 space-y-6">
                            <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                                <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-purple-600" />
                                    Informations pratiques
                                </h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Créateur</p>
                                        <p className="font-medium text-gray-800">{selectedUnit.creator}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Arrivée en Côte d'Ivoire</p>
                                        <p className="font-medium text-gray-800">{selectedUnit.arrival}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Couleur principale</p>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded ${selectedUnit.mainColor === 'rose' ? 'bg-pink-500' : 
                                                            selectedUnit.mainColor === 'jaune' ? 'bg-yellow-500' : 
                                                            selectedUnit.mainColor === 'verte' ? 'bg-green-500' : 
                                                            selectedUnit.mainColor === 'orange' ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                                            <p className="font-medium text-gray-800 capitalize">{selectedUnit.mainColor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-xl text-white">
                                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Heart className="w-5 h-5" />
                                    Particularité ASCCI
                                </h4>
                                <p className="text-sm opacity-90">
                                    L'ASCCI a adapté chaque unité aux réalités culturelles ivoiriennes, 
                                    intégrant des éléments traditionnels dans la pédagogie scoute.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Units;