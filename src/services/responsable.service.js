import axiosInstance from "../api/axiosInstance";

const createResponsable = async (data) => {
    const response = await axiosInstance.post("/responsables", data);
    return response.data;
};

const getAllResponsables = async () => {
    const response = await axiosInstance.get("/responsables");
    return response.data;
};

const getCountByFonction = async () => {
    return await axiosInstance.get("/responsables/statistiques");
};

const updateResponsable = async (id, data) => {
    const response = await axiosInstance.put(`/responsables/${id}`, data);
    return response.data;
};

const deleteResponsable = async (id) => {
    const response = await axiosInstance.delete(`/responsables/${id}`);
    return response.data;
};

export const responsableService = {
    createResponsable,
    getAllResponsables,
    getCountByFonction,
    updateResponsable,
    deleteResponsable
};