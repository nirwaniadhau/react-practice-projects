import React from 'react'

const PutUsername = ({setUsername}) => {
  return (
    <div>
        <label htmlFor="username">Enter GitHub Username:</label>
        <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} />
    </div>
  )
}

export default PutUsername