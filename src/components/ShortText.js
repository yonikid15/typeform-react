import React from 'react';

const ShortText = ( { question, index } ) => {
    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={'question'}>
                <span>{question}</span>
            </div>
            <div className={"content"}>
                <input className={"st-input"} type="text"/>
            </div>
        </div>
    );
};

export default ShortText;