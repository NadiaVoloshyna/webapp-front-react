import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css';
import banner from '../../assets/withoutLogo.png';


class LoginPage extends Component {
    render() {
        return (
          <div className="Wrapper">
            <div className="BannerWrap">
              <img className="Banner" src={banner} alt="banner"/>
            </div>
            <div className="FormWrap">
              <LoginForm />
            </div>
          </div>
        );
      }
}

export default LoginPage;