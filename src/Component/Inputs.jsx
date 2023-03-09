import React from 'react'
import './Input.css'

const Inputs = ({setSearch,search,getRecs,validInput}) => {
  return (
    <div className='inputs'>
        <input type="search" name="" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {<button onClick={getRecs}>Get Recipe</button>}
    </div>
  )
}

export default Inputs