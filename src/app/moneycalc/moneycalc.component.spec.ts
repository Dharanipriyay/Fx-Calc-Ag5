import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneycalcComponent } from './moneycalc.component';

describe('MoneycalcComponent', () => {
  let component: MoneycalcComponent;
  let fixture: ComponentFixture<MoneycalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneycalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneycalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
