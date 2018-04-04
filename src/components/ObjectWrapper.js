import React from 'react';
import Wrapper from './Wrapper';
import '../styles/ObjectWrapper.css';

const ObjectWrapper = ( { id, children } ) => {
    return (
        <Wrapper id={`${id}`} className={`object-wrapper`}>
            { children }
        </Wrapper>
    );
};

export default ObjectWrapper;