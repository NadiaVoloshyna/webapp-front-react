import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import File from './File';
import Button from '../Button/Button';
import Auxiliary from '../../hoc/Auxiliary';

const Post = (props) => {
    const [expandedState, setExpandedState] = useState({
        expanded: false,
    });

    const [charsToShowState, setCharsToShowState] = useState({
        charsToShow: 80,
    });

    // const [postLengthState, setPostLengthState] = useState({
    //     postLength: 0,
    // });

    const showMore = (postLengthState) => {
        postLengthState <= 80 ? (
            setExpandedState({ expanded: false }) && setCharsToShowState({ charsToShow: 80 })
          ) : (
            setExpandedState({ expanded: true }) && setCharsToShowState({ charsToShow: 790 })
          ) 

        setExpandedState({
            expended: true,
        });
        setCharsToShowState({
            charsToShow: 800,
        })
    }

    return (
        <Auxiliary>
        <div className="Container">
            <div className="PostContainer">
                <div className="Title">
                    {props.title}
                </div>
                <div className="Body">
                    {props.body}
                    <button className="PostButton" onClick={showMore && props.calculate}>
                        {expandedState && charsToShowState === 80 ? '...see more' : '...see less'}
                    </button>

                    {/* <button onClick={() => this.setState({ expanded: !expanded })}>
            {expanded ? 'View Less' : 'View More'}
        </button> */}

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