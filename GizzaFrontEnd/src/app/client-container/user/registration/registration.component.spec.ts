import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistrationComponent } from './registration.component';

describe('ReactiveRegistrationComponent', () => {
  let component: ReactiveRegistrationComponent;
  let fixture: ComponentFixture<ReactiveRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
