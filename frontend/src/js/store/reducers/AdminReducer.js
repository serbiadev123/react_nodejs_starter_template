import * as actionType from "../../enums/ActionTypeConstants";

const initState = {
    testData: 'test',
};

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TEST: {
            return {
                ...state,
                testData: action.data
            };
        }
        default:
            return state;
    }
};

export default adminReducer;