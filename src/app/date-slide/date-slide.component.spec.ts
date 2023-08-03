import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSlideComponent } from './date-slide.component';

describe('DateSlideComponent', () => {
  let component: DateSlideComponent;
  let fixture: ComponentFixture<DateSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateSlideComponent]
    });
    fixture = TestBed.createComponent(DateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
