import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span class="fs-4">Simple header</span>
                    </a>
                </header>
            </div>
        )
    }
}

export default Header;