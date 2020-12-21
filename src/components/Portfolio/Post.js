import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import File from './File';
import Button from '../Button/Button';
import Auxiliary from '../../hoc/Auxiliary';

const Post = (props) => {

    return (
        <Auxiliary>
        <div className="Container">
            <div className="PostContainer">
                <div className="Title">
                    {props.title}
                </div>
                <div className="Body">
                    {props.body}
                </div>
            </div>
                <Button className="ButtonFile" onClick={props.removePost} title="Delete Post" /> 
        </div>
        <div>
               <File
                name={props.name}
                url={props.url}
                removeFile={props.removeFile}
                 /> 
        </div>  
        </Auxiliary>
    )
};

Post.propTypes = {
    removePost: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
}

export default Post;