import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import guitarGirl from '../../../images/guitar.girl.png'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleFormSubmit = e => {
        e.preventDefault();
    };

    return (
        <Container sx={{ margin: '3%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={guitarGirl} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                    <Typography sx={{ mb: 3 }} variant="h3" component='div'>Log In</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="email"
                            name="email"
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="password"
                            name="password"
                        />
                        <Button onSubmit={handleFormSubmit} variant='outlined' sx={{ px: 15, m: 1 }}>Log In</Button>
                        <br />
                        <NavLink to="/register" style={{ textDecoration: 'none' }}>
                            <Button variant='text'>New User? Please Register.</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;