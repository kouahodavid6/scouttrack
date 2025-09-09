import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const RegistrationFormRecrue = ({ onSubmit, initialData = {}, isEdit = false, onCancel }) => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: 0,
        contact: '',
        adresse: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Préremplir les champs dès que initialData change et qu'on est en mode édition
    useEffect(() => {
        if (isEdit && initialData) {
            setFormData({
                nom: initialData.nom || '',
                prenom: initialData.prenom || '',
                age: initialData.age || 0,
                contact: initialData.contact || '',
                adresse: initialData.adresse || ''
            });
            setErrors({});
            setIsSubmitted(false);
        }
    }, [initialData, isEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'age' ? parseInt(value) || 0 : value
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
        if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
        if (!formData.age || formData.age < 1 || formData.age > 21) newErrors.age = "L'âge doit être entre 1 et 21 ans";
        if (!formData.contact.trim()) newErrors.contact = 'Le contact est requis';
        if (!formData.adresse.trim()) newErrors.adresse = "L'adresse est requise";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
            setIsSubmitted(true);

            if (!isEdit) {
                // Reset formulaire seulement si ajout (pas modification)
                setTimeout(() => {
                    setFormData({
                        nom: '',
                        prenom: '',
                        age: 0,
                        contact: '',
                        adresse: ''
                    });
                    setIsSubmitted(false);
                }, 3000);
            }
        }
    };

    const getBranchColor = (age) => {
        if (age >= 1 && age <= 7) return 'border-pink-500';
        if (age >= 8 && age <= 11) return 'border-yellow-500';
        if (age >= 12 && age <= 14) return 'border-green-500';
        if (age >= 15 && age <= 17) return 'border-orange-500';
        if (age >= 18 && age <= 21) return 'border-red-500';
        return 'border-gray-300';
    };

    const getBranchName = (age) => {
        if (age >= 1 && age <= 7) return 'Oisillons';
        if (age >= 8 && age <= 11) return 'Louveteaux';
        if (age >= 12 && age <= 14) return 'Éclaireurs';
        if (age >= 15 && age <= 17) return 'Cheminots';
        if (age >= 18 && age <= 21) return 'Routiers';
        return 'Aucune branche';
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEdit ? "Modifier la recrue" : "Inscription d'un nouveau scout"}
            </h3>

            {isSubmitted && !isEdit ? (
                <div className="bg-green-100 border border-violet-400 text-violet-700 px-4 py-3 rounded relative mb-4">
                    <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        <span className="font-medium">Inscription réussie!</span>
                    </div>
                    <p className="text-sm mt-1">Le scout a été ajouté avec succès.</p>
                </div>
            ) : null}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                                errors.nom ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                    </div>

                    <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="prenom"
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

                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Âge
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        min="1"
                        max="21"
                        value={formData.age || ''}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.age ? 'border-red-500' : formData.age ? getBranchColor(formData.age) : 'border-gray-300'
                        }`}
                    />
                    {errors.age ? (
                        <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                    ) : formData.age > 0 ? (
                        <p className="text-gray-600 text-xs mt-1">
                            Branche: <span className="font-medium">{getBranchName(formData.age)}</span>
                        </p>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact
                    </label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.contact ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse
                    </label>
                    <textarea
                        id="adresse"
                        name="adresse"
                        rows={1}
                        value={formData.adresse}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                            errors.adresse ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    {isEdit ? "Modifier" : "Enregistrer"}
                </button>

                {isEdit && onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full mt-2 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                    >
                        Annuler
                    </button>
                )}
            </form>
        </div>
    );
};

export default RegistrationFormRecrue;
