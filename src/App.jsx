import { useState } from 'react';


const App = () => {

  let [formObj,setObj]=useState(
    {
      firstName:"",
      lastName:"",
      city:"",  
      gender:""
    }
  )

  return (
    <div>
       <form action="">
        <input value={formObj.firstName} placeholder='First Name' />
        <input value={formObj.lastName} placeholder='Last Name' />
        <select value={formObj.city} >
           <option value="">Choose city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <input checked={formObj.gender === "Male"} type="radio" name='gender' />Male
        <input checked={formObj.gender === "Female"} type="radio" name='gender' />Female
        <button type='submit'>Submit</button>
       </form>
    </div>
  );
};

export default App;
