import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import GuitarOffer from '../GuitarOffer/GuitarOffer';
import Services from '../Services/Services';

const Programs = () => {
    return (
        <>
            <Navbar />
            <Services />
            <GuitarOffer />
            <Footer />
        </>
    );
};

export default Programs;