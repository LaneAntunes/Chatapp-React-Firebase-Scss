import React from 'react'
import cam from "../img/cam.png"
import add from "../img/add.png"
import more from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

function Chat() {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={cam} />
                    <img src={add} />
                    <img src={more} />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat