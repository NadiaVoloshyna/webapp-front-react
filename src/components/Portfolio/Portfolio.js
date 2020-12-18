import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import ReactPaginate from 'react-paginate';
import Post from './Post';
//import File from "./File";

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

    removePostHandler = (postId) => {
        apiClient.delete(`${apiURL}/api/v1/posts/${postId}`)
        .then(result => {
        const deleted = result;
        if(deleted) {
          alert ('Successfully deleted');
      }
      })
      }

      removeFileHandler = (fileId) => {
        apiClient.delete(`${apiURL}/api/v1/posts/delete/${fileId}`)
        .then(result => {
        const deleted = result;
        if(deleted) {
          alert ('Successfully deleted');
      }
      })
      }

    componentDidMount() {
        this.postsHandler();
        this.pageCount();
      }

    render() {
          const data = this.state.posts;
          const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
      let posts = (
        <div>
          {slice.map((post,file) => {
            return <Post 
            key={post.id}
            title={post.title} 
            body={post.body} 
            name={file.name}
            url={file.url}
            removePost={() => this.removePostHandler(post.id)} 
            removeFile={() => this.removeFileHandler(file.id)}
            />
          })}
          {/* <ul>
              {slice.map(file => {
                  return <File
                  key={file.id}
                  name={file.name}
                  url={file.url}
                  />
              })}
          </ul> */}
      </div> 
      );
      
        return (
            <Auxiliary>
                <div>
                <div>
                    <h3>Portfolio Page</h3>
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
