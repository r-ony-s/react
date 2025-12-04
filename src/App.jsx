import { useState } from 'react';


const App = () => {


  return (
    <div>
       <form action="">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <select >
           <option value="">Choose city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <input type="radio" name='gender' />Male
        <input type="radio" name='gender' />Female
        <button type='submit'>Submit</button>
       </form>
    </div>
  );
};

export default App;
