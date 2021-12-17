import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import MusicSchool from '../MusicSchool/MusicSchool';
import Banner from '../Banner/Banner';
import LessonsBanner from '../LessonsBanner/LessonsBanner';
import Gallery from '../Gallery/Gallery';
import Events from '../Events/Events';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <MusicSchool />
            <LessonsBanner />
            <Gallery />
            <Events />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;