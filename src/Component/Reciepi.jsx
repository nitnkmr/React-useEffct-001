import React from 'react'
import Card from './Card'
import { Route,Routes } from 'react-router-dom';
import Description from './Description';

const Reciepi = ({apiLink,data,seeMoreHandler,foodId,checkDesc}) => {
  console.log(data);
  return (
    
    <div className='container'>
      <Routes>
        <Route path='/SeeMore' element={checkDesc && <Description foodId={foodId} data={data}/>}/>
     </Routes>
     <div className="card1">
          {data.hits.map((e,i)=><Card img={e.recipe.image} seeMoreHandler={seeMoreHandler} healthLabels={e.recipe.healthLabels} lable={e.recipe.label} key={i} id={i}/>)} 
        </div>
    </div>
  )
}

export default Reciepi