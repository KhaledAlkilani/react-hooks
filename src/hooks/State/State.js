import {useState} from 'react'



const  State = () => {

  const [posts, setPosts] = useState()
  const [postId, setPostId] = useState(1)

  fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPosts(data))

const changeCounterUp = () => setPostId(prev => prev + 1)

const changeCounterDown = () => setPostId(prev => prev - 1)

  return (
    <div style={{display:"flex", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>
      <button onClick={changeCounterUp}>Up</button>
      <button onClick={changeCounterDown}>Down</button>
      {posts?.map(post => <div key={post.id}>{post.id === postId ? post.title : ""}</div>)}
      
    </div>
  )
}

export default State


// import React from "react"

// const State = () => {

// const [counter, setCounter] = React.useState(0)

// const changeCounterUp = () => setCounter(prev => prev + 1)

// const changeCounterDown = () => setCounter(prev => prev - 1)


//   return (
//     <div style={{display:"flex", width:"100%", minHeight:"100vh"}}>
//       <div>
//     <h1>{counter}</h1>
//     <button onClick={changeCounterUp}>Up</button>
//     <button onClick={changeCounterDown}>Down</button>
//     </div>
//     </div>
    
//   )
// }

// export default State

