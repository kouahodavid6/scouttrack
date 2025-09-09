import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const RegistrationFormResponsable = ({
    onSubmit,
    initialData = null,
    isEdit = false,
    onCancel = null,
    }) => 
{
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        branche: 'Aucune',
        fonction: 'CU Titulaire',
        role: '',
        contact: '',
        adresse: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Préremplir en mode édition
    useEffect(() => {
        if (isEdit && initialData) {
            setFormData({
                nom: initialData.nom || '',
                prenom: initialData.prenom || '',
                age: initialData.age?.toString() || '',
                branche: initialData.branche || 'Aucune',
                fonction: initialData.fonction || 'CU Titulaire',
                role: initialData.role || '',
                contact: initialData.contact || '',
                adresse: initialData.adresse || '',
            });
            setErrors({});
            setIsSubmitted(false);
        }
    }, [initialData, isEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'age' ? value.replace(/\D/, '') : value,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
        if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';

        const ageNum = parseInt(formData.age, 10);
        if (!formData.age.trim()) {
            newErrors.age = "L'âge est requis";
        } 
        else if (isNaN(ageNum) || ageNum < 22 || ageNum > 60) {
            newErrors.age = "L'âge doit être entre 22 et 60 ans";
        }

        if (!formData.role.trim()) newErrors.role = 'Le rôle est requis';
        if (!formData.contact.trim()) newErrors.contact = 'Le contact est requis';
        if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est requise";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({ ...formData, age: parseInt(formData.age, 10) });
            setIsSubmitted(true);

            if (!isEdit) {
                setTimeout(() => {
                    setFormData({
                        nom: '',
                        prenom: '',
                        age: '',
                        branche: 'Aucune',
                        fonction: 'CU Titulaire',
                        role: '',
                        contact: '',
                        adresse: '',
                    });
                        setErrors({});
                        setIsSubmitted(false);
                }, 3000);
            }
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto my-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEdit ? "Modification d'un responsable" : "Ajout d'un responsable"}
            </h3>

            {isSubmitted && !isEdit && (
                <div className="bg-green-100 border border-violet-400 text-violet-700 px-4 py-3 rounded relative mb-4 flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span className="font-medium">Responsable enregistré avec succès !</span>
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Nom */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nom">Nom</label>
                        <input
                            id="nom"
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                                errors.nom ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                    </div>

                    {/* Prénom */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="prenom">Prénom</label>
                        <input
                            id="prenom"
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                                errors.prenom ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
                    </div>
                </div>

                {/* Âge */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="age">Âge</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        min="22"
                        max="60"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.age ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>

                {/* Branche et Fonction */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="branche">Branche</label>
                        <select
                            id="branche"
                            name="branche"
                            value={formData.branche}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        >
                            <option value="Aucune">Aucune</option>
                            <option value="Chef de Nid">Chef de Nid</option>
                            <option value="Chef de Meute">Chef de Meute</option>
                            <option value="Chef de Troupe">Chef de Troupe</option>
                            <option value="Safouin">Chef de famille</option>
                            <option value="Coordinateur de Communauté">Coordinateur de Communauté</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fonction">Fonction</label>
                        <select
                            id="fonction"
                            name="fonction"
                            value={formData.fonction}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                        >
                            <option value="CU Titulaire">CU Titulaire</option>
                            <option value="CU Adjoint">CU Adjoint</option>
                            <option value="CU Assistant">CU Assistant</option>
                            <option value="CG Adjoint">CG Adjoint</option>
                            <option value="CG Assistant">CG Assistant</option>
                        </select>
                    </div>
                </div>

                {/* Rôle */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="role">Rôle</label>
                    <textarea
                        id="role"
                        name="role"
                        rows={2}
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Ex : En charge de la santé"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.role ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>

                {/* Contact */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact">Contact</label>
                    <input
                        id="contact"
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.contact ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                </div>

                {/* Adresse */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="adresse">Adresse</label>
                    <textarea
                        id="adresse"
                        name="adresse"
                        rows={1}
                        value={formData.adresse}
                        onChange={handleChange}
                        placeholder="Ex : Yopugon Millionnaire"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.adresse ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse}</p>}
                </div>

                {/* Boutons */}
                <div className="flex justify-end gap-3">
                    {isEdit && onCancel && (
                        <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                        >
                        Annuler
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-violet-600 text-white py-2 px-6 rounded hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                        {isEdit ? "Modifier" : "Enregistrer"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationFormResponsable;