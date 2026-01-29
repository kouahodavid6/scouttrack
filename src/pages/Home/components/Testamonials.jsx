import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, Users, Medal } from 'lucide-react';
import { testimonialsData, testimonialsStats } from '../../../data/data';

const Testamonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const currentTestimonial = testimonialsData[currentIndex];
    const IconComponent = currentTestimonial.icon;

    return (
        <section id="temoignages" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <Quote className="w-4 h-4" />
                        Témoignages
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Ce Que Disent <span className="text-purple-800">Nos Utilisateurs</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Déjà adopté par des centaines de responsables scouts
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl border-2 border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-700 mb-2">{testimonialsStats.averageRating}</div>
                        <p className="text-sm text-gray-600">Note moyenne</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-blue-100 text-center">
                        <div className="text-3xl font-bold text-blue-700 mb-2">{testimonialsStats.totalReviews}</div>
                        <p className="text-sm text-gray-600">Avis utilisateurs</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-green-100 text-center">
                        <div className="text-3xl font-bold text-green-700 mb-2">{testimonialsStats.activeUsers}</div>
                        <p className="text-sm text-gray-600">Utilisateurs actifs</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-orange-100 text-center">
                        <div className="text-3xl font-bold text-orange-700 mb-2">{testimonialsStats.satisfaction}</div>
                        <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                </div>

                {/* Témoignage principal */}
                <div className="relative mb-12">
                    <div className="bg-white p-8 sm:p-12 rounded-2xl border-2 border-gray-200 shadow-xl">
                        <Quote className="text-purple-200 absolute top-8 right-8 w-12 h-12 hidden sm:block" />
                        
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            {/* Avatar et informations */}
                            <div className="lg:w-1/3 text-center lg:text-left">
                                <div className={`w-24 h-24 bg-gradient-to-br ${currentTestimonial.color} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                                    <IconComponent className="w-12 h-12 text-white" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {currentTestimonial.name}
                                </h3>
                                <p className="text-purple-600 font-semibold text-lg mb-1">
                                    {currentTestimonial.role}
                                </p>
                                <p className="text-gray-600 mb-4">{currentTestimonial.position}</p>
                                
                                {/* Étoiles */}
                                <div className="flex justify-center lg:justify-start space-x-1 mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                                    ))}
                                </div>
                                
                                {/* Contrôles */}
                                <div className="flex justify-center lg:justify-start space-x-4">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                                        aria-label="Témoignage précédent"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                                        aria-label="Témoignage suivant"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Citation */}
                            <div className="lg:w-2/3">
                                <div className="relative">
                                    <Quote className="text-gray-200 w-8 h-8 mb-4" />
                                    <p className="text-xl text-gray-700 leading-relaxed italic pl-6">
                                        "{currentTestimonial.quote}"
                                    </p>
                                </div>
                                
                                {/* Indicateurs de pagination */}
                                <div className="flex justify-center lg:justify-end mt-8 space-x-2">
                                    {testimonialsData.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${
                                                index === currentIndex
                                                    ? 'bg-purple-600 w-8'
                                                    : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                            aria-label={`Aller au témoignage ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini-témoignages */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Plus de Témoignages
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonialsData.map((testimonial, index) => {
                            const SmallIcon = testimonial.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="bg-white h-full p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className={`w-12 h-12 ${testimonial.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <SmallIcon className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                                <p className="text-xs text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        
                                        <p className="text-sm text-gray-600 italic line-clamp-3 mb-3">
                                            "{testimonial.quote}"
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={14} />
                                                ))}
                                            </div>
                                            <ThumbsUp className="w-4 h-4 text-green-500" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl overflow-hidden">
                    <div className="p-8 sm:p-12 lg:p-16 text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                                <Medal className="w-4 h-4" />
                                Rejoignez nos utilisateurs satisfaits
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                                Prêt à rejoindre la communauté ScoutTrack ?
                            </h3>
                            
                            <p className="text-lg text-white/90 mb-8">
                                Plus de <span className="font-bold">{testimonialsStats.activeUsers}</span> groupes scouts font déjà confiance à ScoutTrack pour moderniser leur gestion.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center justify-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                                    <Users className="w-5 h-5" />
                                    Rejoindre maintenant
                                </button>
                            </div>
                            
                            <p className="text-sm text-white/70 mt-6">
                                {testimonialsStats.totalReviews} avis vérifiés • Satisfaction garantie • Support 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testamonials;