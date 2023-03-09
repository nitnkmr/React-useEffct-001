import React from 'react'
import { Link } from 'react-router-dom';

function Description({foodId,data}) {
    console.log(data);
  return (
    <div className='DescContainer'>
        <h2>{data.hits[foodId].recipe.label}</h2>
        <Link to={"/"}>
            <div className='header'>X</div>
        </Link>
        <div className='description'>
           {data.hits[foodId].recipe.ingredients.map((e,i)=>{
            console.log(e);
            return <div className='ingredients' key={i}>
            <div className='list'>
              <div>{i+1}</div>
              <div>{e.text}</div>
            </div>

          </div>
           })}
        </div>
        <div className="summery">
            <span>Refers to www.emamam.com for details :- </span>
            <a href={data.hits[foodId].recipe.shareAs} target="_blank">
            <button>Instructions</button>

            </a>
             </div>

    </div>
  )
}

export default Description