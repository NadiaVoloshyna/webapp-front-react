import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div className="User">
            <p>
            {props.name} <br />
            {props.email} <br />
            {props.phone}
            </p>
            <button onClick={props.delete}>Delete User</button>
        </div>
    )
};

export default User;