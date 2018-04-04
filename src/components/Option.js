import React from 'react';
import '../styles/Option.css';

const Option = ( { value, name, letter } ) => {

    const setValue = () => {
        if( value ) { 
            console.log( value );
        } else {
            console.log( name );
        }
    }

    return (
        <div onClick={setValue} className={ 'mc-option' }>
            <span>{ letter }</span>
            <li>{ name }</li>
        </div>
    );
};

export default Option;