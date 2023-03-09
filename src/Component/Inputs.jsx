import React from 'react'
import './Input.css'

const Inputs = ({setSearch,search,getRecs,validInput}) => {
  return (
    <div className='inputs'>
        <input type="search" name="" value={search} onChange={(e)=>setSearch(e.target.value)} />
        {validInput?<button onClick={getRecs}>Get Recipe</button>:<p>Write Somthing in the searchbar...</p>}
    </div>
  )
}

export default Inputs