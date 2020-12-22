import React from 'react';
import PropTypes from 'prop-types';
import './File.css';
import Button from '../Button/Button';

const File = (props) => {
    // const files = props.map(({name, url, removeFile}) => (
    //     <div className="FileContainer">
    //         <div>
    //             {name}
    //         </div>
    //         <a className="Url" href={url}>{url}</a>
    //     <Button onClick={removeFile} title="Delete File" />
    //     </div>
    // ))
    // return (
    //     <div>
    //      {files}
    //     </div>
    // )

    return (
        <div className="FileContainer">
            <div>
                {props.name}
            </div>
            <a className="Url" href={props.url}>{props.url}</a>
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

