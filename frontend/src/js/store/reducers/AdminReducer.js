import * as actionType from "../../enums/ActionTypeConstants";
import * as userRoles from "../../enums/UserRoles";

const initState = {
    testData: 'test',
    error: false,
    errorMessage: '',
    user: {},
    userRole: userRoles.GUEST,
    loader: false
};

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TEST: {
            return {
                ...state,
                testData: action.data
            };
        }
        case actionType.USER_LOGIN: {
            return {
                ...state,
                user: action.data,
                userRole: action.data.userRole
            };
        }
        case actionType.USER_LOGOUT: {
            return {
                ...state,
                user: {},
                userRole: userRoles.GUEST
            };
        }
        case actionType.PROCESS_POPUP_WINDOW: {
            return {
                ...state,
                error: false,
                errorMessage: ''
            };
        }
        case actionType.PROCESS_LOADER: {
            return {
                ...state,
                loader: action.data
            };
        }
        case actionType.PAGE_RELOAD: {
            return {
                ...state,
                error: false,
                errorMessage: '',
                loader: false
            };
        }
        //leave this at the end
        case actionType.ERROR: {
            // make sure to reset values of variables, other way the old values will still
            // stay and it will look like there was no error
            return {
                ...state,
                testData: '',
                error: true,
                errorMessage: action.error,
            };
        }
        default:
            return state;
    }
};

export default adminReducer;