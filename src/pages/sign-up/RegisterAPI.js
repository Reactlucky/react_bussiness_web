import API from '../../services/api'

export const postRegister = (data) => {
    return API.post('/user/register', data)
        .then(response => { 
            return response; },
            error => { return error.response.data; })
}