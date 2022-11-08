import {createAction, props} from "@ngrx/store";
import {LoginDto, SignupDto} from "../../shared/dtos/auth/auth.dtos";
import {User} from "../../shared/models/user.models";

export const registerUser = createAction(
  '[Auth] Register User',
  props<{ signupDto: SignupDto }>()
);

export const loginUser = createAction(
  '[Auth] Login User',
  props<{ loginDto: LoginDto }>()
);

export const setAuthLoading = createAction(
  '[Auth] Set Auth Loading',
  props<{ isLoading: boolean }>()
);

export const setUser = createAction(
  '[Auth] Set User',
  props<{ user: User }>()
);

export const setToken = createAction(
  '[Auth] Set Token',
  props<{ token: string }>()
);

export const authError = createAction(
  '[Auth] Auth Error',
  props<{ error: any }>()
);

export const authSuccess = createAction(
  '[Auth] Set Auth Success',
  props<{ user: User, token: string, isLoading: boolean }>()
);

export const resetError = createAction(
  '[Auth] Reset Error'
);
