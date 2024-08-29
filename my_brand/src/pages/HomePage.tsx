import Header from '../components/Header';
import About from '../Sections/About';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Work from '../Sections/Work';

const HomePage = () => {
    return (
        <>
    <Header/>
    <Hero />
    <Services/>
    <Work />
    <About />
    <div>Contact</div>
    <div>footer</div>
        </>
    );
}

export default HomePage;
