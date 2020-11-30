import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div className="User">
            {props.name} <hr />
            {props.email} <br />
            {props.phone}<br />
            <button onClick={props.delete}>Delete User</button>
        </div>
    )
};

export default User;