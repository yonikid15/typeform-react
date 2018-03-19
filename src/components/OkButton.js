import React from 'react';
import Button from './Button';
import '../styles/OkButton.css';

const OkButton = () => {
    return (
        <Button className={"ok"}>
            <span>OK</span>
            <span><i className={"fa fa-check"}></i></span>
        </Button>
    );
};

export default OkButton;