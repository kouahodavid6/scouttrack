import { Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import { TentTree, Users, UserCircle, ClipboardList, BarChart3, Settings, LogOut } from 'lucide-react';
import useAuthStore from '../../../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import ConfirmLogoutModal from '../../../components/ConfirmLogoutModal';
import { createPortal } from 'react-dom';

const DashboardSidebar = ({ role, branch }) => {
    const location = useLocation();

    const logout = useAuthStore((state) => state.logout);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleConfirmLogout = async () => {
        try {
            await logout();
            setModalOpen(false);
            navigate("/");
        } catch (error) {
            alert("Erreur lors de la déconnexion !");
            console.error("Erreur:", error);
        }
    };

    // Fonction pour déterminer la couleur de la branche
    const getBranchColor = (branch) => {
        switch (branch) {
        case 'oisillons': return 'bg-pink-700 hover:bg-pink-800';
        case 'louveteaux': return 'bg-yellow-700 hover:bg-yellow-800';
        case 'eclaireurs': return 'bg-green-700 hover:bg-green-800';
        case 'cheminots': return 'bg-orange-700 hover:bg-orange-800';
        case 'routiers': return 'bg-red-700 hover:bg-red-800';
        default: return 'bg-violet-900 hover:bg-violet-950';
        }
    };

    const sidebarColor = getBranchColor(branch);
    const isActive = (path) => location.pathname === path;

    // Définition des liens du menu selon le rôle
    const sidebarItems = role === 'chef-groupe'
        ? [
            {
                path: '/dashboard-cg',
                name: 'Tableau de bord',
                icon: <BarChart3 className="h-5 w-5" />
            },
            {
                path: '/dashboard-cg/recrutement',
                name: 'Recrutement',
                icon: <ClipboardList className="h-5 w-5" />
            },
            {
                path: '/dashboard-cg/responsables',
                name: 'Tous les Chefs',
                icon: <UserCircle className="h-5 w-5" />
            },
            {
                path: '/dashboard-cg/membres',
                name: 'Tous les Jeunes',
                icon: <Users className="h-5 w-5" />
            },
            {
                path: '/dashboard-cg/parametre',
                name: 'Paramètres',
                icon: <Settings className="h-5 w-5" />
            }
        ]
        : 
        [
            {
                path: `/chef-unite/${branch}`,
                name: 'Tableau de bord',
                icon: <BarChart3 className="h-5 w-5" />
            },
            {
                path: `/chef-unite/${branch}/membres`,
                name: 'Membres',
                icon: <Users className="h-5 w-5" />
            },
            {
                path: `/chef-unite/${branch}/cotisations`,
                name: 'Cotisations',
                icon: <ClipboardList className="h-5 w-5" />
            },
            {
                path: `/chef-unite/${branch}/parametres`,
                name: 'Paramètres',
                icon: <Settings className="h-5 w-5" />
            }
        ];

    return (
        <>
            <div className={`h-screen w-64 ${sidebarColor} text-white fixed left-0 top-0 z-30`}>
                {/* Logo en haut du menu */}
                <div className="px-6 py-4 border-b border-white border-opacity-20">
                    <Link to="/dashboard-cg" className="flex items-center space-x-2">
                    <TentTree className="h-8 w-8 text-yellow-400" />
                    <div>
                        <div className="font-bold text-lg">Les Mohicans</div>
                        <div className="text-xs text-white text-opacity-70">
                        {role === 'chef-groupe' 
                            ? 'Chef de Groupe' 
                            : `Chef d'Unité - ${branch?.charAt(0).toUpperCase() + branch?.slice(1)}`}
                        </div>
                    </div>
                    </Link>
                </div>

                {/* Liens du menu */}
                <div className="py-4">
                    <ul>
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-6 py-3 hover:bg-black hover:bg-opacity-10 transition-colors ${
                                    isActive(item.path) 
                                        ? 'bg-black bg-opacity-10 border-l-2 border-yellow-400' 
                                        : ''
                                    }`}
                                >
                                    {item.icon}
                                    <span className="ml-3">{item.name}</span>
                                </Link>
                            </li>
                        ))}

                        {/* Lien de déconnexion */}
                        <li className="mt-6">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="flex w-full items-center px-6 py-3 text-white/80 hover:text-white hover:bg-black/10 transition-colors"
                            >
                                <LogOut className="h-5 w-5" />
                                <span className="ml-3">Déconnexion</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Utilisation de createPortal pour sortir le modal du flux */}
            {isModalOpen && createPortal(
            <ConfirmLogoutModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmLogout}
            />,
                document.body
            )}
        </>
        
    );
};

export default DashboardSidebar;