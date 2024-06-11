import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <span className="fs-4">Task4system</span>
                        </a>
                        <div>
                            <Link to="/" className="btn btn-primary">Main Page</Link>
                        </div>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;