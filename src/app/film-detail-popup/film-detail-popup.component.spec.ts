import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailPopupComponent } from './film-detail-popup.component';

describe('FilmDetailPopupComponent', () => {
  let component: FilmDetailPopupComponent;
  let fixture: ComponentFixture<FilmDetailPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailPopupComponent]
    });
    fixture = TestBed.createComponent(FilmDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
