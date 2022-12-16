import {Attachment, ContactInfo, Education, Experience, ImportantLink} from "../../shared/models/cv.models";

export interface CVState{
  previousExperience?: Experience[];
  education?: Education[];
  importantLinks?: ImportantLink[];
  contactInfo?: ContactInfo[];
  attachments?: Attachment[];
  summary?: string;
  isLoading: boolean;
}

export const initialCVState: CVState = {
  previousExperience: [],
  education: [],
  importantLinks: [],
  contactInfo: [],
  attachments: [],
  summary: "",
  isLoading: false,
};
