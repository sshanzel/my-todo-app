import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import todoService from "../services/todos.service";
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
  todoActions: {
    marginTop: 20
  },
  save: {
    margin: theme.spacing(1)
  },
  delete: {
    margin: theme.spacing(1)
  },
  extendedIcon: {}
}));

export const TodoForm = ({ todo: todoProps, sideEffect, dispatch }) => {
  const classes = useStyles();
  const [todo, setTodo] = useState({});
  const completed = todo.completed ? "filled" : "standard";

  const handleChange = (key, e) => {
    const value = key === "due" ? e : e.target.value;
    const updatedTodo = { ...todo, [key]: value };
    setTodo(updatedTodo);
  };

  const handleDelete = () => {
    sideEffect();

    if (!todo._id) return;
    dispatch(deleteTodo(todo));
  };

  const handleSave = async () => {
    const { error } = todoService.validate(todo);
    const command = todo._id ? updateTodo : createTodo;
    if (error) return setTodo({ ...todo, error: error });

    sideEffect();
    await dispatch(command(todo));
  };

  useEffect(() => {
    setTodo({ ...todoProps });
  }, [todoProps]);

  return (
    <React.Fragment>
      <center>
        <h2>To do</h2>
      </center>
      {!todo.error ? null : (
        <div className="alert alert-danger mt-5">{todo.error}</div>
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={false}
          label="Due Date"
          value={new Date(todo.due || Date.now())}
          onChange={e => handleChange("due", e)}
          disablePast
          margin="normal"
          fullWidth
          format="yyyy/MM/dd HH:mm"
        />
      </MuiPickersUtilsProvider>
      <div className={classes.todoActions}>
        <Fab onClick={handleSave} className={classes.save} color="primary">
          <DoneIcon />
        </Fab>
        <Fab
          onClick={handleDelete}
          className={classes.delete}
          color="secondary"
        >
          <DeleteIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
};

export default connect(null)(TodoForm);
