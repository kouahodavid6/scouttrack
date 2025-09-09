import useFilteredList from "./useFilteredList";

const useFilteredRecrues = (recrues, params = {}) =>
  useFilteredList(recrues, params, {
    categoryKey: "branche",
    nameKey: "nom",
    ageKey: "age",
  });

export default useFilteredRecrues;
