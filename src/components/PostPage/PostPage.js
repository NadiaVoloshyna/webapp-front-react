import React, { Component } from 'react';
import Button from '../Button/Button';
import { apiURL } from '../../constants/index';
import apiClient from '../../utils/axios-with-auth';
import './PostPage.css';

class PostPage extends Component {
    state = {
        title: '',
        body: '',
        name: '',
        url: null,
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
            console.log(res);
          })
          .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: response.data.message});
            }
          });
      }

    chooseFile = () => {
          
      }

    addFile = () => {

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
                    <br />
                    <Button 
                    className="PostButton"
                    type="submit"
                    title="Publish" />
                    <br />
                    <p className="Response">{this.state.responseMessage}</p>
                    <br />
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
                    {/* <Button 
                    onClick={this.chooseFile}
                    title="Choose File" /> */}
                    <input 
                    type="file"
                    value={this.state.url}
                    onChange={(e) => this.chooseFile(e.target.value)}
                    /> 
                    <Button 
                    onClick={this.addFile}
                    title="Add File" />
                    </div>
                    <p className="Response">{this.state.responseMessageFile}</p>
                </form>
            
            </div>

        );
    }

}

export default PostPage;