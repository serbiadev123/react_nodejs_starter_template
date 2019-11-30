import * as actionType from "../../enums/ActionTypeConstants";

const initState = {
    testData: 'test',
    error: false,
    errorMessage: ''
};

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TEST: {
            return {
                ...state,
                testData: action.data
            };
        }
        case actionType.PROCESS_POPUP_WINDOW: {
            return {
                ...state,
                error: false,
                errorMessage: ''
            };
        }
        //leave this at the end
        case actionType.ERROR: {
            console.log("ERROR", action)
            // make sure to reset values of variables, other way the old values will still
            // stay and it will look like there was no error
            return {
                ...state,
                testData: '',
                error: true,
                errorMessage: action.error.message,
            };
        }
        default:
            return state;
    }
};

export default adminReducer;