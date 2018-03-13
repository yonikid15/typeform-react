import React from 'react';
import MultipleChoice from './MultipleChoice';
import ShortText from './ShortText';
import LongText from './LongText';
import Statement from './Statement';
import PictureChoice from './PictureChoice';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);


    }

    buildQuestion = ({ question, type, options, statement, images }, index) => {
        
        switch( type ) {
            case 'MULTIPLE_CHOICE':
                return <MultipleChoice 
                            index={index}
                            question={question}
                            options={options}
                        />
            case 'SHORT_TEXT':
                return <ShortText
                            index={index}
                            question={question}
                        />
            case 'LONG_TEXT':
                return <LongText
                            index={index} 
                            question={question}
                        />
            case 'STATEMENT':
                return <Statement 
                            index={index} 
                            statement={statement}
                        />
            case 'PICTURE_CHOICE':
                return <PictureChoice 
                            index={index}
                            question={question}
                            images={images}
                        />
            default:
                return undefined;
        };
    };

    render() {
        return (
            <form>
                <ul className={'form-wrapper'}>
                {
                    this.props.formPopulation === 0 ? 
                        undefined 
                    :

                    this.props.formPopulation.map( ( object, i ) => {
                        
                        return  (
                            <li 
                                key={i}
                                className={"item-wrapper"}
                            >
                                {this.buildQuestion( object, ( i + 1 ) )}
                            </li>
                        )
                    })
                }
                </ul>
            </form>
        );
    };
};

export default TypeForm;