import axios from 'axios';

const BASE_API = "http://localhost:8080/api/users"

class UserService {

    getUsers(params) {
        return axios.get(BASE_API, { params });
    }

    uploadUsers(users) {
        return axios.post(BASE_API + "/upload", users, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    deleteUsers() {
        return axios.delete(BASE_API + "/deleteAll");
    }
}

export default new UserService();