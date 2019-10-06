import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import SimpleCard from "../components/Card";

export const ToDoList = ({ todos, onChange, onDelete, onSave }) => {
  return todos.map(todo => (
    <div className="col-md-4" key={todo.id}>
      <ButtonBase focusRipple>
        <SimpleCard key={todo.id}>
          <h2 className="simple-modal-title">{todo.title}</h2>
          <p clas="simple-modal-description">{todo.description}</p>
        </SimpleCard>
      </ButtonBase>
    </div>
  ));
};

export default ToDoList;
