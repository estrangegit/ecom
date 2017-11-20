import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountModificationComponent } from './my-account-modification.component';

describe('MyAccountModificationComponent', () => {
  let component: MyAccountModificationComponent;
  let fixture: ComponentFixture<MyAccountModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
