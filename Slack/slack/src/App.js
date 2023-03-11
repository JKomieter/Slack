import React from 'react';
import Channels from './Channels';
import Names from './Names';
import './App.css';
import { channels, messages } from './static-data';
import { users } from './static-data';
import Messages from './Messages';



class Slack extends React.Component {
  state = {
    activeUser: 2
  }

  handleActiveUser = (index)=> {
    this.setState({
      activeUser: index
    })
  }
  
  renderMessage() {
    switch(this.state.activeUser) {
      default:
        case 0: return <Messages messages={messages[0]}/>
        case 1: return <Messages messages={messages[1]}/>
        case 2: return <Messages messages={messages[2]}/>
        case 3: return <Messages messages={messages[3]}/>
        case 4: return <Messages messages={messages[4]}/>
        case 5: return <Messages messages={messages[5]}/>
    }
  }
  

  render() {
    return (
      <div className='slack'>
        <div className='left'>
          <Channels channels={channels}/>
          <Names users={users} handleActiveUser={this.handleActiveUser}/>
        </div>
        <div className='right'>
          {this.renderMessage()}
        </div>
      </div>
    )
  }
}

export default Slack;
