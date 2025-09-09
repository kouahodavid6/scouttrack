import { Navigate } from "react-router-dom";
import useAuthStore from "./../stores/auth.store";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { user } = useAuthStore();

    if (!user) {
        return <Navigate to="/connexion/chef-groupe" replace />;
    }

    // Le rôle ici est soit 'CG' soit le nom de la branche CU
    const userRole = user.branche || "CG";

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
