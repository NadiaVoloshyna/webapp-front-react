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
        file: null,
        name: '',
        url: '',
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
            this.setState({postId: res.data.id})
          })
          .catch(error => {
            const { response } = error;
            if (response) {
              this.setState({responseMessage: response.data.message});
            }
          });
      }

    chooseFile = (e) => {
      this.setState({file:e.target.files[0]});
    }

    addFile(e){
      e.preventDefault() 
      this.fileUpload(this.state.file).then((response)=>{
        console.log(response.data);
      })
    }

    fileUpload = (file) => {
      let formData = new FormData(); 
      formData.append('file', file);
      console.log(formData);

        const postId = this.state.postId;
        // const file = this.state.url;
      const body = this.state.name;
        
        apiClient.post(`${apiURL}/api/v1/posts/${postId}`, formData, body)
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
                    name="file"
                    type="file"
                    //style={{display:'none'}}
                    //multiple
                    value={this.state.url}
                    description="file"
                    onChange={this.chooseFile}
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