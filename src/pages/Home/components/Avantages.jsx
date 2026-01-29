import { benefitsData, globalImpactStats } from '../../../data/data';
import { ThumbsUp} from 'lucide-react';

const Avantages = () => {
    return (
        <section id="avantages" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <ThumbsUp className="w-4 h-4" />
                        Avantages
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Les <span className="text-purple-800">Bénéfices</span> pour Chaque Acteur
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        ScoutTrack apporte une valeur concrète à tous les membres de la communauté scoute
                    </p>
                </div>

                {/* Grid des bénéfices */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {benefitsData.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div key={index} className="group">
                                <div className={`${benefit.bgColor} h-full p-8 rounded-2xl border-2 ${benefit.borderColor} hover:shadow-xl transition-all duration-300`}>
                                    {/* Header avec icône */}
                                    <div className="flex flex-col items-center mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                                            <IconComponent className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className={`text-2xl font-bold text-${benefit.color}-700 text-center mb-2`}>
                                            {benefit.title}
                                        </h3>
                                        <div className={`h-1 w-16 bg-gradient-to-r ${benefit.gradient} rounded-full`}></div>
                                    </div>
                                    
                                    {/* Liste des bénéfices */}
                                    <div className="space-y-4">
                                        {benefit.items.map((item, idx) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                                                    <div className={`w-10 h-10 ${benefit.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                        <ItemIcon className={`w-5 h-5 text-${benefit.color}-600`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-bold text-gray-900">{item.text}</p>
                                                        <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section Impact Global */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Impact Global Mesurable
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Les résultats concrets obtenus par les groupes utilisant ScoutTrack
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden">
                        <div className="p-8 sm:p-12 text-white">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {globalImpactStats.map((stat, index) => {
                                    const StatIcon = stat.icon;
                                    return (
                                        <div key={index} className="text-center">
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                                                    <StatIcon className="w-6 h-6" />
                                                </div>
                                                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                                                <p className="text-sm opacity-90">{stat.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-white/20 text-center">
                                <p className="text-sm opacity-80">
                                    Données collectées sur 6 mois auprès de 50+ groupes pilotes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Comparaison */}
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Avant vs Après ScoutTrack
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-6 bg-red-50 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                    <span className="text-red-600 font-bold">AVANT</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900">Gestion Traditionnelle</h4>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-red-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-600 text-xs">✗</span>
                                    </div>
                                    <span className="text-gray-700">Données dispersées sur papier</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-red-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-600 text-xs">✗</span>
                                    </div>
                                    <span className="text-gray-700">Communication fragmentée</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-red-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-600 text-xs">✗</span>
                                    </div>
                                    <span className="text-gray-700">Suivi manuel fastidieux</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-red-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-600 text-xs">✗</span>
                                    </div>
                                    <span className="text-gray-700">Transparence limitée</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="p-6 bg-green-50 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span className="text-green-600 font-bold">APRÈS</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900">Avec ScoutTrack</h4>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-green-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-700">Données centralisées digitales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-green-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-700">Communication unifiée</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-green-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-700">Suivi automatique en temps réel</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 bg-green-200 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-green-600 text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-700">Transparence totale</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Avantages;