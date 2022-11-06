export abstract class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  status?: string;
  token?: string;
}

export class Candidate extends User {

}

export class Recruiter extends User{

}
