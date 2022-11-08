import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CvCardComponent } from './cv-card/cv-card.component';
import { ControllPanelComponent } from './controll-panel/controll-panel.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CvCardComponent,
    ControllPanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
