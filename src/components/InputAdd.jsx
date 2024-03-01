import { useState } from "react";

const InputAdd = ({ setDB }) => {
    const [inputValue, setInputValue] = useState("");
    function handleInput(e) {
        e.preventDefault();
        const todo = inputValue.trim();
        if (todo === "") return;
        setDB((prev) => [todo, ...prev]);
        setInputValue("");
    }
    return (
        <form onSubmit={handleInput} className="input-container">
            <input
                className="input-field"
                type="text"
                placeholder="Add Todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="add-btn" type="submit"> Add </button>
        </form>
    );
};

export default InputAdd;
