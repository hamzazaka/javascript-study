import logo from './logo.svg';
import './App.css';
import {useState,useEffect, Suspense} from 'react'
import Allusers from './components/Allusers';

function App() {
  const [people,setpeople]=useState(0);
  const [isloading,setisloading]=useState(false)

  const fetchData=async()=>{
    const apiURL = "https://randomuser.me/api/?results=20";
    let response = await fetch(apiURL);
    let data= await response.json();
    setpeople(data)
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(people);

  return (
    people&&
    <div className="App">
      <h1>hello world</h1>
      <Suspense fallback={people}>
      <Allusers people={people} />
      </Suspense>
    </div>
    
  );
}

export default App;
