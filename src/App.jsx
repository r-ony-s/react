import { useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addtolist = () => {
    list.push(item);
    setList([...list]);
  };

  const RemoveItem = (index) => {
    alert("do you want to remove this item?");
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <table>
        <tbody>
          {
            list.length !== 0 &&
            list.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val}</td>
                  <td>
                    <button onClick={() => RemoveItem(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <input
        onChange={(e) => setItem(e.target.value)}
        placeholder='Item'
      />

      <button onClick={addtolist}>Add</button>
    </div>
  );
};

export default App;
