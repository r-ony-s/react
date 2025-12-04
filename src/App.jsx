import { useRef } from 'react';
import {useState} from 'react'

const App = () => {
 const [Obj,setObj]=useState({
  name:'habib',
  age:23,
  address:'chandpur',
 })
 const change=()=>{
  setObj(prevObj=>({
    ...prevObj,
    name:'kawsar',
    age:24,
    address:'dhaka'
  }))

 }
 
  return (
    <div>
      <h1>{Obj.name}</h1>
        <button onClick={change}>Button</button>

    </div>
  );
};

export default App;