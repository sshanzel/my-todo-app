import React from 'react';
import {useDispatch} from 'react-redux';
import Copyright from './Copyright';
import TSInput from '../components/TSInput';
import TSButton from '../components/TSButton';
import {registerUser, login} from '../store/actions/userActions';

import Logo from '../assets/images/the-solevilla.png';
import TSButtonPlain from '../components/TSButtonPlain';

export const SignIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState('');
  const [processing, setProcessing] = React.useState(false);
  const [register, setRegister] = React.useState<string | null>(null);
  const [{username, password}, setCredentials] = React.useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setProcessing(true);

    const command: () => any =
      register !== null
        ? () => dispatch(registerUser({username, password, name: register}))
        : () => dispatch(login({username, password}));

    const error = await command();

    if (!error) return;

    setProcessing(false);

    error && setError(error);
  };

  return (
    <div className='flex flex-1 flex-col items-center pt-20'>
      <img alt='Logo' src={Logo} className='w-40' />
      <label className='font-medium text-2xl'>My Pet Projects - Todo App</label>
      <div className='w-full p-4 justify-center lg:w-1/3 md:w-1/2'>
        {error && <div className='w-full mb-4 flex justify-center text-red-500'>{error}</div>}
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
        {register !== null && (
          <TSInput
            shadow
            className='mt-4'
            label='Name'
            value={password}
            onInputChange={value => setRegister(value)}
          />
        )}
        <TSButton label='Submit' onClick={handleSubmit} disabled={processing} />
        <div className='flex flex-row flex-1 justify-between'>
          <TSButtonPlain label='Forgot Password?' />
          <TSButtonPlain
            label={
              register !== null
                ? 'Have an existing account? Sign-in now!'
                : `Don't have an account yet? Register now!`
            }
            onClick={() => setRegister(register !== null ? null : '')}
          />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default React.memo(SignIn);
