import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvanComponent } from './ovan.component';

describe('OvanComponent', () => {
  let component: OvanComponent;
  let fixture: ComponentFixture<OvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
