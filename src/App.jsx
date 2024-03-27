import { useState } from 'react'
import TaskList from './components/TaskList';
import InputAdd from './components/InputAdd';
import "./style.scss";

function App() {
    const [db, setDB] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(null);
    function deleteTask(index) {
        const newDB = [...db];
        newDB.splice(index, 1);
        setDB(newDB);
    }
    function editTask(index) {
        setUpdateIndex(index);
    }

    return (
        <div className="App">
            <h1>Add Your Todo Here </h1>
            <InputAdd db={db} setDB={setDB} updateIndex={updateIndex} setUpdateIndex={setUpdateIndex}/>
            <TaskList db={db} deleteTask={deleteTask} editTask={editTask} />
        </div>
    );
}

export default App;
