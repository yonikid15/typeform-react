import React from 'react';
import '../styles/Button.css';

const Button = ( { className, children } ) => {
    return (
        <button className={`btn ${className}`}>{children}</button>
    );
};

export default Button;