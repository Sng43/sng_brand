import Header from '../components/Header';
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
    <div>About</div>
    <div>Contact</div>
    <div>footer</div>
        </>
    );
}

export default HomePage;
