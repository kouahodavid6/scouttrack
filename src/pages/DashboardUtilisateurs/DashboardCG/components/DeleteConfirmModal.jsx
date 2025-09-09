import { Trash2, X } from "lucide-react";
import { useEffect } from 'react';

const DeleteConfirmModal = ({ isOpen, onConfirm, onCancel, entityName = "cet élément" }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Fond flouté */}
            <div 
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onCancel}
                aria-hidden="true"
            />

            {/* Contenu du modal */}
            <div className="relative z-[10000] bg-white rounded-xl max-w-md w-full shadow-xl border border-gray-100">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-red-100">
                            <Trash2 className="h-5 w-5 text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Confirmation de suppression</h3>
                    </div>
                    <button
                        onClick={onCancel}
                        className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Fermer la fenêtre"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Corps */}
                <div className="p-6">
                    <p className="text-gray-700 mb-6">
                        Voulez-vous vraiment supprimer <strong className="text-red-600">{entityName}</strong> ?
                    </p>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={() => {
                                onConfirm();
                                onCancel(); // Fermer après suppression si souhaité
                            }}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
