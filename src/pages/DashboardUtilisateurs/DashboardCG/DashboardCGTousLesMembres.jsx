import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Download, ChevronDown } from "lucide-react";

import DashboardSidebar      from "../components/DashboardSidebar";
import DashboardHeader       from "../components/DashboardHeader";
import EditRecrueModal       from "./components/EditRecrueModal";
import DeleteConfirmModal    from "./components/DeleteConfirmModal";

import useRecrueStore        from "../../../stores/recrue.store";
import useFilteredRecrues    from "../../../hooks/useFilteredRecrues";
import DownloadPdfButton from "../../../components/DownloadPdfButton";

const DashboardCGTousLesMembres = () => {
    /* ---- UI ---- */
    const [sidebarOpen,   setSidebarOpen]   = useState(false);
    const [editingRecrue, setEditingRecrue] = useState(null);
    const [deletingRec,   setDeletingRec]   = useState(null);

    /* filtres & recherche */
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("nom-asc");
    const [ageSort,    setAgeSort]    = useState("none");

    /* ---- Zustand ---- */
    const recrues            = useRecrueStore((s) => s.recrues ?? []);
    const fetchRecrues       = useRecrueStore((s) => s.fetchRecrues);
    const updateRecrue       = useRecrueStore((s) => s.updateRecrue);
    const deleteRecrue       = useRecrueStore((s) => s.deleteRecrue);

    useEffect(() => {
        fetchRecrues();
    }, [fetchRecrues]);

  /* ---- Hook filtré ---- */
    const filteredRecrues = useFilteredRecrues(recrues, {
        sortOption,
        ageSort,
        searchTerm,
    });

    /* ---------- Colonnes pour l’export PDF ---------- */
    const recruePdfColumns = [
        { header: "Nom & Prénom", accessor: (r) => `${r.nom} ${r.prenom}` },
        { header: "Âge",           accessor: (r) => `${r.age} ans` },
        { header: "Branche",       accessor: "branche" },
        { header: "Contact",       accessor: "contact" },
        { header: "Adresse",       accessor: "adresse" },
    ];

  /* ---- Handlers ---- */
    const handleUpdate = async (data) => {
        try {
            await updateRecrue(editingRecrue.id, data);
            setEditingRecrue(null);
            toast.success("Recrue mise à jour avec succès !");
        } catch (err) {
            console.error(err);
            toast.error("Erreur lors de la modification de la recrue !");
        }
    };

    const handleDelete = async () => {
        try {
            await deleteRecrue(deletingRec.id);
            setDeletingRec(null);
            toast.success("Recrue supprimée avec succès !");
        } catch (err) {
            console.error(err);
            toast.error("Erreur lors de la suppression de la recrue !");
        }
    };

  /* ================================================= */
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ---- Sidebar ---- */}
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

            {/* ---- Main ---- */}
            <div className="flex-1 min-w-0 flex flex-col">

                <DashboardHeader
                    title="Tous les membres"
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <main className="flex-1 p-4 sm:p-6 overflow-auto bg-gray-100">
                    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
                        {/* Conteneur large pour forcer scroll */}
                        <div className="min-w-[800px]">
                            {/* Barre titre + outils */}
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <h2 className="text-xl font-semibold">Liste de tous les Jeunes</h2>

                                <div className="flex items-center gap-3 flex-wrap justify-between flex-grow min-w-[300px]">
                                    {/* Recherche */}
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Rechercher…"
                                        className="flex-grow min-w-[200px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                                    />

                                    {/* Tri nom */}
                                    <div className="relative min-w-[150px]">
                                        <select
                                            value={sortOption}
                                            onChange={(e) => setSortOption(e.target.value)}
                                            className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm w-full"
                                        >
                                            <option value="nom-asc">Nom (A → Z)</option>
                                            <option value="nom-desc">Nom (Z → A)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>

                                    {/* Tri âge */}
                                    <div className="relative min-w-[150px]">
                                        <select
                                            value={ageSort}
                                            onChange={(e) => setAgeSort(e.target.value)}
                                            className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm w-full"
                                        >
                                            <option value="none">Trier par âge</option>
                                            <option value="age-asc">Âge (croissant)</option>
                                            <option value="age-desc">Âge (décroissant)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>

                                    {/* Télécharger */}
                                    <DownloadPdfButton
                                        data={filteredRecrues}
                                        columns={recruePdfColumns}
                                        title="Liste de tous les jeunes du groupe Scout Les Mohicans"
                                        filename="liste_jeunes.pdf"
                                        className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm whitespace-nowrap"
                                        onDownload={() => toast.success("Téléchargement effectué avec succès !")}
                                    />
                                </div>
                            </div>

                            {/* Tableau */}
                            <table className="min-w-full divide-y divide-gray-200 text-sm mt-4">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">NOM & PRÉNOM</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">ÂGE</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">BRANCHE</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">CONTACT</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">ADRESSE</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredRecrues.map((rec) => (
                                        <tr key={rec.id}>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-900 font-medium">
                                                {rec.nom} {rec.prenom}
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{rec.age} ans</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{rec.branche}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{rec.contact}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{rec.adresse}</td>
                                            <td className="px-4 py-2 whitespace-nowrap flex gap-2">
                                                <button
                                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                                                    onClick={() => setEditingRecrue(rec)}
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                                                    onClick={() => setDeletingRec(rec)}
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredRecrues.length === 0 && (
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
                </main>
            </div>
            {/* ---- Modaux ---- */}
                <EditRecrueModal
                    isOpen={!!editingRecrue}
                    onClose={() => setEditingRecrue(null)}
                    initialData={editingRecrue}
                    onSubmit={handleUpdate}
                />

                <DeleteConfirmModal
                    isOpen={!!deletingRec}
                    onCancel={() => setDeletingRec(null)}
                    onConfirm={handleDelete}
                    entityName={`${deletingRec?.nom ?? ""} ${deletingRec?.prenom ?? ""}`}
                />
        </div>
    );
};

export default DashboardCGTousLesMembres;