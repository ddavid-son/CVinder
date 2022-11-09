import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserSettingsComponent} from "./user-settings/user-settings.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserSettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
