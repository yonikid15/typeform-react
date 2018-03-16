import React from 'react';
import Wrapper from './Wrapper';
import '../styles/ObjectWrapper.css';

const ObjectWrapper = ( { children } ) => {
    return (
        <Wrapper className={"object-wrapper"}>
            { children }
        </Wrapper>
    );
};

export default ObjectWrapper;