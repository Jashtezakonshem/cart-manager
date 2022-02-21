import React from 'react';

const CustomButton = ({ onPress, label }) => {
    return (
        <button onClick={onPress}>{label}</button>
    );
};

export default CustomButton;
