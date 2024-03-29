import { Alert, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [added, setAdded] = useState(false);
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch('https://shielded-fjord-90529.herokuapp.com/addReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
        setAdded(true);
        console.log(data);
    }

    return (
        <Grid item xs={12} md={12} sx={{ mt: '10%' }}>
            <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: 500 }}>
                Add a review</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    defaultValue={user.displayName}
                    style={{ width: '30%', padding: 10 }}
                    {...register("name")} />
                <br />
                <input
                    placeholder="Email"
                    defaultValue={user.email}
                    style={{ width: '30%', margin: 15, padding: 10 }}
                    {...register("email", { required: true })} />
                {errors.email &&
                    <span className="text-danger">
                        This field is required
                    </span>}
                <br />
                <input
                    placeholder="Review"
                    style={{ width: '30%', padding: 10 }}
                    {...register("review", { required: true })} />
                {errors.email &&
                    <span className="text-danger">
                        This field is required
                    </span>}
                <br />
                <input
                    placeholder="Rating"
                    style={{ width: '30%', margin: 15, padding: 10 }}
                    {...register("rating")} />
                <br />
                <button
                    style={{ backgroundColor: '#e3196a' }}
                    className="btn text-white">
                    Submit</button>
            </form>
            {added && <Alert severity="success">Review Added</Alert>}
        </Grid>
    );
};

export default AddReview;