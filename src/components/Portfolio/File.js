import React from 'react';
import PropTypes from 'prop-types';
import './File.css';
import Button from '../Button/Button';

const File = (props) => {
    const files = props.file.map((file) => (
        <div className="FileContainer" key={file.id}>
            <div>
                {file.name}
            </div>
            <a className="Url" href={file.url}>{file.url}</a>
        <Button onClick={props.removeFile} title="Delete File" />
        </div>
    ))
    return (
        <div>
         {files}
        </div>
    )
};

File.propTypes = {
    removeFile: PropTypes.func,
    name: PropTypes.string,
    url: PropTypes.string,
}

export default File;

