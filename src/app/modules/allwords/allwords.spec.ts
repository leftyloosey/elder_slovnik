import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allwords } from './allwords';

describe('Allwords', () => {
  let component: Allwords;
  let fixture: ComponentFixture<Allwords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allwords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allwords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
