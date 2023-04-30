import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfServiceComponent } from './use-of-service.component';

describe('UseOfServiceComponent', () => {
  let component: UseOfServiceComponent;
  let fixture: ComponentFixture<UseOfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseOfServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
