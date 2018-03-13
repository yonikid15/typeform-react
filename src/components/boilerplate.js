import React from 'react';

const Boilerplate = ( { question, index } ) => {
    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={"question"}>
                <span>{question}</span>
            </div>
            <div className={"content"}></div>
        </div>
    );
};

export default Boilerplate;