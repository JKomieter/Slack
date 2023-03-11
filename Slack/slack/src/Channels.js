import React from 'react';


function Channels({channels}) {
    return (
        <div className='channels'>
            <div className='CH'>CHANNELS</div>
            <ul className='channelList'>
                {channels.map(channel=>{
                    return (
                        <li className='channelName' key={channel.id}>#   {channel.channelname}</li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Channels;