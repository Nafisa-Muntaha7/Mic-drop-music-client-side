import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51KEo6oFMl2DNh5qI9fX2xzp3feDffjxdyMwmDNHLjo5NKnUYS43sbWCCJcxNtM4xH0oMWjG3rppEaxtMufVNlm1N00ON8fWuPi');


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

            <Elements stripe={stripePromise}>
                <CheckOutForm
                    purchase={purchase}
                />
            </Elements>


        </div>
    );
};

export default Purchase;