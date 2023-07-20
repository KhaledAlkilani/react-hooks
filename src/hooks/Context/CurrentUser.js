import {useContext} from 'react'
import UserContext from './UserContext'

 function CurrentUser() {

    const {userOne} = useContext(UserContext)

  return (
    <div style={{textAlign:"center", marginBottom:10}}>{userOne}</div>
  )
}

export default CurrentUser