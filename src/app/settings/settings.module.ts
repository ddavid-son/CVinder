import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {SettingsRoutingModule} from "./settings-routing.module";



@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }
