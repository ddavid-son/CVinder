import {createAction, props} from "@ngrx/store";
import {CV} from "../../shared/models/cv.models";

export const createCV = createAction(
  '[CV] Create CV',
  props<{ cvForm: any }>()
);

export const updateCV = createAction(
  '[CV] Update CV',
  props<{ cvForm: any }>()
);

export const setCV = createAction(
  '[CV] Set CV',
  props<{ cv: CV }>()
);

export const setCVLoading = createAction(
  '[CV] Set CV Loading',
  props<{ isLoading: boolean }>()
);

export const cvError = createAction(
  '[CV] CV Error',
  props<{ error: any }>()
);

export const cvSuccess = createAction(
  '[CV] Set CV Success',
  props<{ cv: any, isLoading: boolean }>()
);

export const fetchCV = createAction(
  '[CV] Fetch CV'
);
