import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  contactInfoFormGroup: FormGroup;
  contactInfoArray: FormArray;
  contactInfoForm: FormGroup;

  siteOptions: { value: string; text: string }[] = [
    { value: 'Phone', text: 'Phone' },
    { value: 'Email', text: 'Email' },
    { value: 'Discord', text: 'Discord' },
    { value: 'Skype', text: 'Skype' },
    { value: 'Other', text: 'Other' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactInfoFormGroup = this.createContactMethod();
    this.contactInfoArray = this.fb.array([this.contactInfoFormGroup]);
    this.contactInfoForm = this.fb.group([this.contactInfoArray]);
  }

  ngOnInit(): void {
  }

  private createContactMethod() {
    return this.fb.group({
      method: '',
      info: '',
    });
  }

  getControl(i: number, controlName: string) {
    return this.contactInfoArray.controls[i].get(controlName) as FormControl;
  }

  addMethod() {
    this.contactInfoArray.push(this.createContactMethod());
  }

  removeMethod(i: number) {
    this.contactInfoArray.removeAt(i);
  }

  getOptionForGenericInput(i: number) {
    return {
      type: this.getControl(i, 'method').value === 'Email' ? 'email' : 'text' ,
        placeholder: this.getControl(i, 'method').value
    }
  }
}
