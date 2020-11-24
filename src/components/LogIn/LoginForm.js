import React, { Component } from 'react';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import './LoginForm.css';
import axios from 'axios';
import { apiURL } from '../../constants/index';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
      }

    handleChangeEmail = (data) => {
        this.setState({ 
            email: data,
        });
    }
    handleChangePassword = (data) => {
        this.setState({ 
            password: data,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        const user = {
          email: this.state.email,
          password: this.state.password,
        };
        axios.post(`${apiURL}/api/v1/auth/login`, user )
          .then(res => {
            const authToken = res.data.token;
            localStorage.setItem('token', authToken);
            console.log(res);
          })
      }

    render() {
        return(
        <div className="LoginForm">
            <h4>Please log in</h4>
            <form onSubmit={this.handleSubmit}>
                    <input 
                    name="email"
                    type="email"
                    value={this.state.email}
                    placeholder="Enter your email"
                    description="email"
                    validate={VALIDATION_RULES.EMAIL}
                    onChange={(e) => this.handleChangeEmail(e.target.value)}
                    />
                    <input 
                    name="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                    description="password"
                    validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangePassword(e.target.value)}
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
};

export default LoginForm;