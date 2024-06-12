import React, { Component } from 'react'
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.loadFile = this.loadFile.bind(this);
        this.viewUsersList = this.viewUsersList.bind(this);
    }

    loadFile() {
        this.props.history.push('/loadfile');
    }

    viewUsersList() {
        this.props.history.push('/userlist');
    }

    render() {

        return (
            <div className="main-page-container">
                <div>
                    <h1 className='main-page-text'> Main page </h1>

                    <div className="d-grid gap-2 d-md-block text-center">
                        <button
                            className="btn custom-button"
                            type="button"
                            onClick={this.viewUsersList}>
                            Users list
                        </button>
                        <button
                            className="btn custom-button"
                            type="button"
                            onClick={this.loadFile}>
                            Load file
                        </button>
                    </div>
                </div>
            </div>
        );
     }
}

export default MainPage;