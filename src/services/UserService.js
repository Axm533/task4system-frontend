import axios from 'axios';

const BASE_API = "http://localhost:8080/api/users"

class UserService {

    getUsers() {
        return axios.get(BASE_API + "/all");
    }

}

export default new UserService();