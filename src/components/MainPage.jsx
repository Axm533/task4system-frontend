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
            <div>
                <h1 className='text-center'> Main page </h1>

                <div class="d-grid gap-2 d-md-block text-center">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.viewUsersList}>
                        Users list
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.loadFile}>
                        Load file
                    </button>
                </div>

            </div>

        )
     }
}

export default MainPage;