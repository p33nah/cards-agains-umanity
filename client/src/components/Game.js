import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'
import Chat from '../components/Chat/Chat'
import questions from '../utils/Questions'
import answers from '../utils/Answers'
import {randomInArray} from '../utils/random'
import shuffleArray from '../utils/shuffleArray'
import Card from '../components/Card/Card'
import Players from './Players/Players'


let socket
const ENDPOINT = 'https://cards-against-humanity-ita.herokuapp.com/';

const shuffledAnswers = shuffleArray(answers)
const shuffledQuestions = shuffleArray(questions)



const Game = (props) => {
  const data = queryString.parse(props.location.search)

  //initialize socket state
  const [roomFull, setRoomFull] = useState(false)
  const [users, setUsers] = useState([])
  const [roomCreator, setRoomCreator] = useState(null)
  const [currentUser, setCurrentUser] = useState('')

  //initialize game state
  const [winner, setWinner] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState({})
  const [turn, setTurn] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [answersCards, setAnswersCards] = useState([])
  const [questionsCards, setQuestionsCards] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [playersCards, setPlayersCards] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [playedCards, setPlayedCards] = useState([])
  const [everyPlayerHasConfirmed, setEveryPlayerHasConfirmed] = useState(false)
  const [showConfirmButton, setShowConfirmButton] = useState(false)

  // initial connection
  useEffect(() => {
    const connectionOptions =  {
        "forceNew" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    }
    socket = io.connect(ENDPOINT, connectionOptions)

    socket.emit('join', {room: data.roomCode, name: data.userName}, (error) => {
        if(error)
            setRoomFull(true)
    })

    const cleanUp = () => {
      socket.emit('disconnected')
      //shut down connnection instance
      socket.off()
    }
    window.addEventListener('beforeunload', cleanUp);

    return () => {
      window.removeEventListener('beforeunload', cleanUp);
    }
  }, [data.roomCode, data.userName])
  
  // socket listeners
  useEffect(() => {

    socket.on("roomData", ({ users }) => {
        setUsers(users)
    })

    socket.on('currentUserData', ({ name }) => {
        setCurrentUser(name)
    })

    socket.on('initGameState', ({ turn, playersCards, currentQuestion, answers, questions, gameStarted, score}) => {
      setScore(score)
      setTurn(turn)
      setPlayersCards(playersCards)
      setCurrentQuestion(currentQuestion)
      setAnswersCards(answers)
      setQuestionsCards(questions)
      setGameStarted(gameStarted)
    })

    socket.on('updateGameState', ({ playedCards, remainingAnswers, remainingQuestions, currentQuestion, confirmed, allUsersHaveConfirmed, playersCards, turn, score, resetPlayedCards, selectedAnswers}) => {
      playedCards && setPlayedCards(prev => ([...prev, playedCards]))
      remainingAnswers && setAnswersCards(remainingAnswers)
      remainingQuestions && setQuestionsCards(remainingQuestions)
      confirmed && setConfirmed(confirmed)
      allUsersHaveConfirmed && setEveryPlayerHasConfirmed(allUsersHaveConfirmed)
      playersCards && setPlayersCards(playersCards)
      resetPlayedCards && setPlayedCards([])
      currentQuestion && setCurrentQuestion(currentQuestion)
      selectedAnswers && setSelectedAnswers(selectedAnswers)
      turn && setTurn(turn)
      score && setScore(score)
    })
    
  }, [])

  useEffect(() => {
    if(users.length === 1) {
      setRoomCreator(users[0].name)
    }
  }, [users])

  useEffect(() => {
    if(selectedAnswers.length === 0) return
    if(currentQuestion.pick === 1) {
      if(selectedAnswers.length === 1) {
        setShowConfirmButton(true)
      } else {
        setShowConfirmButton(false)
      }
    } else if(currentQuestion.pick === 2) {
      if(selectedAnswers.length === 2) {
        setShowConfirmButton(true)
      } else {
        setShowConfirmButton(false)
      }
    } else if(currentQuestion.pick === 3) {
      if(selectedAnswers.length === 3) {
        setShowConfirmButton(true)
      } else {
        setShowConfirmButton(false)
      }
    }
  }, [currentQuestion?.pick, selectedAnswers?.length])

  useEffect(() => {
    if(!playedCards.length && !confirmed) return
    const allUsersHaveConfirmed = playedCards.every(({user}) => user === confirmed)
    socket.emit('updateGameState', {
      allUsersHaveConfirmed: allUsersHaveConfirmed
    })
  }, [playedCards, confirmed])

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
  }
  const startGame = () => {
    console.log('game started')
    
    const playersCardsObj = users.reduce((acc, user) => {
      return {
        ...acc,
        [user.name]: [...shuffledAnswers.splice(0, 10)]
      }
    }, {})

    const score = users.reduce((acc, user) => {
      return {
        ...acc,
        [user.name]: 0
      }
    }, {})

    setRoomCreator(null)

    socket.emit('initGameState', {
      turn: roomCreator,
      score: score,
      playersCards: playersCardsObj,
      currentQuestion: randomInArray(shuffledQuestions),
      answers: shuffledAnswers,
      questions: shuffledQuestions,
      gameStarted: true
    })
  }
  const confirmSelection = () => {
    const playedCards = {user: currentUser, answers: selectedAnswers}
    const remainingAnswers = answersCards.filter(answer => !selectedAnswers.includes(answer))
    
    setShowConfirmButton(false)
    socket.emit('updateGameState', {
      playedCards: playedCards,
      confirmed: currentUser,
      remainingAnswers: remainingAnswers
    })
  }

  const chooseWinner = (card) => {
    const remainingQuestions = questionsCards.filter(q => q.text !== currentQuestion.text)
    const nextQuestion = remainingQuestions[0]

    let playersCardsCopy = {...playersCards}
    let answersCardsCopy = [...answersCards]
    let scoreCopy = {...score}

    playedCards.forEach(({user, answers}) => {
      if(currentQuestion.pick === 1) {
        playersCardsCopy[user] = playersCardsCopy[user].filter(a => !answers.includes(a)).concat(answersCardsCopy.splice(0, 1))
      } else if(currentQuestion.pick === 2) {
        playersCardsCopy[user] = playersCardsCopy[user].filter(a => !answers.includes(a)).concat(answersCardsCopy.splice(0, 2))
      } else if(currentQuestion.pick === 3) {
        playersCardsCopy[user] = playersCardsCopy[user].filter(a => !answers.includes(a)).concat(answersCardsCopy.splice(0, 3))
      }
    })

    scoreCopy[card.user] = scoreCopy[card.user] + 1

    socket.emit('updateGameState', {
      turn: card.user,
      score: scoreCopy,
      currentQuestion: nextQuestion,
      remainingQuestions: remainingQuestions,
      remainingAnswers: answersCardsCopy,
      resetPlayedCards: true,
      selectedAnswers: [],
      playersCards: playersCardsCopy,
      confirmed: false,
      allUsersHaveConfirmed: false
    })
  }
  
 
  return (
    <div className={`game`}>
      <h2 onClick={() => copyToClipboard(data.roomCode)} >Room: {data.roomCode}</h2>
      {/*<img src='copy.png' alt='copy' onClick={copyToClipboard}/>*/}
      <Players users={users} turn={turn} score={score}/>
      {/*socket && <Chat socket={socket} currentUser={currentUser}/>*/}
      { roomCreator && <button onClick={startGame}>Start game</button>}
      <div className="board">
      {currentQuestion && <Card type='question' content={currentQuestion} />}
      </div>
      <div className="hand">
         {playersCards && playersCards[currentUser]?.map((card, i) => {
          return (
          <Card key={i} 
            type='answer' 
            content={card} 
            selectCard={turn !== currentUser ? setSelectedAnswers : () => {}} 
            selected={selectedAnswers} 
            pick={currentQuestion?.pick}
          />
          )})}
      </div>
      {showConfirmButton && (
        <div className="confirm_btn">
          <button onClick={confirmSelection}>Confirm Selection</button>
        </div>
      )}
      {everyPlayerHasConfirmed && turn === currentUser && (
        <div className="final_answers">
          {playedCards.map(card => {
          return (
            <div key={card.user} className='card card_answer card_default' onClick={() => chooseWinner(card)}>
                {card.answers.map(answer => {
                return (
                  <div key={answer} className='card_answer card_default'>
                    <div className="content">{answer}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
        </div> 
      )}
    </div>
  )
}

export default Game