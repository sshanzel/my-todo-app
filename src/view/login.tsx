import React from 'react';
import {useDispatch} from 'react-redux';
import Copyright from './Copyright';
import TSInput from '../components/TSInput';
import TSButton from '../components/TSButton';
import {registerUser, login} from '../store/actions/userActions';

import Logo from '../assets/images/the-solevilla.png';
import TSButtonPlain from '../components/TSButtonPlain';
import ResponsiveBlock from '../components/ResponsiveBlock';

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
      <ResponsiveBlock>
        <form action='#' onSubmit={handleSubmit}>
          {error && <div className='w-full mb-4 flex justify-center text-red-500'>{error}</div>}
          <TSInput
            shadow
            value={username}
            label='Username:'
            onInputChange={value => setCredentials(state => ({...state, username: value}))}
          />
          <TSInput
            shadow
            className='mt-4'
            type='Password'
            value={password}
            label='Password:'
            onChange={e => setCredentials(state => ({...state, password: e.target.value}))}
          />
          {register !== null && (
            <TSInput
              shadow
              label='Name:'
              className='mt-4'
              value={password}
              onInputChange={value => setRegister(value)}
            />
          )}
          <TSButton onClick={handleSubmit} disabled={processing} className='mt-4'>
            Submit
          </TSButton>
        </form>
        <div className='flex flex-row flex-1 flex-wrap justify-between'>
          <TSButtonPlain>Forgot Password?</TSButtonPlain>
          <TSButtonPlain onClick={() => setRegister(register !== null ? null : '')}>
            {register !== null
              ? 'Have an existing account? Sign-in now!'
              : `Don't have an account yet? Register now!`}
          </TSButtonPlain>
        </div>
        <Copyright />
      </ResponsiveBlock>
    </div>
  );
};

export default React.memo(SignIn);
