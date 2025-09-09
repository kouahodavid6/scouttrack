import { create } from 'zustand';
import { responsableService } from '../services/responsable.service';

const useResponsableStore = create((set) => ({
    responsables: [],
    etats: { total: 0 },
    loading: false,
    error: null,

    fetchResponsables: async () => {
        set({ loading: true, error: null });
        try {
            const data = await responsableService.getAllResponsables();
            set({ responsables: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },


    fetchEtats: async () => {
        set({ loading: true });
        try {
            const response = await responsableService.getCountByFonction();
            set({
                etats: response.data ?? { total: 0 },
                loading: false,
            });
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            set({ error: message, loading: false });
            console.error("Erreur lors du chargement des statistiques :", message);
        }
    },

    addResponsable: async (responsableData) => {
        set({ loading: true, error: null });
        try {
            const response = await responsableService.createResponsable(responsableData);
            const newResponsable = response.data;
            set((state) => ({
                responsables: [newResponsable, ...state.responsables],
                loading: false,
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

updateResponsable: async (id, updatedData) => {
  set({ loading: true, error: null, showError: false });
  try {
    const response = await responsableService.updateResponsable(id, updatedData);
    const updatedResponsable = response.data.data || response.data;

    set((state) => ({
      responsables: state.responsables.map((r) =>
        r.id === id ? updatedResponsable : r
      ),
      loading: false,
      error: null,
      showError: false,
    }));

    return response;
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Erreur inconnue";
    set({ error: message, showError: true, loading: false });
    throw error;
  }
},


    deleteResponsable: async (id) => {
        try {
            await responsableService.deleteResponsable(id);
            set((state) => ({
                responsables: state.responsables.filter((r) => r.id !== id),
            }));
        } catch (error) {
            console.error("Erreur suppression :", error);
        }
    },
}));

export default useResponsableStore;
