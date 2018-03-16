import React from 'react';
import '../styles/Option.css';

const Option = ( { name, letter } ) => {
    return (
        <div className={ 'mc-option' }>
            <span>{ letter }</span>
            <li>{ name }</li>
        </div>
    );
};

export default Option;