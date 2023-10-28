import API from '../../services/api'

export const postLogin = (data) => {
    return API.post('/user/login', data)
        .then(response => { return response; },
            error => { return error.response.data; })
}