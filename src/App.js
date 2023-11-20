import logo from './logo.svg';
import './App.css';
import Object from './Object.js'
import React,{useState} from "react"


function App() {

  const employee=[
    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ] },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }]

    const [color1,setcount]=useState ("blue")

    const increment=()=>{
        setcount("red")
    }

    
  return (
    <div className="App">
      <p> color:{color1}</p>
            <button className="btn"onClick={increment}>click</button>

       <Object  data={employee}/>
    </div>
  );
}

export default App;
