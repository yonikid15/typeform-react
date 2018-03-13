import React from 'react';

const MultipleChoice = ( { options, question, index } ) => {

    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={'question'}>
                <span>{question}</span>
            </div>
            <ul className={"content mc-wrapper"}>
                {
                    options.map( ( option, i ) => {
                        return (
                            <div className={'mc-option'}>
                                <span>{getLetter(i)}</span>
                                <li>{option.name}</li>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
        
    );
};

export default MultipleChoice;