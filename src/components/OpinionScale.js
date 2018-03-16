import React from 'react';

const OpinionScale = ( { question, index, scale, left, center, right } ) => {
    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={"question"}>
                <span>{question}</span>
            </div>
            <div className={"content"}>
                <ul>
                    {
                        scale.map( element => {
                            
                        })
                    }  
                </ul>
            </div>
        </div>
    );
};

export default OpinionScale;