import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import girl from '../../../images/Promo.png';

const Footer = () => {
    return (
        <div style={{ background: 'black', color: 'white', padding: '3%', marginTop: '10%' }}>
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