import React from 'react';

const LongText = () => {

    const autoResize = (e) => {
        const textarea = document.querySelector(".textarea");

        e.target.style.height = "1px";
        e.target.style.height = (e.target.scrollHeight)+"px";
    }

    return (
        <textarea onChange={autoResize} className={"textfield longtext"}></textarea>
    );
};

export default LongText;