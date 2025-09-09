import axiosInstance from "../api/axiosInstance";

//Fonction pour ajouter de nouvelles recrues
const addRecrue = async (recrueData) => {
    const token = localStorage.getItem("token");

    return await axiosInstance.post("/recrues", recrueData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
};

const getAllRecrues = async () => {
    return await axiosInstance.get("/recrues");
};

const getCountByBranch = async () => {
    return await axiosInstance.get("/recrues/statistiques");
};

const updateRecrue = async (id, data) => {
    const response = await axiosInstance.put(`/recrues/${id}`, data);
    return response.data;
};

const deleteRecrue = async (id) => {
    const response = await axiosInstance.delete(`/recrues/${id}`);
    return response.data;
}


export const recrueService = {
    addRecrue,
    getAllRecrues,
    getCountByBranch,
    updateRecrue,
    deleteRecrue,
};