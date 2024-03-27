import { useEffect, useState } from "react";

const InputAdd = ({db, setDB, updateIndex, setUpdateIndex}) => {
    const [inputValue, setInputValue] = useState("");
    function handleInput(e) {
        e.preventDefault();
        const todo = inputValue.trim();
        if (todo === "") return;
        if(updateIndex || updateIndex === 0){
            const newDB = [...db];
            console.log(newDB);
            newDB[updateIndex] = todo;
            setDB(newDB);
            setUpdateIndex(null);
        }
        else setDB([todo, ...db]);
        setInputValue("");
    }

    useEffect(() => {
        if(updateIndex === 0 || updateIndex) {
            setInputValue(db[updateIndex]);
        }
    }, [updateIndex]);

    return (
        <form onSubmit={handleInput} className="input-container">
            <input
                className="input-field"
                type="text"
                placeholder="Add Todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="add-btn" type="submit"> {(updateIndex || updateIndex === 0) ? "Update" : "Add"}</button>
        </form>
    );
};

export default InputAdd;
