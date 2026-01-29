import { Mail, MapPin, Facebook, Instagram, Twitter, Shield, Users, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-purple-950 text-white py-16 border-t border-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo et description */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src="/LogoScoutTrack1.png" 
                                alt="Logo ScoutTrack"
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-cover shadow-lg border border-gray-300"
                            />
                            <div>
                                <h1 className="text-xl font-bold text-white">ScoutTrack</h1>
                                <p className="text-xs text-purple-300">Plateforme ASCCI</p>
                            </div>
                        </div>
                        <p className="text-purple-200 text-sm leading-relaxed mb-6">
                            Solution numérique complète pour la gestion moderne et efficace du mouvement scout ivoirien.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="bg-purple-900 p-2.5 rounded-lg hover:bg-purple-800 transition-colors duration-300 border border-purple-800">
                                <Facebook className="w-4 h-4 text-purple-200" />
                            </a>
                            <a href="#" className="bg-purple-900 p-2.5 rounded-lg hover:bg-purple-800 transition-colors duration-300 border border-purple-800">
                                <Instagram className="w-4 h-4 text-purple-200" />
                            </a>
                            <a href="#" className="bg-purple-900 p-2.5 rounded-lg hover:bg-purple-800 transition-colors duration-300 border border-purple-800">
                                <Twitter className="w-4 h-4 text-purple-200" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-purple-100 mb-6 uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#accueil" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#hierarchie" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Hiérarchie
                                </a>
                            </li>
                            <li>
                                <a href="#unites" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Unités
                                </a>
                            </li>
                            <li>
                                <a href="#fonctionnalites" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Fonctionnalités
                                </a>
                            </li>
                            <li>
                                <a href="#avantages" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Avantages
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Légal */}
                    <div>
                        <h4 className="text-sm font-semibold text-purple-100 mb-6 uppercase tracking-wider flex items-center gap-2">
                            <Shield className="w-4 h-4 text-purple-400" />
                            Légal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm">
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-purple-300 hover:text-white transition-colors duration-300 text-sm">
                                    Conditions d'utilisation
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-purple-100 mb-6 uppercase tracking-wider flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-purple-900 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800 transition-colors border border-purple-800">
                                    <Mail className="w-3.5 h-3.5 text-purple-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-purple-400 mb-0.5">Email</p>
                                    <p className="text-sm text-purple-200 group-hover:text-white transition-colors">scouttrack@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-purple-900 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800 transition-colors border border-purple-800">
                                    <Phone className="w-3.5 h-3.5 text-purple-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-purple-400 mb-0.5">Téléphone</p>
                                    <p className="text-sm text-purple-200 group-hover:text-white transition-colors">+225 20 22 35 22</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-8 h-8 bg-purple-900 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800 transition-colors border border-purple-800">
                                    <MapPin className="w-3.5 h-3.5 text-purple-300" />
                                </div>
                                <div>
                                    <p className="text-xs text-purple-400 mb-0.5">Adresse</p>
                                    <p className="text-sm text-purple-200 group-hover:text-white transition-colors">Abidjan, Plateau</p>
                                    <p className="text-xs text-purple-400">Côte d'Ivoire</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-purple-800 my-8"></div>

                {/* Bottom section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                        <p className="text-sm flex text-purple-300">
                            <img 
                                src="/logo_ascci.png" 
                                alt="Logo ScoutTrack"
                                className="ml-1 relative w-5 h-5 transform group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                            />
                            Une initiative de l'Association des Scouts Catholiques de Côte d'Ivoire
                        </p>
                        <p className="text-xs text-purple-400 mt-1">
                            © {currentYear} ScoutTrack. Tous droits réservés.
                        </p>
                    </div>

                    <div className="text-center lg:text-right">
                        <p className="text-sm text-purple-300">
                            Développé par{' '}
                            <span 
                                className="text-white hover:text-purple-100 cursor-pointer hover:underline decoration-wavy decoration-purple-500 font-medium transition-colors"
                                onClick={() => window.open('#', '_blank')}
                            >
                                David Kouaho
                            </span>
                        </p>
                        <p className="text-xs text-purple-400 mt-1">
                            Solution certifiée et sécurisée
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;