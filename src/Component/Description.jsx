// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useState , useEffect} from 'react';

// function Description({foodId}) {
//   const [data2,setData2]=useState([])
  
//   async function detailing(foodId){
    
//     const res=await fetch(`http://www.omdbapi.com/?i=${foodId}&apikey=d903b998`)
//     console.log(res);
//     const datas= await res.json();
//     // setData2(datas)
    
//     // console.log(datas);

//   }
//   useEffect(() => {
//     detailing()
   
//   }, [data2]);
    
//   return (
//     <div className='DescContainer'>
       

//     </div>
//   )
// }

// export default Description