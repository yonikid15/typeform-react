import React from 'react';
import Wrapper from './Wrapper';
import '../styles/FormWrapper.css';

const FormWrapper = ( { children } ) => {
    return (
        <Wrapper className={"form-wrapper"}>
            { children }
        </Wrapper>
    );
};

export default FormWrapper;