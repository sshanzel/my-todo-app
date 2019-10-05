import React from "react";
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

export default function ToDoCard({ todo, onChange, onDelete, onSave }) {
  const classes = useStyles();
  const completed = todo.completed ? "filled" : "outlined";

  return (
    <React.Fragment>
      <TextField
        label="Title"
        className={classes.textField}
        value={todo.title || ""}
        onChange={e => onChange(e, "title", todo)}
        variant={completed}
        margin="normal"
      />
      <TextField
        label="Description"
        className={classes.textField}
        value={todo.description || ""}
        onChange={e => onChange(e, "description", todo)}
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
        onChange={e => onChange(e, "due", todo)}
      />
      <Fab
        onClick={() => onDelete(todo)}
        aria-label="delete"
        className={classes.fab}
      >
        <DeleteIcon />
      </Fab>
      <Fab
        onClick={() => onSave(todo)}
        aria-label="delete"
        className={classes.fab}
      >
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
