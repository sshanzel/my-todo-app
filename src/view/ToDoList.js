import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Fab from "@material-ui/core/Fab";
import UndoIcon from "@material-ui/icons/Undo";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../components/Card";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  }
}));

export const ToDoList = ({ todos, onClick, onComplete }) => {
  const classes = useStyles();

  return todos.map(todo => (
    <ButtonBase
      className={classes.button}
      focusRipple
      onClick={() => onClick(todo)}
      key={todo._id}
    >
      <SimpleCard>
        <h2
          className="simple-modal-title"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </h2>
        <p clas="simple-modal-description">{todo.description}</p>
        <Fab
          aria-label="delete"
          className={classes.fab}
          onClick={() => onComplete(todo)}
        >
          {todo.completed ? <UndoIcon /> : <CheckCircleIcon />}
        </Fab>
      </SimpleCard>
    </ButtonBase>
  ));
};

export default ToDoList;
