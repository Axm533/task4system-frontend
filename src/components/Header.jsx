import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <span className="header-title">Task4system</span>
                        </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;

