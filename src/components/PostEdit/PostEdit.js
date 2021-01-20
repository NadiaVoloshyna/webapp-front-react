import React, { Component } from 'react';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import Post from '../Portfolio/Post';


class PostEdit extends Component {
    state = {
        post: '',
    };

    getPostHandler = (postId) => {
        console.log(postId);
        apiClient.get(`${apiURL}/api/v1/posts/${postId}`, 
        )
        .then(result => {
          this.setState({
              post: result.data,
          });
        })
        .catch(error => {
          this.setState({
           error,
         }); 
      });
    };

    render() {
        const currentPost = this.state.post;
        let post = (
            <div>
            {Object.entries(currentPost).map(([key, data]) => {
            return (
            <Post 
                key={key}
                title={data.title} 
                body={data.body} 
                //file={file}
                getPost={() => this.getPostHandler(data.id)}
                removePost={() => this.removePostHandler(data.id)} 
                //removeFile={() => this.removeFileHandler(id)}
            />
            );  
    })}    
            </div>
        )
        return (
            <>{post}</>
        );
    }
}

export default PostEdit;