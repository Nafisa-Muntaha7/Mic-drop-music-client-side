import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
// import { CardElement, Elements, useElements, useStripe } from '../../../../src';

const stripePromise = loadStripe('pk_test_51JwMjSKz6a7UejI3ibymOgI2LBg5uWYMru2hvH1Jc76RqEh7w3T2csk5K8lm4FADCNvaBd36uF4gfTlP8YdmbNxJ006pUF5C8y');

const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        fetch(`https://shielded-fjord-90529.herokuapp.com/purchases/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchase(data));
    }, [purchaseId]);

    return (
        <div>
            <Typography sx={{ m: 5 }} variant="h3" gutterBottom component='div'>Pay for <span style={{ color: '#fe0049', fontWeight: 500 }}>{purchase.programName}</span></Typography>
            <Typography variant="h4" gutterBottom component='div'>Pay: {purchase.price}</Typography>
            {/* <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements> */}
        </div>
    );
};

export default Purchase;