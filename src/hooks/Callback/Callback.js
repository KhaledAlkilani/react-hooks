import {useCallback, useState, useEffect} from 'react'
import Age from "./Age"
import Salary from "./Salary"
import Button from "./Button"

function Callback() {

    const [age, setAge] = useState(26)
    const [salary, setSalary] = useState(1000)

    const ageUp = useCallback(() => setAge(age + 1), [age])
    const salaryUp = useCallback(() => setSalary(salary + 1), [salary])

  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", minHeight: "100vh", alignItems:"center"}}>
     <Age age={age} />
     <br/>
     <Salary salary={salary} />

     <div>

        <Button text={"Age up"} action={ageUp} />
        <Button text={"Salary up"} action={salaryUp} />

     </div>
    </div>
  )
}

export default Callback