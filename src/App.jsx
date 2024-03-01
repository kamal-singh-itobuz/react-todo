import { useState } from 'react'
import AddTask from './components/AddTask';
import InputAdd from './components/InputAdd';
import "./style.scss";

function App() {
  const [db, setDB] = useState([]);
  return (
    <div className="App">
      <h1>Add Your Todo Here </h1>
      <InputAdd setDB={setDB} />
      <AddTask db={db} />
    </div>
  );
}

export default App;
