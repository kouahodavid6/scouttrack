import toast from "react-hot-toast";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader  from "../components/DashboardHeader";
import StatsCard        from "../../../components/StatsCard";

import { Users, UserCircle, FileText, Download, ChevronDown } from "lucide-react";

import useRecrueStore      from "../../../stores/recrue.store";
import useResponsableStore from "../../../stores/responsable.store";

import useFilteredRecrues   from "../../../hooks/useFilteredRecrues";
import DownloadPdfButton from "../../../components/DownloadPdfButton";


import DeleteConfirmModal from "./components/DeleteConfirmModal";
import EditRecrueModal    from "./components/EditRecrueModal";

/* ------------------------------------------------------------- */
const DashboardCG = () => {
    const [sidebarOpen,   setSidebarOpen]   = useState(false);
    const [activeCategory,setActiveCategory]= useState(null);

    /* recherche + tri */
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("nom-asc");
    const [ageSort,    setAgeSort]    = useState("none");

    /* modaux */
    const [selectedRecrue,  setSelectedRecrue]  = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal,   setShowEditModal]   = useState(false);

    const navigate = useNavigate();

    /* ---------- Stores ---------- */
    const {
        recrues,
        stats,
        fetchRecrues,
        fetchStats,
        deleteRecrue,
        updateRecrue,
    } = useRecrueStore();

    const { etats, fetchEtats } = useResponsableStore();

    /* ---------- Effets ---------- */
    useEffect(() => {
        fetchStats();
        fetchEtats();
        fetchRecrues();
    }, [fetchStats, fetchEtats, fetchRecrues]);

    /* ---------- Handlers ---------- */
    const handleCardClick = useCallback(
        (title) => {
            if (title === "Jeunes") {
                navigate("/dashboard-cg/membres");
                return;
            }
            if (title === "Chefs") {
                navigate("/dashboard-cg/responsables");
                return;
            }
            setActiveCategory((prev) => (prev === title ? null : title));
        },
        [navigate]
    );

    const handleEdit = (rec) => {
        setSelectedRecrue(rec);
        setShowEditModal(true);
    };

    const confirmEdit = async (updatedData) => {
        if (!selectedRecrue) return;
        try {
            await updateRecrue(selectedRecrue.id, updatedData);
            toast.success("Recrue modifiée avec succès !");
            setShowEditModal(false);
            setSelectedRecrue(null);
        } catch (error) {
            console.error("Erreur lors de la modification :", error);
            toast.error("Erreur lors de la modification de la recrue");
        }
    };

    const handleDelete = (rec) => {
        setSelectedRecrue(rec);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedRecrue) return;
        try {
            await deleteRecrue(selectedRecrue.id);
            toast.success("Recrue supprimée avec succès !");
            setShowDeleteModal(false);
            setSelectedRecrue(null);
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
            toast.error("Erreur lors de la suppression de la recrue");
        }
    };

  /* ---------- Liste filtrée ---------- */
    const filteredRecrues = useFilteredRecrues(recrues, {
        activeCategory,
        sortOption,
        ageSort,
        searchTerm,
    });

    /* ---------- Colonnes pour l’export PDF ---------- */
    const recruePdfColumns = [
        { header: "Nom & Prénom", accessor: (r) => `${r.nom} ${r.prenom}` },
        { header: "Âge",           accessor: (r) => `${r.age} ans` },
        { header: "Contact",       accessor: "contact" },
        { header: "Adresse",       accessor: "adresse" },
    ];

    /* ---------- Cartes ---------- */
    const statCards = [
        { title:"Jeunes",      value:stats?.total       ?? 0, icon:<Users      className="h-6 w-6 text-blue-700" />,  color:"blue"  },
        { title:"Oisillons",   value:stats?.Oisillons   ?? 0, icon:<Users      className="h-6 w-6 text-pink-700" />,  color:"pink"  },
        { title:"Louveteaux",  value:stats?.Louveteaux  ?? 0, icon:<Users      className="h-6 w-6 text-yellow-700"/>, color:"yellow"},
        { title:"Éclaireurs",  value:stats?.Éclaireurs  ?? 0, icon:<Users      className="h-6 w-6 text-green-700" />, color:"green" },
        { title:"Cheminots",   value:stats?.Cheminots   ?? 0, icon:<Users      className="h-6 w-6 text-orange-700"/>, color:"orange"},
        { title:"Routiers",    value:stats?.Routiers    ?? 0, icon:<Users      className="h-6 w-6 text-red-700"   />, color:"red"  },
        { title:"Chefs",       value:etats?.total       ?? 0, icon:<UserCircle className="h-6 w-6 text-blue-700" />, color:"blue"  },
        { title:"Cotisés",     value:0,                   icon:<FileText   className="h-6 w-6 text-green-700"/>, color:"green" },
    ];

  /* ============================================================= */
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:sticky top-0 z-40 transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 w-64 h-screen bg-white shadow-md`}
            >
                {/* Croix mobile */}
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

            {/* Contenu principal */}
            <div className="flex-1 min-w-0 flex flex-col">

                <DashboardHeader
                title="Tableau de bord"
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                {/* Zone scrollable */}
                <main className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">

                    {/* Grille de statistiques */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {statCards.map((stat) => (
                        <StatsCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                            isActive={activeCategory === stat.title}
                            onAction={() => handleCardClick(stat.title)}
                        />
                        ))}
                    </div>

                    {/* Tableau filtré */}
                    {activeCategory && (
                        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto mt-8">
                            <div className="min-w-[800px]"> {/* Largeur minimale pour forcer le scroll horizontal */}
                                {/* Titre */}
                                <h2 className="text-xl font-semibold mb-2">
                                    Liste des {activeCategory}
                                </h2>

                                {/* Boutons (recherche, tri, téléchargement) */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mt-4 mb-4">
                                    {/* Recherche */}
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Rechercher…"
                                        className="flex-1 min-w-[200px] px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                                    />

                                    {/* Tri alphabétique */}
                                    <div className="relative">
                                        <select
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                        className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm"
                                        >
                                        <option value="nom-asc">Nom (A → Z)</option>
                                        <option value="nom-desc">Nom (Z → A)</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>

                                    {/* Tri par âge */}
                                    <div className="relative">
                                        <select
                                            value={ageSort}
                                            onChange={(e) => setAgeSort(e.target.value)}
                                            className="appearance-none pl-3 pr-8 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-sm"
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
                                        title={`Liste des ${activeCategory}`}
                                        filename={`liste_${(activeCategory || "jeunes").toLowerCase()}.pdf`}
                                        className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm whitespace-nowrap"
                                        onDownload={() => toast.success("Téléchargement effectué avec succès !")}
                                    />
                                </div>

                                {/* Tableau */}
                                <table className="min-w-full divide-y divide-gray-200 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">NOM & PRÉNOM</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">ÂGE</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">CONTACT</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">ADRESSE</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-medium">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredRecrues.map((rec) => (
                                            <tr key={rec.id}>
                                                <td className="px-4 py-2 whitespace-nowrap">{rec.nom} {rec.prenom}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{rec.age}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{rec.contact}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">{rec.adresse}</td>
                                                <td className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleEdit(rec)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                                                    >
                                                        Modifier
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(rec)}
                                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                                                    >
                                                        Supprimer
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredRecrues.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
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

            {/* Modaux */}
            <DeleteConfirmModal
                isOpen={showDeleteModal}
                onConfirm={confirmDelete}
                onCancel={() => {
                setShowDeleteModal(false);
                setSelectedRecrue(null);
                }}
                entityName={`${selectedRecrue?.nom ?? ""} ${selectedRecrue?.prenom ?? ""}`}
            />

            <EditRecrueModal
                isOpen={showEditModal}
                onClose={() => {
                setShowEditModal(false);
                setSelectedRecrue(null);
                }}
                initialData={selectedRecrue}
                onSubmit={confirmEdit}
            />
        </div>
    );
};

export default DashboardCG;
