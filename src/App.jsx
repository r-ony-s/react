import{ useRef } from 'react';
import Head from '../pages/Head.jsx';

const App = () => {
  const name=useRef();
 const change=()=>{
    name.current.innerHTML="Welcome to ReactJS";
 }
 
  return (
    <div>
      <h1 ref={name}></h1>
        <button onClick={change} >Change</button>

    </div>
  );
};

export default App;