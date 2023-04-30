import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixFullComponent } from './prefix-full.component';

describe('PrefixFullComponent', () => {
  let component: PrefixFullComponent;
  let fixture: ComponentFixture<PrefixFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefixFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
