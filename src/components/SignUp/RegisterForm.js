import React, { Component } from 'react';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import './RegisterForm.css';
import axios from 'axios';
import { apiURL } from '../../constants/index';

class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
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
    handleChangePassword = (data) => {
        this.setState({ 
            password: data,
        });
    }
    handleChangePhone = (data) => {
        this.setState({ 
            phone: data,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          phone: this.state.phone,
        };
        console.log(user);
    
        axios.post(`${apiURL}/api/v1/auth/signup`, user )
          .then(res => {
            this.setState({responseMessage: 'You are registered'});
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
        <div className="RegisterForm">
            <h4>Enter Your Data</h4>
            <form onSubmit={this.handleSubmit}>
                    <input 
                    name="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Enter your name"
                    description="name"
                    validate={VALIDATION_RULES.NAME}
                    onChange={(e) => this.handleChangeName(e.target.value)}
                    />
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
                    <input 
                    name="phone"
                    type="text"
                    value={this.state.phone}
                    placeholder="Enter your phone"
                    description="phone"
                    validate={VALIDATION_RULES.PHONE} 
                    onChange={(e) => this.handleChangePhone(e.target.value)}
                    />
                <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseMessage}</p>
        </div>
        );
    }
};

export default RegisterForm;