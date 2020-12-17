import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import File from './File';

const Post = (props) => {

    return (
        <div className="PostContainer">
            <div className="Post">
            <div>{props.title}</div> 
            <div>{props.body} </div>
            <File />
            {/* <button onClick={props.delete}>Delete User</button> */}
            </div>
        </div>
    )
};

Post.propTypes = {
    //delete: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
}

export default Post;