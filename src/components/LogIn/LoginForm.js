import React, { Component } from 'react';
import { VALIDATION_RULES } from '../../utils/validators/ValidationRules';
import './LoginForm.css';
import axios from 'axios';
//import moment from 'moment';
import { apiURL } from '../../constants/index';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
    this.emailInputRef = React.createRef();
  }
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

    componentDidMount() {
      this.nameInputRef.current.focus();
      this.emailInputRef.current.focus();
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
            <h4 className="LoginText">Please log in</h4> <br />
            <form onSubmit={this.handleSubmit}>
                    <input 
                    className="LoginInput"
                    name="email"
                    ref={this.emailInputRef}
                    type="email"
                    value={this.state.email}
                    placeholder="Enter your email"
                    description="email"
                    validate={VALIDATION_RULES.EMAIL}
                    onChange={(e) => this.handleChangeEmail(e.target.value)}
                    /> <br />
                    <input 
                    className="LoginInput"
                    name="password"
                    ref={this.nameInputRef}
                    type="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                    description="password"
                    validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangePassword(e.target.value)}
                    /> <br />
                <button 
                className="LoginButton"
                type="submit">Submit</button>
            </form>
        <p className="Response">{this.state.responseMessage}</p>
        </div>
        );
    }
};

export default React.memo(LoginForm);