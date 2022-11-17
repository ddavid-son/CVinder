import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplierBoardComponent } from './applier-board.component';

describe('ApplierBoardComponent', () => {
  let component: ApplierBoardComponent;
  let fixture: ComponentFixture<ApplierBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplierBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplierBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
