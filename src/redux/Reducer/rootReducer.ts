import { combineReducers } from 'redux';
import LoginReducers from '../Reducer/loginReducer';

export const rootReducer = combineReducers({
    loginReducers: LoginReducers
});