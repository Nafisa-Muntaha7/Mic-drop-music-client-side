import React from 'react';
import Guitar from './Guitar';
import Oboe from './Oboe';

const LessonsBanner = () => {
    return (
        <div style={{ padding: '5%', backgroundColor: '#e1e9f2' }}>
            <Oboe />
            <Guitar />
        </div>
    );
};

export default LessonsBanner;