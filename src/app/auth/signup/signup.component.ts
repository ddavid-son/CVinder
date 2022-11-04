import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
              private router: Router) {
  }

  ngOnInit(): void {
    this.emailFormControl = this.fb.control('', [
      Validators.required,
      Validators.email
    ]);
    this.passwordFormControl = this.fb.control('', [
      Validators.required
    ]);
    this.roleFormControl = this.fb.control('', [
      Validators.required
    ]);

    this.signupFrom = this.fb.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
      role: this.roleFormControl,
    });
  }

  togglePasswordVisibility() {
    this.passwordIsVisible = !this.passwordIsVisible;
  }

  navigateToSignUp() {
    this.router.navigate(['auth/signup']);
  }
}
