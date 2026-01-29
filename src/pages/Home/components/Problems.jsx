import { 
    AlertTriangle,
    CheckCircle,
    TrendingUp,
    RefreshCw,
    Users,
    Target,
    Lightbulb,
    FileText,
    Frown
} from 'lucide-react';
import { problemsData, solutionsData, problemsStats } from '../../../data/data';

const Problems = () => {

    return (
        <section id="problemes" className="py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header avec badge */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Frown className="w-4 h-4" />
                        Problèmes
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                        Les <span className="text-purple-800">Défis</span> et{' '}
                        <span className="text-purple-800">Solutions</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Comment ScoutTrack résout les principaux problèmes de la gestion scoute traditionnelle
                    </p>
                </div>

                {/* Contenu principal */}
                {/* Carte d'introduction */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-8 rounded-2xl text-white mb-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-2/3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                <Lightbulb className="w-4 h-4" />
                                L'évolution numérique du scoutisme
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                De la gestion papier à la plateforme numérique
                            </h3>
                            <p className="text-white/90 mb-6">
                                Le scoutisme ivoirien évolue avec son temps. ScoutTrack digitalise les processus 
                                tout en préservant les valeurs et traditions scoutes, offrant une solution moderne 
                                aux défis de gestion quotidienne.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    <span className="text-sm">35.000+ membres</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    <span className="text-sm">500+ groupes</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                                <div className="text-4xl font-bold mb-2">{problemsStats.study.percentage}</div>
                                <p className="text-sm opacity-90">{problemsStats.study.text}</p>
                                <p className="text-xs opacity-70 mt-2">{problemsStats.study.source}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid des problèmes */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Les 5 Principaux Défis Rencontrés
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {problemsData.map((problem, index) => {
                            const IconComponent = problem.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="bg-white h-full p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-lg text-gray-900">
                                                {problem.title}
                                            </h4>
                                        </div>
                                        
                                        <ul className="space-y-2 mb-4">
                                            {problem.items.slice(0, 3).map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-sm font-medium text-red-600">
                                                {problem.stat}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Solutions */}
                <div className="mb-12">
                    <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border-2 border-green-200 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-7 h-7 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    La Solution ScoutTrack
                                </h3>
                                <p className="text-gray-600">
                                    Une plateforme complète qui répond à chaque défi avec des solutions innovantes
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutionsData.map((solution, index) => {
                                const IconComponent = solution.icon;
                                return (
                                    <div key={index} className="bg-white p-5 rounded-xl border border-green-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 ${solution.color} rounded-lg flex items-center justify-center`}>
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-gray-900">{solution.title}</h4>
                                        </div>
                                        <p className="text-sm text-gray-600">{solution.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Transformation */}
                <div className="bg-white p-8 rounded-2xl border-2 border-purple-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Le Parcours de Transformation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border-2 border-red-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Avant ScoutTrack
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Gestion papier, communication fragmentée, suivi manuel, opacité financière
                            </p>
                        </div>
                        
                        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-white rounded-xl border-2 border-yellow-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <RefreshCw className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Pendant la Transition
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Formation, migration progressive, adoption des outils digitaux
                            </p>
                        </div>
                        
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Avec ScoutTrack
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Efficacité maximale, transparence totale, engagement renforcé
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problems;