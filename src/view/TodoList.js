import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import TodoCard from "./TodoCard";
import TodoAction from "./TodoAction";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative"
  },
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
  },
  completed: {
    textDecoration: "line-through"
  }
}));

export const TodoList = ({ todos, onClick }) => {
  const classes = useStyles();

  return todos.map(todo => (
    <div key={todo._id} className={classes.container}>
      <TodoAction classes={classes.action} todo={todo} />
      <ButtonBase
        focusRipple
        className={classes.button}
        onClick={() => onClick(todo)}
      >
        <TodoCard
          title={todo.title}
          description={todo.description}
          styles={{ header: todo.completed ? classes.completed : "none" }}
        ></TodoCard>
      </ButtonBase>
    </div>
  ));
};

export default TodoList;
