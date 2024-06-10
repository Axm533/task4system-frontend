import axios from 'axios';

const BASE_API = "http://localhost:8080/api/users"

class UserService {

    getUsers() {
        return axios.get(BASE_API + "/all");
    }

    /*uploadUsers(users) {
        return axios.post(BASE_API + "/upload?users=" + users, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }*/

    uploadUsers(users) {
        return axios.post(BASE_API + "/upload", users, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default new UserService();