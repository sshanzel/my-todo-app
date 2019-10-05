import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import * as todoActions from "../store/actions/todoActions";
import AddIconMui from "../components/AddIconMui";
import Notifications, { notify } from "react-notify-toast";

export class ToDoApp extends React.Component {
  state = {
    todo: {
      id: -1,
      title: "",
      description: ""
    },
    new: false
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

  componentDidMount() {}

  render() {
    const { handleNewToDo, handleDelete, handleSave, handleInputChange } = this;

    return (
      <React.Fragment>
        <Notifications />
        <div className="row">
          <div className="col-md-4">
            <AddIconMui />
          </div>
        </div>
        <div className="row">
          <ToDoList
            todos={Object.values(this.props.todos)}
            onChange={handleInputChange}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        </div>
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
