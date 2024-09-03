import React from 'react'
import { useParams } from 'react-router-dom'

function Coin() {
  const {id}= useParams();
  return (
    <div>ID-{id}
      
    </div>
  )
}

export default Coin
