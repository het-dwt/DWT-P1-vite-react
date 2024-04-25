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
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
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

      <table>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.inputFName}</td>
              <td>{todo.inputLName}</td>
              <td>{todo.inputDOB}</td>
              <td>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
