import React from 'react';
import Image from './Image';

const PictureChoice = ( { images } ) => {
    
    const getLetter = (i) => {
        return String.fromCharCode( `${i}`.charCodeAt() + 17 );
    }

    return (
        images.map( ( image, i ) => {
            return <Image 
                        image={image.img} 
                        letter={getLetter(i)}
                        name={image.name}
                    />
        })
    );
};

export default PictureChoice;