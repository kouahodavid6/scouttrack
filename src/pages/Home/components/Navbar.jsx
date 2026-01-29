import { navItems } from '../../../data/data';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Détecter la section active avec l'ordre correct
            const currentSection = navItems.find(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection.id);
            } else {
                // Si aucune section n'est détectée, on considère que c'est l'accueil
                setActiveSection('accueil');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initialiser au chargement
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`
            fixed top-0 left-0 w-full py-2 z-50 transition-all duration-300
            ${isScrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
                : 'bg-white/90 backdrop-blur-lg'
            }
        `}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('accueil')}
                        className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-300"
                    >
                        <img 
                            src="/LogoScoutTrack1.png" 
                            alt="Logo ScoutTrack"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-cover shadow-lg border border-gray-300"
                        />
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-purple-900">
                                Scout<span className="text-purple-700">Track</span>
                            </h3>
                    </button>

                    {/* Navigation desktop */}
                    <div className="hidden lg:block">
                        <div className="ml-6 xl:ml-10 flex items-baseline space-x-1 xl:space-x-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-black font-medium px-2 xl:px-3 py-2 transition-all duration-300
                                        hover:text-[#4a148c] group text-xs xl:text-sm
                                        ${activeSection === item.id ? 'text-[#4a148c] font-semibold' : 'text-gray-800'}
                                    `}
                                >
                                    {item.label}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-[2px] bg-[#4a148c] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation tablette */}
                    <div className="hidden md:block lg:hidden">
                        <div className="flex items-center space-x-2">
                            {navItems.slice(0, 4).map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        relative text-black font-medium px-1.5 py-1.5 transition-all duration-300
                                        hover:text-[#4a148c] group text-xs
                                        ${activeSection === item.id ? 'text-[#4a148c] font-semibold' : 'text-gray-800'}
                                    `}
                                >
                                    {item.label.split(' ')[0]}
                                    <span className={`
                                        absolute bottom-0 left-1/2 h-[2px] bg-[#4a148c] transition-all duration-300
                                        transform -translate-x-1/2
                                        ${activeSection === item.id 
                                            ? 'w-full' 
                                            : 'w-0 group-hover:w-full'
                                        }
                                    `} />
                                </button>
                            ))}
                            {/* Menu déroulant pour les items restants */}
                            <div className="relative group">
                                <button className="text-gray-800 font-medium px-1.5 py-1.5 hover:text-[#4a148c] transition-colors duration-300 text-xs">
                                    Plus ▾
                                </button>
                                <div className="absolute top-full right-0 mt-2 w-36 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-300">
                                    {navItems.slice(4).map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`
                                                w-full text-left text-gray-800 font-medium px-3 py-2.5 transition-all duration-300
                                                hover:text-[#4a148c] hover:bg-gray-100 text-xs
                                                ${activeSection === item.id ? 'text-[#4a148c] bg-gray-100 font-semibold' : ''}
                                                first:rounded-t-lg last:rounded-b-lg
                                            `}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black p-1.5 hover:text-[#4a148c] transition-colors duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a148c]/50"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-3 pb-3 border-t border-gray-300 pt-3">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        w-full text-gray-800 font-medium px-3 py-2 text-left transition-all duration-300
                                        hover:text-[#4a148c] hover:bg-gray-100 rounded-lg text-sm
                                        ${activeSection === item.id ? 'text-[#4a148c] bg-gray-100 font-semibold' : 'text-gray-700'}
                                        flex items-center
                                    `}
                                >
                                    <span className="flex-1">{item.label}</span>
                                    {activeSection === item.id && (
                                        <div className="w-1.5 h-1.5 bg-[#4a148c] rounded-full ml-2" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;