import React from 'react';

const Question = ( { question } ) => {
    return (
        <div className={ "question" }>
            <span>{ question }</span>
        </div>
    );
};

export default Question;