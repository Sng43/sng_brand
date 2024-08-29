import React from 'react';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';

const HomePage = () => {
    return (
        <>
    <Header/>
    <Hero />
    <Services/>
    <div>Work</div>
    <div>About</div>
    <div>Contact</div>
    <div>footer</div>
        </>
    );
}

export default HomePage;
