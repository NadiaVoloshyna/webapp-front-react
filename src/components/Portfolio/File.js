import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {

    return (
        <div className="FileContainer">
            <div className="File">
            <div>{props.name}</div> 
            <div>{props.url} </div>
            </div>
        </div>
    )
};

File.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
}

export default File;