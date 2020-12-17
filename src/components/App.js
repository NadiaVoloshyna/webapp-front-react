import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import UserPage from '../components/UserPage/UserPage';
import RegisterForm from '../components/SignUp/RegisterForm';
//import LoginForm from '../components/LogIn/LoginForm';
import LoginPage from './LogIn/LoginPage';
import UserUpdateForm from './UserUpdateForm/UserUpdateForm';
import Portfolio from './Portfolio/Portfolio';
class App extends Component {

  render() {

    return (
    <div className="App">
      <Layout>
        <LoginPage />
      </Layout>
      <h1>Users Manager</h1>
      <RegisterForm />
      <UserUpdateForm />
      <UserPage />
      <br />
      <br />
      <Portfolio />
      <br />
      <br />
    </div>
  );
  }
}

export default App;
