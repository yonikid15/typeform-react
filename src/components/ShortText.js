import React from 'react';

const ShortText = ( { question, index } ) => {
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
            <div className={"st-wrapper"}>
                <input className={"st-input"} type="text"/>
            </div>
        </div>
    );
};

export default ShortText;