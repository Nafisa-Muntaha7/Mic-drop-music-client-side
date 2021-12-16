import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import girlwithmic from '../../../images/girl.with.mic.png';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, user, error, loading } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleFormSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
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
                            label="Your Name"
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="text"
                            name="name"
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="email"
                            name="email"
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="password"
                            name="password"
                        />
                        <TextField
                            id="standard-basic"
                            label="Rewrite Password"
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            variant="standard"
                            type="password"
                            name="password2"
                        />
                        <Button onClick={handleFormSubmit} variant='outlined' sx={{ px: 15, m: 1 }}>Register</Button>
                        <br />
                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant='text'>Already registered? Please Log In.</Button>
                        </NavLink>
                    </form>}
                    {loading && <CircularProgress color="secondary" />}
                    {user?.email && <Alert severity='success'>Successfully registered!</Alert>}
                    {error && <Alert severity='error'>{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={girlwithmic} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;