import{ useRef } from 'react';
import Head from '../pages/Head.jsx';

const App = () => {
  const fname = useRef();
  const lname = useRef();

  const change = () => {
    const firstName = fname.current.value;
    const lastName = lname.current.value;

    alert(firstName+" "+lastName);
  };
 
  return (
    <div>
        <input ref={fname} placeholder='firs name' />
        <input ref={lname} placeholder='last name' />
        <button onClick={change} >Change</button>

    </div>
  );
};

export default App;