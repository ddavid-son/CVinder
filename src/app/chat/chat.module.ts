import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHubComponent } from './chat-hub/chat-hub.component';
import {ChatRoutingModule} from "./chat-routing.module";



@NgModule({
  declarations: [
    ChatHubComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ]
})
export class ChatModule { }
