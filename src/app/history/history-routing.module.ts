import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HistoryPageComponent} from "./history-page/history-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HistoryPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule {
}
