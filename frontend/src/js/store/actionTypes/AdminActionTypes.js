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