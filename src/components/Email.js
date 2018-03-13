import React from 'react';

const Email = ( { question, index } ) => {
    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={"question"}>
                <span>{question}</span>
            </div>
            <div className={"content"}>
                <input 
                    placeholder={"Enter email here..."}
                    className={"textfield"} 
                    type="email" 
                />
            </div>
        </div>
    );
};

export default Email;