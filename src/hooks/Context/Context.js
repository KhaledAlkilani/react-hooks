import {useState} from 'react'
import User from "./User"
import UserContext from './UserContext'

export default function Context() {

    const [userOne, setUserOne] = useState("Khaled")
        const userValues = {userOne, setUserOne}

  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>
       <UserContext.Provider value={userValues}>
       <User />
       </UserContext.Provider>
    </div>
  )
}