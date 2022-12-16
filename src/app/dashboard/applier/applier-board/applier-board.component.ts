import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {fetchCV} from "../../../store/actions/cv.actions";

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
  filePanelOpen: boolean = false;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(fetchCV());
  }

  submitFrom() {
    console.log('submitting');

  }
}
