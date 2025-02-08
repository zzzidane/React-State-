import React from 'react';

const Timer = ({ time }) => {
    return (
        <p style={{ marginTop: '20px' }}>
            Temps écoulé depuis le montage : {time} secondes
        </p>
    );
};

export default Timer;