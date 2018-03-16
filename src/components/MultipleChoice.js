import React from 'react';
import Option from './Option';

const MultipleChoice = ( { options } ) => {

    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        <ul className={" mc-wrapper"}>
            {
                options.map( ( option, i ) => {
                    return (
                        <Option 
                            letter={ getLetter(i) }
                            name={ option.name }
                        />
                    );
                })
            }
        </ul>
    );
};

export default MultipleChoice;