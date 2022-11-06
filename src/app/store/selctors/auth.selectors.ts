import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "../state/auth.state";

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuth,
  (state) => state.user
);

export const selectToken = createSelector(
  selectAuth,
  (state)=> state.token
);

export const selectAuthLoading = createSelector(
  selectAuth,
  (state) => state.isLoading
);
