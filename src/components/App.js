import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { apiURL } from '../../src/constants/index';
import User from './User/User';
import UserSearch from '../components/User/UserSearch';
import RegisterForm from '../components/SignUp/RegisterForm';
import LoginForm from '../components/LogIn/LoginForm';
import UserUpdateForm from '../components/User/UserUpdateForm';
class App extends Component {
  state = {
    users: [],
    showUsers: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        {name: 'Nadiia', email: 'nadiia@gmail.com'},
        {name: event.target.value, email: 'max@gmail.com'},
        {name: 'Taras', email: 'taras@gmail.com'}
      ]
    })
  }

  deleteUserHandler = (userId) => {
    const token = localStorage.getItem('token');
    axios.delete(`${apiURL}/api/v1/users/${userId}`, {
        headers: {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
  }).then(result => {
    const deleted = result;
    if(deleted) {
      console.log('Successfully deleted');
  }
  })
  }

  toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow});
    const token = localStorage.getItem('token');
    axios.get(`${apiURL}/api/v1/users`, {
        headers: {
        "Authorization" : `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    }).then(result => {
      this.setState({
          users: result.data,
      });
    }).catch(error => {
      this.setState({
       error,
     }); 
  });
};
  
  render() {

    let users = null;

    if(this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map((user) => {
            return <User 
            key={user.id}
            name={user.name} 
            email={user.email} 
            phone={user.phone}
            delete={() => this.deleteUserHandler(user.id)} />
          })}
      </div> 
      );
    }

    return (
    <div className="App">
      <h1>This is my webapp</h1>
      <RegisterForm />
      <LoginForm />
      <UserUpdateForm />
      <p>It's awesome!</p>
      <UserSearch />
      <button className="Button" onClick={this.toggleUsersHandler}>Toggle Users</button>
      {users}
    </div>
  );
  }
}

export default App;
