import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";

import DogDetails from "./DogDetails";
import DogList from "./DogList";

const DOGS_URL = "http://localhost:5001/dogs";


// FIXME: make sure names is passed as a prop to Nav
function App() {
  const [dogs, setDogs] = useState([]);
  //TODO: use Loading state

  console.log("in the App component ", dogs);

  async function getDogs() {
    let response = await axios.get(DOGS_URL);
    //console.log("getDogs response", response);
    setDogs(response.data);
  }

  //console.log("App", "State:", dogs);
  if (dogs.length === 0){
    getDogs();
    return (<h1>Loading</h1>);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={dogs.map(dog => dog.name)}/>
        <Routes>
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
          <Route path="/dogs" element={<DogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
