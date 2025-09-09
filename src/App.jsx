import { Toaster } from 'react-hot-toast';
import { CheckCircle, XCircle } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import LoginCG from './pages/Auth/LoginCG';
import RegisterCG from './pages/Auth/RegisterCG';
import LoginCU from './pages/Auth/LoginCU';
import RegisterCU from './pages/Auth/RegisterCU';

import DashboardCG from './pages/DashboardUtilisateurs/DashboardCG/DashboardCG';
import DashboardCGRecrutement from './pages/DashboardUtilisateurs/DashboardCG/DashboardCGRecrutement';
import DashboardCGTousLesMembres from './pages/DashboardUtilisateurs/DashboardCG/DashboardCGTousLesMembres';
import DashboardCGResponsables from './pages/DashboardUtilisateurs/DashboardCG/DashboardCGResponsables';
import DashboardCGParametre from './pages/DashboardUtilisateurs/DashboardCG/DashboardCGParametre';

import DashboardOisillon from './pages/DashboardUtilisateurs/DashboardOisillon/DashboardOisillon';

import DashboardMeute from './pages/DashboardUtilisateurs/DashboardMeute/DashboardMeute';

import DashboardTroupe from './pages/DashboardUtilisateurs/DashboardTroupe/DashboardTroupe';

import DashboardGeneration from './pages/DashboardUtilisateurs/DashboardGeneration/DashboardGeneration';

import DashboardCommunaute from './pages/DashboardUtilisateurs/DashboardCommunaute/DashboardCommunaute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Notifications toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#f5f3ff",
            color: "#4c1d95",
            border: "1px solid #c4b5fd",
            padding: "12px 16px",
            fontWeight: "500",
            fontSize: "14px",
          },
          success: {
            icon: <CheckCircle className="text-[#166534] w-5 h-5" />,
            style: {
              background: "#bbf7d0",
              color: "#166534",
              borderColor: "#4ade80",
            },
          },
          error: {
            icon: <XCircle className="text-[#7f1d1d] w-5 h-5" />,
            style: {
              background: "#fee2e2",
              color: "#7f1d1d",
              borderColor: "#fca5a5",
            },
          },
        }}
      />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Authentification */}
            <Route path="/connexion/chef-groupe" element={<LoginCG />} />
            <Route path="/inscription/chef-groupe" element={<RegisterCG />} />
            <Route path="/connexion/chef-unite" element={<LoginCU />} />
            <Route path="/inscription/chef-unite" element={<RegisterCU />} />

            {/* Route protégée */}

            {/* Dashboard CG */}
            <Route
              path="/dashboard-cg"
              element={
                <ProtectedRoute allowedRoles={["CG"]}>
                  <DashboardCG />
                </ProtectedRoute>
              }
            />
            {/* Dashboard CG - Recrutement */}
            <Route
              path="/dashboard-cg/recrutement"
              element={
                <ProtectedRoute allowedRoles={["CG"]}>
                  <DashboardCGRecrutement />
                </ProtectedRoute>
              }
            />
            {/* Dashboard CG - Tous les membres */}
            <Route 
              path="/dashboard-cg/membres"
              element={
                <ProtectedRoute allowedRoles={["CG"]}>
                  <DashboardCGTousLesMembres />
                </ProtectedRoute>
              }
            />
            {/* Dashboard CG - Chefs d'unités */}
            <Route 
              path='/dashboard-cg/responsables'
              element={
                <ProtectedRoute allowedRoles={["CG"]}>
                  <DashboardCGResponsables />
                </ProtectedRoute>
              }
            />
            {/* Dashboard CG - Paramètre */}
            <Route 
              path='/dashboard-cg/parametre'
              element={
                <ProtectedRoute allowedRoles={["CG"]}>
                  <DashboardCGParametre />
                </ProtectedRoute>
              }
            />



            {/* Dashboards CU par branche */}
            <Route
              path="/dashboard-oisillon"
              element={
                <ProtectedRoute allowedRoles={["Oisillon"]}>
                  <DashboardOisillon />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard-meute"
              element={
                <ProtectedRoute allowedRoles={["Meute"]}>
                  <DashboardMeute />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard-troupe"
              element={
                <ProtectedRoute allowedRoles={["Troupe"]}>
                  <DashboardTroupe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard-generation"
              element={
                <ProtectedRoute allowedRoles={["Generation"]}>
                  <DashboardGeneration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard-communaute"
              element={
                <ProtectedRoute allowedRoles={["Communaute"]}>
                  <DashboardCommunaute />
                </ProtectedRoute>
              }
            />

            {/* Accès refusé */}
            <Route path="/unauthorized" element={<h1>Accès refusé</h1>} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;