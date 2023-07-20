import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPojoComponent } from './film-pojo.component';

describe('FilmPojoComponent', () => {
  let component: FilmPojoComponent;
  let fixture: ComponentFixture<FilmPojoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmPojoComponent]
    });
    fixture = TestBed.createComponent(FilmPojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
