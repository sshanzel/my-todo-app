import {combineReducers} from 'redux';
import todos from './todoReducers';
import user from './userReducers';

const rootReducer = combineReducers({
  todos,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
