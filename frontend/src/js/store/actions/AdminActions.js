import {
    testAdminAction,
    processPopupWindow  
} from "../actionTypes/AdminActionTypes";
import * as apiService from "../../services/apiService";
import { auth } from "../../services/authService";

export const testAdmin = () => {
    return apiService.get(`/api/test`, auth(), testAdminAction);
};

export const closeErrorPopup = (data) => {
    return (dispatch) => dispatch(processPopupWindow(data));
};

// example of sending an existing action
// export const logout = () => {
//     return (dispatch) => dispatch(getUsersType());
// };

