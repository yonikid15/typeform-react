import React from 'react';
import MultipleChoice from './MultipleChoice';
import ShortText from './ShortText';
import LongText from './LongText';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);


    }

    buildQuestion = ({ question, type, options }, index) => {
        
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
            default:
                return undefined;
        };
    };

    render() {
        return (
            <form>
                <ul className={''}>
                {
                    this.props.formPopulation === 0 ? 
                        undefined 
                    :

                    this.props.formPopulation.map( ( object, i ) => {
                        
                        return  (
                            <div className={"wrapper"}>
                                <li 
                                    key={object.question}
                                >
                                    {this.buildQuestion( object, ( i + 1 ) )}
                                </li>
                            </div>
                           
                        )
                    })
                }
                </ul>
            </form>
        );
    };
};

export default TypeForm;