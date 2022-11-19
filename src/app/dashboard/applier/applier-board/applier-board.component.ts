import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applier-board',
  templateUrl: './applier-board.component.html',
  styleUrls: ['./applier-board.component.scss']
})
export class ApplierBoardComponent implements OnInit {
  experiencePanelOpen: boolean = false;
  educationPanelOpen: boolean = false;
  linksPanelOpen: boolean = false;
  contactPanelOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
