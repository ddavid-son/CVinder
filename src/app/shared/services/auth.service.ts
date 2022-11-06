import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {authLoginUrl, authSignupUrl} from "../constants/auth.constants";
import {LoginDto, SignupDto} from "../dtos/auth/auth.dtos";
import {User} from "../models/user.models";


@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  logIn(loginDto: LoginDto) {
    return this.http.post<{ user: User, token: string }>(authLoginUrl, loginDto)
  }

  signUp(signupDto:SignupDto) {
    return this.http.post<{ user: User, token: string }>(authSignupUrl, signupDto)
  }

  logOut() {

  }
}
