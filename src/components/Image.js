import React from 'react';

const Image = ( { image, letter, name } ) => {
    return (
        <div className={"mc-option image-wrapper"} >
            <img src={`${image}`}/>
            <span>{letter}</span>
            <li>{name}</li>
        </div>
    );
};

export default Image;