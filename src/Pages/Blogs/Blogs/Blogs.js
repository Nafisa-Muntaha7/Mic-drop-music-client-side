import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AllBlogs from '../AllBlogs/AllBlogs';

const Blogs = () => {
    return (
        <>
            <Navbar />
            <AllBlogs />
            <Footer />
        </>
    );
};

export default Blogs;