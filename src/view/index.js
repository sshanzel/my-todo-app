import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import * as todoActions from "../store/actions/todoActions";
import AddIconMui from "../components/AddIconMui";
import SimpleModal from "../components/Modal";
import ToDoCard from "../components/ToDoCard";

export const ToDoApp = ({ todos, dispatch }) => {
  const [todo, setTodo] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(todoActions.retrieveTodos());
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
          <AddIconMui onClick={() => setOpen(true)} />
        </div>
      </div>
      <div className="row">
        <ToDoList
          todos={todos}
          onClick={clicked => {
            setOpen(true);
            setTodo(clicked);
          }}
        />
      </div>
      <SimpleModal
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <ToDoCard todo={todo} sideEffect={() => setOpen(false)} />
      </SimpleModal>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(ToDoApp);
