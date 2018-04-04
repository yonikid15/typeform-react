import React from 'react';
import Option from './Option';

const MultipleChoice = ( { options } ) => {

    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        options.map( ( option, i ) => {
            return (
                <Option 
                    value={ option.value }
                    letter={ getLetter(i) }
                    name={ option.name }
                />
            );
        })  
    );
};

export default MultipleChoice;