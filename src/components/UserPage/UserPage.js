import React, { Component } from 'react';
import './UserPage.css';
import apiClient from '../../utils/axios-with-auth';
import { apiURL } from '../../constants/index';
import ReactPaginate from 'react-paginate';
//import Loader from 'react-loader-spinner';
//import Loader from '../Loader/Loader';
import User from './User/User';
import UserSearch from './UserSearch/UserSearch';

class UserPage extends Component {
    state = {
        users: [],
        showUsers: false,
        currentPage: 0,
        offset: 0,
        perPage: 5,
    }
 
pageCount() {
    return Math.ceil(this.state.users.length / this.state.perPage);
  }

  handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        offset,
        selectedPage,
      },
    );
  };

deleteUserHandler = (userId) => {
    apiClient.delete(`${apiURL}/api/v1/users/${userId}`)
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

componentDidMount() {
  this.pageCount();
}

shouldComponentUpdate() {
  return true;
}

render() {
    let users = null;
    const classes = [];
    if(this.state.showUsers) {
          const data = this.state.users;
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
      users = (
        <div>
          {slice.map((user) => {
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
      classes.push('Light');
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
        <button 
        className={classes} onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
        <ReactPaginate
        containerClassName="Pagination"
        activeClassName="active"
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={this.pageCount()}
        onPageChange={this.handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        />
        </div> 

      </div>
    );
}
}

export default UserPage;