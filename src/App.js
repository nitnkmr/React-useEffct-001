import './App.css';
import Inputs from './Component/Inputs';
import Reciepi from './Component/Reciepi';
import React from 'react';
import { useState,useEffect } from 'react';

function App() {
  const apiLink="https://api.edamam.com/search?q=biryani&app_id=21cb9ebc&app_key=0f18b7f4a78a619ad78eb64c33c86bf8";
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [getData, setGetData] = useState(false)
  const [validInput, setValidInput] = useState(false)
  const [checkDesc, setcheckDesc] = useState(false)
  const [getData1, setGetData1] = useState(false)


  function getRecs(){
    console.log(search);
    setGetData(!getData)
    fetching();

  }
  // function seeMoreHandler(){
  //   setfoodId(1)
  //   setcheckDesc(true)
  //   console.log(id);

  // }

  useEffect(() => {
    console.log(getData);

  }, [getData]);
  async function fetching(){
    const res=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=d903b998`)
    const data1=await res.json();
    await setData(data1)
    await setGetData1(true)
  }
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Movie Finder</h1>
       <Inputs search={search} getRecs={getRecs} setSearch={setSearch} validInput={validInput} setValidInput={setValidInput}/>
       {getData1 ? <Reciepi data={data} checkDesc={checkDesc}  />:<h1 style={{textAlign:"center",color:"grey"}}>Search any Movie...</h1>
       }
       
    </div>
  );
}

export default App;
