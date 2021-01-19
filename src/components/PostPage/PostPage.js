import React, { Component } from 'react';
import Button from '../Button/Button';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import './PostPage.css';

class PostPage extends Component {
     state = {
        postId: '',
        title: '',
        body: '',
        name: '',
        url: '',
        file: null,
        responseMessage: '',
        responseMessageFile: '',
        loading: false,
      }

    handleChangeTitle = (data) => {
        this.setState({ 
            title: data,
        });
    }

    handleChangeBody = (data) => {
        this.setState({ 
            body: data,
        });
    }

    handleChangeName = (data) => {
        this.setState({ 
            name: data,
        });
    }

    chooseFile = (e) => {
      this.setState({url: e.target.value});
      this.setState({file:e.target.files[0]})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading: true});
        const post = {
          title: this.state.title,
          body: this.state.body,
        };
  
        apiClient.post(`${apiURL}/api/v1/posts`, post )
          .then(res => {
            this.setState({responseMessage: 'Successfully published!'});
            this.setState({postId: res.data.id})
            this.addFile(this.state.postId, this.state.file).then((response)=>{
              console.log(response.data);
            })
          })
          .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: response.data.message});
            }
          });
        }

        addFile = (postId, file) => {
          const name = this.state.name;
          const url = this.state.url;
          
          const formData = new FormData(); 
          formData.append('file', file);
          formData.append('name', name);
          formData.append('url', url);

          apiClient.saveUserImage(`${apiURL}/api/v1/posts/${postId}`, formData)
          .then(res => {
            this.setState({responseMessage: 'Successfully added!'});
            console.log(res);
          })
          .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessageFile: response.data.message});
            }
          });
        }

    render() {
        return (
            <div className="PostPageForm">
                <h4 className="PostPageText">Write a post</h4> 
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                    className="PostTitleInput"
                    name="title"
                    type="title"
                    value={this.state.title}
                    placeholder="title..."
                    description="title"
                    //validate={VALIDATION_RULES.EMAIL}
                    onChange={(e) => this.handleChangeTitle(e.target.value)}
                    /> <br />
                    <textarea 
                    className="PostBodyInput"
                    name="body"
                    type="body"
                    value={this.state.body}
                    placeholder="text..."
                    description="body"
                    //validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangeBody(e.target.value)}
                    /> 
                    <p className="Response">{this.state.responseMessage}</p>

                    <div className="File">
                    <textarea 
                    className="FileNameInput"
                    name="name"
                    type="name"
                    value={this.state.name}
                    placeholder="file name..."
                    description="name"
                    //validate={VALIDATION_RULES.PASSWORD}
                    onChange={(e) => this.handleChangeName(e.target.value)}
                    /> 
                    <input 
                    name="file"
                    type="file"
                    //style={{display:'none'}}
                    //multiple
                    value={this.state.url}
                    description="file"
                    onChange={this.chooseFile}
                    /> 
                    {/* <Button 
                    onClick={this.addFile}
                    title="Add File" /> */}
                    </div>
                    <p className="Response">{this.state.responseMessageFile}</p>
                     <Button 
                    className="PostButton"
                    type="submit"
                    title="Publish" />
                    <br />
                </form>
            
            </div>

        );
    }

}

export default PostPage;