import React from 'react';
import PropTypes from 'prop-types';
import InputMessages from './InputMessage';


function Messages({messages}) {
    return (
        <div className="messages">
            <div className='messageSection'>
                <span className="message">
                    <ul>
                        
                                <li key={messages.id} className='msg'>{messages.message}</li>
                            
                    </ul>
                </span>
            </div>
            <InputMessages/>
        </div>
    )
}



Messages.propTypes = {
    messages: PropTypes.object.isRequired
}


export default Messages;