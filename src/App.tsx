import React from 'react';
import {useSelector} from 'react-redux';
import './assets/styles/App.css';
import './assets/styles/main.css';
import ToDoApp from './view';
import SignIn from './view/login';
import Appbar from './components/Appbar';
import {RootState} from './store/reducers';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.token) return <SignIn />;

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-100'>
      <Appbar name={user.name} />
      <div className='flex flex-1 justify-center px-8 overflow-auto pb-4'>
        <ToDoApp />
      </div>
    </div>
  );
};

export default App;
