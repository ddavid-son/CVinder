import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ApplierBoardComponent} from "./applier/applier-board/applier-board.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    //component: DashboardComponent,
    component: ApplierBoardComponent
  },
  {
    path: "applier",
    component: ApplierBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
