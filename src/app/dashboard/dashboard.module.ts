import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CvCardComponent } from './cv-card/cv-card.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent,
    CvCardComponent,
    ControlPanelComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
    ]
})
export class DashboardModule { }
