import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import guitarGirl from '../../../images/guitar.girl.png'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const { registerUser, loading } = useAuth();

    const handleFormSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    };

    return (
        <Container sx={{ margin: '3%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 15 }}>
                    <Typography sx={{ mb: 3 }} variant="h3" component='div'>Register</Typography>
                    {!loading && <form onSubmit={handleFormSubmit}>
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
                        <TextField
                            id="standard-basic"
                            label="Rewrite Password"
                            onChange={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="password"
                            name="password2"
                        />
                        <Button onSubmit={handleFormSubmit} variant='outlined' sx={{ px: 15, m: 1 }}>Register</Button>
                        <br />
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant='text'>Already registered? Please Log In.</Button>
                        </NavLink>
                    </form>}
                    {loading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={guitarGirl} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;