import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CVState} from "../state/cv.state";

export const selectCV = createFeatureSelector<CVState>('cv');

export const selectCVLoading = createSelector(
  selectCV,
  (state) => state.isLoading
);

export const selectUserCV = createSelector(
  selectCV, ({isLoading, ...cv}) => cv
);

export const selectCVSummary = createSelector(
  selectCV,
  (state) => state.summary
);

export const selectCVPreviousExperience = createSelector(
  selectCV,
  (state) => state.previousExperience
);

export const selectCVEducation = createSelector(
  selectCV,
  (state) => state.education
);

export const selectCVImportantLinks = createSelector(
  selectCV,
  (state) => state.importantLinks
);

export const selectCVContactInfo = createSelector(
  selectCV,
  (state) => state.contactInfo
);

export const selectCVAttachments = createSelector(
  selectCV,
  (state) => state.attachments
);


