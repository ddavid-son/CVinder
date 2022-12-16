import {createCV, cvError, cvSuccess, fetchCV, setCV, setCVLoading, updateCV} from "../actions/cv.actions";
import {createReducer, on} from "@ngrx/store";
import {initialCVState} from "../state/cv.state";

export const cvReducer = createReducer(
  initialCVState,
  on(createCV, updateCV, (state) => state),
  on(setCVLoading, (state, {isLoading}) => ({...state, isLoading})),
  on(setCV, (state, {cv}) => ({...state, ...cv})),
  on(cvSuccess, (state, {cv, isLoading}) => ({cv, isLoading})),
  on(cvError, (state, {error}) => ({...state, isLoading: false, error})),
  on(updateCV, (state) => ({...state, error: undefined})),
  on(fetchCV, (state) => ({...state, error: undefined})),
  );
