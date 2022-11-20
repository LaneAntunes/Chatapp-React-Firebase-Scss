import React from 'react'
import Sidebar from '../components/Sidebar'
import '../style.scss'
import Chat from '../components/Chat'

function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home