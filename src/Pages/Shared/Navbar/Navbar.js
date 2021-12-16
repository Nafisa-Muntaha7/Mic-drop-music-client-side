import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#e0dedc', color: 'black' }} color="transparent" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '500' }}>
                        Mic Drop
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/home">
                        <Button variant='text' color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/about-us">
                        <Button variant='text' color="inherit">About-Us</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/courses">
                        <Button variant='text' color="inherit">Courses</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/programs">
                        <Button variant='text' color="inherit">Programs</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/blogs">
                        <Button variant='text' color="inherit">Blogs</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <>
                                <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
                                    <Button variant='text' color='inherit'>Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} variant='outlined' color="inherit">Logout</Button>
                            </>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                <Button variant='outlined' color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;