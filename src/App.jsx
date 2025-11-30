import Head from '../pages/Head.jsx';

const App = () => {
const btnClick=()=>{
        alert("Button Clicked");
    }
  return (
    <div>
     <Head childbtnCLick={btnClick}/>
    </div>
  );
};

export default App;