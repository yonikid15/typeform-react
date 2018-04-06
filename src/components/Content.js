import React from 'react';
import '../styles/Content.css';

const Content = ( { content, handleNextStep, handlePreviousStep } ) => {
    return (
        <div className={ "content" }>
            {React.cloneElement( content, { handleNextStep: handleNextStep } )}
        </div>
    );
};

export default Content;