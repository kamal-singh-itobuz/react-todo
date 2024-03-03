import { useState } from "react";

const InputAdd = ({handleInput}) => {
    const [taskValue, setTaskValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleInput(taskValue);
        setTaskValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="input-container">
            <input
                className="input-field"
                type="text"
                placeholder="Add Todo"
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
            />
            <button className="add-btn" type="submit"> Add </button>
        </form>
    );
};

export default InputAdd;
