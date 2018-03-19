import React from 'react';
import Option from './Option';

const YesNo = () => {
    return (
        <div>
            <Option
                letter={ 'Y' }
                name={ 'Yes' }
                />
            <Option
                letter={ 'N' }
                name={ 'No' }
            />
        </div>
            
    );
};

export default YesNo;