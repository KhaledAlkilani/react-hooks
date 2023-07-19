import {useRef, useEffect, useState} from 'react'

export default function Ref() {

const lastP = useRef()
const count = useRef(0)

const [render, setRender] = useState(0)

useEffect(() => {
  count.current = count.current+1
  console.log(count.current)
}, [render])

  const moveDown = () => {
     lastP.current.scrollIntoView({
      behavior: "smooth", block: "center"
     })
  }

  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>

    <h1>Go to paragraph</h1>

    <button onClick={() => {setRender(prev => prev +1)}}>Reload</button>
    <h2>{render}</h2>

    <button onClick={moveDown}>Go to the last paragraph</button>

    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column", padding: 30, width:"30%"}}>
    <section style={{textAlign:"center"}}>
      <img src="https://picsum.photos/id/600/200/300"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </section>

    <section style={{textAlign:"center"}}>
      <img src="https://picsum.photos/id/609/200/300" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </section>

    <section style={{textAlign:"center"}}>
      <img src="https://picsum.photos/id/602/200/300" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </section>

    <section style={{textAlign:"center"}}>
      <img src="https://picsum.photos/id/603/200/300" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </section>
    <section style={{textAlign:"center"}}>
      <img src="https://picsum.photos/id/604/200/300" />
      <p ref={lastP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </section>
    </div>

    </div>
  )
}

