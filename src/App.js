import React from 'react';
import {useSelector} from 'react-redux';
import TodoAppBar from './components/AppBar';
import './assets/styles/App.css';
import './assets/styles/main.css';
import ToDoApp from './view';
import SignIn from './view/login';

const App = () => {
  const user = useSelector(state => state.user);

  if (!user.token) return <SignIn />;

  return (
    <div className='App'>
      <TodoAppBar user={user} onLogout={() => window.location.reload()} />
      <div className='justify-center px-8'>
        <ToDoApp />
      </div>
    </div>
  );
};

export default App;
