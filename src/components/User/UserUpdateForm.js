import React, { Component } from 'react';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import './UserUpdateForm.css';
import apiClient from '../../utils/axios-with-auth';
import { apiURL } from '../../constants/index';
class UserUpdateForm extends Component {
    state = {
        name: '',
        email: '',
        current_password: '',
        new_password: '',
        phone: '',
        loading: false,
        responseMessage: '',
      }

    handleChangeName = (data) => {
        this.setState({ 
            name: data,
        });
    }
    handleChangeEmail = (data) => {
        this.setState({ 
            email: data,
        });
    }
    handleChangeCurrentPassword = (data) => {
        this.setState({ 
            current_password: data,
        });
    }
    handleChangeNewPassword = (data) => {
        this.setState({ 
            new_password: data,
        });
    }
    handleChangePhone = (data) => {
        this.setState({ 
            phone: data,
        });
    }

    getCurrentUser = () => {
        const user = localStorage.getItem('user');
        console.log(user);
        apiClient.get(`${apiURL}/api/v1/users/me`, {
            user
        }).then(res => {
            this.setState({
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                current_password: '',
          })
        }).catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: 'Please log in'});
            }
          });         
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        const user = {
          name: this.state.name,
          email: this.state.email,
          current_password: this.state.current_password,
          new_password: this.state.new_password,
          phone: this.state.phone,
        };
        console.log(user);
        apiClient.put(`${apiURL}/api/v1/users/me`, user, 
        )
        .then(res => {
            this.setState({responseMessage: 'Your data was updated'});
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: response.data.message});
            }
          });
      }

    render() {
        return(
        <div className="UserUpdateForm">
            <h4>Update Your Data</h4>
            <form onSubmit={this.handleSubmit}>
                    <input 
                    name="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Update your name"
                    description="name"
                    validate={VALIDATION_RULES.NAME}
                    onChange={(e) => this.handleChangeName(e.target.value)}
                    />
                    <input 
                    name="email"
                    type="email"
                    value={this.state.email}
                    placeholder="Update your email"
                    description="email"
                    validate={VALIDATION_RULES.EMAIL}
                    onChange={(e) => this.handleChangeEmail(e.target.value)}
                    />
                    <input 
                    name="current_password"
                    type="password"
                    value={this.state.current_password}
                    placeholder="Enter your current password"
                    description="password"
                    validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangeCurrentPassword(e.target.value)}
                    />
                    <input 
                    name="new_password"
                    type="password"
                    value={this.state.new_password}
                    placeholder="Enter your new password"
                    description="password"
                    validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangeNewPassword(e.target.value)}
                    />
                    <input 
                    name="phone"
                    type="text"
                    value={this.state.phone}
                    placeholder="Update your phone"
                    description="phone"
                    validate={VALIDATION_RULES.PHONE} 
                    onChange={(e) => this.handleChangePhone(e.target.value)}
                    />
                <button type="submit">Submit Changes</button>
            </form>
            <button onClick={this.getCurrentUser}>See Current Data</button>
            <p>{this.state.responseMessage}</p>
        </div>
        );
    }
};

export default UserUpdateForm;