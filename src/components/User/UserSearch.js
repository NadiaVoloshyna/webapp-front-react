import React, { Component } from 'react';
import axios from 'axios';
import { apiURL } from '../../constants/index';
import _ from 'lodash';
import './UserSearch.css';
import User from '../User/User';

class UserSearch extends Component {
    state = {
        users: [],
        error: null,
        isLoaded: false,
    };

    inputChangeHandler = _.debounce((search) => {
        const token = localStorage.getItem('token');
        axios.get(`${apiURL}/api/v1/users/search?search=${search}`, {
            headers: {
            "Authorization" : `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        })
        .then(result => {
            this.setState({
                users: result.data,
                isLoaded: true,
            });
        }).catch(error => {
            this.setState({
             isLoaded: false,
             error,
           }); 
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
            phone={user.phone} />
          })}
         </ul>
        </div>
        );
    }
}

export default UserSearch;