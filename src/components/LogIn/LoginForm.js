import React, { Component } from 'react';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import './LoginForm.css';
import axios from 'axios';
//import moment from 'moment';
import { apiURL } from '../../constants/index';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
        responseMessage: '',
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
            const user = res.config.data;
            localStorage.setItem('token', authToken);
        
            localStorage.setItem('user', JSON.stringify(user));
            this.setState({responseMessage: 'You are logged in'});
            console.log(res);
            console.log(res.config.data);
          })
          .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: response.data.message});
            }
          });
      }
// // Store the data with time
// const EXPIRE_TIME = 1000*60*60;
// localStorage.setItem('storedData', JSON.stringify({
//   time: new Date(),
//   data: "your some data"
// }));
// // start the time out
// setTimeout(function() {
//     localStorage.removeItem('storedData');
// }, EXPIRE_TIME); // after an hour it will delete the data

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
        <p>{this.state.responseMessage}</p>
        </div>
        );
    }
};

export default LoginForm;