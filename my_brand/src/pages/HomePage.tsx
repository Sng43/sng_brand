import Header from '../components/Header';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Work from '../Sections/Work';
import ReactLenis from 'lenis/react';

const HomePage = () => {
    return (
    <ReactLenis root>
        <Header/>
        <Hero />
        <Services/>
        <Work />
        <About />
        <Contact />
        <Footer />
    </ReactLenis>
    );
}

export default HomePage;
