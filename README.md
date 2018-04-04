# Typeform-React

## Description

A recreation of Typeform using React. Typeform is a "one question at a time" based form. Typeform renders each component one at a time, until all questions have been answered. Then the submit button triggers an action that stores all answers into a object.

## Components

- TypeForm
    - Props:
        - formPopulation (object) : This is the main prop that the developer must input all form objects that will appear in the Typeform component. The object will contain objects with the key acting as the Id of each question.

            - Structure:
                const formPopulation = {
                    'objectId': {
                        type: 'TYPE_OF_QUESTION',
                        options: { /* depends on type of questions */ }
                    }
                }


- Multiple Choice
    - Props:
        - options ( object ) : holds the options of the question
            - object.name

- Short Text
    - Props:
        - 



