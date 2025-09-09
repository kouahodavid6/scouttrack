import { Link, useLocation } from "react-router-dom";
import { TentTree, ChevronDown, X, Menu, Home, UserCircle, Users } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    
    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-violet-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2"
                        >
                            <TentTree className="h-8 w-8 text-yellow-400" />
                            <span className="font-bold text-xl">Les Mohicans</span>
                        </Link>
                    </div>
                    
                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link 
                            to="/" 
                            className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-violet-800 transition ${
                                isActive('/') ? 'bg-violet-800' : ''
                            }`}
                        >
                            Accueil
                        </Link>
                        <div className="relative">
                            <button 
                                onClick={toggleDropdown}
                                className="px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-violet-800 transition"
                            >
                                Espace membres <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link 
                                        to="/connexion/chef-groupe" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100"
                                        onClick={toggleDropdown}
                                    >
                                        Chef de Groupe
                                    </Link>
                                    <Link 
                                        to="/connexion/chef-unite" 
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100"
                                        onClick={toggleDropdown}
                                    >
                                        Chefs d'Unités
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-violet-800 transition"
                            aria-label="Menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/" 
                            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-violet-800 transition ${
                            isActive('/') ? 'bg-violet-800' : ''
                        }`}
                        onClick={toggleMenu}
                        >
                            <div className="flex items-center">
                                <Home className="mr-2 h-5 w-5" />
                                Accueil
                            </div>
                        </Link>
                        <Link 
                            to="/connexion/chef-groupe" 
                            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-violet-800 transition ${
                            isActive('/chef-groupe') ? 'bg-violet-800' : ''
                        }`}
                        onClick={toggleMenu}
                        >
                            <div className="flex items-center">
                                <UserCircle className="mr-2 h-5 w-5" />
                                Chef de Groupe
                            </div>
                        </Link>
                        <Link 
                            to="/connexion/chef-unite" 
                            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-violet-800 transition ${
                            isActive('/chef-unite') ? 'bg-violet-800' : ''
                            }`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center">
                                <Users className="mr-2 h-5 w-5" />
                                Chefs d'Unités
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;