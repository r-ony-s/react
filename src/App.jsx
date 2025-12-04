import { useRef } from 'react';
import {useState} from 'react'

const App = () => {
  const [list, setList] = useState([]);
const [item, setItem] = useState('');
 const addtolist = () => {
  list.push(item);
  setList([...list]);

 }
 
  return (
    <div>
      <h1>{list.length}</h1>
       <input onChange={(e)=>setItem(e.target.value)} placeholder='Item' />
        <button onClick={addtolist}>Add</button>

    </div>
  );
};

export default App;