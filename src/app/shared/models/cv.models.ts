
export interface Experience {
  id?: number;
  title?: string;
  companyName?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  responsibilities?: string[];
}

export interface Education {
  id?: number;
  instituteName?: string;
  instituteType?: string;
  startDate?: string;
  endDate?: string;
  degree?: string;
  coursesAndAchievements?: string[];
}

export interface ImportantLink {
  id?: number;
  name?: string;
  link?: string;
}

export interface ContactInfo {
  id?: number;
  method?: string;
  info?: string;
}

export interface Attachment {
  id?: number;
  type?: string;
  link?: string;
}


export interface CV{
  id?: number;
  previousExperience?: Experience[];
  education?: Education[];
  importantLinks?: ImportantLink[];
  contactInfo?: ContactInfo[];
  attachments?: Attachment[];
  summary?: string;
}
