import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialiseComponent } from './reinitialise.component';

describe('ReinitialiseComponent', () => {
  let component: ReinitialiseComponent;
  let fixture: ComponentFixture<ReinitialiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitialiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
