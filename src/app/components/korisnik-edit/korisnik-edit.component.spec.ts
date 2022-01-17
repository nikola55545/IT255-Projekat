import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikEditComponent } from './korisnik-edit.component';

describe('KorisnikEditComponent', () => {
  let component: KorisnikEditComponent;
  let fixture: ComponentFixture<KorisnikEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
