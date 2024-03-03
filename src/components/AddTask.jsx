function AddTask(props) {
    return (
        <div className="todo-item">
            <p className="todo-item-text">{props.task}</p>
            <button className="remove-button" onClick={() => props.handleRemove(props.task)}>Remove</button>
        </div>
    );
}
export default AddTask;
