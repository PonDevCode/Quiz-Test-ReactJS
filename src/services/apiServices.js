import axios from '../utils/axiosCustomize';


const postCreateNewUser = (email, password, username, role, img) => {
    // submit data
    // update voi form data do dùng file img
    const FormData = require('form-data');
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);

    return axios.post('api/v1/participant', data);


}
const getAllUser = () => {
    return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, img) => {
    const FormData = require('form-data');
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.put('api/v1/participant', data)
}

const deleteUser = (id) => {
    return axios.delete('api/v1/participant',{data : {id:id}})
}

export {
    postCreateNewUser,
    getAllUser,
    putUpdateUser,
    deleteUser
}