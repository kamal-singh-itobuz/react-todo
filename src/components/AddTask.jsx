function AddTask({ db }) {
    return (
        <div className="todo-content">
            {db.map((ele, idx) => (
                <p key={idx}>
                    {idx + 1}. {ele}
                </p>
            ))}
        </div>
    );
}
export default AddTask;
