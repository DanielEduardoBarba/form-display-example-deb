import Letters from "./components/Letters"
import FormInfo from "./components/FormInfo";
import { createContext, useState } from "react";
import './App.css';

export const List = createContext(null)

function App() {
  const [letter, setLetter] = useState([])

  return (
    <List.Provider value={{ letter, setLetter }}>

      <div className="App">
        <div>
          <Letters />
        </div>
        <header className="App-header">
          <FormInfo />
          <h1>ENCOURAGEMENT</h1>
        </header>
      </div>
    </List.Provider>
  );
}

export default App;
