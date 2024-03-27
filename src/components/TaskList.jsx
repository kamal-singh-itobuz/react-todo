import SingleTask from "./SingleTask";
const TaskList = ({ db, deleteTask, editTask }) => {
    return (
        <div className="todo-content">
            {db.map((task, idx) => <SingleTask key={idx} task={task} idx={idx} deleteTask={deleteTask} editTask={editTask}/>)}
        </div>
    );
}

export default TaskList;