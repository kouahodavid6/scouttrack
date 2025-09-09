import { create } from "zustand";
import { authService } from "../services/auth.service";

// On vérifie si un utilisateur est déjà stocké dans le localStorage (persisté après un précédent login)
const initialUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

// Création du store Zustand
const useAuthStore = create((set) => ({
    // État global de l'utilisateur
    user: initialUser,

    // Pour afficher un loading spinner pendant une requête
    loading: false,

    // Pour gérer les messages d’erreur
    error: null,
    showError: false,

    // Setter d’erreur personnalisée
    setError: (error) => set({ error, showError: true }),

    // Pour nettoyer une erreur affichée
    clearError: () => set({ error: null, showError: false }),

    // Met à jour le user dans Zustand et dans le localStorage
    setUser: (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        set({ user: userData });
    },

    // 🔐 FONCTION D’INSCRIPTION BOUTIQUE + Connexion automatique
    registerCG: async (formData) => {
        set({ loading: true });

        try {
            // Appel à l’API d’inscription
            const response = await authService.registerCG(formData);

            // On récupère les infos renvoyées par l'API : token + data
            const { data, token } = response.data;

            // On prépare les données à stocker (user + token JWT)
            const userData = { ...data, token };

            // On les enregistre dans localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            // On met à jour Zustand avec le user connecté
            set({ user: userData, loading: false });

            return response; // utile pour rediriger dans le composant React
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            set({ error: errorMessage, showError: true, loading: false });
            throw error; // à gérer dans le composant aussi
        }
    },

    loginCG: async (credentials) => {
        set({ loading: true });

        try {
            const response = await authService.loginCG(credentials);
            const { data, token } = response.data;

            const userData = { ...data, token };
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            set({ user: userData, loading: false });

            return response;
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            set({ error: errorMessage, showError: true, loading: false });
            throw error;
        }
    },

    registerCU: async (formData) => {
        set({ loading: true });

        try {
            const response = await authService.registerCU(formData);
            const { data, token } = response.data;

            const userData = { ...data, token };
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            set({ user: userData, loading: false });

            return response;
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            set({ error: message, showError: true, loading: false });
            throw error;
        }
    },

    loginCU: async (credentials) => {
        set({ loading: true });

        try {
            const response = await authService.loginCU(credentials);
            const { data, token } = response.data;

            const userData = { ...data, token };
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));

            set({ user: userData, loading: false });

            return response;
        } catch (error) {
            const message = error.response?.data?.message || error.message;
            set({ error: message, showError: true, loading: false });
            throw error;
        }
    },

    logout: async () => {
        try {
            const token = localStorage.getItem("token");

            if (token) {
                await authService.logout(); // Appel à l'API Laravel
            }

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            set({ user: null });
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            set({ user: null });
        }
    },
}));

export default useAuthStore;