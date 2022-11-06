import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignupDto} from "../../shared/dtos/auth/auth.dtos";
import {Store} from "@ngrx/store";
import {registerUser} from "../../store/actions/auth.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  passwordIsVisible = false;
  signupFrom!: FormGroup;
  emailFormControl!: FormControl;
  passwordFormControl!: FormControl;
  roleFormControl!: FormControl;

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.passwordIsVisible = !this.passwordIsVisible;
  }

  navigateToLogin() {
    this.router.navigate(['auth/login']);
  }

  signUp() {
    const signupDto: SignupDto = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      role: this.roleFormControl.value,
      firstName: 'aharon',
      lastName: 'davidson',
    }

    this.store.dispatch(registerUser({signupDto}));
  }

  private initForm() {
    this.emailFormControl = this.fb.control('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = this.fb.control('', [
      Validators.required
    ]);
    this.roleFormControl = this.fb.control('Recruiter', [
      Validators.required
    ]);

    this.signupFrom = this.fb.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
      role: this.roleFormControl,
    });
  }
}
