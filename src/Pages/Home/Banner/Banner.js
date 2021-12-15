import React from 'react';
import guitar from '../../../images/girl.with.guitar .jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={guitar} alt="" />
        </div>
    );
};

export default Banner;