import { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputFName, setInputFName] = useState("");
  const [inputLName, setInputLName] = useState("");
  const [inputDOB, setInputDOB] = useState("");
  function handleFNameChange(e) {
    setInputFName(e.target.value);
  }
  function handleLNameChange(e) {
    setInputLName(e.target.value);
  }
  function handleDOBChange(e) {
    setInputDOB(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputFName, inputLName, inputDOB]);
    setInputFName("");
    setInputLName("");
    setInputDOB("");
    console.log(todos);
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(todos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          value={inputFName}
          onChange={handleFNameChange}
          placeholder="f-Name"
        />
        <input
          type="text"
          value={inputLName}
          onChange={handleLNameChange}
          placeholder="l-Name"
        />
        <input
          type="text"
          value={inputDOB}
          onChange={handleDOBChange}
          placeholder="DOB"
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.inputFName}|{todo.inputLName}|{todo.inputDOB}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
