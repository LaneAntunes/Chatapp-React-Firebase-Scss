import React from 'react'
import Image from '../img/IMG20211012152223.jpg'

function Message() {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                <img src={Image} />
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>Hello</p>
                <img src={Image} />
            </div>
        </div>
    )
}

export default Message