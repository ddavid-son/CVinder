import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CvCardComponent } from './cv-card/cv-card.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {SharedModule} from "../shared/shared.module";
import { ApplierBoardComponent } from './applier-board/applier-board.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    DashboardComponent,
    CvCardComponent,
    ControlPanelComponent,
    ApplierBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatExpansionModule,
  ]
})
export class DashboardModule { }
