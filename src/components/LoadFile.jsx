import React, { Component } from 'react'
import UserService from '../services/UserService.js';
import '../styles/LoadFile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            isLoading: false,
            uploadSuccess: false,
            summary: null,
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.saveUsers = this.saveUsers.bind(this);
        this.viewUsersList = this.viewUsersList.bind(this);
    }

    onFileChange(event) {
        this.setState({ selectedFile: event.target.files[0] })
    }

    uploadFile() {
        if (this.state.selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                if (!this.isValidJSON(fileContent)) {
                    alert('Selected file is not in JSON format.');
                    return;
                }
                this.setState({ isLoading: true });
                const users = JSON.parse(fileContent);
                const uploadedUsersCount = users.length;
                this.saveUsers(users, uploadedUsersCount);
            };
            reader.readAsText(this.state.selectedFile);
        }
    }

    isValidJSON(fileContent) {
        try {
            JSON.parse(fileContent);
            return true;
        } catch (error) {
            return false;
        }
    }

    saveUsers(users, uploadedUsersCount) {
        UserService.deleteUsers()
            .then(() => {
                return UserService.uploadUsers(users)
            }).then(response => {
                this.setState({
                    uploadSuccess: true,
                    summary: `Successfully uploaded ${uploadedUsersCount} users`,
                    isLoading: false,
                });
            })
            .catch(error => {
                console.error('Error uploading users:', error);
                this.setState({ uploadSuccess: false, isLoading: false });
            });
    }

    viewUsersList() {
        this.props.history.push('/userlist');
    }

    render() {

        const { isLoading, uploadSuccess, summary } = this.state;

        return (
            <div className="container">
                <h2 className="upload-file-title">Upload JSON File</h2>
                <div>
                    <label
                        htmlFor="formFileLg"
                        className="form-label"/>
                    <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        onChange={this.onFileChange} />
                </div>
                <div className="text-center">
                <button
                        className="btn custom-button"
                    onClick={this.uploadFile}
                    disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Upload'}
                </button>
                </div>
                {uploadSuccess && (
                    <div className="alert alert-success mt-3">
                        {summary}
                        <button
                            className="btn btn-link"
                            onClick={this.viewUsersList}>
                            Go to User List
                        </button>
                    </div>
                )}
            </div>
        );
    }

}

export default LoadFile;