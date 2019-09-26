export function auth() {
    let token = localStorage.getItem('token');
    if(token){
        token = 'Bearer ' + token;
    }
    return {headers: {Authorization: token}};
};
