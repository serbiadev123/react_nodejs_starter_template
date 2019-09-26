import * as actionType from "../../enums/ActionTypeConstants";

export const errorType = error => ({
    type: actionType.ERROR,
    error
});

export const testAdminAction = data => ({
    type: actionType.TEST,
    data
});
