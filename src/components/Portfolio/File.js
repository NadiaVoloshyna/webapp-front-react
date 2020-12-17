import React from 'react';
import PropTypes from 'prop-types';
import './File.css';
import Button from '../Button/Button';

const File = (props) => {
    return (
        <div className="FileContainer">
            <div className="File">
            <div>{props.name}</div> 
            <div>{props.url} </div>
            <Button onClick={props.removeF}>Delete File</Button>
            </div>
        </div>
    )
};

File.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
}

export default File;