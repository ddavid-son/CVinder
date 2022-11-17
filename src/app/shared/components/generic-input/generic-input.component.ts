import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

interface InputOption {
  placeholder?: string;
  type?: string;
  label?: string;
  selectOptions?: { value: string, text: string }[];
}

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInput implements OnInit {

  @Input("fc") formControl!: FormControl;
  @Input() options!: InputOption;
  isPassword: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    this.isPassword = this.options.type === 'password';
  }

  togglePasswordVisibility() {
    this.isPassword = !this.isPassword;
  }
}