import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Advanced from '../Advanced/Advanced';
import Beginner from '../Beginner/Beginner';
import CourseHeader from '../CourseHeader/CourseHeader';
import Intermediate from '../Intermediate/Intermediate';

const Courses = () => {
    return (
        <>
            <Navbar />
            <CourseHeader />
            <Beginner />
            <Intermediate />
            <Advanced />
            <Footer />
        </>
    );
};

export default Courses;