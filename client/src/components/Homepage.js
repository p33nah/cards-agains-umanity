import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'

const Homepage = () => {
    const [roomCode, setRoomCode] = useState('')
    const [playerName, setPlayerName] = useState('')

    return (
        <div className='Homepage'>
            <div className='homepage-menu'>
            <div className="homepage-form">
                <div className="homepage-input">
                    <label for="room">Room Code: </label>
                    <input id="room" type='text' placeholder='Enter a room code' onChange={(event) => setRoomCode(event.target.value)} />
                </div>
                <div className="homepage-input">
                    <label for="username">Username: </label>
                    <input id="username" type='text' placeholder='Choose a username' onChange={(event) => setPlayerName(event.target.value)} />
                </div>
            </div>
            
                <div className='homepage-buttons'>
                    <div className='homepage-join'>
                        <Link to={(playerName.length > 3 && roomCode) ? `/play?roomCode=${roomCode}&userName=${playerName}` : '/'}><button className="game-button green">JOIN GAME</button></Link>
                    </div>
                    <div className='homepage-create'>
                        <Link to={playerName.length > 3 ? `/play?roomCode=${randomCodeGenerator(5)}&userName=${playerName}` : '/'}><button className="game-button orange">CREATE GAME</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
