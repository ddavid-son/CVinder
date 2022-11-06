import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./reducers/auth.reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./effects/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer,
    }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }
