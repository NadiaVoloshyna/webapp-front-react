import React, { Component } from 'react';
import './App.css';
import UserPage from '../components/UserPage/UserPage';
import RegisterForm from '../components/SignUp/RegisterForm';
import LoginForm from '../components/LogIn/LoginForm';
import UserUpdateForm from './UserUpdateForm/UserUpdateForm';
class App extends Component {

  render() {

    return (
    <div className="App">
      <h1>This is my webapp</h1>
      <RegisterForm />
      <LoginForm />
      <UserUpdateForm />
      <UserPage />
    </div>
  );
  }
}

export default App;
