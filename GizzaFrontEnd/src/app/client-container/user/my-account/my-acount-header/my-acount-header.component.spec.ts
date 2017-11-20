import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcountHeaderComponent } from './my-acount-header.component';

describe('MyAcountHeaderComponent', () => {
  let component: MyAcountHeaderComponent;
  let fixture: ComponentFixture<MyAcountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAcountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAcountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
