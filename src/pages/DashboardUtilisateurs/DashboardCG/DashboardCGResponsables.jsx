import toast from "react-hot-toast";
import { Download, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import DashboardHeader            from "../components/DashboardHeader";
import DashboardSidebar           from "../components/DashboardSidebar";
import RegistrationFormResponsable from "./components/RegistrationFormResponsable";
import EditResponsableModal       from "./components/EditResponsableModal";
import DeleteConfirmModal         from "./components/DeleteConfirmModal";

import useResponsableStore        from "../../../stores/responsable.store";
import useFilteredResponsables    from "../../../hooks/useFilteredResponsables";
import DownloadPdfButton from "../../../components/DownloadPdfButton";

const DashboardCGResponsables = () => {
    /* ----------------- UI state ----------------- */
    const [sidebarOpen,      setSidebarOpen]      = useState(false);
    const [showFullTable,    setShowFullTable]    = useState(false);
    const [editingRes,       setEditingRes]       = useState(null);
    const [deletingRes,      setDeletingRes]      = useState(null);

    /* filtres & recherche */
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("nom-asc");
    const [ageSort,    setAgeSort]    = useState("none");

    /* ----------------- Zustand store ----------------- */
    const responsables       = useResponsableStore((s) => s.responsables ?? []);
    const addResponsable     = useResponsableStore((s) => s.addResponsable);
    const fetchResponsables  = useResponsableStore((s) => s.fetchResponsables);
    const updateResponsable  = useResponsableStore((s) => s.updateResponsable);
    const deleteResponsable  = useResponsableStore((s) => s.deleteResponsable);

  /* ----------------- Data fetching ----------------- */
    useEffect(() => {
        fetchResponsables();
    }, [fetchResponsables]);

    /* ----------------- Hook de filtrage ----------------- */
    const filteredResponsables = useFilteredResponsables(responsables, {
        /* pas de filtre de catégorie ici pour l’instant */
        sortOption,
        ageSort,
        searchTerm,
    });

    const responsablePdfColumns = [
        { header: "Nom & Prénom", accessor: (r) => `${r.nom} ${r.prenom}` },
        { header: "Âge", accessor: (r) => `${r.age} ans` },
        { header: "Branche", accessor: "branche" },
        { header: "Fonction", accessor: "fonction" },
        { header: "Rôle", accessor: "role" },
        { header: "Contact", accessor: "contact" },
        { header: "Adresse", accessor: "adresse" },
    ];

    /* ----------------- CRUD handlers ----------------- */
    const handleAdd = async (data) => {
        try {
            await addResponsable(data);
            toast.success("Responsable ajouté avec succès !");
        } catch (err) {
            console.error(err);
            toast.error("Erreur lors de l'ajout du responsable");
        }
    };

    const handleUpdate = async (data) => {
        try {
            await updateResponsable(editingRes.id, data);
            setEditingRes(null);
            toast.success("Responsable modifié avec succès !");
        } catch (err) {
            console.error(err);
            toast.error("Erreur lors de la modification du responsable");
        }
    };

    const handleDelete = async () => {
        try {
            await deleteResponsable(deletingRes.id);
            setDeletingRes(null);
            toast.success("Responsable supprimé avec succès !");
        } catch (err) {
            console.error(err);
            toast.error("Erreur lors de la suppression du responsable");
        }
    };

  /* ====================================================== */
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

            {/* --- Overlay mobile --- */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* --- Sidebar --- */}
            <div
                className={`fixed md:sticky top-0 z-40 transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 w-64 h-screen bg-white shadow-md`}
            >
                {/* bouton croix (mobile) */}
                <div className="md:hidden flex justify-end p-4">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-500 hover:text-gray-800 transition"
                        aria-label="Fermer la sidebar"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <DashboardSidebar role="chef-groupe" />
            </div>

            {/* --- Contenu principal --- */}
            <div className="flex-1 min-w-0 flex flex-col">

                <DashboardHeader
                    title="Gestion des responsables"
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">

                    {/* grille formulaire + tableau compact */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        <RegistrationFormResponsable onSubmit={handleAdd} />

                        {/* bloc tableau condensé */}
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Responsables enregistrés</h3>

                            {filteredResponsables.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left font-medium text-gray-500">NOM & PRÉNOM</th>
                                                <th className="px-4 py-2 text-left font-medium text-gray-500">BRANCHE</th>
                                                <th className="px-4 py-2 text-left font-medium text-gray-500">FONCTION</th>
                                                <th className="px-4 py-2 text-left font-medium text-gray-500">CONTACT</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredResponsables.slice(0, 5).map((res) => (
                                                <tr key={res.id}>
                                                    <td className="px-4 py-2 whitespace-nowrap">
                                                        <span className="font-medium text-gray-900">{res.nom} {res.prenom}</span><br />
                                                        <span className="text-gray-500 text-xs">{res.adresse}</span>
                                                    </td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{res.branche}</td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{res.fonction}</td>
                                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{res.contact}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) 
                            :
                            (
                                <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-600">
                                    Aucun responsable enregistré. Utilisez le formulaire pour en ajouter.
                                </div>
                            )}

                            {filteredResponsables.length > 0 && (
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-sm text-gray-600">
                                        Total: <span className="font-semibold">{filteredResponsables.length}</span> responsables
                                    </p>
                                    <button
                                        onClick={() => setShowFullTable((prev) => !prev)}
                                        className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 text-sm"
                                    >
                                        {showFullTable ? "Fermer" : "Voir tous"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* tableau complet */}
                    {showFullTable && (
                        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto mt-8">
                            {/* Min width pour forcer scroll horizontal */}
                            <div className="min-w-[800px]">
                                <h2 className="text-xl font-semibold mb-2">Tous les Chefs</h2>

                                {/* Conteneur boutons/recherche */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mt-4 mb-4">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Rechercher…"
                                        className="flex-grow min-w-[200px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                                    />

                                    <div className="relative min-w-[150px]">
                                        <select
                                            value={sortOption}
                                            onChange={(e) => setSortOption(e.target.value)}
                                            className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm w-full"
                                        >
                                            <option value="nom-asc">Nom (A → Z)</option>
                                            <option value="nom-desc">Nom (Z → A)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>

                                    <div className="relative min-w-[150px]">
                                        <select
                                            value={ageSort}
                                            onChange={(e) => setAgeSort(e.target.value)}
                                            className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm w-full"
                                        >
                                            <option value="none">Trier par âge</option>
                                            <option value="age-asc">Âge (croissant)</option>
                                            <option value="age-desc">Âge (décroissant)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>

                                    <DownloadPdfButton
                                        data={filteredResponsables}
                                        columns={responsablePdfColumns}
                                        title="Liste des chefs du groupe Scout Les Mohicans"
                                        filename="liste_responsables.pdf"
                                        className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm whitespace-nowrap"
                                        onDownload={() => toast.success("Téléchargement effectué avec succès !")}
                                    />
                                </div>

                                {/* Tableau */}
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">NOM & PRÉNOM</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">BRANCHE</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">FONCTION</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">RÔLE</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">CONTACT</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredResponsables.map((res) => (
                                            <tr key={res.id}>
                                                <td className="px-4 py-2 whitespace-nowrap">
                                                    <span className="font-medium text-gray-900">{res.nom} {res.prenom} {res.age} ans</span><br />
                                                    <span className="text-gray-500 text-xs">{res.adresse}</span>
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap">{res.branche}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{res.fonction}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{res.role}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{res.contact}</td>
                                                <td className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
                                                    <button
                                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                                                        onClick={() => setEditingRes(res)}
                                                    >
                                                        Modifier
                                                    </button>
                                                    <button
                                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                                                        onClick={() => setDeletingRes(res)}
                                                    >
                                                        Supprimer
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredResponsables.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                                                    Aucun résultat trouvé.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* ---- Modaux ---- */}
            <EditResponsableModal
                isOpen={!!editingRes}
                onClose={() => setEditingRes(null)}
                initialData={editingRes}
                onSubmit={handleUpdate}
            />

            <DeleteConfirmModal
                isOpen={!!deletingRes}
                onCancel={() => setDeletingRes(null)}
                onConfirm={handleDelete}
                entityName={`${deletingRes?.nom ?? ""} ${deletingRes?.prenom ?? ""}`}
            />
        </div>
    );
};

export default DashboardCGResponsables;