import React from 'react';
import TSInput from '../components/TSInput';

import Logo from '../assets/images/the-solevilla.png';

export const SignIn = () => {
  const [{username, password}, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  React.useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div className='flex flex-1 flex-col items-center pt-20'>
      <img src={Logo} className='w-40' />
      <label className='font-medium text-2xl'>My Pet Projects - Todo App</label>
      <div className='w-full p-4 justify-center lg:w-1/3 md:w-1/2'>
        <TSInput
          shadow
          label='Username'
          value={username}
          onInputChange={value => setCredentials(state => ({...state, username: value}))}
        />
        <TSInput
          shadow
          className='mt-4'
          label='Password'
          type='Password'
          value={password}
          onInputChange={value => setCredentials(state => ({...state, password: value}))}
        />
      </div>
    </div>
  );
};

export default React.memo(SignIn);
