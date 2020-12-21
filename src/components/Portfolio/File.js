import React from 'react';
import PropTypes from 'prop-types';
import './File.css';
import Button from '../Button/Button';

const File = (props) => {
    return (
        <div className="FileContainer">
            <div>
                {props.name}
            </div>
            <div className="Url">
                {props.url}
            </div>
        <Button onClick={props.removeFile} title="Delete File" />
        </div>
    )
};

File.propTypes = {
    removeFile: PropTypes.func,
    name: PropTypes.string,
    url: PropTypes.string,
}

export default File;

