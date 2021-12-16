import { Box, Container } from '@mui/material';
import gallery1 from '../../../images/gallery_01.jpg';
import gallery2 from '../../../images/gallery_02.jpg';
import gallery3 from '../../../images/gallery_03.jpg';
import gallery4 from '../../../images/gallery_04.jpg';
import React from 'react';

const Gallery = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, display: 'flex', mt: -10, mb: 5 }}>
                <img src={gallery1} alt="" width='25%' />
                <img src={gallery2} alt="" width='25%' />
                <img src={gallery3} alt="" width='25%' />
                <img src={gallery4} alt="" width='25%' />
            </Box>
        </Container>
    );
};

export default Gallery;