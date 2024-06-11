import React, { Component } from 'react'
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../services/UserService';
import md5 from 'crypto-js/md5';


class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: '', 
            page: 0,
            size: 50,
            totalPages: 0,
            sortField: 'name',
            sortDirection: 'asc',
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        const { search, page, size, sortField, sortDirection } = this.state;
        UserService.getUsers({ search, page, size, sortField, sortDirection })
            .then(response => {
                this.setState({
                    users: response.data.content,
                    totalPages: response.headers['x-total-pages']
                });
                console.log(response.headers['x-total-pages']);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    handleSearchChange(event) {
        this.setState({ search: event.target.value, page: 0 }, this.fetchUsers);
    }

    handlePageChange(page) {
        this.setState({ page }, this.fetchUsers);
    }

    handleSortChange(sortField) {
        const sortDirection = this.state.sortDirection === 'asc' ? 'desc' : 'asc';
        this.setState({ sortField, sortDirection, page: 0 }, this.fetchUsers);
    }

    renderPagination() {
        const { page, totalPages } = this.state;
        const maxPagestoShow = 5;
        let startPage, endPage;

        if (totalPages <= maxPagestoShow) {
            startPage = 0;
            endPage = totalPages - 1;
        } else {
            if (page <= 2) {
                startPage = 0;
                endPage = maxPagestoShow - 1;
            } else if (page + 2 >= totalPages) {
                startPage = totalPages - maxPagestoShow
                endPage = totalPages - 1;
            } else {
                startPage = page - 2;
                endPage = page + 2;
            }
        }

        const pageButtons = [];
        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <li key={i} className={`page-item ${i === page ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => this.handlePageChange(i)}>{i + 1}</button>
                </li>
            );
        }

        return (
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => this.handlePageChange(page - 1)}>Previous</button>
                    </li>
                    {pageButtons}
                    <li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => this.handlePageChange(page + 1)}>Next</button>
                    </li>
                </ul>
            </nav>
        );
           
    }


    render() {
        const { users, search, sortField, sortDirection } = this.state;

        return (
            <div>
                <h1 className='text-center'>List of Users</h1>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name, surname or login"
                        value={search}
                        onChange={this.handleSearchChange}
                    />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th onClick={() => this.handleSortChange('name')}>
                                Name {sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </th>
                            <th onClick={() => this.handleSortChange('surname')}>
                                Surname {sortField === 'surname' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </th>
                            <th onClick={() => this.handleSortChange('login')}>
                                Login {sortField === 'login' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{`${user.surname}_${md5(user.name)}`}</td>
                                <td>{user.login}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.renderPagination()}
            </div>
        );
    }
}

export default ListUsers;