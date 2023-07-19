import React from 'react'

function Salary({salary}) {

    console.log("render salary component")

  return (
    <h3>{salary}</h3>
  )
}

export default React.memo(Salary)