import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'


let socket
const ENDPOINT = 'https://cards-against-umanity.herokuapp.com/'

const Game = (props) => {
  const data = queryString.parse(props.location.search)

  //initialize socket state
  const [room, setRoom] = useState(data.roomCode)
  const [roomFull, setRoomFull] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isChatBoxHidden, setChatBoxHidden] = useState(true)


  useEffect(() => {
    const connectionOptions =  {
        "forceNew" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    }
    socket = io.connect(ENDPOINT, connectionOptions)

    socket.emit('join', {room: room, name: data.userName}, (error) => {
        if(error)
            setRoomFull(true)
    })

    //cleanup on component unmount
    return function cleanup() {
        socket.emit('disconnected')
        //shut down connnection instance
        socket.off()
    }
  }, [])

  useEffect(() => {

    socket.on("roomData", ({ users }) => {
        setUsers(users)
    })

    socket.on('currentUserData', ({ name }) => {
        setCurrentUser(name)
    })

    socket.on('message', message => {
        setMessages(messages => [ ...messages, message ])

        const chatBody = document.querySelector('.chat-body')
        chatBody.scrollTop = chatBody.scrollHeight
    })
  }, [])


  const toggleChatBox = () => {
    const chatBody = document.querySelector('.chat-body')
    if(isChatBoxHidden) {
        chatBody.style.display = 'block'
        setChatBoxHidden(false)
    }
    else {
        chatBody.style.display = 'none'
        setChatBoxHidden(true)
    }
  }

  const sendMessage= (event) => {
    event.preventDefault()
    if(message) {
        socket.emit('sendMessage', { message: message }, () => {
            setMessage('')
        })
    }
  }

  return (
    <div className={`Game`}>
      <h1>Room: {room}</h1>
      <h2>Hi, {currentUser}!</h2>
      <div className="chatBoxWrapper">
        <div className="chat-box chat-box-player2">
            <div className="chat-head">
                <h2>Chat Box</h2>
                {!isChatBoxHidden ?
                <span onClick={toggleChatBox} class="material-icons">keyboard_arrow_down</span> :
                <span onClick={toggleChatBox} class="material-icons">keyboard_arrow_up</span>}
            </div>
            <div className="chat-body">
                <div className="msg-insert">
                    {messages.map((msg, i) => {
                        if(msg.user !== currentUser) {
                          return <div key={i} className="msg-receive">{msg.text}</div>
                        } else {
                          return <div key={i} className="msg-send">{msg.text}</div>
                        }
                    })}
                </div>
                <div className="chat-text">
                    <input type='text' placeholder='Type a message...' value={message} onChange={event => setMessage(event.target.value)} onKeyPress={event => event.key==='Enter' && sendMessage(event)} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Game