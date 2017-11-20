import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountOrderListComponent } from './my-account-order-list.component';

describe('MyAccountOrderListComponent', () => {
  let component: MyAccountOrderListComponent;
  let fixture: ComponentFixture<MyAccountOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
