import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikCreateComponent } from './korisnik-create.component';

describe('KorisnikCreateComponent', () => {
  let component: KorisnikCreateComponent;
  let fixture: ComponentFixture<KorisnikCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
