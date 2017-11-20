import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulationCommandeComponent } from './order-recapitulation.component';

describe('RecapitulationCommandeComponent', () => {
  let component: RecapitulationCommandeComponent;
  let fixture: ComponentFixture<RecapitulationCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapitulationCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulationCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
