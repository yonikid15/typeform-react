import React from 'react';
import '../styles/Wrapper.css';

const Wrapper = ( { id, className, children } ) => {
    return (
        <div id={`${id}`} className={`wrapper ${className}`}>
            {children}
        </div>
    );
};

export default Wrapper;