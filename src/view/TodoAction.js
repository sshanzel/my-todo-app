import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { connect } from "react-redux";
import { updateTodo } from "../store/actions/todoActions";

export const TodoAction = ({ todo, applyAction, classes: propStyle }) => {
  const handleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    applyAction(updatedTodo);
  };

  return (
    <div className={propStyle} onClick={handleComplete}>
      {todo.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    applyAction: todo => dispatch(updateTodo(todo))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoAction);
