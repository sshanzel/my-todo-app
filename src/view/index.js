import React from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import Notifications, { notify } from "react-notify-toast";
import * as todoActions from "../store/actions/todoActions";
import AddIconMui from "../components/AddIconMui";
import SimpleModal from "../components/Modal";
import ToDoCard from "../components/ToDoCard";
import { errorToString } from "../helpers/index";

const emptyTodo = {
  title: "",
  description: "",
  completed: false
};

export class ToDoApp extends React.Component {
  state = {
    todo: { ...emptyTodo },
    open: false,
    error: null
  };

  handleInputChange = (e, key) => {
    const todo = { ...this.state.todo, [key]: e.target.value };
    this.setState({ todo });
  };

  handleDelete = async todo => {
    if (todo._id) await this.props.dispatch(todoActions.deleteTodo(todo));
    this.setState({
      ...this.state,
      todo: { ...emptyTodo },
      open: false,
      error: null
    });
  };

  handleComplete = async todo => {
    const _todo = { ...todo, completed: todo.completed ? false : true };
    this.setState({ ...this.state, open: false });
    await this.props.dispatch(todoActions.updateTodo(_todo));
  };

  handleSave = async () => {
    const todo = { ...this.state.todo };
    try {
      if (!todo._id) await this.props.dispatch(todoActions.createTodo(todo));
      else await this.props.dispatch(todoActions.updateTodo(todo));

      notify.show("Done!", "success");
      this.setState({
        ...this.state,
        todo: { ...emptyTodo },
        open: false,
        error: null
      });
    } catch (ex) {
      const error = errorToString(ex && ex.response && ex.response.data);
      this.setState({ ...this.state, error });
    }
  };

  handleOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };

  handleTodoClick = todo => {
    this.setState({ ...this.state, open: true, todo });
  };

  componentDidMount() {
    this.props.dispatch(todoActions.retrieveTodos());
  }

  render() {
    const {
      handleOpen,
      handleClose,
      handleTodoClick,
      handleDelete,
      handleSave,
      handleComplete,
      handleInputChange
    } = this;
    const { open, todo, error } = this.state;

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
            onClick={handleTodoClick}
            onComplete={handleComplete}
          />
        </div>
        <SimpleModal
          error={error}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <ToDoCard
            todo={todo}
            onChange={handleInputChange}
            onDelete={handleDelete}
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
