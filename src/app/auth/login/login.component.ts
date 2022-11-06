import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
    console.log(this.loginFrom.value);


  }
}
