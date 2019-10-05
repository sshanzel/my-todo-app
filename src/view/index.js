import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import Notifications, { notify } from "react-notify-toast";
import * as todoActions from "../store/actions/todoActions";
import AddIconMui from "../components/AddIconMui";
import SimpleModal from "../components/Modal";
import ToDoCard from "../components/ToDoCard";

export class ToDoApp extends React.Component {
  state = {
    todo: {
      id: -1,
      title: "",
      description: "",
      completed: false
    },
    new: false,
    open: false
  };

  handleNewToDo = (e, key) => {
    const todo = { ...this.state.todo, [key]: e.target.value };
    this.setState({ todo });
  };

  handleInputChange = (e, key, todoObj) => {
    const todo = { ...todoObj, [key]: e.target.value };
    this.props.dispatch(todoActions.updateTodo(todo));
  };

  handleDelete = todo => {
    if (todo.id >= 0) return this.props.dispatch(todoActions.deleteTodo(todo));

    this.setState({ todo: { id: -1 }, new: false });
  };

  handleSave = todoObj => {
    if (!todoObj.completed) notify.show("Done!", "success");
    if (todoObj.id === -1)
      return this.props.dispatch(todoActions.createTodo(todoObj));

    const todo = { ...todoObj, completed: todoObj.completed ? false : true };
    this.props.dispatch(todoActions.updateTodo(todo));
  };

  handleOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };

  componentDidMount() {
    this.props.dispatch(todoActions.retrieveTodos());
  }

  render() {
    const {
      handleOpen,
      handleClose,
      handleDelete,
      handleSave,
      handleNewToDo,
      handleInputChange
    } = this;
    const { open, todo } = this.state;

    return (
      <React.Fragment>
        <Notifications />
        <div className="row">
          <div className="col-md-4">
            <AddIconMui onClick={handleOpen} />
          </div>
        </div>
        <div className="row">
          <ToDoList
            todos={this.props.todos}
            onChange={handleInputChange}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        </div>
        <SimpleModal open={open} onOpen={handleOpen} onClose={handleClose}>
          <ToDoCard
            todo={todo}
            onChange={handleNewToDo}
            onDelete={handleClose}
            onSave={handleSave}
          />
        </SimpleModal>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(ToDoApp);
