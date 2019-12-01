import axios from "axios";
import { errorType } from "../store/actionTypes/AdminActionTypes";

const REACT_APP_API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

export function post(url, data, config, successType) {
    return async dispatch => {
        try {
            const response = await axios.post(
                REACT_APP_API_SERVER_URL + url,
                data,
                config
            );
            if (!response.errorMessage) {
                return dispatch(successType(response.data));
            } 
            dispatch(errorType(response.errorMessage));
        } catch (error) {
            if (error.response) {
                return dispatch(errorType(error.response.data.message));
            } 
            dispatch(errorType(error));
        }
    };
}

export function get(url, config, successType) {
    return async dispatch => {
        try {
            const response = await axios.get(
                REACT_APP_API_SERVER_URL + url,
                config
            );
            if (!response.errorMessage) {
                return dispatch(successType(response.data));
            }
            dispatch(errorType(response.errorMessage));
            
        } catch (error) {
            if (error.response) {
                return dispatch(errorType(error.response.data.errorMessage));
            } 
            dispatch(errorType(error)); 
        }
    };
}

export function patch(url, data, config, successType) {
    return async dispatch => {
        try {
            const response = await axios.patch(
                REACT_APP_API_SERVER_URL + url,
                data,
                config
            );
            if (!response.errorMessage) {
                return dispatch(successType(response.data));
            } 
            dispatch(errorType(response.errorMessage));
            
        } catch (error) {
            if (error.response) {
                return dispatch(errorType(error.response.data.errorMessage));
            }
            dispatch(errorType(error));
        }
    };
}

export function remove(url, config, successType){
    return async dispatch => {
        try {
            const response = await axios.delete(
                REACT_APP_API_SERVER_URL + url,
                config
            );
            if (!response.errorMessage) {
                return dispatch(successType(response.data));
            } 
            dispatch(errorType(response.errorMessage));
            
        } catch (error) {
            if (error.response) {
                return dispatch(errorType(error.response.data.errorMessage));
            }
            dispatch(errorType(error));
        }
    };
}
