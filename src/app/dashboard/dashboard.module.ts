import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { CvCardComponent } from './cv-card/cv-card.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {SharedModule} from "../shared/shared.module";
import { ApplierBoardComponent } from './applier/applier-board/applier-board.component';
import { ExperienceComponent } from './applier/experience/experience.component';
import { EducationComponent } from './applier/education/education.component';
import { ImportantLinksComponent } from './applier/important-links/important-links.component';
import { ContactInfoComponent } from './applier/contact-info/contact-info.component';
import { UploadFileComponent } from './applier/upload-file/upload-file.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CvCardComponent,
    ControlPanelComponent,
    ApplierBoardComponent,
    ExperienceComponent,
    EducationComponent,
    ImportantLinksComponent,
    ContactInfoComponent,
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule { }
