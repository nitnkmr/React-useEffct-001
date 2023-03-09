import React from 'react'
import Card from './Card'
import { Route,Routes } from 'react-router-dom';
import Description from './Description';

const Reciepi = ({checkDesc,seeMoreHandler,foodId,data}) => {
  return (
    
    <div className='container'>
    {/* <Routes>
        <Route path='/SeeMore' element={checkDesc && <Description foodId={foodId}/>}/>
     </Routes> */}
      
     <div className="card1">
          {data.Search.map((e,i)=><Card key={i} id={i} data={e}/>)} 
        </div>
    </div>
  )
}

export default Reciepi