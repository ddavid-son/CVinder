import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthTokenInterceptor} from "./interceptors/auth-token.interceptor";
import {GenericInput} from './components/generic-input/generic-input.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GenericInput
  ],
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
    ],
  exports: [
    HttpClientModule,
    GenericInput,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ]
})
export class SharedModule { }
