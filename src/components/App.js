import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import UserSearch from '../components/User/UserSearch';
import RegisterForm from '../components/SignUp/RegisterForm';
class App extends Component {
  state = {
    users: [
      {name: 'Nadiia', email: 'nadiia@gmail.com'},
      {name: 'Max', email: 'max@gmail.com'},
      {name: 'Taras', email: 'taras@gmail.com'}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      users: [
        {name: 'Nadiia', email: 'nadiia@gmail.com'},
        {name: 'Max', email: 'max@gmail.com'},
        {name: 'Lesia', email: 'lesia@gmail.com'}
      ]
    })
  }

  render() {
    return (
    <div className="App">
      <h1>This is my webapp</h1>
      <RegisterForm />
      <p>It's awesome!</p>
      <UserSearch />
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <User 
      name={this.state.users[0].name} 
      email={this.state.users[0].email} 
      />
      <User 
      name={this.state.users[1].name} 
      email={this.state.users[1].email}>Hobbies: Football
      </User>
      <User 
      name={this.state.users[2].name} 
      email={this.state.users[2].email} 
      />
    </div>
  );
  }
}

export default App;
