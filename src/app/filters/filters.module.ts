import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPageComponent } from './filter-page/filter-page.component';
import {FiltersRoutingModule} from "./filters-routing.module";



@NgModule({
  declarations: [
    FilterPageComponent
  ],
  imports: [
    CommonModule,
    FiltersRoutingModule,
  ]
})
export class FiltersModule { }
