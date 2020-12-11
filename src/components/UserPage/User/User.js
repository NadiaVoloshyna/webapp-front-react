import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = (props) => {

    // useEffect(() => {
    //     divRef.current.focus();
    // }, []);

    return (
        <div className="UserContainer">
            <div className="User">
            {props.name} <br />
            {props.email} <br />
            {props.phone}<hr />
            <button onClick={props.delete}>Delete User</button>
            </div>
        </div>
    )
};

User.propTypes = {
    delete: PropTypes.func,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
}

export default User;