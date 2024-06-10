import React, { Component } from 'react'
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

    }

    componentDidMount() {
        Promise.resolve(
            UserService.getUsers()
        ).then(usersResponse => {
            this.setState({
                users: usersResponse.data
            });
        }).catch(error => console.error(error));
    }

    render() {

        const users = this.state;

        return (
            <div>
                <h1 className='text-center'> List of users </h1>

                <table className="table table-bordered">
                    <thead className="table-dark text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Login</th>
                    </thead>
                    <tbody className="text-center">
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.surname}
                                    </td>
                                    <td>
                                        {user.login}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                    </tbody>
                </table>
                <nav label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
           );
    }
}

export default ListUsers;