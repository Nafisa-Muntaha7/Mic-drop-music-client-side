import { TextField, Button, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [added, setAdded] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://shielded-fjord-90529.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setAdded(true);
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: '10%' }}> Make Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '35%', mt: 3 }}
                />
                <br />
                <Button
                    type="submit"
                    variant="outlined"
                    sx={{ backgroundColor: '#fe0049', m: '3%', px: '25px', py: '8px', borderRadius: 10, color: 'black' }}>Make admin </Button>
            </form>
            {added && <Alert severity="success">Admin Added</Alert>}
        </div>
    );
};

export default MakeAdmin;