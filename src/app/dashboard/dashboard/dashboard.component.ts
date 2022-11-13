import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  formControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10),
  ]);
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

  }
}
