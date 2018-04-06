const defaultState = {};

export default ( state = defaultState, action ) => {   
    
    let index;

    switch ( action.type ) {
        case 'SETUP_TYPEFORM':
            return {
                currentQuestion: action.currentQuestion
            };
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.questions[ index + 1 ]
            }
        case 'PREV_QUESTION':
            index = state.questions.indexOf(state.currentQuestion);
            return {
                ...state,
                currentQuestion: state.questions[ index - 1 ]
            }
        default:
            return state;
    };
};