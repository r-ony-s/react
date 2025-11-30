import Head from '../pages/Head.jsx';

const App = () => {
const btnClick=()=>{
        alert("Button Clicked");
    }
  return (
    <div>
      <button onClick={()=>{
        alert("clicked")
      }}>btn</button>
    </div>
  );
};

export default App;