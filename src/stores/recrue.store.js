import { create } from "zustand";
import { recrueService } from "../services/recrue.service";

const useRecrueStore = create((set) => ({
  recrues: [],
  stats: { total: 0, Oisillons: 0, Louveteaux: 0, Éclaireurs: 0, Cheminots: 0, Routiers: 0 },
  loading: false,
  error: null,
  showError: false,

  fetchRecrues: async () => {
    set({ loading: true, error: null, showError: false });
    try {
      const response = await recrueService.getAllRecrues();
      // Vérifie si la donnée est dans response.data.data ou response.data
      const recrues = Array.isArray(response.data.data)
        ? response.data.data
        : Array.isArray(response.data)
        ? response.data
        : [];
      set({ recrues, loading: false, error: null, showError: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Erreur inconnue";
      set({ error: message, showError: true, loading: false });
      console.error("Erreur lors du chargement des recrues :", message);
    }
  },

  fetchStats: async () => {
      try {
          const response = await recrueService.getCountByBranch();
          set({ stats: response.data ?? {}, loading: false });
      } catch (error) {
          console.error("Erreur lors du chargement des stats :", error);
          set({ stats: { total: 0, Oisillons: 0, Louveteaux: 0, Éclaireurs: 0, Cheminots: 0, Routiers: 0 } });
      }
  },


  addRecrue: async (data) => {
    set({ loading: true, error: null, showError: false });
    try {
      const response = await recrueService.addRecrue(data);
      const newRecrue = response.data.data || response.data;
      set((state) => ({
        recrues: [...state.recrues, newRecrue],
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

  updateRecrue: async (id, updatedData) => {
    set({ loading: true, error: null, showError: false });
    try {
      const response = await recrueService.updateRecrue(id, updatedData);
      const updatedRecrue = response.data.data || response.data;
      set((state) => ({
        recrues: state.recrues.map((r) => (r.id === id ? updatedRecrue : r)),
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

  deleteRecrue: async (id) => {
    set({ loading: true, error: null, showError: false });
    try {
      const response = await recrueService.deleteRecrue(id);
      set((state) => ({
        recrues: state.recrues.filter((r) => r.id !== id),
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
}));

export default useRecrueStore;
