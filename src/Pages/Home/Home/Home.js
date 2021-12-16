import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import MusicSchool from '../MusicSchool/MusicSchool';
import Banner from '../Banner/Banner';
import LessonsBanner from '../LessonsBanner/LessonsBanner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <MusicSchool />
            <LessonsBanner />
            <Gallery />
            <Footer />
        </>
    );
};

export default Home;