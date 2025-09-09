import PropTypes from "prop-types";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Bouton de téléchargement PDF générique.
 *
 * @param {Array}  data      Tableau de données à exporter (objets JS).
 * @param {Array}  columns   Tableau d’objets { header, accessor } :
 *                           - header (string)  : libellé dans le PDF
 *                           - accessor (string | function) : clé ou fonction pour extraire la valeur
 * @param {string} title     Titre affiché en haut du PDF
 * @param {string} filename  Nom du fichier généré
 * @param {string} className Classes Tailwind supplémentaires pour styler le bouton
 */
const DownloadPdfButton = ({
    data = [],
    columns = [],
    title = "Liste",
    filename = "liste.pdf",
    className = "",
    onDownload
}) => {
const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);

    // ↪️ Centrage du titre
    const pageWidth = doc.internal.pageSize.getWidth();             // largeur totale de la page
    const textWidth = doc.getTextWidth(title);                      // largeur du titre
    const textX = (pageWidth - textWidth) / 2;                      // position X pour centrer

    doc.text(title, textX, 15); // Y = 15 pour rester en haut

    // Prépare les entêtes et les lignes
    const tableColumn = columns.map((c) => c.header);
    const tableRows = data.map((row) =>
        columns.map((c) =>
            typeof c.accessor === "function" ? c.accessor(row) : row[c.accessor]
        )
    );

    autoTable(doc, {
        startY: 22,
        head: [tableColumn],
        body: tableRows,
        styles: { fontSize: 10 },
        headStyles: { fillColor: [76, 29, 149] },
    });

    doc.save(filename);
    if (onDownload) onDownload();
};


    return (
        <button
            onClick={handleDownload}
            className={`flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm whitespace-nowrap min-w-[130px] ${className}`}
        >
            <Download size={15} />
            Télécharger
        </button>
    );
};

DownloadPdfButton.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
        })
    ).isRequired,
    title: PropTypes.string,
    filename: PropTypes.string,
    className: PropTypes.string,
};

export default DownloadPdfButton;