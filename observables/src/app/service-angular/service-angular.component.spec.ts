import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAngularComponent } from './service-angular.component';

describe('ServiceAngularComponent', () => {
  let component: ServiceAngularComponent;
  let fixture: ComponentFixture<ServiceAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
