import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  updateTodo,
  deleteTodo,
  createTodo
} from "../store/actions/todoActions";

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

const emptyTodo = { title: "", description: "", completed: false };

export const TodoForm = ({ todo: todoProps, sideEffect, dispatch }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState({ ...emptyTodo });
  const completed = todo.completed ? "filled" : "outlined";

  const handleChange = (key, e) => {
    const updatedTodo = { ...todo, [key]: e.target.value };
    setTodo(updatedTodo);
  };

  const handleDelete = () => {
    setTodo({ ...emptyTodo });
    sideEffect();

    if (!todo._id) return;
    dispatch(deleteTodo(todo));
  };
  const handleSave = async () => {
    const command = todo._id ? updateTodo : createTodo;
    if (todo.title) setTodo({ ...emptyTodo });
    const error = await dispatch(command(todo));

    if (error) return setTodo({ ...todo, error });
    sideEffect();
  };

  useEffect(() => {
    setTodo(todoProps);
  }, [todoProps]);

  return (
    <React.Fragment>
      <center>
        <h2>To do</h2>
      </center>
      {!todo.error ? null : (
        <div className="alert alert-danger">{todo.error}</div>
      )}

      <TextField
        label="Title"
        margin="normal"
        variant={completed}
        value={todo.title || ""}
        className={classes.textField}
        onChange={e => handleChange("title", e)}
      />
      <TextField
        rows={5}
        margin="normal"
        multiline={true}
        variant={completed}
        label="Description"
        className={classes.textField}
        value={todo.description || ""}
        onChange={e => handleChange("description", e)}
      />
      <input
        type="date"
        value={todo.due || ""}
        className="form-control"
        onChange={e => handleChange(e, "due")}
        style={{ width: "100%", marginBottom: 7 }}
      />
      <Fab onClick={handleDelete} className={classes.fab}>
        <DeleteIcon />
      </Fab>
      <Fab onClick={handleSave} className={classes.fab}>
        <SaveIcon />
      </Fab>
    </React.Fragment>
  );
};

export default connect(null)(TodoForm);
