import React from 'react';

const MultipleChoice = ( { options, question, index } ) => {

    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        <div>
            <div className={"question-wrapper"}>
                <div className={"index"}>
                    <span>{index}</span>
                </div>
                <div className={'question'}>
                    <span>{question}</span>
                </div>
            </div>
            <ul className={"mc-wrapper"}>
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