import Head from '../pages/Head.jsx';

const App = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Form Submitted");
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit} >
         <input type="text" placeholder='name' />
       <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;