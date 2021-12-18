import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import girl from '../../../images/Promo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ background: 'black', color: 'white', padding: '3%', marginTop: '10%', position: 'relative' }}>
            <div class="custom-shape-divider-top-1639819860">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="col-4 pt-5">
                    <p><i className="fas fa-envelope pt-4"></i> micdrop07@email.com</p>
                    <p><i className="fas fa-phone-square-alt"></i> 1 562 867 5309</p>
                    <p><i className="fas fa-map-marker-alt"></i> Broadway &amp; Morris St, New York</p>
                </div>
                <div className="col-4 py-5">
                    <Link style={{ textDecoration: 'none' }} to="/home"><Button variant="text" sx={{ color: 'white' }}>Home</Button></Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to="/about-us"><Button variant="text" sx={{ color: 'white' }}>About Us</Button></Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to="/Courses"><Button variant="text" sx={{ color: 'white' }}>Courses</Button></Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to="/programs"><Button variant="text" sx={{ color: 'white' }}>Programs</Button></Link>
                </div>
                <div>
                    <img src={girl} style={{ width: '100%' }} alt="" />
                </div>
            </div>
            <footer style={{ padding: 10, mt: 4, borderRadius: 5, backgroundColor: '#fe0049' }}>Copyright &copy; Mic Drop.</footer>
        </div>

    );
};

export default Footer;