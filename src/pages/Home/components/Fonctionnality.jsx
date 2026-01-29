import {
    Shield,
    Smartphone,
    TrendingUp,
    Users,
    CheckCircle,
    Settings
} from 'lucide-react';

import { featuresData } from '../../../data/data';

const Fonctionnality = () => {
    return (
        <section id="fonctionnalites" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Settings className="w-4 h-4" />
                        Fonctionnalités
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Les <span className="text-purple-800">Fonctionnalités</span> Complètes
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Une suite d'outils puissants pour gérer efficacement tous les aspects de votre organisation scoute
                    </p>
                </div>

                {/* Grid des fonctionnalités */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuresData.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="bg-white h-full p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                                        {/* Header avec icône */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-14 h-14 ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <IconComponent className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Liste des items */}
                                        <ul className="space-y-3 mb-6">
                                            {feature.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {/* Badge de catégorie */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">
                                                    {feature.items.length} fonctionnalités
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bandeau avant CTA */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-8 rounded-2xl border-2 border-purple-200 mb-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Pourquoi choisir ScoutTrack ?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Sécurité maximale</p>
                                        <p className="text-sm text-gray-600">Données chiffrées et sauvegardées quotidiennement</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Smartphone className="w-6 h-6 text-purple-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Multi-plateforme</p>
                                        <p className="text-sm text-gray-600">Disponible sur web, responsive design</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Évolutivité</p>
                                        <p className="text-sm text-gray-600">S'adapte à la taille de votre organisation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 text-orange-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900">Support dédié</p>
                                        <p className="text-sm text-gray-600">Équipe d'assistance disponible 7j/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <p className="text-3xl font-bold text-purple-700 mb-2">+25</p>
                                <p className="text-gray-700 mb-4">fonctionnalités au total</p>
                                <p className="text-sm text-gray-600">
                                    Mises à jour régulières avec de nouvelles fonctionnalités basées sur vos retours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fonctionnality;