import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentComparablesComponent } from './rent-comparables.component';

describe('RentComparablesComponent', () => {
  let component: RentComparablesComponent;
  let fixture: ComponentFixture<RentComparablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentComparablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentComparablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
