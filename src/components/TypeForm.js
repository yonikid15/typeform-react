import React from 'react';
import { connect } from 'react-redux';
import { startDriver, handleNextStep, createStepDefinition, defineDriverSteps} from '../driver/driver';
import { nextQuestion, highlightNext } from '../actions/typeform';

import FormWrapper from './FormWrapper';
import ItemWrapper from './ItemWrapper';
import ObjectWrapper from './ObjectWrapper';
import Question from './Question';
import Index from './Index';
import Content from './Content';
import '../../node_modules/driver.js/dist/driver.min.css';

// Form Components
import MultipleChoice from './MultipleChoice';
import ShortText from './ShortText';
import LongText from './LongText';
import Statement from './Statement';
import PictureChoice from './PictureChoice';
import YesNo from './YesNo';
import Email from './Email';

export class TypeForm extends React.Component {

    componentDidMount () {
        const steps = createStepDefinition( this.props.formPopulation );
        defineDriverSteps( steps );
        startDriver();
    }

    getContent = ({ type, options, statement, images } ) => {
        
        switch( type ) {
            case 'MULTIPLE_CHOICE':
                return <MultipleChoice options={options} />
            case 'SHORT_TEXT':
                return <ShortText />
            case 'LONG_TEXT':
                return <LongText />
            case 'STATEMENT':
                return undefined;
                // return <Statement statement={statement} />
            case 'PICTURE_CHOICE':
                return <PictureChoice images={images} />
            case 'YES_NO':
                return <YesNo />
            case 'EMAIL':
                return <Email />
            default:
                return undefined;
        };
    };

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        const { formPopulation } = this.props;

        
        return (
            <form onSubmit={this.onSubmit}>
                <FormWrapper>
                {
                    formPopulation === 0 ? 
                        undefined 
                    :

                    Object.keys(formPopulation).map( ( key, i ) => {
                        return  (
                            <ObjectWrapper id={`${key}`}>
                                <Index index={ ( i + 1 ) } />
                                <Question 
                                    question={ formPopulation[key].question } 
                                />
                                <Content 
                                    content={this.getContent( formPopulation[key] )}
                                    handleNextStep={handleNextStep}
                                />
                            </ObjectWrapper>
                        )
                    })
                }
                </FormWrapper>
            </form>
        );
    };
};

const mapStateToProps = (state) => ({
    currentQuestion: state.typeform.currentQuestion
});

const mapDispatchToProps = (dispatch) => ({
    highlightNext: ( driver, currentQuestion ) => dispatch( highlightNext( driver, currentQuestion ))
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeForm);