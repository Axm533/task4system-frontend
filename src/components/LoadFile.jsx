import React, { Component } from 'react'
import UserService from '../services/UserService.js';
import '../styles/ListUsers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };

        this.chooseFile = this.chooseFile.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.viewUsersList = this.viewUsersList.bind(this);
    }

    chooseFile() {
        document.getElementById('fileInput').click();
    }

    onFileChange(event) {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadFile() {
        if (this.state.selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                const users = JSON.parse(fileContent);

                UserService.uploadUsers(users)
                    .then(response => {
                        alert('Users uploaded!');
                    })
                    .catch(error => {
                        alert('Failed to upload: ' + error.message);
                    });
            };
            reader.readAsText(this.state.selectedFile);
        }
    }

    viewUsersList() {
        this.props.history.push('/userlist');
    }

    render() {

        return (
            <div>
                <h1 className='text-center'>Upload file</h1>

                <div className="d-grid gap-2 d-md-block text-center">
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={this.onFileChange}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.chooseFile}>
                        Choose a file
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.uploadFile}>
                        Upload file
                    </button>
                   
                </div>
            </div>
        )
    }

}

export default LoadFile;