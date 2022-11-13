import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthModule { }
