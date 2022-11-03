import React, {component} from 'react';
import {useState, useEffect} from "react"
// import {useState} from 'react';
import getQuestion from './components/GetQuestion';
import Answer from './components/Answer';
import './App.css'




function App() {
  //^state to hold the movie data
  const [question, setQuestion] = useState({})

  useEffect(()=>{
    getQuestion()
    
  },[])

  let apiData

  //^ Function to fetch movie data
  const getQuestion = async (question) => {
    try {
    const res = await fetch(`http://jservice.io/api/random${question}`);
    const data = await res.json()
    console.log(data);
    setQuestion(data); // ^set the data into our state
  }catch(error) {
    console.log(error)
  }
}
    return (
     <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Answer getQuestion={getQuestion}/>
      
    </div>
    
    );

    
}

<getQuestion />


export default App;
