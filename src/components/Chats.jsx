import React from 'react'
import Avatar from '../img/addAvatar.png'

function Chats() {
    return (
        <div className='chats'>
            <div className="userChat">
                <img src={Avatar} />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={Avatar} />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={Avatar} />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={Avatar} />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="userChat">
                <img src={Avatar} />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats