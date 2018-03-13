import React from 'react';

const Statement = ( { statement } ) => {
    return (
        <div className={"component-wrapper statement"}>
            <div className={"item"}>“</div>
            <div className={"question"}>
                <span>{statement}</span>
            </div>
            <div className={"content"}></div>
        </div>
    );
};

export default Statement;