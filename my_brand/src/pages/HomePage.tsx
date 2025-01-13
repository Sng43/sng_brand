import Header from '../components/Header';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Footer from '../Sections/Footer';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import TechStack from '../Sections/TechStack'
import Work from '../Sections/Work';
import ReactLenis from 'lenis/react';

const HomePage = () => {
    return (
    <ReactLenis root>
        <main className='h-[800x]'>
        <Header/>
        <div id='home'>
        <Hero />
        <TechStack/>
        </div>
        <div id='services'>
        <Services/>
        </div>
        <div id='works'>
        <Work />
        </div>
        <About />
        <div id='contact'>
        <Contact />
        </div>
        <Footer />
        </main>
    </ReactLenis>
    );
}

export default HomePage;
