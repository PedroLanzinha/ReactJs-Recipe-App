import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '4110510d';
  const APP_KEY = "cdaa5e93404341e633f5e3a69ff7ced1";
  
  const exampleReq = 
  'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}'

  const [counter, setCounter] = useState(0);

  useEffect(() =>{
    console.log('Effect has been run');
  });


  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button 
          onClick={() => setCounter(counter + 1) } 
          className="search-button" type="submit"
          >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
