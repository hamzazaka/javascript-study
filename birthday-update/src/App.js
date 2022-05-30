import logo from './logo.svg';
import './App.css';
import {useState,useEffect, Suspense} from 'react'
import Allusers from './components/Allusers';

function App() {
  const [people,setpeople]=useState(0);
  const [add,setadd]=useState(0);
  const [subtract,setsubtract]=useState(0);
  let initialcount=0
  const [finalvalue,setfinalvalue]=useState(initialcount);
  
  // const fetchData=async()=>{
  //   const apiURL = "https://randomuser.me/api/?results=20";
  //   let response = await fetch(apiURL);
  //   let data= await response.json();
  //   setpeople(data)
    
  // }

  // useEffect(()=>{
  //   fetchData()
  // },[])


  return (
    <div className="App">
      <h4>the value is {finalvalue}</h4>
      <button onClick={() => setfinalvalue((c) => c + 1)}> Click me to add</button>
      <button onClick={() => setfinalvalue((c) => c==0?0:c - 1)}> Click me to subtract</button>
    </div>
  );
}

export default App;
