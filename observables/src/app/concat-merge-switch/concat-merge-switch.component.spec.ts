import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMergeSwitchComponent } from './concat-merge-switch.component';

describe('ConcatMergeSwitchComponent', () => {
  let component: ConcatMergeSwitchComponent;
  let fixture: ComponentFixture<ConcatMergeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMergeSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMergeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
