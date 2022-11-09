import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChatHubComponent} from "./chat-hub/chat-hub.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ChatHubComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
