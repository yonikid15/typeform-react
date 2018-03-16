import React from 'react';
import Wrapper from './Wrapper';
import '../styles/ItemWrapper.css';

const ItemWrapper = ( { children } ) => {
    return (
        <Wrapper className={"item-wrapper"}>
            {children}
        </Wrapper>
    );
};

export default ItemWrapper;