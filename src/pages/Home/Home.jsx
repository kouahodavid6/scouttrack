import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Hierarchy from "./components/Hierarchy";
import Units from "./components/Units";
import Problems from "./components/Problems";
import Fonctionnality from "./components/Fonctionnality";
import Avantages from "./components/Avantages";
import Testamonials from "./components/Testamonials";
import FAQ from "./components/FAQ";

import Footer from "./components/Footer";

const Home = () => {
    return(
        <>
            <Navbar />

            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}
            <div data-aos="fade-up" data-aos-delay="100">
                <About />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Hierarchy />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Units />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Problems />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Fonctionnality />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Avantages />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Testamonials />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <FAQ />
            </div>

            <Footer />
        </>
    );
}

export default Home;