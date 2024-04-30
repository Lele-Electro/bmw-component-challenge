import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorExteriorButtonComponent } from './interior-exterior-button.component';

describe('InteriorExteriorButtonComponent', () => {
  let component: InteriorExteriorButtonComponent;
  let fixture: ComponentFixture<InteriorExteriorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorExteriorButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorExteriorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
