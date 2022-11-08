import {
  authError,
  authSuccess,
  loginUser,
  registerUser, resetError,
  setAuthLoading,
  setToken,
  setUser
} from "../actions/auth.actions";
import {createReducer, on} from "@ngrx/store";
import {initialAuthState} from "../state/auth.state";

export const authReducer = createReducer(
  initialAuthState,
  on(registerUser, loginUser, (state) => state),
  on(setAuthLoading, (state, {isLoading}) => ({...state, isLoading})),
  on(setToken, (state, {token}) => ({...state, token})),
  on(setUser, (state, {user}) => ({...state, user})),
  on(authSuccess, (state, {user, token, isLoading}) => ({user, token, isLoading})),
  on(authError, (state, {error}) => ({...state, isLoading: false, error})),
  on(resetError, (state) => ({...state, error: undefined})),
);
