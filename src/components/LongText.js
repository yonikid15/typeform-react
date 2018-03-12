import React from 'react';

const LongText = ( { question, index } ) => {

    const autoResize = () => {
        const textarea = document.querySelector(".lt-textarea");
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
            <div className={"lt-wrapper"}>
                <textarea onChange={autoResize} className={"lt-textarea"}></textarea>
            </div>
        </div>
    );
};

export default LongText;