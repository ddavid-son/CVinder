import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {
  jobFormGroup!: FormGroup;
  experienceArray!: FormArray;
  experienceForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobFormGroup = this.createJobFormGroup();
    this.experienceArray = this.fb.array([this.jobFormGroup]);
    this.experienceForm = this.fb.group([this.experienceArray]);
  }

  ngOnInit(): void {
  }

  private createJobFormGroup() {
    return this.fb.group({
      title: '',
      company: '',
      responsibilitiesAndAchievements: '',
      startDate: Date,
      endDate: Date,
      technologies: new FormControl([]),
    });
  }

  addKeywordFromInput(index: number, event: MatChipInputEvent) {
    let techList = this.getControl(index, 'technologies');
    if (!event.value || !techList) return;

    if (!techList.value)
      techList.setValue([]);

    techList.value.push(event.value);
    event.chipInput!.clear();
  }

  removeKeyword(index: number, keyword: string) {
    let techList = this.getControl(index, 'technologies');
    techList.setValue(techList.value.filter((tech: string) => tech !== keyword));
  }

  addJob() {
    this.experienceArray.push(this.createJobFormGroup());
  }

  getControl(i: number, controlName: string) {
    return this.experienceArray.controls[i].get(controlName) as FormControl;
  }

  removeJob(i: number) {
    this.experienceArray.removeAt(i);
  }

  respIsEmpty(i: number) {
    return this.getControl(i, 'responsibilitiesAndAchievements').value.length > 0;
  }
}
