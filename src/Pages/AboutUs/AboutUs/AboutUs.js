import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Features from '../Features/Features';
import Header from '../AboutHeader/AboutHeader';
import Teachers from '../Teachers/Teachers';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Teachers />
            <Footer />
        </>
    );
};

export default AboutUs;