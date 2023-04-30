import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCellRowComponent } from './update-cell-row.component';

describe('UpdateCellRowComponent', () => {
  let component: UpdateCellRowComponent;
  let fixture: ComponentFixture<UpdateCellRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCellRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCellRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
