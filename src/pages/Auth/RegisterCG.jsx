import { Link, useNavigate } from "react-router-dom";
import ContainerFormsRegister from "./components/ContainerFormsRegister";
import Input from "../../components/Input";
import { ArrowLeft, TentTree } from "lucide-react";
import { useState } from "react";
import useAuthStore from "./../../stores/auth.store";
import ErrorModal from "../../components/ErrorModal";

const RegisterCG = () => {
    const [formData, setFormData] = useState({ 
        nom: "",
        prenom: "",
        adresse: "",
        email: "",
        password: ""
    });

    const { registerCG, error, showError, clearError, loading  } = useAuthStore();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        clearError();

        try {
            const res = await registerCG(formData);
            //console.log("Inscription réussie:", res);
            
            // Tu peux enregistrer le token ici si ton API le retourne
            localStorage.setItem("token", res.data.token); 

            navigate("/dashboard-cg"); // vers la route protégée
        } catch (error) {
            // rien à faire ici, l’erreur est déjà gérée dans le store
            console.error("Erreur lors de la connexion :", error);
        }
    };

    return (
        <>
            {showError && (
                <ErrorModal 
                    error={error}
                    onClose={clearError}
                />
            )}

            <ContainerFormsRegister>
                {/* Header */}
                <div className="w-full flex items-center justify-between py-4 px-1">
                    <Link
                        to="/"
                        className="rounded-full p-1 flex items-center justify-center transition-colors bg-neutral-500 hover:bg-neutral-800"
                    >
                        <ArrowLeft
                            color="white"
                            className="h-6 w-6 sm:h-5 sm:w-5 xs:h-4 xs:w-4"
                        />
                    </Link>

                    <h2 className="text-xl sm:text-2xl font-bold text-violet-700 mb-2 text-center">
                        Inscription CG
                    </h2>

                    <TentTree className="h-7 w-7 sm:h-8 sm:w-8 xs:h-6 xs:w-6 text-yellow-400" />
                </div>

                <p className="text-sm text-gray-600 text-center mb-6">
                    Votre rôle, votre espace, votre responsabilité.
                </p>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                Nom <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="nom"
                                name="nom"
                                placeholder="Entrez votre nom"
                                value={formData.nom}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="w-full sm:w-1/2">
                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                                Prénoms <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="prenom"
                                name="prenom"
                                placeholder="Entrez vos prénoms"
                                value={formData.prenom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                            Adresse <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="Yopougon, Millionnaire"
                            value={formData.adresse}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="chefdegroupe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="w-full sm:w-1/2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Entrez votre mot de passe"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Bouton Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {loading ? "Inscription en cours..." : "S'inscrire"}
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Vous avez déjà un compte ?{" "}
                    <Link
                        to="/connexion/chef-groupe"
                        className="text-violet-500 hover:text-violet-800 font-medium"
                    >
                        Connectez-vous
                    </Link>
                </p>
            </ContainerFormsRegister>
        </>

    );
};

export default RegisterCG;