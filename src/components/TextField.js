import React from 'react';
import '../styles/TextField.css';

const TextField = ( { children } ) => {
    return (
        <div className={"textfield"}>
            {children}
        </div>
    );
};

export default TextField;