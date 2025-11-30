import Head from '../pages/Head.jsx';

const App = () => {

  return (
    <div>
      <button onClick={ function childbtnCLick() {
  alert("clicked from parent");
}}>btn</button>
    </div>
  );
};

export default App;