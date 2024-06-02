import React, { Component } from 'react'
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    chooseFile() {

    }

    viewUsersList() {
        this.props.history.push('/userlist');
    }

    render() {

        return (
            <div>
                <h1 className='text-center'> Main page </h1>

                <div class="d-grid gap-2 d-md-block">
                    <button
                        class="btn btn-primary"
                        type="button"
                        onClick={this.chooseFile}>
                        Choose a file
                    </button>
                    <button
                        class="btn btn-primary"
                        type="button"
                        onClick={this.viewUsersList}>
                        View users list
                    </button>
                </div>

            </div>


        )
    }

}

export default LoadFile;