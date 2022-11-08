import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {SharedModule} from "../shared/shared.module";
import { MainPageComponent } from './main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import {MainRoutingModule} from "./main-routing.module";



@NgModule({
  declarations: [
    SideBarComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    MainRoutingModule,
  ]
})
export class MainModule { }
