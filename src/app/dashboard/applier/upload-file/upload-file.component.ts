import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  filesFormGroup: FormGroup;
  filesArray: FormArray;
  filesForm: FormGroup;

  siteOptions: { value: string; text: string }[] = [
    {value: 'CV', text: 'CV'},
    {value: 'Grade Sheet', text: 'Grade Sheet'},
    {value: 'Certification', text: 'Certification'},
    {value: 'Other', text: 'Other'},
  ];

  constructor(private fb: FormBuilder) {
    this.filesFormGroup = this.createFile();
    this.filesArray = this.fb.array([this.filesFormGroup]);
    this.filesForm = this.fb.group([this.filesArray]);
  }

  ngOnInit(): void {
  }

  private createFile() {
    return this.fb.group({
      type: '',
      file: new FormControl(null),
    });
  }

  getControl(i: number, controlName: string) {
    return this.filesArray.controls[i].get(controlName) as FormControl;
  }

  addFile() {
    this.filesArray.push(this.createFile());
  }

  removeFile(i: number) {
    this.filesArray.removeAt(i);
  }
}
