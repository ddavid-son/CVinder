import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  @Input() isOn: boolean = false;
  @Input() title: string = '';
  @Output() change = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOn = !this.isOn;
    this.change.emit(this.isOn);
  }
}
