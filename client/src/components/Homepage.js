import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')
    const [playerName, setPlayerName] = useState('')

    return (
        <div className='homepage'>
            <div className="homepage_title">
                <h1>Cards</h1>
                <h1>Against</h1>
                <h1>Humanity</h1>
            </div>
            <div className='homepage_menu'>
            <div className="homepage_form">
                <div className="homepage_input">
                    <label>Username: </label>
                    <input id="username" type='text' placeholder='Choose a username' onChange={(event) => setPlayerName(event.target.value)} />
                </div>
                <div className="homepage_input">
                    <label >Room Code: </label>
                    <input id="room" type='text' placeholder='Enter a room code' onChange={(event) => setRoomCode(event.target.value)} />
                </div>
            </div>
            
                <div className='homepage_buttons'>
                    <div className='homepage_join'>
                        <Link to={(playerName.length > 3 && roomCode) ? `/play?roomCode=${roomCode}&userName=${playerName}` : '/'}><button className="game_button">JOIN GAME</button></Link>
                    </div>
                    <div className='homepage_create'>
                        <Link to={playerName.length > 3 ? `/play?roomCode=${randomCodeGenerator(5)}&userName=${playerName}` : '/'}><button className="game_button">CREATE GAME</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
