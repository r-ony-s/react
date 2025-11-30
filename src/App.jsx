import{ useRef } from 'react';
import Head from '../pages/Head.jsx';

const App = () => {
  let myHeadline = useRef();

  const change = () => {
    myHeadline.current.classList.remove('text-danger');
    myHeadline.current.classList.add('text-success');
  };
 
  return (
    <div>
       <h1 ref={myHeadline} className='text-danger'>Hello world</h1>
        <button onClick={change} >Change</button>

    </div>
  );
};

export default App;