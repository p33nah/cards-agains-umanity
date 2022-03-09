import React, { useState } from 'react'

const Card = ({type, content, selectCard, selected, pick}) => {

  
  
  const handleSelect = () => {
    if(!type === 'answer') return
    if(pick === 1){
      selectCard([content])
    }
    if(pick > 1) {
      !selected.includes(content) ? selectCard(prev => [...prev, content]) : selectCard(prev => prev.filter(card => card !== content))
    }
  }

  
  const style = {
    backgroundColor: `${type === 'question' ? 'black' : 'white'}`,
    color: `${type === 'question' ? 'white' : 'black'}`,
    border: `${selected && selected.includes(content) ? '5px solid black' : 'none'}`
  }


  return (
    <div className={`card card_${type}`} style={style} onClick={handleSelect}>
      <div className="content">
        <h2>{content?.text || content}</h2>
        <p>{content?.pick}</p>
      </div>
    </div>
  )
}

export default Card