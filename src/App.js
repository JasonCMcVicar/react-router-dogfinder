import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dog/:name" element={<Dog/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
