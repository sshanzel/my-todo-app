import React from 'react';
import {connect} from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {updateTodo} from '../store/actions/todoActions';

export const TodoAction = ({todo, applyAction}) => {
  return (
    <div className='z-10' onClick={() => applyAction({...todo, completed: !todo.completed})}>
      {todo.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  applyAction: todo => dispatch(updateTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoAction);
