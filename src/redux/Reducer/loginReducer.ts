import {USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, RESET} from '../Type';

// Define the types for the state
interface LoginState {
  loginResponse: any | null;
  loginHeaders: any | null;
}

type LoginAction =
  | {type: typeof USER_LOGIN_SUCCESS; payload: any}
  | {type: typeof USER_LOGIN_ERROR; payload: any}
  | {type: typeof RESET; payload?: any};

const initialState: LoginState = {
  loginResponse: null,
  loginHeaders: null,
};

const LoginReducers = (
  state: LoginState = initialState,
  action: LoginAction,
): LoginState => {
  let response: any;
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      response = action.payload;
      return {
        ...state,
        loginResponse: response?.data,
        loginHeaders: response?.headers,
      };
    case USER_LOGIN_ERROR:
      response = action.payload;
      return {
        ...state,
        loginResponse: response,
      };
    case RESET: {
      switch (action.payload) {
        default: {
          return state;
        }
      }
    }
    default:
      return state;
  }
};

export default LoginReducers;
