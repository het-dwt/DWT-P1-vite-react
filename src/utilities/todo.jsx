import "./todo.css";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Paper,
  Button,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  //   const date = new Date();
  //   let currentTime = date.toTimeString();

  return (
    <div className="todo-app-wrapper">
      <div className="todo-app">
        <p>
          <h3>Todo List</h3>
        </p>
        <Paper elevation={6} square>
          <form onSubmit={handleFormSubmit} className="form">
            <TextField
              type="text"
              value={todo}
              size="small"
              label="Add Todo"
              variant="standard"
              id="standard-size-small"
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AddIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>

          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-listitem">
                <ChevronRightIcon />
                {todo.text}
                <Divider orientation="vertical" flexItem />
                <div className="del-btn-wrapper">
                  <Button onClick={() => handleDeleteClick(todo.id)}>
                    <DeleteIcon fontSize="small" />
                  </Button>
                </div>
                {/* <Divider orientation="vertical" flexItem />
                <small>{currentTime}</small> */}
              </li>
            ))}
            <Divider />
          </ul>
        </Paper>
      </div>
    </div>
  );
}
