import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import SimpleCard from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  }
}));

export const ToDoList = ({ todos, onClick }) => {
  const classes = useStyles();

  return todos.map(todo => (
    <ButtonBase
      className={classes.button}
      focusRipple
      onClick={() => onClick(todo)}
      key={todo._id}
    >
      <SimpleCard>
        <h2 className="simple-modal-title">{todo.title}</h2>
        <p clas="simple-modal-description">{todo.description}</p>
      </SimpleCard>
    </ButtonBase>
  ));
};

export default ToDoList;
