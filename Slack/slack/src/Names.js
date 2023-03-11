import React from "react";
import PropTypes from 'prop-types'


function Names({users, handleActiveUser}) {
    return (
        <div className="names">
            <div className="users">USERS</div>
            <ul className="userNames">
                {users.map(user=> {
                    return (
                        <li key={user.id} onClick={()=>handleActiveUser(user.id)} className='userName'>
                            # {user.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



Names.propTypes = {
    users: PropTypes.array.isRequired,
    handleActiveUser: PropTypes.func.isRequired
}

export default Names;