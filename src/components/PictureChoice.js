import React from 'react';
import Image from './Image';

const PictureChoice = ( { index, question, images } ) => {
    
    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        <div className={"component-wrapper"}>
            <div className={"item"}>
                <span>{index}</span>
            </div>
            <div className={"question"}>
                <span>{question}</span>
            </div>
            <ul className={"content"}>
                {
                    images.map( ( image, i ) => {
                        return <Image 
                                    image={image.img} 
                                    letter={getLetter(i)}
                                    name={image.name}
                                />
                    })
                }
            </ul>
        </div>
    );
};

export default PictureChoice;