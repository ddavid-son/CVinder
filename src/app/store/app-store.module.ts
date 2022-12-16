import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./reducers/auth.reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./effects/auth.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {cvReducer} from "./reducers/cv.reducers";
import {CvEffects} from "./effects/cv.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: authReducer,
      cv: cvReducer,
    }),
    EffectsModule.forRoot([AuthEffects, CvEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule { }
