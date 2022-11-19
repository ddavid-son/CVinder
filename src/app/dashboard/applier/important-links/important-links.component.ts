import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-important-links',
  templateUrl: './important-links.component.html',
  styleUrls: ['./important-links.component.scss']
})
export class ImportantLinksComponent implements OnInit {

  linksFormGroup: FormGroup;
  linksArray: FormArray;
  linksForm: FormGroup;

  siteOptions: { value: string; text: string }[]= [
    { value: 'GitHub', text: 'GitHub' },
    { value: 'Linked-In', text: 'Linked-In' },
    { value: 'Stack Overflow', text: 'Stack Overflow' },
    { value: 'Twitter', text: 'Twitter' },
    { value: 'Portfolio', text: 'Portfolio' },
    { value: 'Other', text: 'Other' },
  ];

  constructor(private fb: FormBuilder) {
    this.linksFormGroup = this.createLink();
    this.linksArray = this.fb.array([this.linksFormGroup]);
    this.linksForm = this.fb.group([this.linksArray]);
  }

  ngOnInit(): void {
  }

  private createLink() {
    return this.fb.group({
      site: '',
      link: '',
    });
  }

  getControl(i: number, controlName: string) {
    return this.linksArray.controls[i].get(controlName) as FormControl;
  }

  addLink() {
    this.linksArray.push(this.createLink());
  }

  removeLink(i: number) {
    this.linksArray.removeAt(i);
  }
}
