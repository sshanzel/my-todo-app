import React from 'react';
import {connect} from 'react-redux';
import TodoAppBar from './components/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/App.css';
import ToDoApp from './view';
import SignIn from './view/login';
import {login, register} from './store/actions/userActions';

function App({user, dispatch}) {
  return (
    <div className='App'>
      <TodoAppBar user={user} onLogout={() => window.location.reload()} />
      <div className='container'>
        {user.token ? (
          <ToDoApp />
        ) : (
          <SignIn
            error={user.error}
            onLogin={credentials => dispatch(login(credentials))}
            onRegister={credentials => dispatch(register(credentials))}
          />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state, oldProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
