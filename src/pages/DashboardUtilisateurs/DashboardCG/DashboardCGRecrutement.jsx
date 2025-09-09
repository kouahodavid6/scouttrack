import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import RegistrationFormRecrue from "./components/RegistrationFormRecrue";
import useRecrueStore from "../../../stores/recrue.store";
import { useNavigate } from "react-router-dom";

const DashboardCGRecrutement = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const recrues = useRecrueStore(state => state.recrues);
    const addRecrue = useRecrueStore(state => state.addRecrue);
    const fetchRecrues = useRecrueStore(state => state.fetchRecrues);

    useEffect(() => {
        fetchRecrues();
    }, [fetchRecrues]);

    const getBranch = (age) => {
        if (age >= 1 && age <= 7) return 'Oisillons';
        if (age >= 8 && age <= 11) return 'Louveteaux';
        if (age >= 12 && age <= 14) return 'Éclaireurs';
        if (age >= 15 && age <= 17) return 'Cheminots';
        if (age >= 18 && age <= 21) return 'Routiers';
        return 'N/A';
    };

    const handleRegistrationFormRecrueSubmit = async (data) => {
        try {
            const branch = getBranch(data.age);
            const payload = { ...data, branche: branch };
            await addRecrue(payload);
            toast.success("Recrue ajouté avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'ajout :", error);
            toast.error("Erreur lors de l'ajout de la recrue");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Overlay pour mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Modifications pour l'alignement */}
            <div className={`fixed md:sticky top-0 z-40 transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64 h-screen bg-white shadow-md`}>
                {/* Croix visible uniquement sur mobile */}
                <div className="md:hidden flex justify-end p-4">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-500 hover:text-gray-800 transition"
                        aria-label="Fermer la sidebar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <DashboardSidebar role="chef-groupe" />
            </div>

            {/* Contenu principal - Modifications pour l'alignement */}
            <div className="flex-1 min-w-0">
                <DashboardHeader
                    title="Recrutement"
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <main className="p-3 sm:p-4 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div className="lg:col-span-1">
                            <RegistrationFormRecrue onSubmit={handleRegistrationFormRecrueSubmit} />
                        </div>

                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Inscriptions récentes</h3>

                            {recrues.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Nom & Prénom</th>
                                                <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Âge</th>
                                                <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Branche</th>
                                                <th className="px-2 sm:px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Contact</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {recrues.slice(0, 5).map((member) => {
                                                const getBranchColor = (branche) => {
                                                    switch (branche) {
                                                        case 'Oisillons': return 'bg-pink-100 text-pink-800';
                                                        case 'Louveteaux': return 'bg-yellow-100 text-yellow-800';
                                                        case 'Éclaireurs': return 'bg-green-100 text-green-800';
                                                        case 'Cheminots': return 'bg-orange-100 text-orange-800';
                                                        case 'Routiers': return 'bg-red-100 text-red-800';
                                                        default: return 'bg-gray-100 text-gray-800';
                                                    }
                                                };

                                                if (!member || !member.branche) return null;

                                                return (
                                                    <tr key={member.id}>
                                                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                                                            <div className="font-medium text-gray-900">
                                                                {member.prenom} {member.nom}
                                                            </div>
                                                            <div className="text-gray-500 truncate max-w-[120px] sm:max-w-none">{member.adresse}</div>
                                                        </td>
                                                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap">{member.age} ans</td>
                                                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap">
                                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBranchColor(member.branche)}`}>
                                                                {member.branche}
                                                            </span>
                                                        </td>
                                                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap text-gray-500 truncate max-w-[100px] sm:max-w-none">{member.contact}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center text-xs sm:text-sm md:text-base">
                                    <p className="text-gray-600">
                                        Aucune inscription récente. Utilisez le formulaire pour ajouter de nouveaux scouts.
                                    </p>
                                </div>
                            )}

                            {recrues.length > 0 && (
                                <div className="mt-3 sm:mt-4 md:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        Total: <span className="font-semibold">{recrues.length}</span> nouveaux membres
                                    </p>
                                    <button
                                        onClick={() => navigate('/dashboard-cg/membres')}
                                        className="px-3 py-1 sm:px-4 sm:py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors text-xs sm:text-sm"
                                    >
                                        Voir plus
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {recrues.length > 0 && (
                        <div className="mt-4 sm:mt-6 bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Distribution par branche</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
                                {['Oisillons', 'Louveteaux', 'Éclaireurs', 'Cheminots', 'Routiers'].map((branche) => {
                                    const count = recrues.filter((m) => m?.branche === branche).length;
                                    const pourcentage = recrues.length > 0
                                        ? Math.round((count / recrues.length) * 100)
                                        : 0;

                                    const getBranchColor = (branche) => {
                                        switch (branche) {
                                            case 'Oisillons': return 'bg-pink-500';
                                            case 'Louveteaux': return 'bg-yellow-500';
                                            case 'Éclaireurs': return 'bg-green-500';
                                            case 'Cheminots': return 'bg-orange-500';
                                            case 'Routiers': return 'bg-red-500';
                                            default: return 'bg-gray-500';
                                        }
                                    };

                                    return (
                                        <div key={branche} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                            <div className="flex items-center justify-between mb-1 sm:mb-2">
                                                <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{branche}</span>
                                                <span className="text-sm sm:text-base font-bold">{count}</span>
                                            </div>

                                            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                                                <div
                                                    className={`h-2 sm:h-2.5 rounded-full ${getBranchColor(branche)}`}
                                                    style={{ width: `${pourcentage}%` }}
                                                ></div>
                                            </div>

                                            <div className="mt-1 text-2xs sm:text-xs text-gray-500 text-right">
                                                {pourcentage}%
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardCGRecrutement;