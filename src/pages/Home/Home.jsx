import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from '../../assets/images/banniere.png';
import lesScoutEnActivité from '../../assets/images/lesScoutEnActivité.jpg';
import Conteneur from "./components/Conteneur";
import { useRef } from 'react'; 
import Sections from "./components/Sections";
import BranchesSection from "./components/BranchesSection";
import { branches } from '../../data/scoutHomeData';
import ActivitesSection from "./components/ActivitesSection";
import { activities } from "../../data/scoutHomeData";
import TemoignagesSection from "./components/TemoignagesSection";
import { temoignages } from "../../data/scoutHomeData";
import Footer from "./components/Footer";

const Home = () => {
    const aboutSectionRef = useRef(null);

    const scrollToAbout = () => {
        aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

  // Variants pour les animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    };

    const buttonVariants = {
        hover: {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Section Hero */}
            <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Arrière-plan animé */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        filter: 'brightness(0.7)'
                    }}
                    transition={{ 
                        duration: 1.5,
                        filter: { duration: 0.5 }
                    }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroBanner}
                        alt="Bannière hero"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-black"
                    />
                </motion.div>

                {/* Contenu principal */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center px-6 sm:px-8 lg:px-4 w-full max-w-6xl mx-auto text-white"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                    >
                        Bienvenue chez <span className="text-yellow-400">Les Mohicans</span>
                    </motion.h1>
                
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto"
                    >
                        Groupe scout catholique de la paroisse Saint Sauveur Miséricordieux du district les Blackfeet
                    </motion.p>
                
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-2"
                        initial={{ y: -10 }}
                            animate={{ 
                                y: [0, -15, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}
                    >
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollToAbout}
                            className="flex items-center justify-center gap-3 bg-transparent bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg"
                        >
                            En savoir plus
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section Qui sommes nous ? */}
            <section
                ref={aboutSectionRef} 
                id="qui-sommes-nous" 
                className="bg-white h-[max-content] p-10"
            >
                <div className="relative z-10 text-center px-6 sm:px-8 lg:px-4 w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Qui sommes-nous ?
                    </h1>
                
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Les Mohicans est un groupe scout catholique basé à la paroisse Saint Sauveur Miséricordieux à 
                        Yopougon. Nous faisons partie du district Les Blackfeet de la région de Yopougon de l'ASCCI.
                        Nous nous engageons à former des jeuns citoyens responsables, actifs et engagés dans leur
                        communauté.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Conteneur>
                            <h3 className="text-xl text-violet-900 text-start font-bold mb-3">Notre mission</h3>

                            <p className="text-gray-600 text-start mb-4">
                                Former des jeunes responsables, actifs et engagés, capables de prendre leur place dans la société 
                                et l'Église. Nous visons à développer chez chaque jeune des compétences physiques, intellectuelles, 
                                émotionnelles, sociales et spirituelles.
                            </p>

                            <h3 className="text-xl text-violet-900 text-start font-bold mb-3">Nos valeurs</h3>

                            <ul className="list-disc text-start list-inside text-gray-600 space-y-2">
                                <li>Le respect de soi, des autres et de l'environnement</li>
                                <li>Le service et l'engagement communautaire</li>
                                <li>La spiritualité et la foi catholique</li>
                                <li>La camaraderie et l'esprit d'équipe</li>
                                <li>L'autonomie et la responsabilité</li>
                            </ul>
                        </Conteneur>

                        <Conteneur>
                            <img
                                src={lesScoutEnActivité}
                                alt="Les scouts en activité" 
                                className="w-full h-full object-cover"
                            />
                        </Conteneur>
                    </div>
                </div>
            </section>

            {/* Section Nos branches */}
            <Sections className="py-16 bg-violet-50 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos branches</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-10">
                    Le scoutisme s'adapte à chaque tranche d'âge avec des pédagogies spécifiques 
                    qui répondent aux besoins de développement des jeunes.
                </p>
                <BranchesSection branches={branches} />
            </Sections>

            {/* Section Nos branches */}
            <Sections className="py-16 bg-white px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos activités principales</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-10">
                    Découvrez les principales activités que nous avons au cours des années
                </p>
                <ActivitesSection activities={activities} />
            </Sections>

            {/* Section Témoignages */}
            <Sections className="py-16 bg-[#fefce8] px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
                <p className="max-w-3xl mx-auto text-gray-600 mb-10">
                    Ce que disent les membres, les parents et les chefs de notre groupe scout.
                </p>
                <TemoignagesSection testimonials={temoignages} />
            </Sections>

            {/* Section de contact */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-violet-700 rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                        <div className="mb-6 md:mb-0 md:w-2/3">
                            <h2 className="text-2xl font-bold text-white mb-2">Rejoignez-nous!</h2>
                            <p className="text-green-100 mb-4 md:pr-4">
                                Vous souhaitez que votre enfant rejoigne notre groupe scout ou vous voulez 
                                vous engager comme bénévole? Contactez-nous dès aujourd'hui!
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <a
                                href={`https://wa.me/2250171136261?text=Bonjour%20Les%20Moïcans,%20je%20suis%20intéressé%20par%20vos%20activités%20scouts`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-violet-700 transition-colors duration-300"
                            >
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;