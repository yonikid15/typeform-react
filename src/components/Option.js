import React from 'react';
import { connect } from 'react-redux';
import { highlightNext } from '../actions/typeform';
import '../styles/Option.css';

const Option = ( { value, name, letter, handleNextStep } ) => {

    const setValue = () => {
        if( value ) { 
            // save value to state
            // move to next question on screen
            // highlightNext( driver, currentQuestion );
            handleNextStep();
            console.log( value );
        } else {
            console.log( name );
        }
    }

    return (
        <div onClick={setValue} className={ 'mc-option' }>
            <span>{ letter }</span>
            <li>{ name }</li>
        </div>
    );
};

const mapStateToProps = ( state ) => ({
    driver: state.typeform.driver,
    currentQuestion: state.typeform.currentQuestion
})

const mapDispatchToProps = ( dispatch ) => ({
    highlightNext: ( driver, currentQuestion ) => dispatch( highlightNext( driver, currentQuestion ))
});

export default connect( mapStateToProps, mapDispatchToProps )( Option );