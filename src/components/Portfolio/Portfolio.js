import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import ReactPaginate from 'react-paginate';
import Post from './Post';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage: 0,
            offset: 0,
            perPage: 5,
        };
      }

    pageCount() {
        return Math.ceil(this.state.posts.length / this.state.perPage);
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

    postsHandler = () => {
        apiClient.get(`${apiURL}/api/v1/posts`, 
        )
        .then(result => {
            console.log(result.data[0].file[0].name);
          this.setState({
              posts: result.data,
          });
        })
        .catch(error => {
          this.setState({
           error,
         }); 
      });
    };

    componentDidMount() {
        this.postsHandler();
        this.pageCount();
      }

    render() {
          const data = this.state.posts;
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
      let posts = (
        <div>
          {slice.map((post) => {
            return <Post 
            key={post.id}
            title={post.title} 
            body={post.body} 
            name={post.file[0]}
            url={post.file[1]}
            //delete={() => this.deleteUserHandler(user.id)} 
            />
          })}
      </div> 
      );
      
        return (
            <Auxiliary>
                <div>
                <div>
                    <h3>Posts Page</h3>
                </div>
                    <div>
                   {posts}
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
            </Auxiliary>
        );
    }
}

export default Portfolio;