import React from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import '../styles/OkButton.css';

const OkButton = ( { onClick } ) => {
    return (
        <Wrapper className={"ok-wrapper"}>
            <Button className={"ok-btn"} onClick={onClick}>
                <span>OK</span>
                <span><i className={"fa fa-check"}></i></span>
            </Button>
            <span className={"ok-alt"}>press ENTER</span>
        </Wrapper>
    );
};

export default OkButton;