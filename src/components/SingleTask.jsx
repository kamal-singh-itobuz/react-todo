const SingleTask = ({idx, task, deleteTask, editTask}) => {
    return (
        <div className="single-task">
            <p className="task-text">{idx+1}. {task}</p>
            <button className="delete-button" onClick={() => deleteTask(idx)}>Delete</button>
            <button className="edit-button" onClick={() => editTask(idx)}>Edit</button>
        </div>
    );
}

export default SingleTask;