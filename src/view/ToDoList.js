import React from "react";
import ToDoCard from "../components/ToDoCard";

export const ToDoList = ({ todos, onChange, onDelete, onSave }) => {
  return todos.map(todo => (
    <div className="col-md-4" key={todo.id}>
      <ToDoCard
        key={todo.id}
        todo={todo}
        onChange={onChange}
        onDelete={onDelete}
        onSave={onSave}
      />
    </div>
  ));
};

export default ToDoList;
