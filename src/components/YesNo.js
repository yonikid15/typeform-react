import React from 'react';
import Option from './Option';

const YesNo = () => {
    return (
        <ul className={"content mc-wrapper"}>
            <Option
                letter={ 'Y' }
                name={ 'Yes' }
            />
            <Option
                letter={ 'N' }
                name={ 'No' }
            />
        </ul>
    );
};

export default YesNo;