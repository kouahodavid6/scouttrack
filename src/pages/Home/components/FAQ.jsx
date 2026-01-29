import { faqs } from "../../../data/data";
import { useState } from 'react';
import { Minus, Plus, HelpCircle } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Questions fréquentes
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        Vos <span className="text-purple-800">Questions</span>, Nos Réponses
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Tout ce que vous devez savoir sur ScoutTrack
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-left"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                            openIndex === index 
                                                ? 'bg-purple-100 text-purple-700' 
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            <HelpCircle className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-bold text-gray-900">
                                            {faq.question}
                                        </span>
                                    </div>
                                    
                                    <div className={`ml-4 flex-shrink-0 rounded-full p-2 transition-colors ${
                                        openIndex === index 
                                            ? 'bg-purple-600 text-white' 
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-purple-50 group-hover:text-purple-600'
                                    }`}>
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="mt-2 p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border-2 border-purple-100 animate-fadeIn">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-full flex-shrink-0"></div>
                                            <p className="text-gray-700 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden">
                    <div className="p-8 sm:p-12 text-white">
                        <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Vous avez d'autres questions ?
                            </h3>
                            <p className="text-lg text-white/90 mb-6">
                                Notre équipe support est disponible pour vous aider à démarrer avec ScoutTrack
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    className="inline-flex items-center justify-center gap-3 bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
                                    onClick={() => window.open('https://wa.me/2250171136261?text=Bonjour%20ScoutTrack,%20je%20souhaite%20avoir%20plus%20d\'informations', '_blank')}
                                >
                                    <HelpCircle className="w-5 h-5" />
                                    Contactez notre support
                                </button>

                                <button 
                                    className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-all"
                                    onClick={() => window.open('/documentation.pdf', '_blank')}
                                >
                                    Voir la documentation
                                </button>
                            </div>
                            
                            <p className="text-sm text-white/70 mt-6">
                                Réponse sous 24h • Support personnalisé • Assistance technique
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;