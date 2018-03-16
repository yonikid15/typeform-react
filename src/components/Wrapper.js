import React from 'react';
import '../styles/Wrapper.css';

const Wrapper = ( { className, children } ) => {
    return (
        <div className={`wrapper ${className}`}>
            {children}
        </div>
    );
};

export default Wrapper;