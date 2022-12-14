import {RouterModule, Routes} from "@angular/router";
import {ListsComponent} from "./lists/lists.component";
import {NgModule} from "@angular/core";


const routs: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule]
})
export class ListsRoutingModule {

}
