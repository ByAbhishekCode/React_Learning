
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj ={
    username: 'abhishek',
    age : 21
  }
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind text</h1>
      <Card name = 'Abhishek' btnText ="visit me"  />
      <br/>
      <Card name = "Anuj"/>

    </>
  );
}

export default App;
