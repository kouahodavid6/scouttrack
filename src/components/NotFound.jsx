import { Link } from 'react-router-dom';
import { Map, Home, Users, Target, Flag, Compass, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 text-gray-900 px-4 relative overflow-hidden">
            {/* Effets de fond décoratifs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200/40 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-200/40 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-300/20 rounded-full blur-lg"></div>
            
            <motion.div 
                className="max-w-md text-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Icône scout */}
                <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                    <img
                        src="/LogoScoutTrack1.png" 
                        alt="Logo ScoutTrack"
                        className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl object-cover shadow-lg border border-gray-300"
                    />
                </motion.div>

                {/* Code erreur */}
                <motion.h1 
                    className="text-8xl font-black mb-4 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
                >
                    404
                </motion.h1>

                {/* Titre */}
                <motion.h2 
                    className="text-3xl font-bold mb-3 text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    Piste non trouvée
                </motion.h2>

                {/* Message */}
                <motion.p 
                    className="mb-8 text-gray-700 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Oups ! Il semble que cette piste scoute ait été modifiée ou n'existe plus. 
                    Revenons sur le bon chemin avec ScoutTrack.
                </motion.p>

                {/* Bouton de retour */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1"
                    >
                        <Home className="h-5 w-5" />
                        Retour à l'accueil
                    </Link>
                </motion.div>

                {/* Message secondaire avec logo */}
                <motion.div 
                    className="mt-6 text-sm text-gray-600 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="w-6 h-6 bg-purple-700 rounded flex items-center justify-center">
                        <Shield className="h-3.5 w-3.5 text-white" />
                    </div>
                    Revenez vers ScoutTrack !
                </motion.div>
            </motion.div>

            {/* Décorations bas de page scoutes */}
            <div className="absolute top-15 left-20 opacity-10">
                <img
                    src="/logo_ascci.png" 
                    alt="Logo ScoutTrack"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-cover shadow-lg border border-gray-300"
                />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20">
                <Flag className="h-6 w-6 text-blue-600" />
            </div>

            {/* Éléments décoratifs supplémentaires scouts */}
            <div className="absolute top-10 right-16 opacity-15">
                <Compass className="h-10 w-10 text-purple-600" />
            </div>
            
            <div className="absolute top-20 left-16 opacity-15">
                <Users className="h-8 w-8 text-purple-600" />
            </div>
            
            <div className="absolute bottom-32 left-20 opacity-15">
                <Map className="h-7 w-7 text-blue-600" />
            </div>
            
            <div className="absolute top-32 right-20 opacity-15">
                <Shield className="h-9 w-9 text-purple-600" />
            </div>

            {/* Logo ScoutTrack en décoratif */}
            <div className="absolute bottom-10 right-20 opacity-10">
                <img
                    src="/LogoScoutTrack1.png" 
                    alt="Logo ScoutTrack"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-cover shadow-lg border border-gray-300"
                />
            </div>
        </div>
    );
};

export default NotFound;