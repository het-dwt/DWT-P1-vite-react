import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Divider,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./todo.css";

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

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
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

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);

    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);

    setCurrentTodo({ ...todo });
  }

  return (
    <div className="todo-app-wrapper">
      {isEditing ? (
        <div className="todo-app-input-parent">
          <div className="todo-app-input">
            <Paper elevation={6} square>
              <form onSubmit={handleEditFormSubmit} className="form">
                <div className="todo-app-input-elem">
                  <label htmlFor="editTodo">Edit todo: </label>
                </div>
                <div className="todo-app-input-elem">
                  <TextField
                    fullWidth
                    type="text"
                    value={currentTodo.text}
                    size="small"
                    label="Edit Todo"
                    variant="standard"
                    id="standard-size-small"
                    onChange={handleEditInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EditNoteIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="todo-app-input-elem">
                  <Button type="submit" variant="contained">
                    Update
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      ) : (
        <div className="todo-app-input-parent">
          <div className="todo-app-input">
            <Paper elevation={6} square>
              <form onSubmit={handleFormSubmit} className="form">
                <div className="todo-app-input-elem">
                  <label htmlFor="todo">Add todo: </label>
                </div>
                <div className="todo-app-input-elem">
                  <TextField
                    fullWidth
                    type="text"
                    value={todo}
                    size="small"
                    label="Edit Todo"
                    variant="standard"
                    id="standard-size-small"
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EditNoteIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="todo-app-input-elem">
                  <Button type="submit" variant="contained">
                    Add
                  </Button>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      )}
      <div className="todo-app-list">
        <Paper elevation={6} square>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo-listitem">
                <ChevronRightIcon />
                {todo.text}
                <Divider orientation="vertical" flexItem />
                <div className="edit-btn-wrapper">
                  <Button onClick={() => handleEditClick(todo)}>
                    <EditIcon fontSize="small" />
                  </Button>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="del-btn-wrapper">
                  <Button onClick={() => handleDeleteClick(todo.id)}>
                    <DeleteIcon fontSize="small" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Paper>
      </div>
    </div>
  );
}
