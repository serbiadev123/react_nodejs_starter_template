import * as actionType from "../../enums/ActionTypeConstants";

export const errorType = error => ({
    type: actionType.ERROR,
    error
});

export const testAdminAction = data => ({
    type: actionType.TEST,
    data
});

export const processPopupWindow = data => ({
    type: actionType.PROCESS_POPUP_WINDOW,
    data
});

export const processLoaderAction = data => ({
    type: actionType.PROCESS_LOADER,
    data: data
});

export const userLoginAction = data => ({
    type: actionType.USER_LOGIN,
    data
});

export const userLogoutAction = data => ({
    type: actionType.USER_LOGOUT,
    data
});

export const pageReloadAction = data => ({
    type: actionType.PAGE_RELOAD,
    data
});
