import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailQuoteIconComponent } from './email-quote-icon.component';

describe('EmailQuoteIconComponent', () => {
  let component: EmailQuoteIconComponent;
  let fixture: ComponentFixture<EmailQuoteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailQuoteIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailQuoteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
