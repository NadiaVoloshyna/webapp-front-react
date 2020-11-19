import React, { Component } from 'react';
import axios from 'axios';
import { apiURL } from '../../constants/index';
import _ from 'lodash';
import './UserSearch.css';

class UserSearch extends Component {
    state = {
        search: '',
        users: []
    };

    inputChangeHandler = _.debounce((search) => {
        this.setState({ search: search });
        axios.get(`${apiURL}/api/v1/users/search?search=%${search}%`, {
            //params: search,
        })
        .then(res => {
            const users = res.data;
            this.setState({users});
        })
    }, 700);

    render() {
        return (
        <div className="Search">
          <input
            className="SearchInput"
            type="text"
            value={this.state.query}
            placeholder="Search..."
            onChange={(e) => this.inputChangeHandler(e.target.value)}
          />
          <ul>
        { this.state.users.map(user => <li>{user.name}</li>)}
         </ul>
        </div>
        );
    }
}

export default UserSearch;