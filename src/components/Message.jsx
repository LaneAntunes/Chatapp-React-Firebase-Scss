import React from 'react'
import Image from "../img/imagem.jpg"

function Message() {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                <img src={Image} />
                <span>just now</span>
                <span>just now</span>
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>Hello</p>
                <img src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80" />
            </div>
        </div>
    )
}

export default Message