import { Link, useNavigate } from "react-router-dom";
import ContainerFormsLogin from "./components/ContainerFormsLogin";
import Input from "../../components/Input";
import { ArrowLeft, TentTree } from "lucide-react";
import { useState } from "react";
import useAuthStore from "./../../stores/auth.store";
import ErrorModal from "../../components/ErrorModal";

const LoginCU = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        branche: ""
    });

    const navigate = useNavigate();
    const {loginCU, error, showError, clearError, loading} = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();

        clearError();

        try {
            const res = await loginCU(formData);
            const branche = res.data.data.branche;

            localStorage.setItem("token", res.data.token);

            switch (branche) {
                case "Oisillon":
                    navigate("/dashboard-oisillon");
                    break;
                case "Meute":
                    navigate("/dashboard-meute");
                    break;
                case "Troupe":
                    navigate("/dashboard-troupe");
                    break;
                case "Generation":
                    navigate("/dashboard-generation");
                    break;
                case "Communaute":
                    navigate("/dashboard-communaute");
                    break;
                default:
                    navigate("/connexion/chef-unite");
            }
        } catch (error) {
            console.error("Erreur de connexion CU :", error);
        }
    };

    return (
        <>
            {showError && <ErrorModal error={error} onClose={clearError} />}

            <ContainerFormsLogin>
                {/* HEADER */}
                <div className="w-full flex items-center justify-between py-4 px-1">
                    <Link
                        to="/"
                        className="rounded-full p-1 flex items-center justify-center transition-colors bg-neutral-500 hover:bg-neutral-800"
                    >
                        <ArrowLeft color="white" className="h-6 w-6 sm:h-5 sm:w-5 xs:h-4 xs:w-4" />
                    </Link>

                    <h2 className="text-xl sm:text-2xl font-bold text-violet-700 mb-2 text-center">
                        Connexion CU
                    </h2>

                    <TentTree className="h-7 w-7 sm:h-8 sm:w-8 xs:h-6 xs:w-6 text-yellow-400" />
                </div>

                <p className="text-sm text-gray-600 text-center mb-6 px-4 sm:px-8">
                    Rejoignez votre espace, guidez votre unité.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
                    {/* Sélecteur de branche */}
                    <div>
                        <label htmlFor="branche" className="block text-sm font-medium text-gray-700 mb-1">
                            Branche <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="branche"
                            name="branche"
                            required
                            value={formData.branche}
                            onChange={(e) => setFormData({ ...formData, branche: e.target.value })}
                            className="w-full px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 mt-1"
                        >
                            <option value="">Sélectionnez une branche</option>
                            <option value="Oisillon">Le Nid</option>
                            <option value="Meute">La Meute</option>
                            <option value="Troupe">La Troupe</option>
                            <option value="Generation">La Génération</option>
                            <option value="Communaute">La Communauté</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="chefdunite@gmail.com"
                            className="w-full"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    {/* Mot de passe */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                        <Link to="/forgot-password" className="text-sm text-violet-500 hover:text-violet-800">
                            Mot de passe oublié ?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {loading ? "Connexion en cours..." : "Se connecter"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600 px-4">
                    Vous êtes un nouveau chef d’unité ?{" "}
                    <Link to="/inscription/chef-unite" className="text-violet-500 hover:text-violet-800 font-medium">
                        Inscrivez-vous
                    </Link>
                </p>
            </ContainerFormsLogin>
        </>
    );
};

export default LoginCU;