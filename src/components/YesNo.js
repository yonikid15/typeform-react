import React from 'react';

const YesNo = ( { index, question } ) => {
    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={"question"}>
                <span>{question}</span>
            </div>
            <ul className={"content mc-wrapper"}>
                <div className={"mc-option"}>
                    <span>Y</span>
                    <li>Yes</li>
                </div>
                <div className={"mc-option"}>
                    <span>N</span>
                    <li>No</li>
                </div>
            </ul>
        </div>
    );
};

export default YesNo;