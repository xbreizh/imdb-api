import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreButtonComponent as GenreButtonComponent } from './genre-button.component';

describe('GenreButtonComponent', () => {
  let component: GenreButtonComponent;
  let fixture: ComponentFixture<GenreButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreButtonComponent]
    });
    fixture = TestBed.createComponent(GenreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
