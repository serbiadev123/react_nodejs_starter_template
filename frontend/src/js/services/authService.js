import store from '../../store';

export function auth() {
    const adminStateVariables = store.getState() ? store.getState().adminReducer : null;

    const token =   adminStateVariables && 
                    adminStateVariables.user && 
                    adminStateVariables.user.token ? 'Bearer ' + adminStateVariables.user.token : null

    return token ? {
            headers: {
                Authorization: token
            }
        } :
        {};
};
