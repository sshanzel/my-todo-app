import React from 'react';
import {useSelector} from 'react-redux';
import './assets/styles/App.css';
import './assets/styles/main.css';
import ToDoApp from './view';
import SignIn from './view/login';
import {RootState} from './store/reducers';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.token) return <SignIn />;

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-100'>
      <div className='h-16 flex flex-row items-center px-4 shadow-md bg-primary'>
        <span className='font-semibold text-xl text-gray-800'>Your Todo List</span>
      </div>
      <div className='flex flex-1 justify-center px-8 overflow-auto pb-4'>
        <ToDoApp />
      </div>
    </div>
  );
};

export default App;
