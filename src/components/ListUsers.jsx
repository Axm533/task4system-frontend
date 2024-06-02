import React, { Component } from 'react'
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../service/UserService';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };

    }

    componentDidMount() {
        Promise(
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
                        {users.map(user => (
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
                        ))}
                    </tbody>
                </table>
            </div>
           );
    }
}

export default ListUsers;