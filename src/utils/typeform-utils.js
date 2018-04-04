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

const foodQuestion = 'Which picture looks best?';
const img = '/images/img.jpg';
const lion = '/images/lion.jpg'

const yesnoQuestion = "Is this a Yes or No question?"

const emailQuestion = "Would you like to notified about all of our latest courses, content, and upgrades? Provide your email and stay in the loop!";

/*
    All Filters
*/

// responses: {
//     propertyType: 
// }
// const questions = {
//     'propertyType': {
//         type: 'MULTIPLE_CHOICE',
//         logic: function(selection) {
//             if (selection === true) {
//                 ask('propertyType')
//             }
//         }
//     }
// }

export const formPopulation = {
    'propertyType': {
        question: propertyTypeQuestion,
        type: 'MULTIPLE_CHOICE',
        options: propertyType,
    },
    'numOfBathrooms': {
        question: bathRangeQuestion,
        type: 'LONG_TEXT'
    },
    'yesNo': {
        question: yesnoQuestion,
        type: 'YES_NO'
    }
};


// export const formPopulation = [
//     { 
//         question: propertyTypeQuestion,
//         type: 'MULTIPLE_CHOICE',
//         options: propertyType, 
//     },
//     { 
//         question: transactionTypeQuestion,
//         type: 'MULTIPLE_CHOICE',
//         options: transactionType, 
//     },
//     {
//         question: bathRangeQuestion,
//         type: 'SHORT_TEXT'
//     },
//     {
//         question: bedRangeQuestion,
//         type: 'LONG_TEXT'
//     },
//     {
//         statement: "Your almost there! Just 30 More!",
//         type: 'STATEMENT'
//     },
//     {
//         question: foodQuestion,
//         type: 'PICTURE_CHOICE',
//         images: [
//             {
//                 img: lion,
//                 name: 'Lion'
//             },
//             {
//                 img: img,
//                 name: '100'
//             }
//         ]
//     },
//     {
//         question: yesnoQuestion,
//         type: 'YES_NO'
//     },
//     {
//         question: emailQuestion,
//         type: 'EMAIL'
//     }
// ];