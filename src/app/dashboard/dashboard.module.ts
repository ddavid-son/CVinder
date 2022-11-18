import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CvCardComponent } from './cv-card/cv-card.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {SharedModule} from "../shared/shared.module";
import { ApplierBoardComponent } from './applier/applier-board/applier-board.component';
import { ExperienceComponent } from './applier/experience/experience.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CvCardComponent,
    ControlPanelComponent,
    ApplierBoardComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
