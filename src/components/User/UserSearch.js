import React, { Component } from 'react';
import apiClient from '../../utils/axios-with-auth';
import { apiURL } from '../../constants/index';
import _ from 'lodash';
import './UserSearch.css';
import User from '../User/User';

class UserSearch extends Component {
    state = {
        users: [],
        error: null,
        isLoaded: false,
        responseMessage: '',
    };

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

    inputChangeHandler = _.debounce((search) => {
        apiClient.get(`${apiURL}/api/v1/users/search?search=${search}`, 
        )
        .then(result => {
            this.setState({
                users: result.data,
                isLoaded: true,
            });
        }).catch(error => {
          const { response } = error;
            if (response) {
              this.setState({
                responseMessage: response.data.message, 
                isLoaded: false,
                users: [],
              });
            }
        });
    }, 700);


    render() {
        return (
        <div className="Search">
          <input
            className="SearchInput"
            type="text"
            value={this.state.search}
            placeholder="Search..."
            onChange={(e) => this.inputChangeHandler(e.target.value)}
          />
          <ul>
        { this.state.users.map(user => {
            return <User 
            key={user.id}
            name={user.name} 
            email={user.email} 
            phone={user.phone}
            delete={() => this.deleteUserHandler(user.id)} />
          })}
         </ul>
         <p>{this.state.responseMessage}</p>
        </div>
        );
    }
}

export default UserSearch;