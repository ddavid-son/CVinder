import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FilterPageComponent} from "./filter-page/filter-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FilterPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltersRoutingModule {
}
