import './App.css';
import Inputs from './Component/Inputs';
import Reciepi from './Component/Reciepi';
import React from 'react';
import { useState,useEffect } from 'react';

function App() {
  const apiLink="https://api.edamam.com/search?q=biryani&app_id=21cb9ebc&app_key=0f18b7f4a78a619ad78eb64c33c86bf8";
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [foodId, setfoodId] = useState(-1)
  const [getData, setGetData] = useState(false)
  const [validInput, setValidInput] = useState(false)
  const [checkDesc, setcheckDesc] = useState(false)
  const [getData1, setGetData1] = useState(false)


  function getRecs(){
    console.log(search);
    setGetData(!getData)
    fetching();

  }
  function seeMoreHandler(id){
    setfoodId(id)
    setcheckDesc(true)

  }

  useEffect(() => {
    console.log(getData);

  }, [getData]);
  async function fetching(){
    const res=await fetch(`https://api.edamam.com/search?q=${search}&app_id=21cb9ebc&app_key=0f18b7f4a78a619ad78eb64c33c86bf8`)
    const data1=await res.json();
    await setData(data1)
    await setGetData1(true)
  }
  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Recipe Finder</h1>
       <Inputs search={search} getRecs={getRecs} setSearch={setSearch} validInput={validInput} setValidInput={setValidInput}/>
       {getData1 ? <Reciepi apiLink={apiLink} data={data} checkDesc={checkDesc} seeMoreHandler={seeMoreHandler} foodId={foodId} />:<h1 style={{textAlign:"center",color:"grey"}}>Search your meal here...</h1>
       }
    </div>
  );
}

export default App;
