import useFilteredList from "./useFilteredList";

const useFilteredResponsables = (responsables, params = {}) =>
  useFilteredList(responsables, params, {
    categoryKey: "branche", // ou 'fonction' si tu préfères filtrer par rôle
    nameKey: "nom",
    ageKey: "age",
  });

export default useFilteredResponsables;
