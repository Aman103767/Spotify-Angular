import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordetailsAddtocartComponent } from './fordetails-addtocart.component';

describe('FordetailsAddtocartComponent', () => {
  let component: FordetailsAddtocartComponent;
  let fixture: ComponentFixture<FordetailsAddtocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordetailsAddtocartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordetailsAddtocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
