import {
    testAdminAction,
    processPopupWindow,
    processLoaderAction,
    userLoginAction,
    userLogoutAction,
    pageReloadAction
} from "../actionTypes/AdminActionTypes";
import * as apiService from "../../services/apiService";
import { auth } from "../../services/authService";

export const testAdmin = () => {
    return apiService.get(`/api/test`, auth(), testAdminAction);
};

export const userLogin = (data) => {
    return apiService.post(`/api/appUsers/login`, data, {}, userLoginAction);
};

export const userLogout = () => {
    return (dispatch) => dispatch(userLogoutAction());
};

export const pageReload = (data) => {
    return (dispatch) => dispatch(pageReloadAction(data));
};

export const closeErrorPopup = (data) => {
    return (dispatch) => dispatch(processPopupWindow(data));
};

export const processLoadingWindow = (data) => {
    return (dispatch) => dispatch(processLoaderAction(data));
};

// example of sending an existing action
// export const logout = () => {
//     return (dispatch) => dispatch(getUsersType());
// };

