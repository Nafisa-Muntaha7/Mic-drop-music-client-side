import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import girlwithmic from '../../../images/girl.with.mic.png'
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, error, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleFormSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container sx={{ margin: '3%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={girlwithmic} alt="" />
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
                        <Button onClick={handleFormSubmit} variant='outlined' sx={{ px: 15, m: 1 }}>Log In</Button>
                        {loading && <CircularProgress color="secondary" />}
                        {user?.email && <Alert severity='success'>Successfully logged in!</Alert>}
                        {error && <Alert severity='error'>{error}</Alert>}
                    </form>
                    <Button onClick={handleGoogleSignIn} variant='text' sx={{ color: 'black', mb: 2 }}><GoogleIcon /> Log In With Google</Button>
                    <br />
                    <NavLink to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant='text'>New User? Please Register.</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;