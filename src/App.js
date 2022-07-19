import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";
import RoutesList from "./RoutesList";

const DOGS_URL = "http://localhost:5001/dogs";

function App() {
  const [dogs, setDogs] = useState([]);
  //TODO: use Loading state

  console.log("in the App component ", dogs);

  async function getDogs() {
    let response = await axios.get(DOGS_URL);
    setDogs(response.data);
  }

  if (dogs.length === 0){
    getDogs();
    return (<h1>Loading</h1>);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={dogs.map(dog => dog.name)}/>
        <RoutesList dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
