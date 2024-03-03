import AddTask from "./AddTask";
const TaskContainer = ({tasks, handleRemove}) => {
    return (
        <div className="task-container">
            {tasks.map((task, idx) => <AddTask key={idx} task={task} handleRemove = {handleRemove}/>)}
        </div>
    );
}

export default TaskContainer;