import React, { Component } from 'react';
import './UserPage.css';
import apiClient from '../../utils/axios-with-auth';
import { apiURL } from '../../constants/index';
import User from './User/User';
import UserSearch from './UserSearch/UserSearch';

class UserPage extends Component {
    state = {
        users: [],
        showUsers: false
    }

deleteUserHandler = (userId) => {
    apiClient.delete(`${apiURL}/api/v1/users/${userId}`, 
    )
    .then(result => {
    const deleted = result;
    if(deleted) {
      alert ('Successfully deleted');
  }
  })
  }

toggleUsersHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow});
    apiClient.get(`${apiURL}/api/v1/users`, 
    )
    .then(result => {
      this.setState({
          users: result.data,
      });
    })
    .catch(error => {
      this.setState({
       error,
     }); 
  });
};

render() {
    let users = null;
    const classes = [];

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
      classes.push('Button');
    } 
    else {
      classes.push('red');
    }

    return(
      <div>
        <div>
          <div>
            <h3>Users Page</h3>
          </div>
          <div>
            <UserSearch />
          </div>
        </div>
        <hr />
        <div>
        <button className={classes} onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
        </div> 

      </div>
    );
}
}

export default UserPage;