import React from 'react';

const user = (props) => {
    return (
        <div>
            <p>I'm {props.name} and my email is {props.email}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default user;