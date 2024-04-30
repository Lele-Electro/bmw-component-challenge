import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwModelsComponent } from './bmw-models.component';

describe('BmwModelsComponent', () => {
  let component: BmwModelsComponent;
  let fixture: ComponentFixture<BmwModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmwModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
