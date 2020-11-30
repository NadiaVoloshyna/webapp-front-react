import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div className="User">
            {props.name} <br />
            {props.email} <br />
            {props.phone}<hr />
            <button onClick={props.delete}>Delete User</button>
        </div>
    )
};

export default User;