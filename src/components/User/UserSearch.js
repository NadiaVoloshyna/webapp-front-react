import React, { Component } from 'react';
import axios from 'axios';
//import isomorphicCookie from 'isomorphic-cookie';
import { apiURL } from '../../constants/index';
import _ from 'lodash';
import './UserSearch.css';

class UserSearch extends Component {
    state = {
        users: [],
        error: null,
        isLoaded: false,
    };

    inputChangeHandler = _.debounce((search) => {
        console.log(search);
        const token = localStorage.getItem('token');
        //const token = isomorphicCookie.load('token');
        console.log(token);
        axios.get(`${apiURL}/api/v1/users/search?search=${search}`, {
            headers: {
            "Authorization" : `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        })
        .then(result => {
            console.log(result)
            this.setState({
                users: result.data,
                isLoaded: true,
            });
        }).catch(error => {
            this.setState({
             isLoaded: true,
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
            //value={this.state.search}
            placeholder="Search..."
            onChange={(e) => this.inputChangeHandler(e.target.value)}
          />
          <ul>
        { this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
         </ul>
        </div>
        );
    }
}

export default UserSearch;