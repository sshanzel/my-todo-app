import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SaveIcon from "@material-ui/icons/Save";
import UndoIcon from "@material-ui/icons/Undo";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: "100%"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {}
}));

export default function ToDoCard({ todo: todoProps, sideEffect }) {
  const emptyTodo = { title: "", description: "", completed: false };
  const [todo, setTodo] = useState({ ...emptyTodo });
  const classes = useStyles();
  const completed = todo.completed ? "filled" : "outlined";

  const handleChange = (key, e) => {
    setTodo({ ...todo, [key]: e.target.value });
  };

  const handleDelete = () => {
    sideEffect();
    setTodo({ ...emptyTodo });

    if (!todo._id) return;
  };
  const handleSave = complete => {
    let completed = todo.completed;

    if (complete) {
      setTodo(emptyTodo());
      completed = !todo.completed;
    }

    const saveTodo = { ...todo, completed };

    // side effect on save should happen after ajax validation
    sideEffect();
  };

  useEffect(() => {
    setTodo(todoProps);
  }, [todoProps]);

  return (
    <React.Fragment>
      <TextField
        label="Title"
        className={classes.textField}
        value={todo.title || ""}
        onChange={e => handleChange(e, "title")}
        variant={completed}
        margin="normal"
      />
      <TextField
        label="Description"
        className={classes.textField}
        value={todo.description || ""}
        onChange={e => handleChange(e, "description")}
        rows={5}
        multiline={true}
        variant={completed}
        margin="normal"
      />
      <input
        className="form-control"
        style={{ width: "100%", marginBottom: 7 }}
        type="date"
        value={todo.due || ""}
        onChange={e => handleChange(e, "due")}
      />
      <Fab onClick={handleDelete} aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
      <Fab onClick={handleSave} aria-label="delete" className={classes.fab}>
        {todo.id === -1 ? (
          <SaveIcon />
        ) : todo.completed ? (
          <UndoIcon />
        ) : (
          <CheckCircleIcon />
        )}
      </Fab>
    </React.Fragment>
  );
}
