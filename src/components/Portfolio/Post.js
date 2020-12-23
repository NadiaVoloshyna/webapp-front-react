import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import File from './File';
import Button from '../Button/Button';
import Auxiliary from '../../hoc/Auxiliary';

const Post = (props) => {
let [expandedState, setExpandedState] = useState({
        expanded: true,
    });
const toggleExpanded = () => {
    setExpandedState(!expandedState)
    console.log(expandedState);
}
    return (
        <Auxiliary>
        <div className="Container">
            <div className="PostContainer">
                <div className="Title">
                    {props.title}
                </div>
                <div className={`Content ${expandedState ? 'collapsed' : 'expanded'}`}>
                    <button className={`PostButton ${expandedState ? 'collapsed' : 'expanded'}`} onClick={toggleExpanded}>
                        ...see more
                        {/* {expandedState ? '...see more' : '...see less'} */}
                    </button>
                    {props.body}
                </div>
            </div>
                <Button className="ButtonFile" onClick={props.removePost} title="Delete Post" /> 
        </div>
        <div>
               <File
                file={props.file}
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