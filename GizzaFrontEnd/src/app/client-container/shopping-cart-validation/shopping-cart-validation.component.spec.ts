import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartValidationComponent } from './shopping-cart-validation.component';

describe('ShoppingCartValidationComponent', () => {
  let component: ShoppingCartValidationComponent;
  let fixture: ComponentFixture<ShoppingCartValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
