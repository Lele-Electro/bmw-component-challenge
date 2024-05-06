import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTechnicalSpecComponent } from './model-technical-spec.component';

describe('ModelTechnicalSpecComponent', () => {
  let component: ModelTechnicalSpecComponent;
  let fixture: ComponentFixture<ModelTechnicalSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelTechnicalSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTechnicalSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
