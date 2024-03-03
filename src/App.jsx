import { useState } from 'react'
import TaskContainer from './components/TaskContainer';
import InputAdd from './components/InputAdd';
import "./style.scss";



function App() {
    const [tasks, setTasks] = useState([]);
    const handleInput = (value) => {
        value = value.trim();
        if(value === ''){
            alert("Please Enter something!");
            return;
        }
        if(tasks.includes(value)){
            alert("This task in already added.");
            return;
        }
        const newTasks = [value, ...tasks];
        setTasks(newTasks);
    }

    const handleRemove = (task) => {
        const newTasks = tasks.filter(ele => ele !== task);
        setTasks(newTasks);
    }

    return (
        <div className="App">
            <h1>Add Your Todo Here </h1>
            <InputAdd handleInput = {handleInput} />
            <TaskContainer tasks = {tasks} handleRemove={handleRemove}/>
        </div>
    );
}

export default App;
