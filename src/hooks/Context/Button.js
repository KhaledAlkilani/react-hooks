import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext' 

function Button() {
    
    const {setUserOne} = useContext(UserContext)

  return (
    <button onClick={() => {
        setUserOne("Tony Montana")
    }}
    >
    Update user
    </button>
  )
}

export default Button