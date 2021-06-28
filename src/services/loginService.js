import API from './index';

function login(params) {
    console.log('request data \n', params);
    const options = {
        method: 'POST'
    };
    return API.post('/subscriber/loginForm', params.data.user, options)
        .then(result => {
            return result;
        })
        .catch(error => {
            throw error.response;
        });
}

export const loginService = {
    login
};
