import API from '../../../services/api.jsx';

export const listcontactListCompany = (data) => {
    return API.get('/contacts/get_table_data')
        .then(response => {
            return response;
        },
        error => { return error.response.data; })
}