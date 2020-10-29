import React, { useEffect, useState } from 'react'

function Common() {
  const [state, setState] = useState(null)
  return (
    <div>
      common component
      <span>{state}</span>
      <button onClick={() => {
        setState(1 + state)
      }}>click me</button>
    </div>
  )
}

export default Common
