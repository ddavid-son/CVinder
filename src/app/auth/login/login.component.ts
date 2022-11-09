import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginDto} from "../../shared/dtos/auth/auth.dtos";
import {Store} from "@ngrx/store";
import {loginUser, resetError} from "../../store/actions/auth.actions";
import {selectAuthError} from "../../store/selctors/auth.selectors";

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

  authError$ = this.store.select(selectAuthError);

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
    this.authError$.subscribe((error) => {
      if (!error) {
        return;
      }
      setTimeout(() => {
        this.store.dispatch(resetError());
      }, 700);
    });

  }

  private initForm() {
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
    this.router.navigate(['auth/signup']).catch(e=>console.error(e));
  }

  login() {
    const loginDto: LoginDto = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    this.store.dispatch(loginUser({loginDto}));
  }
}
