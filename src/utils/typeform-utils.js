/*

    Types of Questions:

        - Multiple Choice

*/


/*
    Property Type
*/

const propertyTypeQuestion = 'What Property type are you looking for?';
const propertyType = [
    { value: 'no_preference', name: 'No Preference'},
    { value: 'recreational', name: 'Recreational'},
    { value: 'condo_strata', name: 'Condo/Strata'},
    { value: 'multi_family', name: 'Multi Family'},
    { value: 'agriculture', name: 'Agriculture'},
    { value: 'parking', name: 'Parking'},
    { value: 'vacant_land', name: 'Vacant Land'}
];

/*
    Transaction Type
*/
const transactionTypeQuestion = 'Are you looking to buy a house, or to rent?';
const transactionType = [
    { value: 'for_sale_rent', name: 'For Sale or Rent'},
    { value: 'for_sale', name: 'For Sale'},
    { value: 'for_rent', name: 'For Rent'}
];

/*
    Room Range
*/
const bedRangeQuestion = 'How many bedrooms are you looking for?';
const bathRangeQuestion = 'How many bathrooms are you looking for?';



const lowPriceQuestion = 'What is the minimum price you will pay?';
const highPriceQuestion = 'What is the maximum price you are willing to pay?';


/*
    All Filters
*/

export const formPopulation = [
    { 
        question: propertyTypeQuestion,
        type: 'MULTIPLE_CHOICE',
        options: propertyType, 
    },
    { 
        question: transactionTypeQuestion,
        type: 'MULTIPLE_CHOICE',
        options: transactionType, 
    },
    {
        question: bedRangeQuestion,
        type: 'SHORT_TEXT'
    },
    {
        question: bedRangeQuestion,
        type: 'LONG_TEXT'
    }
    // { 
    //     question: bedRangeQuestion, 
    //     handleOnChange: handleBedRange,
    // },
    // { 
    //     question: bathRangeQuestion, 
    //     handleOnChange: handleBathRange, 
    // },
    // { 
    //     question: lowPriceQuestion, 
    //     handleOnChange: handleLowerPriceLimit, 
    // },
    // { 
    //     question: highPriceQuestion, 
    //     handleOnChange: handleUpperPriceLimit, 
    // }
];