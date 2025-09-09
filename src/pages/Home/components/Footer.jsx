import React from 'react';
import { MapPin, Phone, Mail, Globe, TentTree } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-violet-900 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <Link 
                                to="/" 
                                className="flex items-center space-x-2"
                            >
                                <TentTree className="h-8 w-8 text-yellow-400" />
                                <span className="font-bold text-xl">Les Mohicans</span>
                            </Link>
                        </div>
                        <p className="text-sm text-violet-200 mb-4">
                            Groupe scout catholique de la paroisse Saint Sauveur Miséricordieux, 
                            situé à Yopougon, faisant partie du district Les Blackfeet.
                        </p>
                        <div className="flex items-center mt-4">
                            <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                            <span className="text-sm">Yopougon, Côte d'Ivoire</span>
                        </div>
                    </div>
                
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-sm">+225 01 71 13 62 61</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-sm">contact@lesmohicans.org</span>
                            </div>
                            <div className="flex items-center">
                                <Globe className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-sm">www.lesmohicans.org</span>
                            </div>
                        </div>
                    </div>
                
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nos branches</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                Oisillons (3-7 ans)
                            </li>
                            <li className="flex items-center">
                                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                                Louveteaux (8-11 ans)
                            </li>
                            <li className="flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                Éclaireurs (12-14 ans)
                            </li>
                            <li className="flex items-center">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                                Cheminots (15-17 ans)
                            </li>
                            <li className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                Routiers (18-21 ans)
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-violet-800 mt-8 pt-6 text-center text-sm text-violet-300">
                    <p className="text-sm text-white">
                        💻 Développé par <a href="https://lien-du-portfolio.com" className="text-yellow-400 hover:underline">Kouaho Ekissi David Emmanuel</a>
                    </p>
                    <p>© {new Date().getFullYear()} Les Mohicans. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;