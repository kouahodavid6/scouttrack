import { useMemo } from "react";

/**
 * Filtre, recherche et trie n’importe quel tableau d’objets.
 *
 * @param {Array}  list   Tableau d’éléments (recrues, responsables, etc.)
 * @param {Object} opts   Paramètres de filtrage/tri/recherche
 * @param {string|null} opts.activeCategory   Catégorie sélectionnée
 * @param {string} opts.sortOption            'nom-asc' | 'nom-desc'
 * @param {string} opts.ageSort               'none' | 'age-asc' | 'age-desc'
 * @param {string} opts.searchTerm            Mot‑clé libre
 * @param {Object} keys  Permet d’adapter le hook à la structure de l’objet
 * @param {string} keys.categoryKey           Champ servant au filtrage par catégorie
 * @param {string} keys.nameKey               Champ du nom
 * @param {string} keys.ageKey                Champ de l’âge
 */
const useFilteredList = (
  list = [],
  { activeCategory = null, sortOption = "nom-asc", ageSort = "none", searchTerm = "" },
  { categoryKey = "branche", nameKey = "nom", ageKey = "age" } = {}
) => {
  return useMemo(() => {
    if (!Array.isArray(list) || list.length === 0) return [];

    let filtered = [...list];

    /* --- 1. Filtre catégorie --- */
    if (activeCategory !== null) {
      filtered = filtered.filter((item) => item[categoryKey] === activeCategory);
    }

    /* --- 2. Recherche plein‑texte --- */
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((item) =>
        `${item[nameKey]} ${item.prenom ?? ""}`.toLowerCase().includes(term)
      );
    }

    /* --- 3. Tri par nom --- */
    if (sortOption === "nom-asc") {
      filtered.sort((a, b) => a[nameKey].localeCompare(b[nameKey]));
    } else if (sortOption === "nom-desc") {
      filtered.sort((a, b) => b[nameKey].localeCompare(a[nameKey]));
    }

    /* --- 4. Tri par âge --- */
    if (ageSort === "age-asc") {
      filtered.sort((a, b) => a[ageKey] - b[ageKey]);
    } else if (ageSort === "age-desc") {
      filtered.sort((a, b) => b[ageKey] - a[ageKey]);
    }

    return filtered;
  }, [list, activeCategory, sortOption, ageSort, searchTerm, categoryKey, nameKey, ageKey]);
};

export default useFilteredList;