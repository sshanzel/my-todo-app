import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import UndoIcon from "@material-ui/icons/Undo";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../components/Card";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    zIndex: 2
  },
  action: {
    position: "absolute",
    top: 20,
    left: 25,
    zIndex: 3,
    cursor: "pointer"
  }
}));

export const ToDoList = ({ todos, onClick, onComplete }) => {
  const classes = useStyles();

  return todos.map(todo => (
    <div style={{ position: "relative" }}>
      <div className={classes.action} onClick={() => onComplete(todo)}>
        {todo.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
      </div>
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
        </SimpleCard>
      </ButtonBase>
    </div>
  ));
};

export default ToDoList;
