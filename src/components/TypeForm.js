import React from 'react';
import FormWrapper from './FormWrapper';
import ItemWrapper from './ItemWrapper';
import ObjectWrapper from './ObjectWrapper';
import Question from './Question';
import Index from './Index';
import Content from './Content';

// Form Components
import MultipleChoice from './MultipleChoice';
import ShortText from './ShortText';
import LongText from './LongText';
import Statement from './Statement';
import PictureChoice from './PictureChoice';
import YesNo from './YesNo';
import Email from './Email';

class TypeForm extends React.Component {
  
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

    render() {
        return (
            <form>
                <FormWrapper>
                {
                    this.props.formPopulation === 0 ? 
                        undefined 
                    :

                    this.props.formPopulation.map( ( object, i ) => {
                        
                        return  (
                            <ItemWrapper key={i}>
                                <ObjectWrapper>
                                    <Index index={ ( i + 1 ) } />
                                    <Question question={ object.question } />
                                    <Content 
                                        content={this.getContent( object )}
                                    />
                                </ObjectWrapper>
                            </ItemWrapper>
                        )
                    })
                }
                </FormWrapper>
            </form>
        );
    };
};

export default TypeForm;