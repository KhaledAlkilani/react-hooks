import {useState, useMemo} from 'react'

export default  function Memo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const changeOne = () => {setCounterOne(prev => prev + 1)}
    const changeTwo = () => {setCounterTwo(prev => prev + 1)}

    const isEven = useMemo(() => {
        let i = 0
        while(i<200000000) i++
        return counterOne % 2 == 0
    },[counterOne])

   

  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>
        <button style={{padding: 10, width: 80}} onClick={changeOne}>{counterOne}</button>
        
        {isEven ? "Even" : "Odd"}
        <br/>
        <br/>

        <button style={{padding: 10, width: 80}} onClick={changeTwo}>{counterTwo}</button>
    </div>
  )
}

