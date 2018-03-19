import React from 'react';
import '../styles/Question.css';

const Question = ( { question } ) => {
    return (
        <div className={ "question" }>
            <span>{ question }</span>
        </div>
    );
};

export default Question;