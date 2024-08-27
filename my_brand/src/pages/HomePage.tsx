import React from 'react';
import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Hero from '../Sections/Hero';

const HomePage = () => {
    return (
        <>
    <Header/>
    <Hero />
    <div>Services</div>
    <div>Work</div>
    <div>About</div>
    <div>Contact</div>
    <div>footer</div>
        </>
    );
}

export default HomePage;
