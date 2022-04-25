import React, {useContext} from "react"
import './App.css';
import { MainContext } from "./contextProvider";


function App() {
  
const {color} = useContext(MainContext)

function showColor() {
  console.log(color)
}

  return (
    <div className="App">
       Context test <br></br>
      <button onClick={showColor}> show color </button>
    </div>
  );
}

export default App;
