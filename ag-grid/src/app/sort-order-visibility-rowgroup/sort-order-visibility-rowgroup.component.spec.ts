import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOrderVisibilityRowgroupComponent } from './sort-order-visibility-rowgroup.component';

describe('SortOrderVisibilityRowgroupComponent', () => {
  let component: SortOrderVisibilityRowgroupComponent;
  let fixture: ComponentFixture<SortOrderVisibilityRowgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortOrderVisibilityRowgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortOrderVisibilityRowgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
