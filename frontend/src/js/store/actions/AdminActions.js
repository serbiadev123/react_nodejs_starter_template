import {
    testAdminAction,
} from "../actionTypes/AdminActionTypes";
import * as apiService from "../../services/apiService";
import { auth } from "../../services/authService";

export const testAdmin = () => {
    return apiService.get(`/todos/1`, auth(), testAdminAction);
};


// example of sending an existing action
// export const logout = () => {
//     return (dispatch) => dispatch(getUsersType());
// };

