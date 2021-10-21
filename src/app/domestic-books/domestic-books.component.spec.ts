import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticBooksComponent } from './domestic-books.component';

describe('DomesticBooksComponent', () => {
  let component: DomesticBooksComponent;
  let fixture: ComponentFixture<DomesticBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
