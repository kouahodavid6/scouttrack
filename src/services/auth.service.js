import axiosInstance from "../api/axiosInstance";

// Fonction pour l'inscription du chef de groupe
const registerCG = async (userData) => {
    return await axiosInstance.post("/register/CG", userData);
};
// Fonction pour la connexion du chef de groupe
const loginCG = async (credentials) => {
    return await axiosInstance.post("/login/CG", credentials);
};

// Fonction pour l'inscription des chefs d'unités
const registerCU = async (userData) => {
    return await axiosInstance.post("/register/CU", userData);
};
// Fonction pour la connexion des chefs d'unités
const loginCU = async (credentials) => {
    return await axiosInstance.post("/login/CU", credentials);
};
//Fonction pour la déconnexion
const logout = async () => {
    return await axiosInstance.post("/logout", {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
};

export const authService = {
    registerCG,
    loginCG,
    registerCU,
    loginCU,
    logout
}