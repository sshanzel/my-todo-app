import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import SimpleCard from "../components/Card";

export const ToDoList = ({ todos, onChange, onDelete, onSave }) => {
  return todos.map(todo => (
    <div className="col-md-4" key={todo.id}>
      <ButtonBase focusRipple>
        <SimpleCard key={todo.id}>Test</SimpleCard>
      </ButtonBase>
    </div>
  ));
};

export default ToDoList;
