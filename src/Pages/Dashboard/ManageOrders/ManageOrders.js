import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const ManageOrders = () => {
    const { user } = useAuth();
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const url = `http://localhost:7000/purchases?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchases(data));
    }, []);

    return (
        <div>
            <Typography variant='h4' sx={{ mt: 5 }} gutterBottom component='div'>Orders, Total: {purchases.length}</Typography>
            <TableContainer sx={{ p: 10 }} component={Paper}>
                <Table aria-label="Orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell align="right">PROGRAM</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchases.map((purchase) => (
                            <TableRow
                                key={purchase._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {purchase.displayName}
                                </TableCell>
                                <TableCell align="right">{purchase.programName}</TableCell>
                                <TableCell align="right">{purchase.price}</TableCell>
                                <TableCell align="right">{purchase.payment ? 'Paid' : <NavLink to={`/dashboard/purchase/${purchase._id}`} style={{ textDecoration: 'none' }}><Button sx={{ color: '#fe0049' }} variant="text">Pay</Button></NavLink>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;