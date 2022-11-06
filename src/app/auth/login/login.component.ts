import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginDto} from "../../shared/dtos/auth/auth.dtos";
import {Store} from "@ngrx/store";
import {loginUser} from "../../store/actions/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordIsVisible = false;
  loginFrom!: FormGroup;
  emailFormControl!: FormControl;
  passwordFormControl!: FormControl;

  constructor(private fb: FormBuilder,
              private store:Store,
              private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {

  }

  private initForm(){
    this.emailFormControl = this.fb.control('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = this.fb.control('', [
      Validators.required
    ]);

    this.loginFrom = this.fb.group({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  togglePasswordVisibility() {
    this.passwordIsVisible = !this.passwordIsVisible;
  }

  navigateToSignUp() {
    this.router.navigate(['auth/signup']);
  }

  login() {
    const loginDto:LoginDto = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    this.store.dispatch(loginUser({loginDto}));
  }
}
