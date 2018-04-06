// This action sets up typeform state by adding an array to the state to keep track of the questions
export const setupTypeForm = ( currentQuestion ) => ({
    type: 'SETUP_TYPEFORM',
    currentQuestion
});

// Skips to the next question in the typeform
export const nextQuestion = ( currentQuestion ) => ({
    type: 'NEXT_QUESTION',
    currentQuestion
});

// Moves back to the prev question in the typeform
export const prevQuestion = ( currentQuestion ) => ({
    type: 'NEXT_QUESTION',
    prevQuestion
});