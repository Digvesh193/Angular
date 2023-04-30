import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnGroupComponent } from './column-group.component';

describe('ColumnGroupComponent', () => {
  let component: ColumnGroupComponent;
  let fixture: ComponentFixture<ColumnGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
