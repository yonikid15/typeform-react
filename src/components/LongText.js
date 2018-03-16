import React from 'react';

const LongText = () => {

    const autoResize = () => {
        const textarea = document.querySelector(".lt-textarea");
    }

    return (
        <div className={"content"}>
            <textarea onChange={autoResize} className={"textfield longtext"}></textarea>
        </div>
    );
};

export default LongText;