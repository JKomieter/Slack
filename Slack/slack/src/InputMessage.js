import React from 'react';
// import { messages } from './static-data';


class InputMessages extends React.Component{

    handleMessage = ()=>{
        console.log()
    }
    render() {
        return (
            <div className='inputSection'>
                <input ref={(input)=> this.input = input} className='text' type='text' placeholder='Type your message and hit Enter to send' onChange={this.handleMessage()}/>
            </div>
        )
    }
}


export default InputMessages;