import{ useRef } from 'react';
import Head from '../pages/Head.jsx';

const App = () => {
  let fname,lname = useRef();

  const change = () => {
    const firstName = fname.value;
    const lastName = lname.value;

    alert(firstName+" "+lastName);
  };
 
  return (
    <div>
        <input ref={(f)=>fname=f} placeholder='firs name' />
        <input ref={(l)=>lname=l} placeholder='last name' />
        <button onClick={change} >Change</button>

    </div>
  );
};

export default App;