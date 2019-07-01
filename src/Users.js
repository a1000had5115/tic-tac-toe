import React from 'react';

const Users = (props) => {
    return (
        <div className="usersContainer">
            <p>{props.userOne}</p>
            <p>{props.userTwo}</p>
        </div>
    )
}

export default Users;