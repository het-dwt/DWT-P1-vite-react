import {
  Alert,
  Button,
  InputAdornment,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import "./todo.css";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadIcon from "@mui/icons-material/Download";
import download from "downloadjs";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [openAddAlert, setOpenAddAlert] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [openUpdateAlert, setOpenUpdateAlert] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
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
    setOpenAddAlert(todo !== "" ? true : false);
  };

  const handleAddClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddAlert(false);
  };

  const handleDeleteClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDeleteAlert(false);
  };

  const handleUpdateClick = () => {
    setOpenUpdateAlert(true);
  };

  const handleUpdateClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenUpdateAlert(false);
  };

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    if (removeItem) {
      setTodos(removeItem);
      setOpenDeleteAlert(true);
    }
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(true);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }
  console.log(todos.length);
  return (
    <div className="todo-app-wrapper">
      <div className="todo-app-input-parent">
        <div className="todo-app-input">
          <div className="main-h1">
            <h1>{isEditing ? "Edit" : "Add"} Todo List</h1>
          </div>
          <Paper variant="outlined">
            <form
              onSubmit={isEditing ? handleEditFormSubmit : handleFormSubmit}
              className="form"
            >
              <div className="todo-app-input-elem">
                <TextField
                  fullWidth
                  type="text"
                  value={isEditing ? currentTodo.text : todo}
                  size="small"
                  label={isEditing ? "Edit List Here" : "Add List Here"}
                  variant="standard"
                  id="standard-size-small"
                  onChange={
                    isEditing ? handleEditInputChange : handleInputChange
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {isEditing ? <EditNoteIcon /> : <PlaylistAddIcon />}
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
                  variant="text"
                  onClick={isEditing ? handleUpdateClick : handleAddClick}
                >
                  {isEditing ? "Edit" : "Add"}
                </Button>
                <Snackbar
                  open={isEditing ? openUpdateAlert : openAddAlert}
                  autoHideDuration={1000}
                  onClose={isEditing ? handleUpdateClose : handleAddClose}
                >
                  <Alert
                    onClose={isEditing ? handleUpdateClose : handleAddClose}
                    severity={isEditing ? "info" : "success"}
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    {isEditing
                      ? "List Updated Sucessfully."
                      : "List Added Sucessfully."}
                  </Alert>
                </Snackbar>
                <Button
                  onClick={() => (isEditing ? setIsEditing(false) : null)}
                  variant="text"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Paper>
        </div>
      </div>
      <div className="todo-app-list-parent">
        <div className="todo-app-list">
          <Paper variant="outlined">
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className="todo-listitem">
                  {todo.text}
                  <div className="edit-btn-wrapper">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleEditClick(todo)}
                    >
                      <EditIcon fontSize="small" color="primary" />
                    </Button>
                  </div>
                  <div className="del-btn-wrapper">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleDeleteClick(todo.id)}
                    >
                      <DeleteIcon fontSize="small" color="error" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </Paper>
          <Button
            style={{ width: "auto", marginTop: "20px" }}
            variant="outlined"
            onClick={() => {
              download(
                `The count of Todo List is : ${todos.length}`,
                "todoList",
                "text/plain"
              );
            }}
          >
            <DownloadIcon fontSize="small" />
            Download
          </Button>
          <Snackbar
            open={openDeleteAlert}
            autoHideDuration={1000}
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
      </div>
    </div>
  );
}
