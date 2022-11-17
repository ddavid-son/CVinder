import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applier-board',
  templateUrl: './applier-board.component.html',
  styleUrls: ['./applier-board.component.scss']
})
export class ApplierBoardComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
}
