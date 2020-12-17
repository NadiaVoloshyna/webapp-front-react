import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import File from './File';
import Button from '../Button/Button';

const Post = (props) => {

    return (
        <div className="PostContainer">
            <div>{props.title}</div> 
            <div>{props.body} </div>
            <Button onClick={props.removePost}>Delete Post</Button>
            {/* <button onClick={props.removePost}>Delete Post</button> */}
            <File />
        </div>
    )
};

Post.propTypes = {
    removePost: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
}

export default Post;