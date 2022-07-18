import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";

import DogDetails from "./DogDetails";
import DogList from "./DogList";

const DOGS_URL = "http://localhost:5001/dogs"

// FIXME: make sure names is passed as a prop to Nav
function App() {
  async function getDogs() {
    let response = await axios.get(DOGS_URL);
    console.log("getDogs response", response);
    return response.data;
  }
  
  const [dogs, setDogs] = useState(getDogs);
  console.log("App", "State:", dogs);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dog/:name" element={<DogDetails />} />
          <Route path="/dogs" element={<DogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
