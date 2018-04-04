import React from 'react';
import FormWrapper from './FormWrapper';
import ItemWrapper from './ItemWrapper';
import ObjectWrapper from './ObjectWrapper';
import Question from './Question';
import Index from './Index';
import Content from './Content';
import Driver from 'driver.js';
import '../../node_modules/driver.js/dist/driver.min.css';

// Form Components
import MultipleChoice from './MultipleChoice';
import ShortText from './ShortText';
import LongText from './LongText';
import Statement from './Statement';
import PictureChoice from './PictureChoice';
import YesNo from './YesNo';
import Email from './Email';

class TypeForm extends React.Component {

    componentDidMount () {
        const driver = new Driver();
        driver.highlight('#numOfBathrooms');
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

export default TypeForm;