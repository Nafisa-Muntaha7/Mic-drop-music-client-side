import { Card, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/allReviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Container sx={{ my: '5%' }}>
            <Typography variant="h3" sx={{ mb: 5, fontWeight: 500 }}> Reviews </Typography>
            <Grid container spacing={5}>
                {
                    reviews?.map(review => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: '100%', height: '100%', boxShadow: 3, padding: 3, backgroundColor: '#e1e9f2' }}>
                                <Typography variant="h5">
                                    <ReviewsIcon /> {review?.name}
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Email: {review?.email}
                                </Typography>
                                <Typography variant="body1">
                                    {review?.review}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    value={review?.rating}
                                    readOnly />
                            </Card>
                        </Grid>
                    ))};
            </Grid>
        </Container>
    );
};

export default Reviews;