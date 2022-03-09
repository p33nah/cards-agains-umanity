import React from 'react'

const Players = ({users, turn, score}) => {
  return (
    <div className='players'>
      {
        users.map(user => {
          return (
            <div key={user.id} className='player'>
              <p className='player_name'>{user.name}</p>
              <p>{score?.[user.name]}</p>
              {user.name === turn && <div className='current_turn'></div>}
            </div>
          )
        })
      }
    </div>
  )
}

export default Players