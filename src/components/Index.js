import React from 'react';
import '../styles/Index.css';

const Index = ( { index } ) => {
    return (
        <div className={ "index" }>
            <span>{ index }</span>
        </div>
    );
};

export default Index;