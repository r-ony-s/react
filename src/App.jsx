import Head from '../pages/Head.jsx';

const App = () => {
  const Info={
    name:"Habib",
    age:24,
    profession:"Web Developer"
  }
  return (
    <div>
      <Head title={Info} />
    </div>
  );
};

export default App;