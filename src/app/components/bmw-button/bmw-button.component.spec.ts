import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwButtonComponent } from './bmw-button.component';

describe('BmwButtonComponent', () => {
  let component: BmwButtonComponent;
  let fixture: ComponentFixture<BmwButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmwButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
