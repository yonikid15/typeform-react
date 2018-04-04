import React from 'react';
import '../styles/Button.css';

const Button = ( { onClick, className, children } ) => {
    return (
        <button 
            onClick={onClick} 
            className={`btn ${className}`}
        >   
            {children}
        </button>
    );
};

export default Button;