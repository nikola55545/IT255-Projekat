import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntNewsComponent } from './ent-news.component';

describe('EntNewsComponent', () => {
  let component: EntNewsComponent;
  let fixture: ComponentFixture<EntNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
