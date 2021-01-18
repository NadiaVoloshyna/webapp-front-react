import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import ReactPaginate from 'react-paginate';
import Post from './Post';
import './Portfolio.css';

class Portfolio extends Component {
    state = {
              posts: [],
              currentPage: 0,
              offset: 0,
              perPage: 5,
              expanded: false,
              postLength: 0,
          };
 
    pageCount() {
        return Math.ceil(this.state.posts.length / this.state.perPage);
      }

      handlePageClick = e => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            offset,
            selectedPage,
          });
      };

    postsHandler = () => {
        apiClient.get(`${apiURL}/api/v1/posts`, 
        )
        .then(result => {
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
        console.log(fileId);
        apiClient.delete(`${apiURL}/api/v1/posts/delete/${fileId}`)
        .then(result => {
        const deleted = result;
        if(deleted) {
          alert ('Successfully deleted');
      }
      })
      }

      calculatePostLength = (postLength) => {
        this.setState({
          postLength: postLength,
        });
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
              {slice.map((post) => {
                let postLength = post.body.length;
                let file = post.file;                            
                let id = [];  
                //let idd = [];
                for(let i = 0; i < file.length; ++i) {
                 id.push(file[i].id);  
                 //idd = id[i];         
              //console.log(idd);                                                 
                }          
              //console.log(idd);                                                                          
                return (
                <Post 
                key={post.id}
                title={post.title} 
                body={post.body} 
                file={file}
                calculate={() => this.calculatePostLength(postLength)}
                removePost={() => this.removePostHandler(post.id)} 
                removeFile={() => this.removeFileHandler(id)}
                />
                        );
                    })}
                </div> 
            );
        
        return (
            <Auxiliary>
                <div>
                <div>
                    <h3 className="PortfolioText">Portfolio Page</h3>
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
