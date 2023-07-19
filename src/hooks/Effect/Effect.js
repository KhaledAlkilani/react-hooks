import {useEffect, useState} from "react"

export default function Effect() {

    // const [counter, setCounter] = useState(0)


    // mount: load the component
    // => update: make update on this component
    // => unmount: component back to its default state
    
    // useEffect(() => {
    //     console.log("mount")

    //     // return () => {(
    //     //     console.log("unmount")
    //     // )}
    // }, [counter])

    // const update = () => setCounter(prev => prev + 1)

    const [users, setusers] = useState([])

    const [filteredUsers, setFilteredUsers] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setusers(data))

        return() => {
            return false
        }
    }, [])

    useEffect(() => {
        if (users.length > 0) {
            console.log(users)
        }
    }, [users])

    useEffect(() => {
        const filter = users.filter(
             user => user.name.toLowerCase().includes(inputValue)
        )
        setFilteredUsers(filter)}, 
    [inputValue, users])

    useEffect(() => {
        setFilteredUsers(users)
    }, [users])

  
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>

        <input style={{padding: 10}} type="text" className="search" onInput={(e) => setInputValue(e.target.value)} />

        {filteredUsers.map(user => <h3 key={user.id}>{user.name}</h3>)}
        {/* <h2>{users}</h2> */}
       {/* <button style={{borderRadius: 5, padding: 10, width: 90, fontSize: 20, cursor:"pointer"}} onClick={update}>Click</button> */}
    </div>
  )
}

