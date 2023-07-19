import React from 'react'

function Age({age}) {

    console.log("render age component")

  return (
    <h3>{age}</h3>
  )
}

export default React.memo(Age)