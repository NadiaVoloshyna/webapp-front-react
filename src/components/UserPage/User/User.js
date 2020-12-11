import React, {useEffect } from 'react';
import './User.css';

const User = (props) => {
    // useEffect(() => {
    //     console.log('User.js useEffect');
    // }, [props.name]);

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

export default User;