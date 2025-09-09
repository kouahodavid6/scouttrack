import { Link, useNavigate } from "react-router-dom";
import ContainerFormsLogin from "./components/ContainerFormsLogin";
import Input from "../../components/Input";
import { ArrowLeft, TentTree } from "lucide-react";
import { useState } from "react";
import useAuthStore from "./../../stores/auth.store";
import ErrorModal from "../../components/ErrorModal";

const LoginCG = () => {
    const [formData, setFormData] = useState({ 
        email : "",
        password : ""
    });

    const { loginCG, error, showError, clearError } = useAuthStore();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        clearError(); // Nettoie les erreurs avant d’essayer

        try {
            const res = await loginCG(formData); // Appel API

            localStorage.setItem("token", res.data.token); 

            navigate("/dashboard-cg"); // Redirection
        } catch (error) {
            // L'erreur est déjà gérée par le store
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

            <ContainerFormsLogin>
                {/* HEADER : ne pas toucher */}
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
                        Connexion CG
                    </h2>

                    <TentTree className="h-7 w-7 sm:h-8 sm:w-8 xs:h-6 xs:w-6 text-yellow-400" />
                </div>

                {/* SOUS-TITRE */}
                <p className="text-sm text-gray-600 text-center mb-6 px-4 sm:px-8">
                    Votre rôle, votre espace, votre responsabilité.
                </p>

                {/* FORMULAIRE */}
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
                    <div>
                        <label 
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="chefdegroupe@gmail.com"
                            className="w-full"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Mot de passe <span className="text-red-500">*</span>
                        </label>
                        <Input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Entrez votre mot de passe"
                            className="w-full"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <div className="text-right">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-violet-500 hover:text-violet-800"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all"
                    >
                        Se connecter
                    </button>
                </form>

                {/* LIEN VERS INSCRIPTION */}
                <p className="mt-6 text-center text-sm text-gray-600 px-4">
                    Vous n'avez pas de compte ?{" "}
                    <Link
                        to="/inscription/chef-groupe"
                        className="text-violet-500 hover:text-violet-800 font-medium"
                    >
                        Inscrivez-vous
                    </Link>
                </p>
            </ContainerFormsLogin>
        </>

    );
};

export default LoginCG;