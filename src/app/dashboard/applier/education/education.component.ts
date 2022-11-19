import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationFormGroup: FormGroup;
  educationArray: FormArray;
  educationForm: FormGroup;

  instituteType = [
    {value: 'university', text: 'university'},
    {value: 'collage', text: 'collage'},
    {value: 'bootcamp', text: 'bootcamp'},
    {value: 'army', text: 'army'},
  ];

  constructor(private fb: FormBuilder) {
    this.educationFormGroup = this.createInstitute();
    this.educationArray = this.fb.array([this.educationFormGroup]);
    this.educationForm = this.fb.group([this.educationArray]);
  }

  ngOnInit(): void {
  }

  private createInstitute() {
    let institute =  this.fb.group({
      institute: '',
      type: '',
      startDate: Date,
      endDate: Date,
      degree: '',
      coursesAndAchievements: new FormControl([]),
    });

    institute.get('type')?.valueChanges.subscribe(value => {
      if (value === 'collage' || value === 'university') {
        institute.get('degree')?.enable();
      } else {
        institute.get('degree')?.setValue('')
        institute.get('degree')?.disable();
      }
    });
    return institute;
  }

  getControl(i: number, controlName: string) {
    return this.educationArray.controls[i].get(controlName) as FormControl;
  }

  addCourseFromInput(index: number, event: MatChipInputEvent) {
    let techList = this.getControl(index, 'coursesAndAchievements');
    if (!event.value || !techList) return;

    if (!techList.value)
      techList.setValue([]);

    techList.value.push(event.value);
    event.chipInput!.clear();
  }

  removeCourse(index: number, courseName: string) {
    let techList = this.getControl(index, 'coursesAndAchievements');
    techList.setValue(techList.value.filter((tech: string) => tech !== courseName));
  }

  addInstitute() {

    this.educationArray.push(this.createInstitute());
  }

  removeInstitute(i: number) {
    this.educationArray.removeAt(i);
  }
}
