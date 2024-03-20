import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Alert,
  Button,
  Divider,
  InputAdornment,
  Paper,
  Snackbar,
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
  const [openAddAlert, setOpenAddAlert] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  // const [openUpdateAlert, setOpenUpdateAlert] = useState(false);

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

  const handleAddClick = () => {
    setOpenAddAlert(true);
  };

  const handleAddClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAddAlert(false);
  };

  // const handleDeleteClick = () => {
  //   setOpenDeleteAlert(true);
  // };

  const handleDeleteClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenDeleteAlert(false);
  };

  // const handleUpdateClick = () => {
  //   setOpenAddAlert(true);
  // };

  // const handleUpdateClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpenUpdateAlert(false);
  // };

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setOpenDeleteAlert(true);
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
    // setOpenUpdateAlert(true);

    setCurrentTodo({ ...todo });
  }

  return (
    <div className="todo-app-wrapper">
      {isEditing ? (
        <div className="todo-app-input-parent">
          <div className="todo-app-input">
            <h2>Todo</h2>
            <Paper elevation={6}>
              <form onSubmit={handleEditFormSubmit} className="form">
                {/* <div className="todo-app-input-elem">
                  <label htmlFor="editTodo">Edit todo: </label>
                </div> */}
                <div className="todo-app-input-elem">
                  <TextField
                    fullWidth
                    type="text"
                    value={currentTodo.text}
                    size="small"
                    label="Edit List Here"
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
                <div
                  className="todo-app-input-elem"
                  style={{ flexDirection: "row" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    // onClick={handleUpdateClick}
                  >
                    Update
                  </Button>
                  {/* <Snackbar
                    open={openUpdateAlert}
                    autoHideDuration={3000}
                    onClose={handleUpdateClose}
                  >
                    <Alert
                      onClose={handleUpdateClose}
                      severity="info"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      List Updated Sucessfully.
                    </Alert>
                  </Snackbar> */}
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
            <h2>Todo</h2>
            <Paper elevation={2} square>
              <form onSubmit={handleFormSubmit} className="form">
                {/* <div className="todo-app-input-elem">
                  <label htmlFor="todo">{todo.id ? "Edit" : "Add"} todo:</label>
                </div> */}
                <div className="todo-app-input-elem">
                  <TextField
                    fullWidth
                    type="text"
                    value={todo}
                    size="small"
                    label="Write List Here"
                    variant="standard"
                    id="standard-size-small"
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PlaylistAddIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div
                  className="todo-app-input-elem"
                  style={{ flexDirection: "row" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
                  <Snackbar
                    open={openAddAlert}
                    autoHideDuration={3000}
                    onClose={handleAddClose}
                  >
                    <Alert
                      onClose={handleAddClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      List Added Sucessfully.
                    </Alert>
                  </Snackbar>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      )}
      <div className="todo-app-list">
        <Paper elevation={2} square>
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
                  <Snackbar
                    open={openDeleteAlert}
                    autoHideDuration={3000}
                    onClose={handleDeleteClose}
                  >
                    <Alert
                      onClose={handleDeleteClose}
                      severity="error"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      List Deleted Sucessfully !
                    </Alert>
                  </Snackbar>
                </div>
              </li>
            ))}
          </ul>
        </Paper>
      </div>
    </div>
  );
}
