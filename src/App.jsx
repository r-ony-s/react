import Head from '../pages/Head.jsx';

const App = () => {
 function childbtnCLick() {
  alert("clicked from parent");
}
  return (
    <div>
      <button onClick={childbtnCLick}>btn</button>
    </div>
  );
};

export default App;