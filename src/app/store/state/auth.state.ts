import {User} from "../../shared/models/user.models";

export interface AuthState{
  user?: User;
  token?: string;
  isLoading: boolean;
}

export const initialAuthState: AuthState = {
  token: undefined,
  user: undefined,
  isLoading: false,
};
