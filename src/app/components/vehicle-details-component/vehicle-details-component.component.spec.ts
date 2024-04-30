import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsComponentComponent } from './vehicle-details-component.component';

describe('VehicleDetailsComponentComponent', () => {
  let component: VehicleDetailsComponentComponent;
  let fixture: ComponentFixture<VehicleDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
