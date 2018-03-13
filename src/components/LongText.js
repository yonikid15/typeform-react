import React from 'react';

const LongText = ( { question, index } ) => {

    const autoResize = () => {
        const textarea = document.querySelector(".lt-textarea");
    }

    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={'question'}>
                <span>{question}</span>
            </div>
            <div className={"content"}>
                <textarea onChange={autoResize} className={"lt-textarea"}></textarea>
            </div>
        </div>
    );
};

export default LongText;