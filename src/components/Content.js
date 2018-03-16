import React from 'react';
import '../styles/Content.css';

const Content = ( { content } ) => {
    return (
        <div className={ "content" }>
            <span>{ content }</span>
        </div>
    );
};

export default Content;